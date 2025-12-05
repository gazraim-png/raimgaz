
import { University, Profession } from './types';

// Placeholder Logo URL (Replace with your actual image URL)
export const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/346/346167.png";

// Default values for universities that don't have specific data overrides
const DEFAULTS = {
  requirements: [
    "Аттестат о среднем образовании (оригинал)",
    "Сертификат ЕНТ (минимальный балл: 50, Медицина: 70)",
    "Удостоверение личности (копия)",
    "Медицинская справка форма 075/у",
    "6 фотографий размером 3х4"
  ],
  procedure: [
    "Регистрация в базе абитуриентов вуза (онлайн/офлайн).",
    "Сдача документов в приемную комиссию.",
    "Подача заявления на конкурс государственных грантов (через eGov, июль).",
    "Заключение договора на платное отделение (если без гранта).",
    "Зачисление и оплата (август)."
  ],
  scholarships: [
    "Государственный образовательный грант (полное покрытие + стипендия ~41 000 ₸)",
    "Повышенная стипендия (для отличников +15%)",
    "Президентская стипендия (за особые заслуги)",
    "Гранты ректора (внутренние)",
    "Скидки для социально уязвимых категорий"
  ],
  achievements: [
    "Высокий уровень трудоустройства выпускников",
    "Аккредитация независимых агентств (IQAA, IAAR)",
    "Сотрудничество с ведущими предприятиями региона"
  ]
};

