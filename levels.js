/**
 * БАЗА УРОВНЕЙ С ПРОГРЕССИЕЙ СЛОЖНОСТИ И ЛОКАЦИЯМИ (50 УРОВНЕЙ)
 * 
 * Уровни 1-5:   3 буквы (Обучение)
 * Уровни 6-15:  4 буквы (Легко)
 * Уровни 16-30: 5 букв (Средне)
 * Уровни 31-45: 6 букв (Сложно)
 * Уровни 46-50: 6-7 букв (Мастер)
 */

const GAME_LEVELS = [
    // === ГЛАВА 1: УЮТНЫЙ КРАЙ (УРОВНИ 1-10) ===
    {
        id: 1, chapter: "Глава 1: Уютный край", title: "Уровень 1",
        difficulty: "★☆☆☆☆",
        location: "Уютный домик",
        fact: "Теплый чай и кот у камина — лучшее начало любого путешествия.",
        icon: "🏡",
        bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        letters: ["К", "О", "Т"],
        words: [
            { word: "КОТ", row: 0, col: 0, dir: "H" },
            { word: "ТОК", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["ОТК"]
    },
    {
        id: 2, chapter: "Глава 1: Уютный край", title: "Уровень 2",
        difficulty: "★☆☆☆☆",
        location: "Берёзовая роща",
        fact: "Берёза — символ русской природы, очищает воздух и дарит душевный покой.",
        icon: "🌳",
        bg: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
        letters: ["Д", "О", "М", "А"],
        words: [
            { word: "ДОМ", row: 0, col: 0, dir: "H" },
            { word: "МОДА", row: 0, col: 2, dir: "V" },
            { word: "ОДА", row: 1, col: 0, dir: "H" }
        ],
        bonusWords: ["ДОМА", "АД"]
    },
    {
        id: 3, chapter: "Глава 1: Уютный край", title: "Уровень 3",
        difficulty: "★☆☆☆☆",
        location: "Речная заводь",
        fact: "Тихий всплеск весел на утренней реке дарит заряд энергии на весь день.",
        icon: "🚣",
        bg: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
        letters: ["В", "О", "Д", "А"],
        words: [
            { word: "ВОДА", row: 0, col: 0, dir: "H" },
            { word: "ДВА", row: 0, col: 2, dir: "V" },
            { word: "ОДА", row: 1, col: 0, dir: "H" }
        ],
        bonusWords: ["АД"]
    },
    {
        id: 4, chapter: "Глава 1: Уютный край", title: "Уровень 4",
        difficulty: "★☆☆☆☆",
        location: "Сосновый бор",
        fact: "Хвойный воздух богат фитонцидами, полезными для крепкого здоровья.",
        icon: "🌲",
        bg: "linear-gradient(135deg, #1b4d3e 0%, #3e6b5c 100%)",
        letters: ["Л", "Е", "С"],
        words: [
            { word: "ЛЕС", row: 0, col: 0, dir: "H" },
            { word: "СЕЛ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: []
    },
    {
        id: 5, chapter: "Глава 1: Уютный край", title: "Уровень 5",
        difficulty: "★☆☆☆☆",
        location: "Родные просторы",
        fact: "Панорама бескрайних полей и холмов открывает сердце навстречу миру.",
        icon: "🌾",
        bg: "linear-gradient(135deg, #596164 0%, #868f96 100%)",
        letters: ["Г", "О", "Р", "А"],
        words: [
            { word: "ГОРА", row: 0, col: 0, dir: "H" },
            { word: "РОГ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["АРГО", "ОРГ"]
    },
    {
        id: 6, chapter: "Глава 1: Уютный край", title: "Уровень 6",
        difficulty: "★★☆☆☆",
        location: "Цветущий луг",
        fact: "На одном лугу может цвести до 50 видов целебных трав и полевых цветов.",
        icon: "🌼",
        bg: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
        letters: ["Т", "Р", "А", "В", "А"],
        words: [
            { word: "ТРАВА", row: 0, col: 0, dir: "H" },
            { word: "ТАРА", row: 0, col: 0, dir: "V" },
            { word: "ВАР", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["АРТ", "АРА"]
    },
    {
        id: 7, chapter: "Глава 1: Уютный край", title: "Уровень 7",
        difficulty: "★★☆☆☆",
        location: "Тенистый сад",
        fact: "Старый яблоневый сад помнит радостные дни многих поколений.",
        icon: "🍎",
        bg: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
        letters: ["С", "Т", "О", "Л"],
        words: [
            { word: "СТОЛ", row: 0, col: 0, dir: "H" },
            { word: "ЛОТ", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["ТОЛ", "ОСТ"]
    },
    {
        id: 8, chapter: "Глава 1: Уютный край", title: "Уровень 8",
        difficulty: "★★☆☆☆",
        location: "Малиновая поляна",
        fact: "Лесная малина не только ароматна, но и с древности ценится от простуды.",
        icon: "🍓",
        bg: "linear-gradient(135deg, #b20a2c 0%, #fffbd5 100%)",
        letters: ["Р", "У", "К", "А"],
        words: [
            { word: "РУКА", row: 0, col: 0, dir: "H" },
            { word: "УРА", row: 0, col: 1, dir: "V" },
            { word: "АКР", row: 2, col: 1, dir: "H" }
        ],
        bonusWords: ["РАК"]
    },
    {
        id: 9, chapter: "Глава 1: Уютный край", title: "Уровень 9",
        difficulty: "★★☆☆☆",
        location: "Ясное небо",
        fact: "Наблюдение за облаками улучшает творческое мышление и снимает усталость.",
        icon: "☁️",
        bg: "linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)",
        letters: ["Н", "Е", "Б", "О", "Г"],
        words: [
            { word: "НЕБО", row: 0, col: 0, dir: "H" },
            { word: "БОГ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["ГЕН"]
    },
    {
        id: 10, chapter: "Глава 1: Уютный край", title: "Уровень 10",
        difficulty: "★★☆☆☆",
        location: "Грибная тропинка",
        fact: "Белый гриб по праву называют царем леса за непревзойденный вкус.",
        icon: "🍄",
        bg: "linear-gradient(135deg, #3a6073 0%, #3a7bd5 100%)",
        letters: ["Г", "Р", "И", "Б", "Ы"],
        words: [
            { word: "ГРИБ", row: 0, col: 0, dir: "H" },
            { word: "РЫБ", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: ["ИГР"]
    },

    // === ГЛАВА 2: ЖЕМЧУЖИНЫ ПРИРОДЫ (УРОВНИ 11-20) ===
    {
        id: 11, chapter: "Глава 2: Жемчужины природы", title: "Уровень 11",
        difficulty: "★★★☆☆",
        location: "Озеро Байкал",
        fact: "Байкал содержит более 20% всех мировых запасов чистейшей пресной воды.",
        icon: "🏞️",
        bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        letters: ["Л", "Е", "С", "О", "К"],
        words: [
            { word: "ЛЕСОК", row: 1, col: 0, dir: "H" },
            { word: "СОК", row: 0, col: 2, dir: "V" },
            { word: "КОЛ", row: 1, col: 4, dir: "V" },
            { word: "ЛЕС", row: 1, col: 0, dir: "V" }
        ],
        bonusWords: ["СЕЛО", "СКОЛ"]
    },
    {
        id: 12, chapter: "Глава 2: Жемчужины природы", title: "Уровень 12",
        difficulty: "★★★☆☆",
        location: "Карельские скалы",
        fact: "Мраморные каньоны Карелии сверкают на солнце удивительными узорами.",
        icon: "⛰️",
        bg: "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
        letters: ["Р", "Е", "К", "А", "П"],
        words: [
            { word: "РЕКА", row: 0, col: 0, dir: "H" },
            { word: "ПАРК", row: 0, col: 2, dir: "V" },
            { word: "КАРЕ", row: 3, col: 2, dir: "H" }
        ],
        bonusWords: ["РАК", "ПАК", "КАП"]
    },
    {
        id: 13, chapter: "Глава 2: Жемчужины природы", title: "Уровень 13",
        difficulty: "★★★☆☆",
        location: "Лавандовые поля",
        fact: "Аромат лаванды дарит безмятежность и помогает крепкому здоровому сну.",
        icon: "🪻",
        bg: "linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)",
        letters: ["П", "О", "Л", "Е", "Т"],
        words: [
            { word: "ПОЛЕТ", row: 1, col: 0, dir: "H" },
            { word: "ТЕЛО", row: 0, col: 4, dir: "V" },
            { word: "ПОЛ", row: 1, col: 0, dir: "V" },
            { word: "ЛЕТО", row: 3, col: 2, dir: "H" }
        ],
        bonusWords: ["ПЛОТ", "ТОЛ"]
    },
    {
        id: 14, chapter: "Глава 2: Жемчужины природы", title: "Уровень 14",
        difficulty: "★★★☆☆",
        location: "Ягодный склон",
        fact: "Брусника и клюква могут сохранять свежесть под снегом всю долгую зиму.",
        icon: "🫐",
        bg: "linear-gradient(135deg, #4b1248 0%, #f0c27b 100%)",
        letters: ["Я", "Г", "О", "Д", "А"],
        words: [
            { word: "ЯГОДА", row: 0, col: 0, dir: "H" },
            { word: "ОДА", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["ДОГ", "ГАД"]
    },
    {
        id: 15, chapter: "Глава 2: Жемчужины природы", title: "Уровень 15",
        difficulty: "★★★☆☆",
        location: "Кедровая роща",
        fact: "Сибирский кедр живет до 800 лет, даря питательные и полезные орешки.",
        icon: "🐿️",
        bg: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
        letters: ["В", "Е", "Т", "К", "А"],
        words: [
            { word: "ВЕТКА", row: 0, col: 0, dir: "H" },
            { word: "АКТ", row: 0, col: 4, dir: "V" },
            { word: "ВЕК", row: 0, col: 0, dir: "V" }
        ],
        bonusWords: ["ТЕК"]
    },
    {
        id: 16, chapter: "Глава 2: Жемчужины природы", title: "Уровень 16",
        difficulty: "★★★☆☆",
        location: "Горный перевал",
        fact: "Воздух на высоте кристально чист, а горизонт открывается на сотни километров.",
        icon: "🏔️",
        bg: "linear-gradient(135deg, #304352 0%, #d7d2cc 100%)",
        letters: ["Т", "Р", "О", "П", "А"],
        words: [
            { word: "ТРОПА", row: 0, col: 0, dir: "H" },
            { word: "ПОРТ", row: 0, col: 3, dir: "V" },
            { word: "РОТ", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: ["ПАР", "ТОП"]
    },
    {
        id: 17, chapter: "Глава 2: Жемчужины природы", title: "Уровень 17",
        difficulty: "★★★☆☆",
        location: "Шишкин лес",
        fact: "Аромат нагретой солнцем смолы наполняет лес сказочным теплом.",
        icon: "🌲",
        bg: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
        letters: ["Ш", "И", "Ш", "К", "А"],
        words: [
            { word: "ШИШКА", row: 0, col: 0, dir: "H" },
            { word: "ИШАК", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: ["ШИК"]
    },
    {
        id: 18, chapter: "Глава 2: Жемчужины природы", title: "Уровень 18",
        difficulty: "★★★☆☆",
        location: "Долина эдельвейсов",
        fact: "Редкий цветок эдельвейс растет среди скал и считается цветком мужества.",
        icon: "🌸",
        bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        letters: ["З", "Е", "М", "Л", "Я"],
        words: [
            { word: "ЗЕМЛЯ", row: 0, col: 0, dir: "H" },
            { word: "МЕЛ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["ЛАЗ"]
    },
    {
        id: 19, chapter: "Глава 2: Жемчужины природы", title: "Уровень 19",
        difficulty: "★★★☆☆",
        location: "Альпийские луга",
        fact: "Травы альпийских лугов цветут ярче равнинных из-за обильного горного солнца.",
        icon: "🌺",
        bg: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
        letters: ["Ц", "В", "Е", "Т", "О", "К"],
        words: [
            { word: "ЦВЕТОК", row: 1, col: 0, dir: "H" },
            { word: "ВЕК", row: 1, col: 1, dir: "V" },
            { word: "ТОК", row: 0, col: 3, dir: "V" },
            { word: "КОТ", row: 1, col: 5, dir: "V" }
        ],
        bonusWords: ["ЦВЕТ", "ОТЕК"]
    },
    {
        id: 20, chapter: "Глава 2: Жемчужины природы", title: "Уровень 20",
        difficulty: "★★★☆☆",
        location: "Золотой листопад",
        fact: "Осенние клены расцвечивают парк в оттенки золота, меди и янтаря.",
        icon: "🍂",
        bg: "linear-gradient(135deg, #d38312 0%, #a83279 100%)",
        letters: ["Л", "И", "С", "Т", "О", "К"],
        words: [
            { word: "ЛИСТОК", row: 1, col: 0, dir: "H" },
            { word: "СТОК", row: 0, col: 2, dir: "V" },
            { word: "СОК", row: 0, col: 2, dir: "V" },
            { word: "КОТ", row: 1, col: 5, dir: "V" }
        ],
        bonusWords: ["ТОЛК", "ЛИСТ"]
    },

    // === ГЛАВА 3: МОРСКИЕ ПРОСТОРЫ (УРОВНИ 21-30) ===
    {
        id: 21, chapter: "Глава 3: Морские просторы", title: "Уровень 21",
        difficulty: "★★★★☆",
        location: "Лазурный берег",
        fact: "Морской прибой излучает мягкие звуковые волны, снимающие тревогу и стресс.",
        icon: "🌊",
        bg: "linear-gradient(135deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%)",
        letters: ["В", "О", "Л", "Н", "А"],
        words: [
            { word: "ВОЛНА", row: 0, col: 0, dir: "H" },
            { word: "ВОЛ", row: 0, col: 0, dir: "V" },
            { word: "ОВАЛ", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: ["ВАЛ"]
    },
    {
        id: 22, chapter: "Глава 3: Морские просторы", title: "Уровень 22",
        difficulty: "★★★★☆",
        location: "Золотые пески",
        fact: "Теплый морской песок улучшает кровообращение и дарит приятный отдых.",
        icon: "🏖️",
        bg: "linear-gradient(135deg, #e65c00 0%, #f9d423 100%)",
        letters: ["П", "Е", "С", "О", "К"],
        words: [
            { word: "ПЕСОК", row: 0, col: 0, dir: "H" },
            { word: "СОК", row: 0, col: 2, dir: "V" },
            { word: "ПЕС", row: 0, col: 0, dir: "V" }
        ],
        bonusWords: ["СКОП"]
    },
    {
        id: 23, chapter: "Глава 3: Морские просторы", title: "Уровень 23",
        difficulty: "★★★★☆",
        location: "Рыбацкая бухта",
        fact: "Деревянные рыбацкие лодки веками строились без единого железного гвоздя.",
        icon: "⛵",
        bg: "linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)",
        letters: ["Л", "О", "Д", "К", "А"],
        words: [
            { word: "ЛОДКА", row: 0, col: 0, dir: "H" },
            { word: "ОКЛАД", row: 0, col: 1, dir: "V" },
            { word: "КОД", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["ДОК", "ЛАД"]
    },
    {
        id: 24, chapter: "Глава 3: Морские просторы", title: "Уровень 24",
        difficulty: "★★★★☆",
        location: "Морской маяк",
        fact: "Свет маяка в ясную погоду виден кораблям на расстоянии до 40 километров.",
        icon: "🗼",
        bg: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
        letters: ["П", "А", "Р", "У", "С"],
        words: [
            { word: "ПАРУС", row: 0, col: 0, dir: "H" },
            { word: "СУПА", row: 0, col: 4, dir: "V" },
            { word: "ПАР", row: 0, col: 0, dir: "V" }
        ],
        bonusWords: ["ПАС", "РУС"]
    },
    {
        id: 25, chapter: "Глава 3: Морские просторы", title: "Уровень 25",
        difficulty: "★★★★☆",
        location: "Каменистый утес",
        fact: "Морские утесы служат домом для сотен видов чаек и перелетных птиц.",
        icon: "🦅",
        bg: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
        letters: ["Б", "Е", "Р", "Е", "Г"],
        words: [
            { word: "БЕРЕГ", row: 0, col: 0, dir: "H" },
            { word: "ГЕРБ", row: 0, col: 4, dir: "V" }
        ],
        bonusWords: ["БЕГ"]
    },
    {
        id: 26, chapter: "Глава 3: Морские просторы", title: "Уровень 26",
        difficulty: "★★★★☆",
        location: "Таинственный остров",
        fact: "Острова посреди моря сохраняют уникальную первозданную флору и фауну.",
        icon: "🏝️",
        bg: "linear-gradient(135deg, #0575e6 0%, #021b79 100%)",
        letters: ["О", "С", "Т", "Р", "О", "В"],
        words: [
            { word: "ОСТРОВ", row: 0, col: 0, dir: "H" },
            { word: "РОСТ", row: 0, col: 3, dir: "V" },
            { word: "ВОР", row: 0, col: 5, dir: "V" }
        ],
        bonusWords: ["СОРТ", "ТРОС"]
    },
    {
        id: 27, chapter: "Глава 3: Морские просторы", title: "Уровень 27",
        difficulty: "★★★★☆",
        location: "Белоснежный фрегат",
        fact: "Парусные корабли эпохи географических открытий обошли всю планету.",
        icon: "🚢",
        bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        letters: ["К", "О", "Р", "А", "Б", "Л", "Ь"],
        words: [
            { word: "КОРАБЛЬ", row: 0, col: 0, dir: "H" },
            { word: "БАРОК", row: 0, col: 4, dir: "V" },
            { word: "РАБ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["БЛОК", "КОРА"]
    },
    {
        id: 28, chapter: "Глава 3: Морские просторы", title: "Уровень 28",
        difficulty: "★★★★☆",
        location: "Ракушечный пляж",
        fact: "Каждая морская ракушка уникальна и хранит внутри тихий шум океана.",
        icon: "🐚",
        bg: "linear-gradient(135deg, #e96443 0%, #904e95 100%)",
        letters: ["Р", "А", "К", "У", "Ш", "К", "А"],
        words: [
            { word: "РАКУШКА", row: 0, col: 0, dir: "H" },
            { word: "КУРА", row: 0, col: 2, dir: "V" },
            { word: "КАШКА", row: 0, col: 4, dir: "V" }
        ],
        bonusWords: ["РУКА", "АРКА"]
    },
    {
        id: 29, chapter: "Глава 3: Морские просторы", title: "Уровень 29",
        difficulty: "★★★★☆",
        location: "Алый закат",
        fact: "Морской закат дарит неповторимые палитры красок, меняясь каждую минуту.",
        icon: "🌅",
        bg: "linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)",
        letters: ["З", "А", "К", "А", "Т"],
        words: [
            { word: "ЗАКАТ", row: 0, col: 0, dir: "H" },
            { word: "АКТ", row: 0, col: 1, dir: "V" },
            { word: "ТАЗ", row: 0, col: 4, dir: "V" }
        ],
        bonusWords: ["АТАК"]
    },
    {
        id: 30, chapter: "Глава 3: Морские просторы", title: "Уровень 30",
        difficulty: "★★★★☆",
        location: "Песчаная дюна",
        fact: "Морской ветер плавно перемещает дюны, создавая удивительные барханы.",
        icon: "🏜️",
        bg: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
        letters: ["М", "А", "Я", "К"],
        words: [
            { word: "МАЯК", row: 0, col: 0, dir: "H" },
            { word: "ЯМА", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["МАК"]
    },

    // === ГЛАВА 4: САДЫ И УСАДЬБЫ (УРОВНИ 31-40) ===
    {
        id: 31, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 31",
        difficulty: "★★★★★",
        location: "Яблоневый спас",
        fact: "Ароматные спелые яблоки — главное украшение теплого августовского сада.",
        icon: "🍏",
        bg: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
        letters: ["Я", "Б", "Л", "О", "К", "О"],
        words: [
            { word: "ЯБЛОКО", row: 0, col: 0, dir: "H" },
            { word: "БОК", row: 0, col: 1, dir: "V" },
            { word: "ОКО", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["БЛОК", "КОЛ"]
    },
    {
        id: 32, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 32",
        difficulty: "★★★★★",
        location: "Вишневый сад",
        fact: "Вишневый цвет весной напоминает легкое облако, опустившееся на ветви.",
        icon: "🍒",
        bg: "linear-gradient(135deg, #870000 0%, #190a05 100%)",
        letters: ["В", "И", "Ш", "Н", "Я"],
        words: [
            { word: "ВИШНЯ", row: 0, col: 0, dir: "H" },
            { word: "ШИВ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["ИВА"]
    },
    {
        id: 33, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 33",
        difficulty: "★★★★★",
        location: "Грушевая аллея",
        fact: "Сладкие груши выращивали в усадебных садах еще во времена Петра Первого.",
        icon: "🍐",
        bg: "linear-gradient(135deg, #ffe000 0%, #799f0c 100%)",
        letters: ["Г", "Р", "У", "Ш", "А"],
        words: [
            { word: "ГРУША", row: 0, col: 0, dir: "H" },
            { word: "ШАР", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["УРА"]
    },
    {
        id: 34, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 34",
        difficulty: "★★★★★",
        location: "Пасека на опушке",
        fact: "Пчела за один вылет успевает опылить и собрать нектар с тысячи цветков.",
        icon: "🐝",
        bg: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        letters: ["П", "Ч", "Е", "Л", "А"],
        words: [
            { word: "ПЧЕЛА", row: 0, col: 0, dir: "H" },
            { word: "ПЛЕЧ", row: 0, col: 0, dir: "V" }
        ],
        bonusWords: ["ЧЕЛ"]
    },
    {
        id: 35, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 35",
        difficulty: "★★★★★",
        location: "Дворянская клумба",
        fact: "Старинные парки планировались так, чтобы с любой скамейки открывался красивый вид.",
        icon: "🌷",
        bg: "linear-gradient(135deg, #ec008c 0%, #fc6767 100%)",
        letters: ["К", "Л", "У", "М", "Б", "А"],
        words: [
            { word: "КЛУМБА", row: 0, col: 0, dir: "H" },
            { word: "БАЛ", row: 0, col: 4, dir: "V" },
            { word: "МУКА", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["ЛУК", "БАК"]
    },
    {
        id: 36, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 36",
        difficulty: "★★★★★",
        location: "Тропинка к реке",
        fact: "Пешие неспешные прогулки — проверенный секрет долголетия и ясного ума.",
        icon: "🏞️",
        bg: "linear-gradient(135deg, #283048 0%, #859398 100%)",
        letters: ["Т", "Р", "О", "П", "И", "Н", "К", "А"],
        words: [
            { word: "ТРОПИНКА", row: 0, col: 0, dir: "H" },
            { word: "ПАРК", row: 0, col: 3, dir: "V" },
            { word: "НОРА", row: 0, col: 5, dir: "V" }
        ],
        bonusWords: ["ТРОПА", "ПОРТ"]
    },
    {
        id: 37, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 37",
        difficulty: "★★★★★",
        location: "Резная беседка",
        fact: "В уютной беседке приятно слушать шум дождя за чашечкой липового чая.",
        icon: "🛖",
        bg: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
        letters: ["Б", "Е", "С", "Е", "Д", "К", "А"],
        words: [
            { word: "БЕСЕДКА", row: 0, col: 0, dir: "H" },
            { word: "БЕДА", row: 0, col: 0, dir: "V" },
            { word: "САД", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["БАС", "БЕС"]
    },
    {
        id: 38, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 38",
        difficulty: "★★★★★",
        location: "Парковая аллея",
        fact: "Вековые липы в старых усадьбах дарят приятную прохладу даже в знойный полдень.",
        icon: "🏛️",
        bg: "linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)",
        letters: ["С", "К", "А", "М", "Ь", "Я"],
        words: [
            { word: "СКАМЬЯ", row: 0, col: 0, dir: "H" },
            { word: "ЯМА", row: 0, col: 4, dir: "V" }
        ],
        bonusWords: ["МАК"]
    },
    {
        id: 39, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 39",
        difficulty: "★★★★★",
        location: "Солнечная терраса",
        fact: "Утренний солнечный свет помогает организму вырабатывать жизненно важный витамин D.",
        icon: "☀️",
        bg: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
        letters: ["С", "О", "Л", "Н", "Ц", "Е"],
        words: [
            { word: "СОЛНЦЕ", row: 0, col: 0, dir: "H" },
            { word: "СЛОН", row: 0, col: 0, dir: "V" },
            { word: "НОС", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["СОН", "СЕЛО"]
    },
    {
        id: 40, chapter: "Глава 4: Сады и усадьбы", title: "Уровень 40",
        difficulty: "★★★★★",
        location: "Ромашковое поле",
        fact: "Ромашка — древний символ нежности, искренней доброты и верности.",
        icon: "🌼",
        bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        letters: ["Р", "О", "М", "А", "Ш", "К", "А"],
        words: [
            { word: "РОМАШКА", row: 0, col: 0, dir: "H" },
            { word: "МАРКА", row: 0, col: 2, dir: "V" },
            { word: "КАША", row: 0, col: 5, dir: "V" }
        ],
        bonusWords: ["КОМА", "ШОК"]
    },

    // === ГЛАВА 5: СЕВЕРНОЕ СИЯНИЕ И ЧУДЕСА (УРОВНИ 41-50) ===
    {
        id: 41, chapter: "Глава 5: Северное сияние", title: "Уровень 41",
        difficulty: "★★★★★",
        location: "Грибной дождик",
        fact: "Теплый летний дождь сквозь солнце издревле обещает богатый урожай грибов.",
        icon: "🌦️",
        bg: "linear-gradient(135deg, #3a6073 0%, #3a7bd5 100%)",
        letters: ["Д", "О", "Ж", "Д", "Ь", "А"],
        words: [
            { word: "ДОЖДЬ", row: 0, col: 0, dir: "H" },
            { word: "ОДА", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: ["АД"]
    },
    {
        id: 42, chapter: "Глава 5: Северное сияние", title: "Уровень 42",
        difficulty: "★★★★★",
        location: "Осенняя набережная",
        fact: "Прогулка под зонтом по мокрой листве возвращает романтическое настроение.",
        icon: "☂️",
        bg: "linear-gradient(135deg, #1d2b64 0%, #f8cdda 100%)",
        letters: ["З", "О", "Н", "Т", "И", "К"],
        words: [
            { word: "ЗОНТИК", row: 0, col: 0, dir: "H" },
            { word: "КИТ", row: 0, col: 5, dir: "V" },
            { word: "ТОН", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["ЗОНТ", "КОТ"]
    },
    {
        id: 43, chapter: "Глава 5: Северное сияние", title: "Уровень 43",
        difficulty: "★★★★★",
        location: "Парк Петергофа",
        fact: "Фонтаны Петергофа работают без единого насоса — только за счет естественного перепада высот.",
        icon: "⛲",
        bg: "linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",
        letters: ["Л", "И", "С", "Т", "О", "П", "А", "Д"],
        words: [
            { word: "ЛИСТОПАД", row: 0, col: 0, dir: "H" },
            { word: "ПЛИТА", row: 0, col: 5, dir: "V" },
            { word: "СТОЛ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["ЛИСТ", "ПЛОТ"]
    },
    {
        id: 44, chapter: "Глава 5: Северное сияние", title: "Уровень 44",
        difficulty: "★★★★★",
        location: "Золотые нивы",
        fact: "Пшеничные поля в пору созревания колышутся на ветру словно золотое море.",
        icon: "🌾",
        bg: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        letters: ["У", "Р", "О", "Ж", "А", "Й"],
        words: [
            { word: "УРОЖАЙ", row: 0, col: 0, dir: "H" },
            { word: "ЖАР", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: ["РАЙ"]
    },
    {
        id: 45, chapter: "Глава 5: Северное сияние", title: "Уровень 45",
        difficulty: "★★★★★",
        location: "Утренний туман",
        fact: "Речной туман на рассвете состоит из миллионов крошечных капелек чистой воды.",
        icon: "🌫️",
        bg: "linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)",
        letters: ["Т", "У", "М", "А", "Н"],
        words: [
            { word: "ТУМАН", row: 0, col: 0, dir: "H" },
            { word: "МАТ", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["УМ"]
    },
    {
        id: 46, chapter: "Глава 5: Северное сияние", title: "Уровень 46",
        difficulty: "★★★★★",
        location: "Восточный дворец",
        fact: "Узоры восточных шелковых ковров ткались вручную на протяжении нескольких лет.",
        icon: "🏰",
        bg: "linear-gradient(135deg, #4b1248 0%, #f0c27b 100%)",
        letters: ["К", "О", "В", "Е", "Р"],
        words: [
            { word: "КОВЕР", row: 0, col: 0, dir: "H" },
            { word: "ВОР", row: 0, col: 2, dir: "V" },
            { word: "РОК", row: 0, col: 4, dir: "V" }
        ],
        bonusWords: ["ВЕК"]
    },
    {
        id: 47, chapter: "Глава 5: Северное сияние", title: "Уровень 47",
        difficulty: "★★★★★",
        location: "Каминный зал",
        fact: "Живой огонь в очаге согревает дом и создает непревзойденный душевный уют.",
        icon: "🪵",
        bg: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        letters: ["К", "А", "М", "И", "Н"],
        words: [
            { word: "КАМИН", row: 0, col: 0, dir: "H" },
            { word: "МАК", row: 0, col: 2, dir: "V" }
        ],
        bonusWords: ["МИНА"]
    },
    {
        id: 48, chapter: "Глава 5: Северное сияние", title: "Уровень 48",
        difficulty: "★★★★★",
        location: "Уютный вечер",
        fact: "Шерстяной плед и интересная беседа делают любой зимний вечер теплым.",
        icon: "☕",
        bg: "linear-gradient(135deg, #3e5151 0%, #decba4 100%)",
        letters: ["П", "Л", "Е", "Д"],
        words: [
            { word: "ПЛЕД", row: 0, col: 0, dir: "H" },
            { word: "ЛЕД", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: []
    },
    {
        id: 49, chapter: "Глава 5: Северное сияние", title: "Уровень 49",
        difficulty: "★★★★★",
        location: "Старинная библиотека",
        fact: "Чтение хороших книг тренирует память лучше любых электронных тренажеров.",
        icon: "📚",
        bg: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
        letters: ["К", "Н", "И", "Г", "А"],
        words: [
            { word: "КНИГА", row: 0, col: 0, dir: "H" },
            { word: "ГАК", row: 0, col: 3, dir: "V" }
        ],
        bonusWords: []
    },
    {
        id: 50, chapter: "Глава 5: Северное сияние", title: "Уровень 50 (Финал)",
        difficulty: "★★★★★",
        location: "Северное сияние",
        fact: "Аврора Бореалис — величайшее световое шоу природы, расцвечивающее полярную ночь.",
        icon: "🌌",
        bg: "linear-gradient(135deg, #050505 0%, #004d40 40%, #00e676 80%, #1de9b6 100%)",
        letters: ["С", "К", "А", "З", "К", "А"],
        words: [
            { word: "СКАЗКА", row: 0, col: 0, dir: "H" },
            { word: "КАЗАК", row: 0, col: 1, dir: "V" }
        ],
        bonusWords: ["КАСКА"]
    }
];
