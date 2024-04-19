const { Router } = require("express");
const p5Table = require("../../p5/table");
const p12Table = require("../../p12/table");
// const TasksTable = require("../../todo-tasks/table");
// const { authenticated } = require("./helper");

const router = new Router();

const p1 = [
  [
    "Д.д",
    "Нэр",
    "Үндсэн цалин",
    "Ажилбал зохих цаг",
    "Ажилласан цаг",
    "Тооцсон",
    "НДШ",
    "Татвар тооцох орлого",
    "ХАОАТ",
    "Урьдчилгаа",
    "Нийт олгох",
    "Байгууллагаас олгох НДШ",
  ],
  [
    1,
    "Б.Уу",
    6000000.0,
    160,
    145,
    5437500.0,
    320000.0,
    5117500.0,
    511750.0,
    2400000.0,
    2205750.0,
    679688,
  ],
  [
    2,
    "П.Ун",
    4500000.0,
    160,
    156,
    4387500.0,
    320000.0,
    4067500.0,
    406750.0,
    1800000.0,
    1860750.0,
    548438,
  ],
  [
    3,
    "Э.Гэ",
    3500000.0,
    160,
    146,
    3193750.0,
    320000.0,
    2873750.0,
    275708.33,
    null,
    2598041.67,
    399219,
  ],
  [
    4,
    "Т.Со",
    3000000.0,
    160,
    155,
    2906250.0,
    320000.0,
    2586250.0,
    246958.33,
    1200000.0,
    1139291.67,
    363281,
  ],
  [
    5,
    "Б.Ба",
    2500000.0,
    160,
    156,
    2437500.0,
    280312.5,
    2157187.5,
    202385.42,
    1000000.0,
    954802.08,
    304688,
  ],
  [
    6,
    "Г.Ху",
    2000000.0,
    160,
    138,
    1725000.0,
    198375.0,
    1526625.0,
    137662.5,
    800000.0,
    588962.5,
    215625,
  ],
  [
    7,
    "О.Дү",
    1500000.0,
    160,
    152,
    1425000.0,
    163875.0,
    1261125.0,
    109445.83,
    600000.0,
    551679.17,
    178125,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    21512500.0,
    1922562.5,
    19589937.5,
    1890660.41,
    7800000.0,
    9899277.09,
    2689062.5,
    null,
  ],
  [
    8,
    "Г.Га",
    1000000.0,
    160,
    153,
    956250.0,
    109968.75,
    846281.25,
    66294.8,
    400000.0,
    379986.46,
    119531,
  ],
  [
    9,
    "К.Од",
    900000.0,
    160,
    138,
    776250.0,
    89268.75,
    686981.25,
    50364.8,
    360000.0,
    276616.46,
    97031,
  ],
  [
    10,
    "Д.Дэ",
    831739.0,
    160,
    141,
    732969.99,
    84291.55,
    648678.44,
    46534.51,
    332695.6,
    269448.33,
    91621,
  ],
  [
    11,
    "Д.Ба",
    750000.0,
    160,
    155,
    726562.5,
    83554.69,
    643007.81,
    45967.45,
    375000.0,
    222040.36,
    90820,
  ],
  [
    12,
    "Б.Мө",
    700000.0,
    160,
    134,
    586250.0,
    67418.75,
    518831.25,
    33549.8,
    null,
    485281.46,
    73281,
  ],
  [
    13,
    "О.Со",
    600000.0,
    160,
    139,
    521250.0,
    59943.75,
    461306.25,
    26130.63,
    240000.0,
    195175.63,
    65156,
  ],
  [
    14,
    "Д.Мө",
    561798.75,
    160,
    143,
    502107.63,
    57742.38,
    444365.26,
    24436.53,
    224719.5,
    195209.23,
    62763,
  ],
  [
    15,
    "М.Ня",
    350000.0,
    160,
    144,
    315000.0,
    36225.0,
    278775.0,
    7877.5,
    140000.0,
    130897.5,
    39375,
  ],
  [
    16,
    "Б.Цо",
    300000.0,
    160,
    151,
    283125.0,
    32559.38,
    250565.63,
    5056.56,
    null,
    245509.06,
    35391,
  ],
  [
    17,
    "О.Уу",
    225989.0,
    160,
    160,
    225989.0,
    25988.74,
    200000.27,
    0.03,
    90395.6,
    109604.64,
    28249,
  ],
  [
    18,
    "Т.Ха",
    150000.0,
    160,
    130,
    121875.0,
    14015.63,
    107859.38,
    0.0,
    60000.0,
    47859.38,
    15234,
  ],
  [
    19,
    "А.Мө",
    100000.0,
    160,
    135,
    84375.0,
    9703.13,
    74671.88,
    0.0,
    40000.0,
    34671.88,
    10547,
  ],
  [
    20,
    "Б.Мө",
    50000.0,
    160,
    135,
    42187.5,
    4851.56,
    37335.94,
    0.0,
    20000.0,
    17335.94,
    5273,
  ],
  [
    null,
    null,
    5874191.63,
    675532.04,
    5198659.59,
    306212.59,
    2282810.7,
    2609636.3,
    734273.95,
  ],
];