export const UNIVERSITIES: University[] = [
  // --- АСТАНА ---
  {
    id: 'nu',
    name: 'Nazarbayev University',
    shortName: 'NU',
    location: 'Астана',
    description: 'Флагман высшего образования Казахстана. Nazarbayev University — это современный исследовательский университет международного уровня. Обучение ведется полностью на английском языке по принципам академической честности и меритократии.',
    founded: 2010,
    ranking: 1,
    students: 6500,
    tuitionAvg: 'от 5 000 000 ₸',
    image: 'https://vlast.kz/media/pages/8z/17103992352mfah_1600x900.jpg',
    logo: 'NU',
    tourUrl: 'https://nu.edu.kz/ru/campus/campustour',
    mission: 'Стать моделью реформы высшего образования и научным центром Казахстана.',
    programs: [
      { name: 'Computer Science', degree: 'Bachelor', duration: '4 года', language: 'English', description: 'Изучение алгоритмов, ИИ и разработки ПО.' },
      { name: 'Robotics', degree: 'Bachelor', duration: '4 года', language: 'English', description: 'Мехатроника и автоматизация систем.' },
      { name: 'Civil Engineering', degree: 'Bachelor', duration: '4 года', language: 'English' },
    ],
    partners: ['Duke', 'NUS', 'Cambridge', 'UCL'],
    admissionDeadlines: '15.04 (NUET)',
    category: 'National',
    achievements: [
      "Топ-30% исследовательских вузов Азии",
      "Аккредитация международных агентств",
      "Преподаватели из 50+ стран мира"
    ],
    admissionRequirements: [
      "IELTS 6.5 (не менее 6.0 по секциям)",
      "SAT Subject Tests / NUET",
      "Мотивационное письмо",
      "Интервью (для некоторых программ)"
    ],
    admissionProcedure: [
      "Онлайн регистрация на portal.nu.edu.kz",
      "Загрузка сканов документов и сертификатов",
      "Сдача вступительных экзаменов NUET (если нет SAT)",
      "Рассмотрение заявки приемной комиссией",
      "Получение приглашения (Offer letter)"
    ],
    scholarships: [
      "Грант 'Назарбаев Университет' (100% покрытие обучения)",
      "Стипендия Abay Kunanbayev",
      "Социальные гранты Yessenov Foundation"
    ],
    dormitory: true,
    militaryDept: false,
    contacts: {
        website: 'https://nu.edu.kz',
        phone: '+7 (7172) 70 66 88',
        email: 'info_admissions@nu.edu.kz',
        address: 'г. Астана, пр. Кабанбай батыра, 53'
    }
  },
  {
    id: 'enu',
    name: 'Евразийский национальный университет им. Л.Н. Гумилева',
    shortName: 'ЕНУ',
    location: 'Астана',
    description: 'Один из ведущих классических университетов Казахстана, входящий в топ мировых рейтингов QS. Является центром евразийской науки и культуры, активно развивает международное сотрудничество.',
    founded: 1996,
    ranking: 3,
    students: 20000,
    tuitionAvg: '1 000 000 – 1 300 000 ₸',
    image: 'https://orda.kz/enu-pod-podozreniem-skandal-s-mertvymi-dushami-i-vozmozhnye-finansovye-mahinacii-389145/',
    logo: 'ENU',
    mission: 'Генерация знаний и подготовка конкурентоспособных кадров для устойчивого развития Евразии.',
    programs: [
      { name: 'Международные отношения', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Архитектура', degree: 'Bachelor', duration: '5 лет', language: 'KZ/RU' },
      { name: 'Информационные системы', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' }
    ],
    partners: ['RUDN', 'Warsaw Univ', 'MGU'],
    doubleDegree: [
      { partner: 'РУДН (Россия)', program: 'Международное право', country: 'RU' },
      { partner: 'Warsaw University', program: 'International Relations', country: 'PL' }
    ],
    admissionDeadlines: '25.08',
    category: 'National',
    achievements: ["QS World Ranking Top 350", "Лидер по количеству грантов в РК", "QS Stars - 4 звезды"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://enu.kz',
        phone: '+7 (7172) 70 95 00',
        email: 'enu@enu.kz',
        address: 'г. Астана, ул. Сатпаева, 2'
    }
  },
  {
    id: 'kazatu',
    name: 'Казахский агротехнический исследовательский университет им. С. Сейфуллина',
    shortName: 'КазАТИУ',
    location: 'Астана',
    description: 'Крупнейший аграрный вуз Центрального Казахстана со статусом исследовательского университета. Лидер в области сельскохозяйственных наук, ветеринарии и биотехнологий.',
    founded: 1957,
    ranking: 12,
    students: 12000,
    tuitionAvg: '800 000 – 950 000 ₸',
    image: 'https://kazatu.edu.kz/ru/news/tugan-knimen-sejfullin-universiteti',
    logo: 'KATU',
    mission: 'Интеграция образования, науки и производства для развития АПК страны.',
    programs: [
      { name: 'Агрономия', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Ветеринария', degree: 'Bachelor', duration: '5 лет', language: 'KZ/RU' },
      { name: 'Технический сервис в АПК', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['UC Davis', 'AgroParisTech'],
    admissionDeadlines: '20.08',
    category: 'State',
    achievements: ["Статус исследовательского университета", "Собственные агрополигоны", "Лидер аграрной науки"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://kazatu.edu.kz',
        phone: '+7 (7172) 31 75 56',
        email: 'katu@katu.kz',
        address: 'г. Астана, пр. Женис, 62'
    }
  },
  {
    id: 'aitu',
    name: 'Astana IT University',
    shortName: 'AITU',
    location: 'Астана',
    description: 'Инновационный IT-университет, расположенный на территории EXPO-2017. Фокус на практических навыках, проектном обучении и цифровой экономике. Программы реализуются за 3 года (триместры).',
    founded: 2019,
    ranking: 10,
    students: 4000,
    tuitionAvg: '1 600 000 ₸',
    image: 'https://admission.astanait.edu.kz/test',
    logo: 'AITU',
    mission: 'Подготовка цифровой элиты для трансформации экономики Казахстана.',
    programs: [
      { name: 'Software Engineering', degree: 'Bachelor', duration: '3 года', language: 'English', description: 'Разработка ПО, архитектура систем, DevOps.' },
      { name: 'Big Data Analysis', degree: 'Bachelor', duration: '3 года', language: 'English', description: 'Анализ данных, ML и AI.' },
      { name: 'Cybersecurity', degree: 'Bachelor', duration: '3 года', language: 'English', description: 'Защита информации и сетевая безопасность.' }
    ],
    partners: ['Cisco', 'Huawei', 'Kaspersky', '1C'],
    admissionDeadlines: '10.08',
    category: 'Private',
    achievements: ["Лучший IT вуз по версии работодателей 2023", "Расположение в EXPO центре", "Программы за 3 года (интенсив)"],
    admissionRequirements: ["ЕНТ (проф. предметы: Информатика)", "IELTS не требуется (но приветствуется)", "Собеседование (опционально)"],
    admissionProcedure: [
      "Сдача ЕНТ (Мат + Информатика)",
      "Подача на целевой грант AITU (внутренний конкурс)",
      "Подача на гос. грант",
      "Заключение договора"
    ],
    scholarships: ["Государственные гранты", "Внутренние гранты AITU Partners", "Скидки за призовые места в олимпиадах"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://astanait.edu.kz',
        phone: '+7 (7172) 64 57 10',
        email: 'info@astanait.edu.kz',
        address: 'г. Астана, пр. Мангилик Ел, С1.1 (EXPO)'
    }
  },
  {
    id: 'mua',
    name: 'Медицинский университет Астана',
    shortName: 'МУА',
    location: 'Астана',
    description: 'Ведущий медицинский вуз столицы, тесно сотрудничающий с Национальным медицинским холдингом. Клиническая практика проходит в передовых клиниках города.',
    founded: 1964,
    ranking: 19,
    students: 8000,
    tuitionAvg: '1 100 000 – 1 400 000 ₸',
    image: 'https://amu.edu.kz/ru/about-university/',
    logo: 'MUA',
    mission: 'Подготовка врачей новой формации, ориентированных на пациента и науку.',
    programs: [
      { name: 'Общая медицина', degree: 'Bachelor', duration: '6 лет', language: 'KZ/RU/EN' },
      { name: 'Стоматология', degree: 'Bachelor', duration: '5 лет', language: 'KZ/RU' },
      { name: 'Фармация', degree: 'Bachelor', duration: '5 лет', language: 'KZ/RU' }
    ],
    partners: ['Sapienza Rome', 'Seoul National Univ'],
    admissionDeadlines: '20.07',
    category: 'Medical',
    achievements: ["Лидер по трудоустройству врачей", "Собственный симуляционный центр"],
    admissionRequirements: [...DEFAULTS.requirements, "Психометрический тест (допуск к конкурсу)"],
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://amu.edu.kz',
        phone: '+7 (7172) 53 94 24',
        email: 'info@amu.kz',
        address: 'г. Астана, ул. Бейбитшилик, 49А'
    }
  },
  {
    id: 'kazgyu',
    name: 'Университет КАЗГЮУ имени М.С. Нарикбаева',
    shortName: 'KAZGUU',
    location: 'Астана',
    description: 'Лидер юридического образования в стране. Также имеет сильную международную бизнес-школу и школу либеральных искусств. Высокие стандарты качества и академической честности.',
    founded: 1994,
    ranking: 8,
    students: 5000,
    tuitionAvg: '1 300 000 – 2 000 000 ₸',
    image: 'https://adaldyq.kz/universitety/universitet-kazgyuu-imeni-m.s.-narikbaeva',
    logo: 'KAZGUU',
    mission: 'Служение правосудию и обществу через качественное образование.',
    programs: [
      { name: 'Юриспруденция', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Международное право', degree: 'Bachelor', duration: '4 года', language: 'EN' },
      { name: 'Финансы (ACCA)', degree: 'Bachelor', duration: '4 года', language: 'EN' }
    ],
    partners: ['HSE Moscow', 'Oxford (partners)', 'Penn State'],
    doubleDegree: [
       { partner: 'Hof University', program: 'Business Administration', country: 'DE' },
       { partner: 'Solbridge School', program: 'International Business', country: 'KR' }
    ],
    admissionDeadlines: '20.08',
    category: 'Private',
    achievements: ["ACCA аккредитация", "FIBAA аккредитация", "Лучшая школа права в СНГ"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: ["KAZGUU Endowment", "Гранты ректора", "Корпоративные стипендии"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://kazguu.kz',
        phone: '+7 (7172) 70 30 30',
        email: 'info@kazguu.kz',
        address: 'г. Астана, шоссе Коргалжын, 8'
    }
  },

  // --- АЛМАТЫ ---
  {
    id: 'kaznu',
    name: 'Казахский Национальный Университет им. аль-Фараби',
    shortName: 'КазНУ',
    location: 'Алматы',
    description: 'Старейший и крупнейший классический университет страны. Обладает огромным кампусом "Казгуград" в предгорьях Заилийского Алатау. Лидер по количеству научных публикаций.',
    founded: 1934,
    ranking: 2,
    students: 25000,
    tuitionAvg: '1 200 000 – 1 600 000 ₸',
    image: 'https://farabi.university/news/90408?lang=ru',
    logo: 'KazNU',
    mission: 'Формирование интеллектуального потенциала нации и интеграция в мировое образовательное пространство.',
    programs: [
      { name: 'Физика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Востоковедение', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Биотехнология', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' }
    ],
    partners: ['MSU', 'Osaka Univ', 'Columbia Univ'],
    admissionDeadlines: '20.08',
    category: 'National',
    achievements: ["Top 150 QS World Ranking", "Глобальный Хаб ООН", "Самый большой кампус в ЦА (Казгуград)"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://kaznu.kz',
        phone: '+7 (727) 377 33 33',
        email: 'info@kaznu.kz',
        address: 'г. Алматы, пр. аль-Фараби, 71'
    }
  },
  {
    id: 'satbayev',
    name: 'Satbayev University (КазНИТУ)',
    shortName: 'Satbayev',
    location: 'Алматы',
    description: 'Главный технический вуз страны, первый исследовательский университет. Основной поставщик инженерных кадров для промышленности, нефтегаза и горного дела.',
    founded: 1934,
    ranking: 4,
    students: 15000,
    tuitionAvg: '1 000 000 – 1 200 000 ₸',
    image: 'https://satbayev.university/ru/news/proshlo-zasedanie-uchenogo-soveta',
    logo: 'SU',
    mission: 'Научное и инженерное обеспечение промышленного развития Казахстана.',
    programs: [
      { name: 'Нефтяная инженерия', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Робототехника и мехатроника', degree: 'Bachelor', duration: '4 года', language: 'EN' },
      { name: 'Геология', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['Colorado School of Mines', 'Penn State'],
    doubleDegree: [
      { partner: 'City, University of London', program: 'Project Management', country: 'UK' },
      { partner: 'Hof University', program: 'Computer Science', country: 'DE' }
    ],
    admissionDeadlines: '15.08',
    category: 'National',
    achievements: ["Статус исследовательского университета", "Лидер по патентам", "Сотрудничество с Казатомпром"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://satbayev.university',
        phone: '+7 (727) 292 60 25',
        email: 'info@satbayev.university',
        address: 'г. Алматы, ул. Сатпаева, 22'
    }
  },
  {
    id: 'kbtu',
    name: 'Казахстанско-Британский технический университет',
    shortName: 'КБТУ',
    location: 'Алматы',
    description: 'Элитный технический вуз. Лучшие кадры для IT и нефтегазового сектора. Обучение ведется на английском языке. Тесная связь с индустрией (КМГ, Тенгизшевройл).',
    founded: 2001,
    ranking: 6,
    students: 4000,
    tuitionAvg: '2 400 000 – 3 600 000 ₸',
    image: 'https://kbtu.edu.kz/ru/ob-universitete/o-nas',
    logo: 'KBTU',
    mission: 'Подготовка лидеров в сфере технологий и бизнеса.',
    programs: [
      { name: 'Information Systems', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'Petroleum Engineering', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'Management', degree: 'Bachelor', duration: '4 года', language: 'English' }
    ],
    partners: ['UoL (University of London)', 'Harvard Business School (affiliate)'],
    doubleDegree: [
       { partner: 'University of London (UoL)', program: 'Economics & Data Science', country: 'UK' },
       { partner: 'Geneva Business School', program: 'Finance', country: 'CH' }
    ],
    admissionDeadlines: '10.07',
    category: 'Private',
    achievements: ["Аккредитация ABET (единственный в РК по IT)", "Трудоустройство в Big 4, Google, Facebook", "Двойной диплом с LSE"],
    admissionRequirements: ["ЕНТ", "IELTS 5.5+", "Математика (профильный предмет)", "Внутренний экзамен по математике (для гранта)"],
    admissionProcedure: DEFAULTS.procedure,
    scholarships: ["Гранты КБТУ", "Гранты компаний-партнеров (Тенгизшевройл, КазМунайГаз)", "Спортсменские гранты"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://kbtu.edu.kz',
        phone: '+7 (727) 357 42 42',
        email: 'info@kbtu.kz',
        address: 'г. Алматы, ул. Толе би, 59'
    }
  },
  {
    id: 'kimep',
    name: 'Университет КИМЭП',
    shortName: 'KIMEP',
    location: 'Алматы',
    description: 'Ведущий вуз североамериканского образца в СНГ. Специализируется на бизнесе, праве и социальных науках. Обучение полностью на английском языке.',
    founded: 1992,
    ranking: 7,
    students: 3500,
    tuitionAvg: '3 500 000 – 4 200 000 ₸',
    image: 'https://www.kimep.kz/prospective-students/ru/financial-aid/',
    logo: 'KIMEP',
    mission: 'Воспитание образованных граждан и улучшение качества жизни в Казахстане.',
    programs: [
      { name: 'Accounting and Audit', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'Marketing', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'International Relations', degree: 'Bachelor', duration: '4 года', language: 'English' }
    ],
    partners: ['Yonsei', 'Humboldt Univ', 'Glasgow Univ'],
    doubleDegree: [
      { partner: 'Cass Business School', program: 'Marketing', country: 'UK' },
      { partner: 'IÉSEG School of Management', program: 'Management', country: 'FR' }
    ],
    admissionDeadlines: '15.07',
    category: 'Private',
    achievements: ["Лидер бизнес-образования", "Высочайшие зарплаты выпускников в консалтинге", "Аккредитации всех программ"],
    admissionRequirements: ["IELTS 6.0+", "Аттестат", "Внутренний тест KEPT (если нет IELTS)"],
    admissionProcedure: ["Онлайн заявка", "Тестирование KEPT (опционально)", "Интервью"],
    scholarships: ["Гранты президента КИМЭП (100%)", "Need-based financial aid", "Merit-based scholarships"],
    dormitory: true,
    militaryDept: false,
    contacts: {
        website: 'https://kimep.kz',
        phone: '+7 (727) 270 42 13',
        email: 'uao@kimep.kz',
        address: 'г. Алматы, пр. Абая, 2'
    }
  },
  {
    id: 'iitu',
    name: 'Международный университет информационных технологий',
    shortName: 'MUIT',
    location: 'Алматы',
    description: 'Первый специализированный IT-университет в Центральной Азии. Сильная база программирования и кибербезопасности. Активно участвует в чемпионатах по спортивному программированию.',
    founded: 2009,
    ranking: 9,
    students: 5000,
    tuitionAvg: '1 800 000 ₸',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
    logo: 'IITU',
    mission: 'Подготовка квалифицированных IT-специалистов международного уровня.',
    programs: [
      { name: 'Computer Science', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'Software Engineering', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'IT Management', degree: 'Bachelor', duration: '4 года', language: 'English' }
    ],
    partners: ['Carnegie Mellon (partners)', 'iCarnegie'],
    admissionDeadlines: '20.08',
    category: 'Private',
    achievements: ["Аккредитация ASIIN", "Лучшие команды по спортивному программированию (ACM ICPC)", "Трудоустройство 90%+"],
    admissionRequirements: ["ЕНТ (Мат-Инф)", "Собеседование (для внутренних грантов)"],
    admissionProcedure: DEFAULTS.procedure,
    scholarships: ["Гос. гранты", "Гранты спонсоров", "Скидки за отличную учебу"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://iitu.edu.kz',
        phone: '+7 (727) 320 00 00',
        email: 'info@iitu.edu.kz',
        address: 'г. Алматы, ул. Манаса, 34/1'
    }
  },
  {
    id: 'narxoz',
    name: 'Университет Нархоз',
    shortName: 'Narxoz',
    location: 'Алматы',
    description: 'Современный экономический университет, прошедший полную трансформацию. Новый эко-кампус, западные стандарты обучения и фокус на устойчивое развитие.',
    founded: 1963,
    ranking: 13,
    students: 7000,
    tuitionAvg: '1 300 000 – 1 800 000 ₸',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    logo: 'Narxoz',
    mission: 'Вдохновлять на обучение и исследования для устойчивого будущего.',
    programs: [
      { name: 'Экономика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Финансы', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Маркетинг', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' }
    ],
    partners: ['Coventry Univ', 'Penn State'],
    doubleDegree: [
       { partner: 'Coventry University', program: 'Global Business Management', country: 'UK' },
       { partner: 'La Rochelle', program: 'Tourism', country: 'FR' }
    ],
    admissionDeadlines: '25.08',
    category: 'Private',
    achievements: ["FIBAA аккредитация", "QS Stars - 4 звезды", "Лучший 'Зеленый кампус'"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: ["Гранты Нархоза", "Стипендия Булата Утемуратова", "Скидки за IELTS"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://narxoz.kz',
        phone: '+7 (727) 377 11 11',
        email: 'info@narxoz.kz',
        address: 'г. Алматы, ул. Жандосова, 55'
    }
  },
  {
    id: 'almau',
    name: 'Almaty Management University',
    shortName: 'AlmaU',
    location: 'Алматы',
    description: 'Первый предпринимательский вуз Казахстана. Лидер бизнес-образования (MBA, DBA). Фокус на развитии предпринимательского мышления и мягких навыков.',
    founded: 1988,
    ranking: 14,
    students: 4500,
    tuitionAvg: '1 900 000 – 2 200 000 ₸',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    logo: 'AlmaU',
    mission: 'Делаем мир лучше через развитие предпринимательства и знаний.',
    programs: [
      { name: 'Менеджмент', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Предпринимательство', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Ресторанное дело', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['Arizona State University (Cintana)', 'Emlyon'],
    doubleDegree: [
       { partner: 'Arizona State University (ASU)', program: 'Global Management', country: 'USA' },
       { partner: 'Global Business School Barcelona', program: 'BBA', country: 'ES' }
    ],
    admissionDeadlines: '20.08',
    category: 'Private',
    achievements: ["AMBA аккредитация (MBA)", "Стратегическое партнерство с ASU (США)"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: ["Предпринимательские гранты", "Скидки за успеваемость"],
    dormitory: true,
    militaryDept: false,
    contacts: {
        website: 'https://almau.edu.kz',
        phone: '+7 (727) 313 30 90',
        email: 'admission@almau.edu.kz',
        address: 'г. Алматы, ул. Розыбакиева, 227'
    }
  },
  {
    id: 'turan',
    name: 'Университет Туран',
    shortName: 'Turan',
    location: 'Алматы',
    description: 'Инновационно-предпринимательский университет полного цикла (лицей-колледж-вуз-магистратура-PhD). Сильные направления: туризм, кино и ТВ, психология, IT.',
    founded: 1992,
    ranking: 15,
    students: 6000,
    tuitionAvg: '900 000 – 1 100 000 ₸',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    logo: 'Turan',
    mission: 'Создавать возможности для успеха каждого.',
    programs: [
      { name: 'Режиссура', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Туризм', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Психология', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['MSU', 'University of Applied Sciences Europe'],
    admissionDeadlines: '25.08',
    category: 'Private',
    tourUrl: 'https://turan.edu.kz/ru/3dtour/',
    achievements: ["Собственная киностудия", "Apple Training Center", "Лидер в туризме"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: ["Гранты ректора Туран", "Скидки 'Алтын Белгі'"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://turan.edu.kz',
        phone: '+7 (727) 260 40 00',
        email: 'info@turan.edu.kz',
        address: 'г. Алматы, ул. Сатпаева, 16А'
    }
  },
  {
    id: 'aupet',
    name: 'Алматинский университет энергетики и связи им. Г. Даукеева',
    shortName: 'АУЭС',
    location: 'Алматы',
    description: 'Главный вуз энергетиков, связистов и IT-специалистов в области телекоммуникаций. Сложное, но качественное техническое образование. Выпускники востребованы в KEGOC, Казахтелеком.',
    founded: 1975,
    ranking: 16,
    students: 8000,
    tuitionAvg: '950 000 – 1 200 000 ₸',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    logo: 'AUPET',
    mission: 'Подготовка элиты инженерных кадров для цифровой энергетики.',
    programs: [
      { name: 'Теплоэнергетика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Электроэнергетика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Радиотехника и электроника', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['MPEI', 'Schneider Electric'],
    admissionDeadlines: '15.08',
    category: 'State',
    achievements: ["Учебные центры Cisco, Huawei, Schneider Electric", "95% трудоустройство по специальности"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://aues.edu.kz',
        phone: '+7 (727) 323 11 75',
        email: 'aues@aues.kz',
        address: 'г. Алматы, ул. Байтурсынова, 126'
    }
  },
  {
    id: 'atu',
    name: 'Алматинский технологический университет',
    shortName: 'АТУ',
    location: 'Алматы',
    description: 'Лидер в подготовке кадров для пищевой, перерабатывающей и легкой промышленности. Сочетание инженерии, технологий и сервиса.',
    founded: 1957,
    ranking: 30,
    students: 7000,
    tuitionAvg: '800 000 – 1 000 000 ₸',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1200',
    logo: 'ATU',
    mission: 'Технологии качества жизни.',
    programs: [
      { name: 'Технология продовольственных продуктов', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Дизайн одежды', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Ресторанное дело', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['Institut Paul Bocuse'],
    admissionDeadlines: '20.08',
    category: 'State',
    achievements: ["Собственные производственные цеха", "Международные стажировки для технологов"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: false,
    contacts: {
        website: 'https://atu.edu.kz',
        phone: '+7 (727) 293 52 96',
        email: 'info@atu.edu.kz',
        address: 'г. Алматы, ул. Толе би, 100'
    }
  },
  {
    id: 'kazgasa',
    name: 'КазГАСА (Каз. головная арх.-строит. академия)',
    shortName: 'KazGASA',
    location: 'Алматы',
    description: 'Главный архитектурно-строительный вуз Казахстана. Творческая и инженерная элита строительства. Единственный вуз, имеющий международную аккредитацию RIBA.',
    founded: 1980,
    ranking: 20,
    students: 6000,
    tuitionAvg: '1 200 000 – 1 500 000 ₸',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200',
    logo: 'KG',
    mission: 'Строим будущее, сохраняя традиции.',
    programs: [
      { name: 'Архитектура', degree: 'Bachelor', duration: '5 лет', language: 'KZ/RU' },
      { name: 'Дизайн', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Строительство', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['RIBA', 'Politecnico di Milano'],
    admissionDeadlines: '10.07 (Творческие)',
    category: 'Private',
    achievements: ["Аккредитация ЮНЕСКО-МСА", "Золотые медали на архитектурных биеннале"],
    admissionRequirements: [...DEFAULTS.requirements, "Творческие экзамены (Рисунок, Черчение)"],
    admissionProcedure: [
        "Сдача творческих экзаменов в вузе (июль)",
        ...DEFAULTS.procedure.slice(2)
    ],
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://kazgasa.kz',
        phone: '+7 (727) 309 60 00',
        email: 'info@kazgasa.kz',
        address: 'г. Алматы, ул. Рыскулбекова, 28'
    }
  },
  {
    id: 'sdu',
    name: 'SDU University',
    shortName: 'SDU',
    location: 'Каскелен',
    description: 'Современный кампус мирового уровня в пригороде Алматы. Сильные направления: IT, право, педагогика, филология. Обучение преимущественно на английском языке.',
    founded: 1996,
    ranking: 11,
    students: 8000,
    tuitionAvg: '1 500 000 – 2 000 000 ₸',
    image: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=1200',
    logo: 'SDU',
    mission: 'Excellence in education.',
    programs: [
      { name: 'Computer Science', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'Information Systems', degree: 'Bachelor', duration: '4 года', language: 'English' },
      { name: 'Mathematics', degree: 'Bachelor', duration: '4 года', language: 'English' }
    ],
    partners: ['Suleyman Demirel Univ (Turkey)'],
    admissionDeadlines: '20.08',
    category: 'Private',
    achievements: ["Аккредитация ACQUIN", "Топ-3 педагогический вуз", "Высокая репутация в IT"],
    admissionRequirements: ["ЕНТ", "Внутренний экзамен SPT (SDU Proficiency Test) для скидок"],
    admissionProcedure: ["Регистрация на sdu.edu.kz", "Сдача SPT", "Сдача ЕНТ", "Подача документов"],
    scholarships: ["SDU Grants (до 100%) по результатам SPT", "Гос. гранты", "Скидки победителям олимпиад"],
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://sdu.edu.kz',
        phone: '+7 (727) 307 95 65',
        email: 'info@sdu.edu.kz',
        address: 'Алматинская обл., г. Каскелен, ул. Абылай хана, 1/1'
    }
  },
  
  // --- РЕГИОНАЛЬНЫЕ ---
  {
    id: 'karu',
    name: 'Карагандинский университет имени Е.А. Букетова',
    shortName: 'КарУ',
    location: 'Караганда',
    description: 'Один из крупнейших и старейших вузов страны. Классический университет, центр науки и образования Центрального Казахстана.',
    founded: 1938,
    ranking: 17,
    students: 13000,
    tuitionAvg: '600 000 – 900 000 ₸',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1200',
    logo: 'KarU',
    mission: 'Служение науке и образованию во благо общества.',
    programs: [
      { name: 'Физика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Юриспруденция', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Иностранный язык: два иностранных языка', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['Charles Univ', 'Tomsk State Univ'],
    admissionDeadlines: '25.08',
    category: 'State',
    achievements: DEFAULTS.achievements,
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://buketov.edu.kz',
        phone: '+7 (7212) 31 22 43',
        email: 'kargu@ksu.kz',
        address: 'г. Караганда, ул. Университетская, 28'
    }
  },
  {
    id: 'ktu',
    name: 'Карагандинский технический университет им. А. Сагинова',
    shortName: 'КарТУ',
    location: 'Караганда',
    description: '«Политех». Ведущий технический вуз региона. Кузница кадров для горно-металлургической промышленности и машиностроения.',
    founded: 1953,
    ranking: 18,
    students: 10000,
    tuitionAvg: '800 000 – 950 000 ₸',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    logo: 'KTU',
    mission: 'Инновационное развитие через интеграцию образования, науки и производства.',
    programs: [
      { name: 'Горное дело', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Металлургия', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Транспортная техника', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['ArcelorMittal', 'Kazakhmys'],
    admissionDeadlines: '20.08',
    category: 'State',
    achievements: ["Один из лидеров по трудоустройству технарей", "Корпоративный университет"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://kstu.kz',
        phone: '+7 (7212) 56 03 28',
        email: 'kstu@kstu.kz',
        address: 'г. Караганда, пр. Нурсултана Назарбаева, 56'
    }
  },
  {
    id: 'auezov',
    name: 'Южно-Казахстанский университет им. М. Ауэзова',
    shortName: 'SKU',
    location: 'Шымкент',
    description: 'Крупнейший многопрофильный вуз юга страны. Огромный спектр специальностей от химической технологии до искусства и права.',
    founded: 1943,
    ranking: 5,
    students: 28000,
    tuitionAvg: '550 000 – 750 000 ₸',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1200',
    logo: 'Auezov',
    mission: 'Формирование человеческого капитала для инновационного развития Южного региона.',
    programs: [
      { name: 'Химическая технология', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Право', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Информатика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: [],
    admissionDeadlines: '25.08',
    category: 'State',
    achievements: ["Самый большой контингент студентов", "Многопрофильность"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://auezov.edu.kz',
        phone: '+7 (7252) 21 01 41',
        email: 'rector@auezov.edu.kz',
        address: 'г. Шымкент, пр. Тауке хана, 5'
    }
  },
  {
    id: 'yessenov',
    name: 'Yessenov University',
    shortName: 'YU',
    location: 'Актау',
    description: 'Флагман образования Мангистауской области. Специализируется на нефтегазовом деле, морской технике и туризме.',
    founded: 1976,
    ranking: 21,
    students: 6000,
    tuitionAvg: '650 000 – 800 000 ₸',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    logo: 'YU',
    mission: 'Служение региону через развитие человеческого капитала.',
    programs: [
      { name: 'Морская техника и технологии', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Нефтегазовое дело', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['Caspian Offshore'],
    admissionDeadlines: '25.08',
    category: 'State',
    achievements: ["Уникальные морские специальности", "Партнерство с нефтяными гигантами"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://yu.edu.kz',
        phone: '+7 (7292) 42 57 00',
        email: 'info@yu.edu.kz',
        address: 'г. Актау, 32 мкр.'
    }
  },
    {
    id: 'dosmukhamedov',
    name: 'Атырауский университет им. Х. Досмухамедова',
    shortName: 'ASU',
    location: 'Атырау',
    description: 'Главный вуз нефтяной столицы. Педагогика, естественные науки, экономика и журналистика.',
    founded: 1950,
    ranking: 29,
    students: 8000,
    tuitionAvg: '600 000 – 800 000 ₸',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    logo: 'ASU',
    mission: 'Качественное образование для процветания региона.',
    programs: [
      { name: 'Педагогика и методика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' },
      { name: 'Журналистика', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: [],
    admissionDeadlines: '25.08',
    category: 'State',
    achievements: DEFAULTS.achievements,
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://asu.edu.kz',
        phone: '+7 (7122) 27 63 23',
        email: 'kense@asu.edu.kz',
        address: 'г. Атырау, пр. Студенческий, 212'
    }
  },
  {
    id: 'aog',
    name: 'Атырауский университет нефти и газа им. С. Утебаева',
    shortName: 'AOGU',
    location: 'Атырау',
    description: 'Специализированный нефтяной вуз. Единственный профильный университет по подготовке кадров для нефтегазовой отрасли в РК.',
    founded: 1980,
    ranking: 32,
    students: 4000,
    tuitionAvg: '800 000 – 1 200 000 ₸',
    image: 'https://images.unsplash.com/photo-1518391846015-55a3385287d6?auto=format&fit=crop&q=80&w=1200',
    logo: 'AOG',
    mission: 'Индустриальный вуз для нефтегазовой отрасли.',
    programs: [
      { name: 'Геология нефти и газа', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU/EN' },
      { name: 'Бурение нефтяных и газовых скважин', degree: 'Bachelor', duration: '4 года', language: 'KZ/RU' }
    ],
    partners: ['TCO', 'NCOC', 'Schlumberger'],
    admissionDeadlines: '20.08',
    category: 'State',
    achievements: ["Тесные связи с TCO и NCOC", "Современные лаборатории"],
    admissionRequirements: DEFAULTS.requirements,
    admissionProcedure: DEFAULTS.procedure,
    scholarships: DEFAULTS.scholarships,
    dormitory: true,
    militaryDept: true,
    contacts: {
        website: 'https://aogu.edu.kz',
        phone: '+7 (7122) 36 05 06',
        email: 'info@aogu.edu.kz',
        address: 'г. Атырау, мкр. Атырау, 1'
    }
  }
];

export const PROFESSIONS: Profession[] = [
  {
    id: 'backend-dev',
    title: 'Backend Разработчик',
    category: 'IT',
    description: 'Специалист, занимающийся разработкой серверной части веб-приложений, баз данных и API. Отвечает за логику работы сайта, скорость и безопасность данных.',
    salary: { min: 350000, max: 1500000, avg: 650000 },
    demand: 'High',
    skills: ['Python/Java/Go', 'SQL (PostgreSQL)', 'Docker', 'API Design', 'Git'],
    tasks: ['Проектирование архитектуры БД', 'Написание API', 'Оптимизация запросов', 'Настройка серверов'],
    programKeywords: ['Computer Science', 'Software', 'Информационные системы', 'ВТ и ПО']
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'IT',
    description: 'Специалист, который собирает, обрабатывает и интерпретирует данные для помощи бизнесу в принятии решений.',
    salary: { min: 300000, max: 1200000, avg: 550000 },
    demand: 'High',
    skills: ['SQL', 'Python (Pandas)', 'Power BI/Tableau', 'Excel', 'Статистика'],
    tasks: ['Сбор и очистка данных', 'Построение дашбордов', 'A/B тестирование', 'Прогнозирование метрик'],
    programKeywords: ['Big Data', 'Mathematics', 'Анализ данных', 'Статистика', 'Информационные системы']
  },
  {
    id: 'petroleum-eng',
    title: 'Инженер-нефтяник',
    category: 'Engineering',
    description: 'Инженер, занимающийся разработкой и эксплуатацией нефтяных и газовых месторождений. Ключевая профессия для экономики Казахстана.',
    salary: { min: 400000, max: 2000000, avg: 800000 },
    demand: 'Medium',
    skills: ['Геология', 'Гидродинамика', 'English (Technical)', 'Бурение', 'HSE'],
    tasks: ['Проектирование скважин', 'Контроль добычи', 'Анализ пластов', 'Работа на месторождении'],
    programKeywords: ['Petroleum', 'Нефтегазовое дело', 'Геология', 'Бурение']
  },
  {
    id: 'surgeon',
    title: 'Хирург',
    category: 'Medical',
    description: 'Врач-специалист, занимающийся лечением заболеваний путем оперативного вмешательства.',
    salary: { min: 250000, max: 1000000, avg: 450000 },
    demand: 'High',
    skills: ['Анатомия', 'Стрессоустойчивость', 'Мелкая моторика', 'Диагностика'],
    tasks: ['Проведение операций', 'Диагностика пациентов', 'Ведение послеоперационного периода'],
    programKeywords: ['Медицина', 'Общая медицина', 'Лечебное дело']
  },
  {
    id: 'marketer',
    title: 'Digital Маркетолог',
    category: 'Business',
    description: 'Специалист по продвижению товаров и услуг в цифровой среде (соцсети, поисковики, медиа).',
    salary: { min: 200000, max: 800000, avg: 400000 },
    demand: 'High',
    skills: ['SMM', 'SEO', 'Targeting', 'Copywriting', 'Analytics'],
    tasks: ['Запуск рекламных кампаний', 'Анализ рынка', 'Ведение соцсетей', 'Создание контент-плана'],
    programKeywords: ['Marketing', 'Маркетинг', 'Management', 'Менеджмент']
  },
  {
    id: 'architect',
    title: 'Архитектор',
    category: 'Creative',
    description: 'Специалист, проектирующий здания, интерьеры и городские пространства.',
    salary: { min: 250000, max: 900000, avg: 420000 },
    demand: 'Medium',
    skills: ['AutoCAD/Revit', '3ds Max', 'Композиция', 'Знание СНиПов'],
    tasks: ['Разработка чертежей', '3D визуализация', 'Авторский надзор', 'Согласование проектов'],
    programKeywords: ['Архитектура', 'Дизайн', 'Architecture']
  },
  {
    id: 'accountant',
    title: 'Бухгалтер',
    category: 'Finance',
    description: 'Специалист по финансовому учету, налогам и отчетности компании.',
    salary: { min: 180000, max: 600000, avg: 300000 },
    demand: 'High',
    skills: ['1C', 'Налоговый кодекс', 'Excel', 'Аудит', 'Внимательность'],
    tasks: ['Ведение учета', 'Сдача налоговой отчетности', 'Расчет зарплат', 'Работа с контрагентами'],
    programKeywords: ['Accounting', 'Учет и аудит', 'Finance', 'Финансы']
  },
  {
    id: 'teacher-math',
    title: 'Учитель математики',
    category: 'Education',
    description: 'Педагог, преподающий математику в школах, колледжах или учебных центрах.',
    salary: { min: 200000, max: 500000, avg: 320000 },
    demand: 'High',
    skills: ['Педагогика', 'Математика', 'Психология', 'Методика преподавания'],
    tasks: ['Проведение уроков', 'Подготовка к ЕНТ/Олимпиадам', 'Проверка работ'],
    programKeywords: ['Mathematics', 'Математика', 'Педагогика']
  },
  {
    id: 'agronomist',
    title: 'Агроном',
    category: 'Agriculture',
    description: 'Специалист сельского хозяйства, занимающийся выращиванием растений и повышением урожайности.',
    salary: { min: 250000, max: 700000, avg: 380000 },
    demand: 'Medium',
    skills: ['Биология', 'Химия', 'Почвоведение', 'Технологии полива'],
    tasks: ['Планирование посевов', 'Защита растений', 'Контроль сбора урожая'],
    programKeywords: ['Агрономия', 'Биотехнология']
  },
  {
    id: 'electrician',
    title: 'Инженер-энергетик',
    category: 'Engineering',
    description: 'Инженер, отвечающий за проектирование, монтаж и эксплуатацию систем электроснабжения.',
    salary: { min: 300000, max: 800000, avg: 450000 },
    demand: 'High',
    skills: ['Электротехника', 'AutoCAD', 'ПБ и ОТ', 'Схемотехника'],
    tasks: ['Проектирование сетей', 'Обслуживание оборудования', 'Энергоаудит'],
    programKeywords: ['Электроэнергетика', 'Теплоэнергетика', 'Power Engineering']
  }
];

export const FEATURES_DATA = [
  { id: 1, title: 'Об университете', desc: 'Миссия, история, лидерство', icon: 'BookOpen' },
  { id: 2, title: 'Академ. программы', desc: 'Перечень специальностей и курсов', icon: 'GraduationCap' },
  { id: 3, title: 'Приём и поступление', desc: 'Требования, сроки, гранты', icon: 'FileCheck' },
  { id: 4, title: '3D-тур', desc: 'Виртуальное путешествие по кампусу', icon: 'Box' },
  { id: 5, title: 'Международное сотрудничество', desc: 'Обмен, партнеры, стажировки', icon: 'Globe2' },
  { id: 6, title: 'Функция сравнения', desc: 'Анализ и сравнение вузов', icon: 'GitCompare' },
];
