/**
 * Обертка для VK Bridge SDK (ВКонтакте, Одноклассники, VK Play)
 */
class VKGamesManager {
    constructor() {
        this.isInitialized = false;
        this.isMock = false;
    }

    async init() {
        if (typeof vkBridge === "undefined") {
            console.warn("⚠️ VK Bridge SDK не найден. Включен тестовый режим.");
            this.isMock = true;
            this.isInitialized = true;
            return;
        }

        try {
            await vkBridge.send('VKWebAppInit');
            this.isInitialized = true;
            console.log("✅ VK Bridge SDK успешно инициализирован.");
        } catch (e) {
            console.error("Ошибка инициализации VK Bridge:", e);
            this.isMock = true;
            this.isInitialized = true;
        }
    }

    /**
     * Полноэкранная межстраничная реклама
     */
    showFullscreenAdv(onCloseCallback) {
        if (this.isMock || typeof vkBridge === "undefined") {
            console.log("📢 [Mock VK] Показ межстраничной рекламы.");
            if (onCloseCallback) onCloseCallback(true);
            return;
        }

        vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
            .then((data) => {
                console.log("Реклама показана:", data.result);
                if (onCloseCallback) onCloseCallback(data.result);
            })
            .catch((error) => {
                console.warn("Реклама не показана или ошибка:", error);
                if (onCloseCallback) onCloseCallback(false);
            });
    }

    /**
     * Видео за вознаграждение (Rewarded Video) для подсказки
     */
    showRewardedVideo(onRewardCallback, onFailCallback) {
        if (this.isMock || typeof vkBridge === "undefined") {
            console.log("🎁 [Mock VK] Игрок посмотрел видео за награду!");
            if (onRewardCallback) onRewardCallback();
            return;
        }

        vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
            .then((data) => {
                if (data.result) {
                    console.log("Награда получена!");
                    if (onRewardCallback) onRewardCallback();
                } else {
                    if (onFailCallback) onFailCallback();
                }
            })
            .catch((error) => {
                console.warn("Ошибка показа видео за награду:", error);
                if (onFailCallback) onFailCallback(error);
            });
    }

    /**
     * Сохранение прогресса в VK Cloud Storage
     */
    async saveProgress(data) {
        const jsonStr = JSON.stringify(data);
        localStorage.setItem("words_of_wonders_save", jsonStr);

        if (!this.isMock && typeof vkBridge !== "undefined") {
            try {
                await vkBridge.send('VKWebAppStorageSet', {
                    key: 'game_save',
                    value: jsonStr
                });
            } catch (e) {
                console.warn("Не удалось сохранить в VK Storage:", e);
            }
        }
    }

    /**
     * Загрузка прогресса из VK Cloud Storage
     */
    async loadProgress() {
        if (!this.isMock && typeof vkBridge !== "undefined") {
            try {
                const res = await vkBridge.send('VKWebAppStorageGet', { keys: ['game_save'] });
                if (res && res.keys && res.keys[0] && res.keys[0].value) {
                    return JSON.parse(res.keys[0].value);
                }
            } catch (e) {
                console.warn("Не удалось загрузить из VK Storage:", e);
            }
        }

        const local = localStorage.getItem("words_of_wonders_save");
        if (local) {
            try {
                return JSON.parse(local);
            } catch (e) {}
        }
        return null;
    }
}

window.yandexGames = new VKGamesManager(); // Сохраняем имя объекта для совместимости с game.js
