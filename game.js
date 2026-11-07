/**
 * Звуковой движок Web Audio API (без внешних аудиофайлов)
 */
class SoundManager {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('sound_muted') === 'true';
    }

    init() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('sound_muted', this.muted);
        return this.muted;
    }

    playLetter(index) {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const baseFreq = 340;
            osc.frequency.setValueAtTime(baseFreq + Math.min(index, 7) * 45, this.ctx.currentTime);
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.12);
        } catch (e) {}
    }

    playSuccess() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        try {
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.05);
                osc.type = 'triangle';
                gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.05 + 0.25);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(this.ctx.currentTime + i * 0.05);
                osc.stop(this.ctx.currentTime + i * 0.05 + 0.25);
            });
        } catch (e) {}
    }

    playBonus() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        try {
            const notes = [880, 1174.66, 1760];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.05);
                osc.type = 'sine';
                gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.05 + 0.22);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(this.ctx.currentTime + i * 0.05);
                osc.stop(this.ctx.currentTime + i * 0.05 + 0.22);
            });
        } catch (e) {}
    }

    playError() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.18);
            gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.18);
        } catch (e) {}
    }

    playWin() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        try {
            const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
                osc.type = 'triangle';
                gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.45);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(this.ctx.currentTime + i * 0.08);
                osc.stop(this.ctx.currentTime + i * 0.08 + 0.45);
            });
        } catch (e) {}
    }
}

/**
 * Конфетти для празднования победы
 */