const p2 = [
  [
    "БАРАА МАТЕРИАЛЫН ТАЙЛАН",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  ["2019 он", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "Дансны дугаар",
    "",
    "150101",
    "",
    "",
    "",
    "",
    "Эд хариуцагчийн код",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "Дансны нэр",
    "",
    "Бараа материал",
    "",
    "",
    "",
    "",
    "Агуулахын нэр,№",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "№",
    "Бараа материалын код",
    "Бараа, материалын үнэт зүйлийн нэр, зэрэг, дугаар",
    "Хэмжих нэгж",
    "Огноо",
    "Орлого",
    "",
    "",
    "Зарлага",
    "",
    "",
    "Үлдэгдэл",
  ],
  [
    2,
    "",
    "",
    "",
    "",
    "Тоо",
    "Үнэ",
    "Нийт",
    "Тоо",
    "Н.Өртөг",
    "Нийт",
    "Тоо",
    "Н.Өртөг",
    "Нийт",
  ],
  [
    2,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/3",
    "",
    "",
    0,
    400,
    340,
    136000,
    100,
    340,
    34000,
    204000,
  ],
  [
    5,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/8",
    "",
    "",
    0,
    2000,
    355,
    710769,
    600,
    355,
    213231,
    1066153.846,
  ],
  [
    6,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/9",
    "",
    "",
    0,
    50,
    355,
    17769,
    550,
    355,
    195462,
    26653.84615,
  ],
  [
    7,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/9",
    "",
    "",
    0,
    40,
    355,
    14215,
    510,
    355,
    181246,
    21323.07692,
  ],
  [
    8,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/9",
    "",
    "",
    0,
    30,
    355,
    10662,
    480,
    355,
    170585,
    15992.30769,
  ],
  [
    10,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/10",
    "",
    "",
    0,
    300,
    361,
    108218,
    780,
    360,
    281367,
    162326.9231,
  ],
  [11, "", "", "", "", "", "", ""],
  [12, "", "", "", "", "", "", ""],
  [13, "", "", "", "", "", "", ""],
  [14, "", "", "", "", "", "", ""],
  [15, "", "", "", "", "", "", ""],
  [16, "", "", "", "", "", "", ""],
  [17, "", "", "", "", "", "", ""],
  [18, "", "", "", "", "", "", ""],
  [19, "", "", "", "", "", "", ""],
  [20, "", "", "", "", "", "", ""],
  ["", "", "Дүн", "", "", "", "", ""],
];

const p3 = [
  [
    "№",
    "Эд хөрөнгийн нэр",
    "Огноо",
    "Элэгдэл байгуулах жил",
    "Хэмжих нэгж",
    "Тоо ширхэг",
    "Үнэ",
    "Хөрөнгийн өртөг",
    "2019 оны элэгдэл",
    "",
    "",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "Нэг бүрийн",
    "Бүгд",
    "Тооцож эхлэх огноо",
    "Тооцоолол дуусах огноо",
    "Байгуулсан элэгдэл",
  ],
  ["а", "б", "", "1", "2", "3", "4", "5", "", "", "", "", ""],
  [
    "1",
    "Барилга",
    "7/1/2019",
    "25",
    "ком",
    "1",
    "  125,000,000.0 ",
    "  125,000,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  2,506,849.32 ",
  ],
  [
    "2",
    "Тоног төхөөрөмж",
    "7/1/2019",
    "5",
    "ком",
    "1",
    "  74,000,000.0  ",
    "  74,000,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  7,420,273.97 ",
  ],
  [
    "3",
    "Компьютер",
    "7/1/2019",
    "5",
    "ком",
    "1",
    "  4,207,600.0 ",
    "  4,207,600.0  ",
    "7/1/2019",
    "12/31/2019",
    "  1,054,781.92 ",
  ],
  [
    "4",
    "Тавилга эд хогшил",
    "7/1/2019",
    "5",
    "ком",
    "1",
    "  6,258,000.0 ",
    "  6,258,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  627,514.52 ",
  ],
  [
    "5",
    "Тээврийн хэрэгсэл",
    "7/1/2019",
    "10",
    "ком",
    "1",
    "  13,000,000.0 ",
    "  13,000,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  651,780.82 ",
  ],
  ["", "", "", "", "", "", "  222,465,600.0 ", "", "", "", "  12,261,200.55  "],
];

const p4 = [
  ["Guilgeenii dugaar", "Debit dans", "Credit dans", "Ognoo", "Dun"],
  [1, "Mungun hurungu", "Banknii zeel", "1/1/2021", 1500000],
  [2, "Avlaga", "Bor.orlogo", "1/1/2021", 500000],
];

const p5 = [];

const p6 = [
  [
    "Дансны дугаар",
    "Дансны нэр",
    "Эхний үлдэгдэл",
    "",
    "Гүйлгээ",
    "",
    "Эцсийн үлдэгдэл",
    "",
    "СТ-ын мөр",
    "C2",
    "ТТ02 мөр",
  ],
  ["", "", "D", "C", "D", "C", "D", "C", "D", "C", "", "", ""],
  [
    "",
    "",
    "1,000,000,000",
    "1,000,000,000",
    "314,958,996",
    "314,087,769",
    "35,958,996",
    "-",
    "",
  ],
  [
    "1001",
    "Касс",
    "1,000,000,000",
    "",
    "1,496,450",
    "245,057,324",
    "-",
    "-",
    "Мөнгө, түүнтэй адилтгах хөрөнгө",
    "-",
  ],
  [
    "1103",
    "Банкны данс",
    "",
    "-",
    "-",
    "3,000",
    "-",
    "-",
    "Мөнгө, түүнтэй адилтгах хөрөнгө",
    "-",
  ],
  ["1201", "авлага", "", "", "10,000", "-", "-", "-", "Дансны авлага", "-"],
  [
    "1501",
    "Бараа мат",
    "",
    "-",
    "-",
    "997,633",
    "-",
    "-",
    "Бараа материал",
    "-",
  ],
  [
    "1502",
    "Түүхий эд материал",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Бараа материал",
    "-",
  ],
  [
    "1503",
    "Дуусаагүй үйлдвэрлэл",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Бараа материал",
    "-",
  ],
  [
    "1504",
    "Бэлэн бүтээгдэхүүн",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Бараа материал",
    "-",
  ],
  ["1599", "ҮНЗ", "", "-", "-", "-", "-", "-", "-", "-"],
  [
    "2001",
    "Үндсэн хөр.",
    "",
    "",
    "222,465,600",
    "-",
    "-",
    "-",
    "Үндсэн хөрөнгө",
    "-",
  ],
  [
    "2010",
    "Үх-н хур.эл.",
    "",
    "-",
    "",
    "12,261,201",
    "-",
    "-",
    "Үндсэн хөрөнгө",
    "-",
  ],
  [
    "2002",
    "Биет бус хөрөнгө",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Биет бус хөрөнгө",
    "-",
  ],
  [
    "2020",
    "ББХ-н хур.эл.",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Биет бус хөрөнгө",
    "-",
  ],
  ["3101", "Өглөг", "", "-", "-", "-", "-", "-", "Дансны өглөг", "-"],
  [
    "3103",
    "хаоат өглөг",
    "",
    "-",
    "",
    "2,196,873",
    "-",
    "-",
    "Татварын өглөг",
    "-",
  ],
  [
    "3104",
    "Түрээсийн өглөг",
    "",
    "-",
    "",
    "2,000",
    "-",
    "-",
    "Дансны өглөг",
    "-",
  ],
  ["3105", "НӨАТ-ын өглөг", "", "-", "-", "-", "-", "-", "Татварын өглөг", "-"],
  [
    "3106",
    "ндш өглөг",
    "",
    "-",
    "",
    "6,021,431",
    "-",
    "-",
    "Татварын өглөг",
    "-",
  ],
  ["3109", "ааноат", "", "-", "", "50", "-", "-", "Татварын өглөг", "-"],
  [
    "3110",
    "Банкны зээл",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Урт хугацаат зээл",
    "-",
  ],
  [
    "3107",
    "Урьдчилж орсон орлого",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Урьдчилж орсон орлого",
    "-",
  ],
  [
    "3111",
    "Бусад өглөг",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Бусад богино хугацаат өр төлбөр",
    "-",
  ],
  [
    "4101",
    "эз. Өмч",
    "",
    "1,000,000,000",
    "-",
    "-",
    "-",
    "-",
    "б) хувийн",
    "-",
  ],
  [
    "4201",
    "хур. ашиг",
    "",
    "-",
    "35,958,996",
    "",
    "35,958,996",
    "-",
    "Хуримтлагдсан ашиг",
    "(35,958,996)",
  ],
  [
    "5101",
    "Брлт орлого",
    "",
    "-",
    "",
    "1,506,450",
    "-",
    "-",
    "Борлуулалтын орлого (цэвэр)",
    "-",
  ],
  ["5102", "хүүгийн орлого", "", "-", "-", "-", "-", "-", "Хүүний орлого", "-"],
  [
    "8101",
    "ханшны зөрүү",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Гадаад валютын ханшийн зөрүүний олз (гарз)",
    "-",
  ],
  ["6101", "ББӨ", "", "-", "997,633", "-", "", "-", "Борлуулалтын өртөг", "-"],
  [
    "7001",
    "Цалин зардал (Уд)",
    "",
    "-",
    "21,512,500",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7002",
    "Цалин зардал (Бор)",
    "",
    "-",
    "5,874,192",
    "-",
    "-",
    "-",
    "Борлуулалт, маркетингийн зардал",
    "-",
  ],
  [
    "7011",
    "НДШ зардал (Уд)",
    "",
    "-",
    "2,689,063",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7012",
    "НДШ зардал (Бор)",
    "",
    "-",
    "734,274",
    "-",
    "-",
    "-",
    "Борлуулалт, маркетингийн зардал",
    "-",
  ],
  [
    "7031",
    "Ашиглалтын зардал",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7022",
    "түрээс",
    "",
    "-",
    "5,000",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7003",
    "Бичиг хэрэг, холбоо",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7004",
    "засвар үйлчилгээ",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Бусад зардал",
    "-",
  ],
  [
    "7005",
    "элэгдэл",
    "",
    "-",
    "12,261,201",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7006",
    "тээврийн зардал аж ахуйн",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Ерөнхий ба удирдлагын зардал",
    "-",
  ],
  [
    "7009",
    "Хүүгийн зардал",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Санхүүгийн зардал",
    "-",
  ],
  ["7007", "бусад", "", "-", "-", "-", "-", "-", "Бусад зардал", "-"],
  [
    "7013",
    "Татварын зардал",
    "",
    "-",
    "50",
    "-",
    "-",
    "-",
    "Орлогын татварын зардал",
    "-",
  ],
  [
    "7008",
    "томилолт, тээвэр",
    "",
    "-",
    "-",
    "-",
    "-",
    "-",
    "Борлуулалт, маркетингийн зардал",
    "-",
  ],
  [
    "9002",
    "Цалингийн тооцоо",
    "",
    "10,082,811",
    "10,082,811",
    "-",
    "-",
    "-",
    "-",
    "-",
  ],
  ["9001", "OZND", "", "", "35,958,996", "-", "-", "-", "-", "-"],
  ["", "#N/A"],
  ["", "#N/A"],
];

const p7 = [
  ["Д/д", "Дүн", "Дебит / Кредит", ""],
  [1, 10000, 10000, "-"],
  [2, 5000, 5000, "-"],
  [3, 50, 50, "-"],
  [4, 35958996, 35958996, "-"],
  [5, 10082811, 10082811, "-"],
  [6, 27386692, 27386692, "-"],
  [7, 3423336, 3423336, "-"],
  ["COST IMPORT1", 136000, 136000, "-"],
  ["COST IMPORT2", 710769, 710769, "-"],
  ["COST IMPORT3", 17769, 17769, "-"],
  ["COST IMPORT4", 14215, 14215, "-"],
  ["COST IMPORT5", 10662, 10662, "-"],
  ["COST IMPORT6", 108218, 108218, "-"],
  ["FA1", 222465600, 222465600, "-"],
  ["FA2", 12261201, 12261201, "-"],
  ["SALES1", 204000, 204000, "-"],
  ["SALES2", 1066154, 1066154, "-"],
  ["SALES3", 26654, 26654, "-"],
  ["SALES4", 21323, 21323, "-"],
  ["SALES5", 15992, 15992, "-"],
];

const p8 = [
  ["САНХҮҮГИЙН БАЙДЛЫН ТАЙЛАН", "", "", "", ""],
  ["( Аж ахуйн нэгж, байгууллагын нэр )", "", "", "", ""],
  [
    "Мөрийн дугаар",
    "Үзүүлэлт",
    "2016 оны 12-р сарын 31",
    "2017 оны 06-р сарын 30",
    "",
  ],
  ["1", "ХӨРӨНГӨ", "", "", ""],
  ["1.1", "Эргэлтийн хөрөнгө", "", "", ""],
  ["1.1.1", "Мөнгө, түүнтэй адилтгах хөрөнгө", "1,000,000", "", "756,446,126"],
  ["1.1.2", "Дансны авлага		", "", "", ""],
  ["1.1.3		", "Татвар, НДШ-ийн авлага		", "", "", ""],
  ["1.1.4		", "Бусад авлага		", "", "", ""],
  ["1.1.5		", "Бусад санхүүгийн хөрөнгө		", "", "", ""],
  ["1.1.6		", "Бараа материал		", "", "", ""],
  ["1.1.7		", "Урьдчилж төлсөн зардал/тооцоо		", "", "", ""],
  ["1.1.8		", "Бусад эргэлтийн хөрөнгө		", "", "", ""],
  [
    "1.1.9		",
    "Борлуулах зорилгоор эзэмшиж буй эргэлтийн бус хөрөнгө (борлуулах бүлэг хөрөнгө)		",
    "",
    "",
    "",
  ],
  ["1.1.10		", "", "", "", ""],
  ["1.1.11		", "Эргэлтийн хөрөнгийн дүн		", "  1,000,000 	", "", ""],
  ["1.2		", "     Эргэлтийн бус хөрөнгө		", "", "", ""],
  ["1.2.1		", "Үндсэн хөрөнгө		", "", "", ""],
  ["1.2.2		", "Биет бус хөрөнгө		", "", "", ""],
  ["1.2.3		", "Биологийн хөрөнгө		", "", "", ""],
  ["1.2.4		", "Урт хугацаат хөрөнгө оруулалт		", "", "", ""],
  ["1.2.5		", "Хайгуул ба үнэлгээний хөрөнгө		", "", "", ""],
  ["1.2.6		", "Хойшлогдсон татварын хөрөнгө		", "", "", ""],
  ["1.2.7		", "Хөрөнгө оруулалтын зориулалттай үл хөдлөх хөрөнгө		", "", "", ""],
  ["1.2.8		", "Бусад эргэлтийн бус хөрөнгө		", "", "", ""],
  ["1.2.9		", "", "", "", ""],
  ["1.2.10		", "Эргэлтийн бус хөрөнгийн дүн		", "", "", ""],
  ["1.3		", "НИЙТ ХӨРӨНГИЙН ДҮН		", "  1,000,000 	", "", ""],
  ["2		", "ӨР ТӨЛБӨР БА ЭЗДИЙН ӨМЧ		", "", "", ""],
  ["2.1		", "     ӨР ТӨЛБӨР		", "", "", ""],
  ["2.1.1		", "     Богино хугацаат өр төлбөр		", "", "", ""],
  ["2.1.1.1		", "Дансны өглөг		", "", "", ""],
  ["2.1.1.2		", "Цалингийн өглөг		", "", "", ""],
  ["2.1.1.3		", "Татварын өглөг		", "", "", ""],
  ["2.1.1.4		", "НДШ-ийн өглөг		", "", "", ""],
  ["2.1.1.5		", "Богино хугацаат зээл		", "", "", ""],
  ["2.1.1.6		", "Хүүний өглөг		", "", "", ""],
  ["2.1.1.7		", "Ногдол ашгийн өглөг		", "", "", ""],
  ["2.1.1.8		", "Урьдчилж орсон орлого		", "", "", ""],
  ["2.1.1.9		", "Нөөц /өр төлбөр/		", "", "", ""],
  ["2.1.1.10		", "Бусад богино хугацаат өр төлбөр		", "", "", ""],
  [
    "2.1.1.11		",
    "Борлуулах зорилгоор эзэмшиж буй эргэлтийн бус хөрөнгө (борлуулах бүлэг хөрөнгө)-нд хамаарах өр төлбөр		",
    "",
    "",
    "",
  ],
  ["2.1.1.13		", "Богино хугацаат өр төлбөрийн дүн		", "", "", ""],
  ["2.1.2		", "     Урт хугацаат өр төлбөр		", "", "", ""],
  ["2.1.2.1		", "Урт хугацаат зээл		", "", "", ""],
  ["2.1.2.2		", "Нөөц /өр төлбөр/		", "", "", ""],
  ["2.1.2.3		", "Хойшлогдсон татварын өр		", "", "", ""],
  ["2.1.2.4		", "Бусад урт хугацаат өр төлбөр		", "", "", ""],
  ["2.1.2.5		", "", "", "", ""],
  ["2.1.2.6		", "Урт хугацаат өр төлбөрийн дүн		", "", "", ""],
  ["2.2		", "ӨР ТӨЛБӨРИЙН НИЙТ ДҮН		", "", "", ""],
  ["2.3		", "     ЭЗДИЙН ӨМЧ		", "", "", ""],
  ["2.3.1		", "Өмч: а) төрийн		", "", "", ""],
  ["2.3.2		", "         б) хувийн		", "  1,000,000 	", "", ""],
  ["2.3.3		", "         в) хувьцаат		", "", "", ""],
  ["2.3.4		", "Халаасны хувьцаа		", "", "", ""],
  ["2.3.5		", "Нэмж төлөгдсөн капитал		", "", "", ""],
  ["2.3.6		", "Хөрөнгийн дахин үнэлгээний нэмэгдэл		", "", "", ""],
  ["2.3.7		", "Гадаад валютын хөрвүүлэлтийн нөөц		", "", "", ""],
  ["2.3.8		", "Эздийн өмчийн бусад хэсэг		", "", "", ""],
  ["2.3.9		", "Хуримтлагдсан ашиг		", "", "", "- 35,958,996 "],
  ["2.3.10		", "", "", "", ""],
  ["2.3.11		", "ЭЗДИЙН ӨМЧИЙН ДҮН		", "  1,000,000 	", "- 35,958,996 ", ""],
  [
    "2.4		",
    "ӨР ТӨЛБӨР БА ЭЗДИЙН ӨМЧИЙН ДҮН		",
    "  1,000,000 	",
    "- 35,958,996 ",
    "",
  ],
  ["", "", "", "", "- 35,958,996.4 "],
  ["", "Захирал :			", "", "", ""],
  ["", "Ерөнхий нягтлан бодогч :			", "", "", ""],
];

const p9 = [
  ["", "", "ОРЛОГЫН ДЭЛГЭРЭНГҮЙ ТАЙЛАН", "", ""],
  ["( Аж ахуйн нэгж, байгууллагын нэр )", "", "", "", ""],
  [
    "Мөрийн дугаар",
    "ҮЗҮҮЛЭЛТ",
    "2016 оны 12-р сарын 31",
    "2017 оны 06-р сарын 30",
  ],
  ["1", "Борлуулалтын орлого (цэвэр)", "", "-"],
  ["2", "Борлуулалтын өртөг", "", "-"],
  ["3", "Нийт ашиг ( алдагдал )", "-", "-"],
  ["4", "Түрээсийн орлого", "", "-"],
  ["5", "Хүүний орлого", "", "-"],
  ["6", "Ногдол ашгийн орлого", "", "-"],
  ["7", "Эрхийн шимтгэлийн орлого", "", "-"],
  ["8", "Бусад орлого", "", "-"],
  ["9", "Борлуулалт, маркетингийн зардал", "", "-"],
  ["10", "Ерөнхий ба удирдлагын зардал", "", "-"],
  ["11", "Санхүүгийн зардал", "", "-"],
  ["12", "Бусад зардал", "", "-"],
  ["13", "Гадаад валютын ханшийн зөрүүний олз (гарз)", "", "-"],
  ["14", "Үндсэн хөрөнгө данснаас хассаны олз (гарз)", "", "-"],
  ["15", "Биет бус хөрөнгө данснаас хассаны олз (гарз)", "", "-"],
  ["16", "Хөрөнгө оруулалт борлуулснаас үүссэн олз (гарз)", "", "-"],
  ["17", "Бусад ашиг ( алдагдал )", "", "-"],
  ["18", "Татвар төлөхийн өмнөх ашиг ( алдагдал )", "-", "-"],
  ["19", "Орлогын татварын зардал", "", "-"],
  ["20", "Татварын дараах ашиг ( алдагдал )", "-", "-"],
  [
    "21",
    "Зогсоосон үйл ажиллагааны татварын дараах ашиг ( алдагдал )",
    "",
    "-",
  ],
  ["22", "Тайлант үеийн цэвэр ашиг ( алдагдал )", "-", "-"],
  ["23", "Бусад дэлгэрэнгүй орлого", "", "-"],
  ["", "Хөрөнгийн дахин үнэлгээний нэмэгдлийн зөрүү", "", "-"],
  ["", "Гадаад валютын хөрвүүлэлтийн зөрүү", "", "-"],
  ["", "Бусад олз (гарз)", "", "-"],
  ["24", "Орлогын нийт дүн", "", "-"],
  ["25", "Нэгж хувьцаанд ногдох суурь ашиг ( алдагдал )", "", "-"],
];

const p10 = [
  ["ӨМЧИЙН ӨӨРЧЛӨЛТИЙН ТАЙЛАН", "", "", "", "", "", "", "", "", ""],
  ["( Аж ахуйн нэгж, байгууллагын нэр )", "", "", "", "", "", "", "", "", ""],
  [
    "№",
    "Үзүүлэлт",
    "Өмч",
    "Халаасны хувьцаа",
    "Нэмж төлөгдсөн капитал",
    "Хөрөнгийн дахин үнэлгээний нэмэгдэл",
    "Гадаад валютын хөрвүүлэлтийн нөөц",
    "Эздийн өмчийн бусад хэсэг",
    "Хуримтлагдсан ашиг",
    "Нийт дүн",
  ],
  ["1", "20.. оны 01-р сарын 01-ний үлдэгдэл", "", "", "", "", "", "", "", ""],
  [
    "2",
    "Нягтлан бодох бүртгэлийн бодлогын өөрчлөлтийн нөлөө, алдааны залруулга",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  ["3", "Залруулсан үлдэгдэл", "", "", "", "", "", "", "", ""],
  ["4", "Тайлант үеийн цэвэр ашиг (алдагдал)", "", "", "", "", "", "", "", ""],
  ["5", "Бусад дэлгэрэнгүй орлого", "", "", "", "", "", "", "", ""],
  ["6", "Өмчид гарсан өөрчлөлт", "", "", "", "", "", "", "", ""],
  ["7", "Зарласан ногдол ашиг", "", "", "", "", "", "", "", ""],
  [
    "8",
    "Дахин үнэлгээний нэмэгдлийн хэрэгжсэн дүн",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  ["9", "20.. оны 12-р сарын 31-ний үлдэгдэл", "", "", "", "", "", "", "", ""],

  ["", "Захирал :			", "", "", ""],
  ["", "Ерөнхий нягтлан бодогч :			", "", "", ""],
];

const p11 = [
  ["МӨНГӨН ГҮЙЛГЭЭНИЙ ТАЙЛАН", "", "", "", "", ""],
  ["( Аж ахуйн нэгж, байгууллагын нэр )", "", "", "", "", ""],
  [
    "Мөрийн дугаар",
    "Үзүүлэлт",
    "",
    "",
    "2016 оны 12-р сарын 31",
    "2017 оны 06-р сарын 30",
  ],
  ["1", "Үндсэн үйл ажиллагааны мөнгөн гүйлгээ", "", "", "", ""],
  ["1.1", "Мөнгөн орлогын дүн (+)", "", "", "", "1,506,450.00"],
  [
    "1.1.1",
    "Бараа борлуулсан, үйлчилгээ үзүүлсний орлого",
    "",
    "",
    "",
    "1,506,450.00",
  ],
  ["1.1.2", "Эрхийн шимтгэл, хураамж, төлбөрийн орлого", "", "", "", ""],
  ["1.1.3		", "Даатгалын нөхвөрөөс хүлээн авсан мөнгө", "", "", "", ""],
  ["1.1.4		", "Буцаан авсан албан татвар", "", "", "", ""],
  ["1.1.5		", "Татаас, санхүүжилтийн орлого", "", "", "", ""],
  ["1.1.6		", "Бусад мөнгөн орлого", "", "", "", ""],
  ["1.2		", "Мөнгөн зарлагын дүн (-)", "", "", "", "22,594,724.09"],
  ["1.2.1		", "Ажиллагчдад төлсөн", "", "", "", "22,591,724.09"],
  ["1.2.2		", "Нийгмийн даатгалын байгууллагад төлсөн", "", "", "", ""],
  ["1.2.3		", "Бараа материал худалдан авахад төлсөн", "", "", "", ""],
  ["1.2.4		", "Ашиглалтын зардалд төлсөн", "", "", "", "3,000.00"],
  [
    "1.2.5		",
    "Түлш шатахуун, тээврийн хөлс, сэлбэг хэрэгсэлд төлсөн",
    "",
    "",
    "",
    "",
  ],
  ["1.2.6		", "Хүүний төлбөрт төлсөн", "", "", "", ""],
  ["1.2.7		", "Татварын байгууллагад төлсөн", "", "", "", ""],
  ["1.2.8		", "Даатгалын төлбөрт төлсөн", "", "", "", ""],
  ["1.2.9		", "Бусад мөнгөн зарлага", "", "", ""],
  ["1.3		", "Хайгуул ба үнэлгээний хөрөнгө		", "", "", ""],
  ["2.1		", "Мөнгөн орлогын дүн (+)", "", "", "", ""],
  ["2.1.1		", "Үндсэн хөрөнгө борлуулсны орлого", "", "", "", ""],
  ["2.1.2	", "Биет бус хөрөнгө борлуулсны орлого", "", "", "", ""],
  ["2.1.3", "Хөрөнгө оруулалт борлуулсны орлого", "", "", "", "", ""],
  ["2.1.4", "Бусад урт хугацаат хөрөнгө борлуулсны орлого", "", "", "", "", ""],
  [
    "2.1.5",
    "Бусдад олгосон зээл, мөнгөн урьдчилгааны буцаан төлөлт",
    "",
    "",
    "",
    "",
    "",
  ],
  ["2.1.6	", "Хүлээн авсан хүүгийн орлого", "", "", "", ""],
  ["2.1.7	", "Хүлээн авсан ноогдол ашиг", "", "", "", ""],
  ["2.1.8	", "", "", "", "", ""],
  ["2.2		", "Мөнгөн зарлагын дүн (-)", "", "", "", ""],
  [
    "2.2.1		",
    "Үндсэн хөрөнгө олж эзэмшихэд төлсөн",
    "",
    "",
    "",
    "222,465,600.00",
  ],
  ["2.2.2		", "Биет бус хөрөнгө олж эзэмшихэд төлсөн", "", "", "", ""],
  ["2.2.3		", "Хөрөнгө оруулалт олж эзэмшихэд төлсөн", "", "", "", ""],
  ["2.2.4", "Бусад урт хугацаат хөрөнгө олж эзэмшихэд төлсөн", "", "", "", ""],
  ["2.2.5	", "Бусдад олгосон зээл болон урьдчилгаа", "", "", "", ""],
  ["2.2.6	", "", "", "", "", ""],
  [
    "2.3",
    "Хөрөнгө оруулалтын үйл ажиллагааны цэвэр мөнгөн гүйлгээний дүн",
    "",
    "",
    "",
    "",
  ],
  ["3", "Санхүүгийн үйл ажиллагааны мөнгөн гүйлгээ", "", "", "", ""],
  ["3.1", "Мөнгөн орлогын дүн (+)", "", "", "", ""],
  [
    "3.1.1		",
    "Зээл авсан, өрийн үнэт цаас гаргаснаас хүлээн авсан",
    "",
    "",
    "",
    "",
  ],
  [
    "3.1.2		",
    "Хувьцаа болон өмчийн бусад үнэт цаас гаргаснаас хүлээн авсан",
    "",
    "",
    "",
    "",
  ],
  ["3.1.3", "Төрөл бүрийн хандив", "", "", "", ""],
  ["3.1.4", "", "", "", "", ""],
  ["3.2", "Мөнгөн зарлагын дүн (-)", "", "", "", ""],
  ["3.2.1", "Зээл, өрийн үнэт цаасны төлбөрт төлсөн мөнгө", "", "", "", ""],
  ["3.2.2", "Санхүүгийн түрээсний өглөгт төлсөн", "", "", "", ""],
  ["3.2.3", "Хувьцаа буцаан худалдаж авахад төлсөн", "", "", "", ""],
  ["3.2.4", "Төлсөн ногдол ашиг", "", "", "", ""],
  ["3.2.5", "", "", "", "", ""],
  [
    "3.3",
    " Санхүүгийн үйл ажиллагааны цэвэр мөнгөн гүйлгээний дүн",
    "",
    "",
    "",
    "",
  ],
  ["4", "Бүх цэвэр мөнгөн гүйлгээ", "", "", "", "- 1,000,000,000.00"],
  [
    "5",
    "Мөнгө, түүнтэй адилтгах хөрөнгийн эхний үлдэгдэл",
    "",
    "",
    "",
    "1,000,000,000.00",
  ],
  ["6", "Мөнгө, түүнтэй адилтгах хөрөнгийн эцсийн үлдэгдэл", "", "", "", ""],
  ["", "Захирал :			", "", "", ""],
  ["", "Ерөнхий нягтлан бодогч :			", "", "", ""],
];

const p12 = [];

router.get("/p1", (req, res) => {
  console.log("this is backend p1");
  res.json({ a: p1 });
});

router.get("/p2", (req, res) => {
  console.log("this is backend p1");
  res.json({ a2: p2 });
});

router.get("/p3", (req, res) => {
  res.json({ a3: p3 });
});

router.get("/p4", (req, res) => {
  res.json({ a4: p4 });
});

router.get("/p5", (req, res) => {
  p5Table.getP5().then((p5) => res.json({ a5: p5 }));
});

router.get("/p6", (req, res) => {
  res.json({ a6: p6 });
});

router.get("/p7", (req, res) => {
  res.json({ a7: p7 });
});

router.get("/p8", (req, res) => {
  res.json({ a8: p8 });
});

router.get("/p9", (req, res) => {
  res.json({ a9: p9 });
});

router.get("/p10", (req, res) => {
  res.json({ a10: p10 });
});

router.get("/p11", (req, res) => {
  res.json({ a11: p11 });
});

router.get("/p12", (req, res) => {
  p12Table.getP12().then((p12) => res.json({ p12 }));
});

// router.post("/getall", authenticated, (req, res, next) => {
//   TasksTable.getTasks()
//     .then((tasks) => res.json({ tasks }))
//     .catch((error) => next(error));
// });

module.exports = router;