class ConfettiManager {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.particles = [];
        this.animId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (!this.canvas) return;
        const parent = this.canvas.parentElement;
        this.canvas.width = parent ? parent.clientWidth : window.innerWidth;
        this.canvas.height = parent ? parent.clientHeight : window.innerHeight;
    }

    start() {
        if (!this.ctx) return;
        this.resize();
        this.particles = [];
        const colors = ['#f59e0b', '#38bdf8', '#10b981', '#ec4899', '#8b5cf6', '#facc15'];
        for (let i = 0; i < 75; i++) {
            this.particles.push({
                x: this.canvas.width / 2 + (Math.random() - 0.5) * 120,
                y: this.canvas.height * 0.45,
                vx: (Math.random() - 0.5) * 14,
                vy: (Math.random() - 0.75) * 16,
                size: Math.random() * 9 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                vRot: (Math.random() - 0.5) * 10,
                gravity: 0.38,
                alpha: 1
            });
        }
        if (this.animId) cancelAnimationFrame(this.animId);
        this.animate();
    }

    animate() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let active = 0;
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rotation += p.vRot;
            p.alpha -= 0.012;
            if (p.alpha > 0) {
                active++;
                this.ctx.save();
                this.ctx.globalAlpha = Math.max(p.alpha, 0);
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate((p.rotation * Math.PI) / 180);
                this.ctx.fillStyle = p.color;
                this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                this.ctx.restore();
            }
        });
        if (active > 0) {
            this.animId = requestAnimationFrame(() => this.animate());
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

/**
 * Основная логика игры Words of Wonders
 */
class WordGame {
    constructor() {
        this.levels = GAME_LEVELS;
        this.currentLevelIndex = 0;
        this.coins = 100;
        this.foundWords = new Set();
        this.bonusWordsFound = new Set();
        this.revealedLetterCoords = new Set();
        
        // Звуки и конфетти
        this.sound = new SoundManager();
        this.confetti = new ConfettiManager('confetti-canvas');

        // Взаимодействие с кругом
        this.selectedIndices = [];
        this.isInteracting = false;
        this.currentPointerPos = null;
        this.wheelLetters = [];

        // DOM элементы
        this.containerEl = document.getElementById('game-container');
        this.gridEl = document.getElementById('crossword-grid');
        this.previewEl = document.getElementById('word-preview');
        this.levelTitleEl = document.getElementById('level-title');
        this.locationBadgeEl = document.getElementById('location-badge');
        this.coinsCountEl = document.getElementById('coins-count');
        this.wheelEl = document.getElementById('wheel-container');
        this.canvas = document.getElementById('wheel-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.soundBtn = document.getElementById('sound-btn');

        // Элементы открытки победы
        this.winModal = document.getElementById('win-modal');
        this.postcardIconEl = document.getElementById('postcard-icon');
        this.postcardNameEl = document.getElementById('postcard-name');
        this.postcardFactEl = document.getElementById('postcard-fact');
        this.nextLevelBtn = document.getElementById('next-level-btn');

        // Модалка подсказки
        this.hintModal = document.getElementById('hint-modal');
        this.watchAdHintBtn = document.getElementById('watch-ad-hint-btn');
        this.cancelHintBtn = document.getElementById('cancel-hint-btn');

        // Кнопки действий
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.hintBtn = document.getElementById('hint-btn');
    }

    async init() {
        const saved = await window.yandexGames.loadProgress();
        if (saved) {
            this.currentLevelIndex = saved.level || 0;
            this.coins = saved.coins !== undefined ? saved.coins : 100;
        }

        this.initCanvas();
        this.updateSoundBtn();
        this.bindEvents();
        this.loadLevel(this.currentLevelIndex);
        this.updateHeader();
    }

    initCanvas() {
        const rect = this.wheelEl.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    updateSoundBtn() {
        if (this.soundBtn) {
            this.soundBtn.innerText = this.sound.muted ? '🔇' : '🔊';
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.initCanvas();
            this.confetti.resize();
        });

        // Звук
        if (this.soundBtn) {
            this.soundBtn.addEventListener('click', () => {
                this.sound.toggleMute();
                this.updateSoundBtn();
            });
        }

        // Pointer-события
        this.wheelEl.addEventListener('pointerdown', (e) => {
            this.sound.init();
            this.onPointerDown(e);
        });
        window.addEventListener('pointermove', (e) => this.onPointerMove(e));
        window.addEventListener('pointerup', (e) => this.onPointerUp(e));
        window.addEventListener('pointercancel', (e) => this.onPointerUp(e));

        // Перемешивание букв
        this.shuffleBtn.addEventListener('click', () => {
            this.sound.init();
            this.sound.playLetter(2);
            this.shuffleLetters();
        });

        // Подсказка (Лампочка)
        this.hintBtn.addEventListener('click', () => {
            this.sound.init();
            this.handleHintClick();
        });

        // Модалка победы
        this.nextLevelBtn.addEventListener('click', () => this.nextLevel());

        // Модалка рекламы
        this.watchAdHintBtn.addEventListener('click', () => {
            this.hintModal.classList.remove('active');
            window.yandexGames.showRewardedVideo(
                () => {
                    this.revealRandomLetter();
                    this.previewMessage("Подсказка получена! 💡", "success");
                    this.sound.playBonus();
                },
                () => {
                    this.previewMessage("Не удалось загрузить рекламу", "shake");
                }
            );
        });

        this.cancelHintBtn.addEventListener('click', () => {
            this.hintModal.classList.remove('active');
        });
    }

    loadLevel(index) {
        if (index >= this.levels.length) {
            index = 0;
            this.currentLevelIndex = 0;
        }

        const level = this.levels[index];
        this.foundWords.clear();
        this.bonusWordsFound.clear();
        this.revealedLetterCoords.clear();
        this.wheelLetters = [...level.letters];

        // Меняем фон локации
        if (this.containerEl && level.bg) {
            this.containerEl.style.background = level.bg;
        }

        this.updateHeader();
        this.renderCrossword(level);
        this.renderWheel();
        this.clearCanvas();
        this.previewEl.innerText = "";
    }

    updateHeader() {
        const level = this.levels[this.currentLevelIndex];
        const chapter = level.chapter ? `${level.chapter} | ` : '';
        this.levelTitleEl.innerText = `${chapter}${level.title || `Уровень ${this.currentLevelIndex + 1}`}`;
        
        if (this.locationBadgeEl && level.location) {
            this.locationBadgeEl.innerText = `${level.icon || '📍'} ${level.location}`;
        }

        this.coinsCountEl.innerText = this.coins;
    }

    saveState() {
        window.yandexGames.saveProgress({
            level: this.currentLevelIndex,
            coins: this.coins
        });
    }

    renderCrossword(level) {
        this.gridEl.innerHTML = '';

        let minR = Infinity, maxR = -Infinity;
        let minC = Infinity, maxC = -Infinity;

        level.words.forEach(w => {
            const len = w.word.length;
            const endR = w.dir === 'V' ? w.row + len - 1 : w.row;
            const endC = w.dir === 'H' ? w.col + len - 1 : w.col;

            if (w.row < minR) minR = w.row;
            if (endR > maxR) maxR = endR;
            if (w.col < minC) minC = w.col;
            if (endC > maxC) maxC = endC;
        });

        const numRows = maxR - minR + 1;
        const numCols = maxC - minC + 1;

        this.gridEl.style.gridTemplateRows = `repeat(${numRows}, 44px)`;
        this.gridEl.style.gridTemplateColumns = `repeat(${numCols}, 44px)`;

        this.gridCells = new Map();

        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell empty';
                cell.dataset.r = r + minR;
                cell.dataset.c = c + minC;
                this.gridEl.appendChild(cell);
            }
        }

        level.words.forEach(w => {
            for (let i = 0; i < w.word.length; i++) {
                const r = w.dir === 'V' ? w.row + i : w.row;
                const c = w.dir === 'H' ? w.col + i : w.col;
                const char = w.word[i];

                const gridR = r - minR;
                const gridC = c - minC;
                const idx = gridR * numCols + gridC;
                const cell = this.gridEl.children[idx];

                cell.className = 'cell hidden';
                cell.innerText = char;

                const key = `${r},${c}`;
                this.gridCells.set(key, { char, cell, r, c });
            }
        });
    }

    renderWheel() {
        const oldNodes = this.wheelEl.querySelectorAll('.letter-node');
        oldNodes.forEach(n => n.remove());

        const n = this.wheelLetters.length;
        const radius = 85;
        const centerX = this.wheelEl.clientWidth / 2;
        const centerY = this.wheelEl.clientHeight / 2;

        this.letterNodes = [];

        for (let i = 0; i < n; i++) {
            const angle = (2 * Math.PI * i) / n - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            const node = document.createElement('div');
            node.className = 'letter-node';
            node.innerText = this.wheelLetters[i];
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            node.dataset.index = i;

            this.wheelEl.appendChild(node);
            this.letterNodes.push({
                element: node,
                letter: this.wheelLetters[i],
                x,
                y,
                index: i
            });
        }
    }

    shuffleLetters() {
        for (let i = this.wheelLetters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.wheelLetters[i], this.wheelLetters[j]] = [this.wheelLetters[j], this.wheelLetters[i]];
        }
        this.renderWheel();
    }

    onPointerDown(e) {
        this.isInteracting = true;
        this.selectedIndices = [];
        this.clearCanvas();
        this.checkHitLetter(e);
    }

    onPointerMove(e) {
        if (!this.isInteracting) return;
        const rect = this.wheelEl.getBoundingClientRect();
        this.currentPointerPos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        this.checkHitLetter(e);
        this.drawLines();
    }

    onPointerUp(e) {
        if (!this.isInteracting) return;
        this.isInteracting = false;
        this.currentPointerPos = null;
        this.drawLines();

        this.letterNodes.forEach(node => node.element.classList.remove('selected'));

        const word = this.getCurrentWord();
        if (word.length >= 2) {
            this.evaluateWord(word);
        } else {
            this.previewEl.innerText = "";
        }

        this.selectedIndices = [];
        this.clearCanvas();
    }

    checkHitLetter(e) {
        const rect = this.wheelEl.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        for (let i = 0; i < this.letterNodes.length; i++) {
            const node = this.letterNodes[i];
            const dist = Math.hypot(node.x - px, node.y - py);

            if (dist < 32) {
                if (!this.selectedIndices.includes(i)) {
                    this.selectedIndices.push(i);
                    node.element.classList.add('selected');
                    this.sound.playLetter(this.selectedIndices.length);
                    this.updatePreview();
                } else if (this.selectedIndices.length > 1 && this.selectedIndices[this.selectedIndices.length - 2] === i) {
                    const removedIdx = this.selectedIndices.pop();
                    this.letterNodes[removedIdx].element.classList.remove('selected');
                    this.sound.playLetter(this.selectedIndices.length);
                    this.updatePreview();
                }
                break;
            }
        }
    }

    getCurrentWord() {
        return this.selectedIndices.map(i => this.letterNodes[i].letter).join('');
    }

    updatePreview() {
        this.previewEl.className = 'word-preview-box';
        this.previewEl.innerText = this.getCurrentWord();
    }

    drawLines() {
        this.clearCanvas();
        if (this.selectedIndices.length === 0) return;

        this.ctx.lineWidth = 10;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = '#f59e0b';
        this.ctx.shadowColor = 'rgba(245, 158, 11, 0.7)';
        this.ctx.shadowBlur = 10;

        this.ctx.beginPath();
        const first = this.letterNodes[this.selectedIndices[0]];
        this.ctx.moveTo(first.x, first.y);

        for (let i = 1; i < this.selectedIndices.length; i++) {
            const pt = this.letterNodes[this.selectedIndices[i]];
            this.ctx.lineTo(pt.x, pt.y);
        }

        if (this.currentPointerPos) {
            this.ctx.lineTo(this.currentPointerPos.x, this.currentPointerPos.y);
        }

        this.ctx.stroke();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    evaluateWord(word) {
        const level = this.levels[this.currentLevelIndex];
        const matchInCrossword = level.words.find(w => w.word === word);

        if (matchInCrossword) {
            if (this.foundWords.has(word)) {
                this.previewMessage("Уже отгадано!", "shake");
                this.sound.playError();
            } else {
                this.foundWords.add(word);
                this.revealWord(matchInCrossword);
                this.previewMessage(`Отлично! +${word.length} 💰`, "success");
                this.sound.playSuccess();
                this.addCoins(word.length);

                if (this.foundWords.size === level.words.length) {
                    setTimeout(() => this.onLevelComplete(), 600);
                }
            }
            return;
        }

        if (level.bonusWords && level.bonusWords.includes(word)) {
            if (this.bonusWordsFound.has(word)) {
                this.previewMessage("Бонусное слово уже найдено", "shake");
                this.sound.playError();
            } else {
                this.bonusWordsFound.add(word);
                this.addCoins(5);
                this.sound.playBonus();
                this.previewMessage("Бонусное слово! +5 💰", "success");
            }
            return;
        }

        this.sound.playError();
        this.previewMessage(word, "shake");
    }

    previewMessage(msg, type) {
        this.previewEl.innerText = msg;
        this.previewEl.className = `word-preview-box ${type}`;
        setTimeout(() => {
            if (this.previewEl.innerText === msg) {
                this.previewEl.innerText = "";
                this.previewEl.className = 'word-preview-box';
            }
        }, 1200);
    }

    revealWord(wordObj) {
        for (let i = 0; i < wordObj.word.length; i++) {
            const r = wordObj.dir === 'V' ? wordObj.row + i : wordObj.row;
            const c = wordObj.dir === 'H' ? wordObj.col + i : wordObj.col;
            const item = this.gridCells.get(`${r},${c}`);
            if (item) {
                item.cell.className = 'cell revealed';
            }
        }
    }

    addCoins(amount) {
        this.coins += amount;
        this.updateHeader();
        this.saveState();
    }

    handleHintClick() {
        const HINT_COST = 50;

        if (this.coins >= HINT_COST) {
            const revealed = this.revealRandomLetter();
            if (revealed) {
                this.addCoins(-HINT_COST);
                this.sound.playBonus();
                this.previewMessage("-50 💰 Подсказка!", "success");
            } else {
                this.sound.playError();
                this.previewMessage("Все буквы уже открыты!", "shake");
            }
        } else {
            this.hintModal.classList.add('active');
        }
    }

    revealRandomLetter() {
        const unrevealed = [];

        this.gridCells.forEach((val, key) => {
            if (!val.cell.classList.contains('revealed')) {
                unrevealed.push(val);
            }
        });

        if (unrevealed.length === 0) return false;

        const target = unrevealed[Math.floor(Math.random() * unrevealed.length)];
        target.cell.className = 'cell revealed';

        this.checkAutoCompletedWords();
        return true;
    }

    checkAutoCompletedWords() {
        const level = this.levels[this.currentLevelIndex];
        level.words.forEach(w => {
            if (this.foundWords.has(w.word)) return;

            let allRevealed = true;
            for (let i = 0; i < w.word.length; i++) {
                const r = w.dir === 'V' ? w.row + i : w.row;
                const c = w.dir === 'H' ? w.col + i : w.col;
                const item = this.gridCells.get(`${r},${c}`);
                if (!item || !item.cell.classList.contains('revealed')) {
                    allRevealed = false;
                    break;
                }
            }

            if (allRevealed) {
                this.foundWords.add(w.word);
            }
        });

        if (this.foundWords.size === level.words.length) {
            setTimeout(() => this.onLevelComplete(), 600);
        }
    }

    onLevelComplete() {
        const level = this.levels[this.currentLevelIndex];

        // Показ открытки локации
        if (this.postcardIconEl) this.postcardIconEl.innerText = level.icon || '🏞️';
        if (this.postcardNameEl) this.postcardNameEl.innerText = level.location || 'Прекрасное место';
        if (this.postcardFactEl) this.postcardFactEl.innerText = level.fact || 'Открытка добавлена в коллекцию!';

        // Запуск праздничного конфетти
        this.confetti.start();
        this.sound.playWin();

        this.addCoins(25);
        this.winModal.classList.add('active');

        if ((this.currentLevelIndex + 1) % 2 === 0) {
            window.yandexGames.showFullscreenAdv();
        }
    }

    nextLevel() {
        this.winModal.classList.remove('active');
        this.currentLevelIndex++;
        this.saveState();
        this.loadLevel(this.currentLevelIndex);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    await window.yandexGames.init();
    const game = new WordGame();
    await game.init();
});
