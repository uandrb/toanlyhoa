const chemistryData = window.CHEMISTRY_DATA || {};
const inorganicReactionsRaw = Array.isArray(chemistryData.inorganicReactionsRaw)
  ? chemistryData.inorganicReactionsRaw
  : [];

const reactionLevels = {
  grade89: "Lớp 8-9",
  grade1012: "Lớp 10-12",
  advanced: "Nâng cao / ngoại lệ"
};

const sourcePriority = {
  curated: 4,
  "matrix-advanced": 3,
  matrix: 2,
  generated: 1
};

const sourceLabel = {
  curated: "Nguồn chuẩn",
  matrix: "Suy luận ma trận",
  "matrix-advanced": "Suy luận nâng cao"
};

const confidenceLabel = {
  high: "Cao",
  medium: "Trung bình",
  low: "Thấp"
};

const levelByEquation = chemistryData.levelByEquation || {};

const inorganicReactions = inorganicReactionsRaw.map((reaction) => ({
  ...reaction,
  level: levelByEquation[reaction.equation] || "grade1012",
  source: "curated",
  confidence: "high"
}));

const oxidizingAcidInference = chemistryData.oxidizingAcidInference || { HNO3: {}, H2SO4: {} };

const reactionInsights = chemistryData.reactionInsights || {};

const activitySeries = Array.isArray(chemistryData.activitySeries)
  ? chemistryData.activitySeries
  : ["K", "Ba", "Ca", "Na", "Mg", "Al", "Zn", "Fe", "Ni", "Sn", "Pb", "H", "Cu", "Hg", "Ag", "Pt", "Au"];
const activityRank = Object.fromEntries(activitySeries.map((item, index) => [item, index]));

const symbolAliases = {
  NATRI: "Na",
  KALI: "K",
  BARI: "Ba",
  CANXI: "Ca",
  CALCIUM: "Ca",
  DONG: "Cu",
  SAT: "Fe",
  KEM: "Zn",
  BAC: "Ag",
  VANG: "Au",
  CHI: "Pb",
  THUYNGAN: "Hg",
  NHOM: "Al",
  MAGE: "Mg",
  MAGIE: "Mg"
};

const physicsKnowledgeBase = (window.PHYSICS_DATA && Array.isArray(window.PHYSICS_DATA.knowledgeBase))
  ? window.PHYSICS_DATA.knowledgeBase
  : [];
const mathKnowledgeBaseRaw = (window.MATH_DATA && Array.isArray(window.MATH_DATA.knowledgeBase))
  ? window.MATH_DATA.knowledgeBase
  : [];
const physicsChapterOrder = (window.PHYSICS_DATA && Array.isArray(window.PHYSICS_DATA.chapterOrder))
  ? window.PHYSICS_DATA.chapterOrder
  : ["Cơ học", "Nhiệt học", "Điện học", "Điện từ học", "Quang học"];
const mathChapterOrder = (window.MATH_DATA && Array.isArray(window.MATH_DATA.chapterOrder))
  ? window.MATH_DATA.chapterOrder
  : ["Số học", "Đại số", "Hình học"];
const physicsTypeLabels = {
  theory: "Lý thuyết",
  formula: "Công thức",
  problem: "Dạng bài"
};
const physicsSynonymMap = {
  "dinh luat ohm": ["ohm", "u=i.r", "i=u/r", "dien tro"],
  "cong suat dien": ["p=u.i", "dien nang", "cong suat"],
  "hieu dien the": ["dien ap", "voltage", "v"],
  "cuong do dong dien": ["am pe", "ampe", "current", "i"],
  "noi tiep song song": ["mach noi tiep", "mach song song", "equivalent resistance"],
  "luc day archimedes": ["luc noi", "day acsimet", "fa=d.v"],
  "ap suat chat long": ["p=d.h", "do sau", "ap suat nuoc"],
  "khuc xa": ["khuc xa anh sang", "refractive", "tia khuc xa"],
  "phan xa": ["phan xa anh sang", "goc toi", "goc phan xa"],
  "thau kinh": ["hoi tu", "phan ki", "lens"],
  "tan sac anh sang": ["tan sac", "lang kinh", "quang pho", "cau vong"],
  "anh sang trang": ["anh sang mau", "don sac", "7 mau"],
  "kinh loc mau": ["loc do", "loc luc", "loc lam", "truyen mau"],
  "mau sac vat": ["phan xa mau", "vat den", "vat trang"],
  "tat khuc xa": ["khuc xa", "goc lech", "chiet suat"],
  "cam ung dien tu": ["induction", "tu thong", "dong dien cam ung"],
  "nang luong nhiet": ["nhiet nang", "nhiet luong", "q=m.c.delta t"]
};
const subjectTypeLabels = {
  theory: "Lý thuyết",
  formula: "Công thức",
  problem: "Dạng bài"
};
const mathProblemLevelLabels = {
  all: "Mọi mức độ",
  basic: "Nhận biết",
  intermediate: "Thông hiểu",
  advanced: "Vận dụng"
};

const mathProblemLevelById = {
  "math8-proportion": "basic",
  "math8-percent-application": "intermediate",
  "math8-factorization": "intermediate",
  "math8-word-problems-equation": "intermediate",
  "math9-equation-radical": "advanced",
  "math9-direct-inverse-proportion": "basic",
  "math9-line-graph-intersection": "intermediate",
  "math9-systems-linear": "intermediate",
  "math9-equation-by-substitution": "advanced",
  "math9-word-problems-system": "intermediate",
  "math9-geometry-proof-strategy": "advanced",
  "math9-combined-probability-problem": "advanced"
};

const mathSynonymMap = {
  "phuong trinh bac nhat": ["pt bac 1", "linear equation", "ax+b=0", "pt tuyen tinh"],
  "phuong trinh bac hai": ["pt bac 2", "quadratic", "ax^2+bx+c=0", "delta"],
  "he phuong trinh": ["he 2 an", "phuong phap the", "cong dai so"],
  "hang dang thuc": ["dang nho", "binh phuong tong", "hieu hai binh phuong"],
  "phan tich nhan tu": ["nhan tu chung", "nhom hang tu", "factorization"],
  "ham so bac nhat": ["y=ax+b", "do thi duong thang", "he so goc"],
  "luong giac": ["sin cos tan", "ti so luong giac", "tam giac vuong"],
  "pythagoras": ["dinh ly pytago", "canh huyen", "tam giac vuong"],
  "dong dang": ["tam giac dong dang", "ti so dong dang"],
  "tu giac noi tiep": ["goc noi tiep", "duong tron", "goc o tam"],
  "xac suat": ["khong gian mau", "bien co", "probability"],
  "thong ke": ["tan so", "tan suat", "trung binh", "trung vi", "mot"],
  "can bac hai": ["can thuc", "rut gon can", "lien hop"],
  "phan so": ["so huu ti", "quy dong", "rut gon"],
  "ti le": ["ti le thuan", "ti le nghich", "day ti so bang nhau"]
};

const mathLessonCounters = {};
const mathKnowledgeBase = mathKnowledgeBaseRaw.map((topic) => {
  const chapterKey = `${topic.grade}-${topic.chapter}`;
  const nextOrder = (mathLessonCounters[chapterKey] || 0) + 1;
  mathLessonCounters[chapterKey] = nextOrder;

  const generatedLesson = `SGK Toán ${topic.grade} - ${topic.chapter} - Bài ${nextOrder}: ${topic.title}`;
  const defaultLevel = topic.type === "problem"
    ? (mathProblemLevelById[topic.id] || "intermediate")
    : "all";

  return {
    ...topic,
    lesson: topic.lesson || generatedLesson,
    level: topic.level || defaultLevel,
    aliases: Array.isArray(topic.aliases) ? topic.aliases : []
  };
});

const physicsLessonCounters = {};
const physicsKnowledgeBaseEnhanced = physicsKnowledgeBase.map((topic) => {
  const chapterKey = `${topic.grade}-${topic.chapter}`;
  const nextOrder = (physicsLessonCounters[chapterKey] || 0) + 1;
  physicsLessonCounters[chapterKey] = nextOrder;

  return {
    ...topic,
    lesson: topic.lesson || `SGK Vật lý ${topic.grade} - ${topic.chapter} - Bài ${nextOrder}: ${topic.title}`,
    aliases: Array.isArray(topic.aliases) ? topic.aliases : []
  };
});
const mathPracticeSetsCurated = (window.MATH_PRACTICE_DATA && Array.isArray(window.MATH_PRACTICE_DATA.sets))
  ? window.MATH_PRACTICE_DATA.sets
  : [];
const mathPracticeSets = mathPracticeSetsCurated.length
  ? mathPracticeSetsCurated
  : buildMathPracticeSets(mathKnowledgeBase);
const physicsPracticeSetsCurated = (window.PHYSICS_PRACTICE_DATA && Array.isArray(window.PHYSICS_PRACTICE_DATA.sets))
  ? window.PHYSICS_PRACTICE_DATA.sets
  : [];
const physicsPracticeSets = physicsPracticeSetsCurated;

const organicKnowledgeBase = [
  {
    id: "organic-metan",
    title: "Metan",
    chapter: "Hiđrocacbon",
    grade: "9",
    type: "theory",
    formula: "CH4",
    summary: "Metan là hiđrocacbon no đầu tiên, có thành phần đơn giản nhất và cháy tạo CO2 và H2O.",
    explanation: "Metan là hợp chất hữu cơ đơn giản nhất thuộc dãy ankan. Trong phân tử metan, mỗi nguyên tử C liên kết với 4 nguyên tử H, nên metan là một hiđrocacbon no.",
    keyPoints: [
      "Metan có công thức phân tử CH4.",
      "Là khí không màu, không mùi, nhẹ hơn không khí.",
      "Metan cháy tỏa nhiều nhiệt: CH4 + 2O2 -> CO2 + 2H2O.",
      "Được dùng làm nhiên liệu và nguyên liệu sản xuất hóa chất."
    ],
    tags: ["metan", "ankan", "nhiên liệu", "CH4"],
    aliases: ["methane", "ch4", "metan co 4 hydro"],
    lesson: "SGK KHTN 9 - Hiđrocacbon no"
  },
  {
    id: "organic-ethene",
    title: "Etilen",
    chapter: "Hiđrocacbon",
    grade: "9",
    type: "theory",
    formula: "C2H4",
    summary: "Etilen là hiđrocacbon không no, có liên kết đôi và có vai trò quan trọng trong công nghiệp thực phẩm và hóa chất.",
    explanation: "Etilen thuộc dãy anken, có công thức C2H4. Liên kết đôi giữa 2 nguyên tử cacbon làm etilen phản ứng cộng dễ hơn metan.",
    keyPoints: [
      "Etilen có công thức C2H4.",
      "Có liên kết đôi C=C nên dễ tham gia phản ứng cộng.",
      "Dùng để chế tạo nhựa PE và kích thích chín trái cây.",
      "Phương trình cộng brom: C2H4 + Br2 -> C2H4Br2."
    ],
    tags: ["etilen", "anken", "nhựa", "C2H4"],
    aliases: ["ethylene", "etan", "etilen chua", "co 2 carbon"],
    lesson: "SGK KHTN 9 - Etilen"
  },
  {
    id: "organic-acetylene",
    title: "Axetilen",
    chapter: "Hiđrocacbon",
    grade: "9",
    type: "formula",
    formula: "C2H2",
    summary: "Axetilen là hiđrocacbon không no có liên kết ba, cháy sáng mạnh và được dùng hàn cắt kim loại.",
    explanation: "Axetilen thuộc dãy ankin. Liên kết ba giữa 2 nguyên tử cacbon khiến axetilen rất dễ cháy và tỏa nhiều nhiệt.",
    keyPoints: [
      "Axetilen có công thức C2H2.",
      "Liên kết ba C≡C làm phân tử rất dễ cháy.",
      "Bình đèn xì có thành phần axetilen và oxi để tạo ngọn lửa nóng.",
      "Phản ứng cháy: 2C2H2 + 5O2 -> 4CO2 + 2H2O."
    ],
    tags: ["axetilen", "ankin", "hàn cắt", "C2H2"],
    aliases: ["acetylene", "c2h2", "axetilen hàn"],
    lesson: "SGK KHTN 9 - Axetilen"
  },
  {
    id: "organic-benzen",
    title: "Benzen",
    chapter: "Hiđrocacbon",
    grade: "9",
    type: "theory",
    formula: "C6H6",
    summary: "Benzen là hiđrocacbon thơm, có vòng 6 nguyên tử cacbon và tính chất đặc trưng của hợp chất thơm.",
    explanation: "Benzen chứa vòng benzen với 6 nguyên tử cacbon tạo thành mạch vòng. Vì có liên kết π delocalized nên benzen ổn định hơn so với anken đơn giản.",
    keyPoints: [
      "Benzen có công thức C6H6.",
      "Là hydrocarbon thơm, thường dùng làm dung môi và nguyên liệu công nghiệp.",
      "Không dễ tham gia phản ứng cộng như anken, nhưng có phản ứng thế.",
      "Cấu trúc vòng benzen là đặc trưng của hợp chất thơm."
    ],
    tags: ["benzen", "thơm", "vòng 6", "C6H6"],
    aliases: ["benzene", "vong benzen", "hợp chất thơm"],
    lesson: "SGK KHTN 9 - Dãy đồng đẳng benzen"
  },
  {
    id: "organic-ethanol",
    title: "Rượu etylic",
    chapter: "Dẫn xuất hydrocarbon",
    grade: "9",
    type: "theory",
    formula: "C2H5OH",
    summary: "Rượu etylic là một rượu đơn chức, có tính chất dễ bay hơi và có thể lên men.",
    explanation: "Rượu etylic chứa nhóm -OH liên kết với nguyên tử carbon của gốc etyl. Đây là hợp chất hữu cơ phổ biến trong công nghiệp và đời sống.",
    keyPoints: [
      "Công thức phân tử C2H5OH.",
      "Rượu etylic tan trong nước, có tính lỏng dễ bay hơi.",
      "Phản ứng với axit axetic tạo este: C2H5OH + CH3COOH -> CH3COOC2H5 + H2O.",
      "Có thể lên men từ tinh bột hoặc đường."
    ],
    tags: ["rượu etylic", "ethyl alcohol", "C2H5OH"],
    aliases: ["etanol", "ruou etylic", "alcohol"],
    lesson: "SGK KHTN 9 - Rượu"
  },
  {
    id: "organic-acetic-acid",
    title: "Axit axetic",
    chapter: "Dẫn xuất hydrocarbon",
    grade: "9",
    type: "formula",
    formula: "CH3COOH",
    summary: "Axit axetic là axit hữu cơ đơn chức, có vị chua và là nguyên liệu chính để sản xuất este.",
    explanation: "Axit axetic có nhóm chức -COOH, nên là một axit hữu cơ. Nó là thành phần chính của giấm ăn và có tính chất axit rõ rệt.",
    keyPoints: [
      "Công thức CH3COOH.",
      "Là axit hữu cơ có vị chua và làm quỳ tím đổi đỏ.",
      "Phản ứng với rượu tạo etyl axetat (mùi thơm).",
      "Dùng làm gia vị và nguyên liệu công nghiệp."
    ],
    tags: ["axit axetic", "giấm", "-COOH", "CH3COOH"],
    aliases: ["acetic acid", "giam", "axit etanoic"],
    lesson: "SGK KHTN 9 - Axit cacboxylic"
  },
  {
    id: "organic-ethyl-acetate",
    title: "Etyl axetat",
    chapter: "Dẫn xuất hydrocarbon",
    grade: "9",
    type: "problem",
    formula: "CH3COOC2H5",
    summary: "Etyl axetat là một este có mùi thơm dễ chịu, thường được dùng làm dung môi và hương liệu.",
    explanation: "Este là sản phẩm của phản ứng giữa axit và rượu. Etyl axetat gồm gốc etyl và gốc axetat, có mùi thơm đặc trưng.",
    keyPoints: [
      "Este có công thức CH3COOC2H5.",
      "Phản ứng ester hóa: axit + rượu -> este + nước.",
      "Mùi thơm của trái cây và dầu hoa quả thường liên quan đến este.",
      "Có tính chất dễ bay hơi và dùng làm dung môi."
    ],
    tags: ["este", "ethyl acetate", "mùi thơm", "CH3COOC2H5"],
    aliases: ["pi chi", "ester", "etyl acetat"],
    lesson: "SGK KHTN 9 - Este"
  },
  {
    id: "organic-sugar-glucose",
    title: "Glucose",
    chapter: "Hợp chất thiên nhiên",
    grade: "9",
    type: "theory",
    formula: "C6H12O6",
    summary: "Glucose là đường đơn có vai trò cung cấp năng lượng cho tế bào và được tìm thấy trong hầu hết các loại hoa quả.",
    explanation: "Glucose thuộc nhóm carbohydrate, là monosaccharide. Nó dễ tan trong nước và là nguồn năng lượng quan trọng cho cơ thể sống.",
    keyPoints: [
      "Glucose có công thức C6H12O6.",
      "Là đường đơn, dùng trực tiếp làm nhiên liệu tế bào.",
      "Chuyển hóa thành CO2 và H2O để giải phóng năng lượng.",
      "Được tìm thấy trong nước ép trái cây và mạch máu của thực vật."
    ],
    tags: ["glucose", "đường đơn", "C6H12O6", "năng lượng"],
    aliases: ["glicozo", "glucozo", "duong mo"],
    lesson: "SGK KHTN 9 - Carbohydrate"
  },
  {
    id: "organic-sucrose",
    title: "Saccarozơ",
    chapter: "Hợp chất thiên nhiên",
    grade: "9",
    type: "formula",
    formula: "C12H22O11",
    summary: "Saccarozơ là đường mía, đường củ cải và là loại đường đôi rất quen thuộc trong đời sống.",
    explanation: "Saccarozơ là một disaccharide, được cấu tạo từ glucose và fructose. Khi thủy phân, nó tạo ra hai loại đường đơn có thể được tế bào sử dụng.",
    keyPoints: [
      "Công thức C12H22O11.",
      "Là đường đôi, tan tốt trong nước.",
      "Saccarozơ là nguyên liệu chính để sản xuất đường ăn.",
      "Có thể thủy phân thành glucose và fructose."
    ],
    tags: ["saccarozơ", "đường mía", "C12H22O11"],
    aliases: ["sucrose", "duong mia", "duong san"],
    lesson: "SGK KHTN 9 - Đường"
  },
  {
    id: "organic-starch",
    title: "Tinh bột",
    chapter: "Hợp chất thiên nhiên",
    grade: "9",
    type: "problem",
    formula: "(C6H10O5)n",
    summary: "Tinh bột là polisaccharide dự trữ năng lượng của thực vật và là nguồn tinh bột trong thực phẩm chính của con người.",
    explanation: "Tinh bột tồn tại dưới dạng hạt trong các loại lương thực như gạo, khoai, ngô. Khi thủy phân, tinh bột tạo thành glucose.",
    keyPoints: [
      "Tinh bột có công thức chung (C6H10O5)n.",
      "Là polisaccharide dự trữ năng lượng ở thực vật.",
      "Thủy phân tinh bột sẽ tạo glucose.",
      "Iot làm cho tinh bột chuyển màu xanh tím."
    ],
    tags: ["tinh bột", "polisacarit", "gạo", "(C6H10O5)n"],
    aliases: ["starch", "tinhbot", "gao"],
    lesson: "SGK KHTN 9 - Tinh bột"
  },
  {
    id: "organic-protein",
    title: "Protein",
    chapter: "Hợp chất thiên nhiên",
    grade: "9",
    type: "theory",
    formula: "-",
    summary: "Protein là hợp chất hữu cơ quan trọng cấu thành tế bào và tham gia hầu hết các quá trình sinh học.",
    explanation: "Protein là polypeptide được tạo thành từ các amino acid. Chúng có vai trò cấu trúc, xúc tác và vận chuyển trong cơ thể sống.",
    keyPoints: [
      "Protein là hợp chất cao phân tử có nhiều amino acid.",
      "Có vai trò cấu trúc và xúc tác trong tế bào.",
      "Dễ biến tính dưới nhiệt độ cao hoặc axit mạnh.",
      "Có trong thịt, sữa, trứng, đậu nành."
    ],
    tags: ["protein", "amino acid", "tế bào"],
    aliases: ["proteins", "chất đạm", "protein trong thực phẩm"],
    lesson: "SGK KHTN 9 - Protein"
  }
];

const periodicElements = (window.PERIODIC_ELEMENTS || []).filter((element) => element.z <= 118);
const veryReactiveMetalsInWater = new Set(["K", "Na", "Li", "Rb", "Cs"]);
const activeMetalsWithWater = new Set(["K", "Na", "Li", "Rb", "Cs", "Ba", "Ca"]);
const acidFormingAnions = {
  HCL: "Cl"
};

const commonMetalValence = {
  K: 1,
  Na: 1,
  Li: 1,
  Rb: 1,
  Cs: 1,
  Ba: 2,
  Ca: 2,
  Mg: 2,
  Al: 3,
  Zn: 2,
  Fe: 2,
  Ni: 2,
  Sn: 2,
  Pb: 2,
  Cu: 2,
  Ag: 1
};

const acidProfiles = {
  HCL: { formula: "HCl", anion: "Cl", anionCharge: 1, hCount: 1, isOxidizing: false },
  H2SO4: { formula: "H2SO4", anion: "SO4", anionCharge: 2, hCount: 2, isOxidizing: false },
  HNO3: { formula: "HNO3", anion: "NO3", anionCharge: 1, hCount: 1, isOxidizing: true }
};

const nonMetalOxideMap = {
  H: { equation: "2H2 + O2 -> 2H2O", products: ["H2O"], note: "Hidro cháy trong oxi tạo nước." },
  C: { equation: "C + O2 -> CO2", products: ["CO2"], note: "Cacbon cháy hoàn toàn trong oxi tạo CO2." },
  S: { equation: "S + O2 -> SO2", products: ["SO2"], note: "Luu huynh cháy trong oxi tạo SO2." },
  P: { equation: "4P + 5O2 -> 2P2O5", products: ["P2O5"], note: "Photpho cháy trong oxi tạo P2O5." }
};

const elementInferenceMatrix = {
  metalRules: ["metal_plus_acid", "metal_plus_water", "metal_plus_oxygen", "metal_plus_sulfur", "metal_plus_salt_displacement"],
  nonMetalRules: ["nonmetal_plus_oxygen"],
  activeMetals: ["K", "Na", "Li", "Rb", "Cs", "Ba", "Ca", "Mg", "Al", "Zn", "Fe", "Ni", "Sn", "Pb"]
};

const compoundInferenceMatrix = {
  rules: ["acid_plus_base", "acid_plus_basic_oxide", "basic_oxide_plus_water", "carbonate_plus_acid", "double_replacement_precipitation"]
};

const ionicCompoundMatrix = {
  HCl: { cation: "H", cationCharge: 1, anion: "Cl", anionCharge: 1 },
  H2SO4: { cation: "H", cationCharge: 1, anion: "SO4", anionCharge: 2 },
  HNO3: { cation: "H", cationCharge: 1, anion: "NO3", anionCharge: 1 },
  NaOH: { cation: "Na", cationCharge: 1, anion: "OH", anionCharge: 1 },
  KOH: { cation: "K", cationCharge: 1, anion: "OH", anionCharge: 1 },
  "Ba(OH)2": { cation: "Ba", cationCharge: 2, anion: "OH", anionCharge: 1 },
  "Ca(OH)2": { cation: "Ca", cationCharge: 2, anion: "OH", anionCharge: 1 },
  "Fe(OH)2": { cation: "Fe", cationCharge: 2, anion: "OH", anionCharge: 1 },
  "Cu(OH)2": { cation: "Cu", cationCharge: 2, anion: "OH", anionCharge: 1 },
  NaCl: { cation: "Na", cationCharge: 1, anion: "Cl", anionCharge: 1 },
  KCl: { cation: "K", cationCharge: 1, anion: "Cl", anionCharge: 1 },
  BaCl2: { cation: "Ba", cationCharge: 2, anion: "Cl", anionCharge: 1 },
  CaCl2: { cation: "Ca", cationCharge: 2, anion: "Cl", anionCharge: 1 },
  FeCl2: { cation: "Fe", cationCharge: 2, anion: "Cl", anionCharge: 1 },
  FeCl3: { cation: "Fe", cationCharge: 3, anion: "Cl", anionCharge: 1 },
  CuCl2: { cation: "Cu", cationCharge: 2, anion: "Cl", anionCharge: 1 },
  ZnCl2: { cation: "Zn", cationCharge: 2, anion: "Cl", anionCharge: 1 },
  AgCl: { cation: "Ag", cationCharge: 1, anion: "Cl", anionCharge: 1 },
  Na2SO4: { cation: "Na", cationCharge: 1, anion: "SO4", anionCharge: 2 },
  K2SO4: { cation: "K", cationCharge: 1, anion: "SO4", anionCharge: 2 },
  BaSO4: { cation: "Ba", cationCharge: 2, anion: "SO4", anionCharge: 2 },
  CaSO4: { cation: "Ca", cationCharge: 2, anion: "SO4", anionCharge: 2 },
  CuSO4: { cation: "Cu", cationCharge: 2, anion: "SO4", anionCharge: 2 },
  FeSO4: { cation: "Fe", cationCharge: 2, anion: "SO4", anionCharge: 2 },
  ZnSO4: { cation: "Zn", cationCharge: 2, anion: "SO4", anionCharge: 2 },
  AgNO3: { cation: "Ag", cationCharge: 1, anion: "NO3", anionCharge: 1 },
  NaNO3: { cation: "Na", cationCharge: 1, anion: "NO3", anionCharge: 1 },
  KNO3: { cation: "K", cationCharge: 1, anion: "NO3", anionCharge: 1 },
  "Ba(NO3)2": { cation: "Ba", cationCharge: 2, anion: "NO3", anionCharge: 1 },
  "Ca(NO3)2": { cation: "Ca", cationCharge: 2, anion: "NO3", anionCharge: 1 },
  "Cu(NO3)2": { cation: "Cu", cationCharge: 2, anion: "NO3", anionCharge: 1 },
  NH4Cl: { cation: "NH4", cationCharge: 1, anion: "Cl", anionCharge: 1 },
  Na2CO3: { cation: "Na", cationCharge: 1, anion: "CO3", anionCharge: 2 },
  K2CO3: { cation: "K", cationCharge: 1, anion: "CO3", anionCharge: 2 },
  CaCO3: { cation: "Ca", cationCharge: 2, anion: "CO3", anionCharge: 2 },
  BaCO3: { cation: "Ba", cationCharge: 2, anion: "CO3", anionCharge: 2 },
  NaHCO3: { cation: "Na", cationCharge: 1, anion: "HCO3", anionCharge: 1 },
  "Ca(HCO3)2": { cation: "Ca", cationCharge: 2, anion: "HCO3", anionCharge: 1 }
};

const solubleCations = new Set(["Na", "K", "NH4"]);
const insolublePairs = {
  Cl: new Set(["Ag", "Pb"]),
  SO4: new Set(["Ba", "Pb", "Ca"]),
  OH: new Set(["Ag", "Fe", "Cu", "Zn", "Al", "Mg", "Pb"]),
  CO3: new Set(["Ba", "Ca", "Fe", "Cu", "Zn", "Pb", "Ag"]),
  HCO3: new Set(["Ca", "Ba", "Fe", "Cu", "Zn", "Pb", "Ag"]),
  S: new Set(["Fe", "Cu", "Pb", "Ag", "Zn"])
};

const polyatomicIons = new Set(["NH4", "OH", "NO3", "SO4", "CO3", "HCO3", "PO4", "NO2", "SO3"]);

const categoryLabels = {
  alkali: "Kim loại kiềm",
  alkaline: "Kim loại kiềm thổ",
  transition: "Kim loại chuyển tiếp",
  "post-transition": "Kim loại sau chuyển tiếp",
  metalloid: "Á kim",
  nonmetal: "Phi kim",
  halogen: "Halogen",
  noble: "Khí hiếm",
  lanthanoid: "Lantan",
  actinoid: "Actini"
};

const categoryDescriptions = {
  alkali: "Hoạt động rất mạnh, dễ phản ứng với nước tạo bazơ và H2.",
  alkaline: "Kim loại hoạt động mạnh, thường tạo hợp chất ion với hóa trị II.",
  transition: "Có nhiều mức oxi hóa và tham gia nhiều phản ứng oxi hóa-khử.",
  "post-transition": "Kim loại mềm hơn, tính kim loại yếu hơn nhóm chuyển tiếp.",
  metalloid: "Mang tính chất trung gian giữa kim loại và phi kim.",
  nonmetal: "Thường nhận electron hoặc dùng chung electron trong liên kết cộng hóa trị.",
  halogen: "Phi kim hoạt động mạnh, thường tạo muối với kim loại.",
  noble: "Rất kém hoạt động hóa học do lớp electron ngoài cùng bền vững.",
  lanthanoid: "Nhóm đất hiếm phổ biến với trạng thái oxi hóa +3.",
  actinoid: "Nhiều nguyên tố có tính phóng xạ, thường dùng trong lĩnh vực hạt nhân."
};

const periodicFamilyCategories = {
  metal: new Set(["alkali", "alkaline", "transition", "post-transition", "lanthanoid", "actinoid"]),
  nonmetal: new Set(["nonmetal", "halogen", "noble"]),
  metalloid: new Set(["metalloid"])
};

function getElementCategoryKey(element) {
  const base = element.category;
  if (base === "nonmetal" && Number(element.group) === 17) {
    return "halogen";
  }

  if (base === "transition" && [13, 14, 15, 16].includes(Number(element.group)) && Number(element.period) >= 4) {
    return "post-transition";
  }

  return base;
}

const moduleTabs = document.querySelectorAll(".module-tab");
const subjectButtons = document.querySelectorAll(".subject[data-subject]");
const modulePanels = {
  reactions: document.getElementById("module-reactions"),
  periodic: document.getElementById("module-periodic"),
  activity: document.getElementById("module-activity"),
  practice: document.getElementById("module-practice"),
  organic: document.getElementById("module-organic"),
  math: document.getElementById("module-math"),
  physics: document.getElementById("module-physics")
};

const form = document.getElementById("searchForm");
const queryInput = document.getElementById("queryInput");
const queryLabel = document.getElementById("queryLabel");
const gradeHint = document.getElementById("gradeHint");
const resultsRoot = document.getElementById("results");
const resultMeta = document.getElementById("resultMeta");
const cardTemplate = document.getElementById("reactionCardTemplate");
const modeButtons = document.querySelectorAll(".mode-btn");
const gradeButtons = document.querySelectorAll(".grade-btn");
const quickTags = document.querySelectorAll(".tag");
const moduleNav = document.getElementById("moduleNav");

const periodicGrid = document.getElementById("periodicGrid");
const periodicLegend = document.getElementById("periodicLegend");
const periodicGroupHint = document.getElementById("periodicGroupHint");
const periodicQuickFilters = document.querySelectorAll(".periodic-quick-filter");
const elementResult = document.getElementById("elementResult");
const elementSearchInput = document.getElementById("elementSearchInput");
const elementSearchBtn = document.getElementById("elementSearchBtn");

const physicsSearchInput = document.getElementById("physicsSearchInput");
const physicsSearchBtn = document.getElementById("physicsSearchBtn");
const physicsMap = document.getElementById("physicsMap");
const physicsResults = document.getElementById("physicsResults");
const physicsGradeButtons = document.querySelectorAll(".physics-grade-btn");
const physicsTypeButtons = document.querySelectorAll(".physics-type-btn");
const organicSearchInput = document.getElementById("organicSearchInput");
const organicSearchBtn = document.getElementById("organicSearchBtn");
const organicResults = document.getElementById("organicResults");
const mathSearchInput = document.getElementById("mathSearchInput");
const mathSearchBtn = document.getElementById("mathSearchBtn");
const mathMap = document.getElementById("mathMap");
const mathResults = document.getElementById("mathResults");
const mathGradeButtons = document.querySelectorAll(".math-grade-btn");
const mathTypeButtons = document.querySelectorAll(".math-type-btn");
const mathLevelButtons = document.querySelectorAll(".math-level-btn");
const mathPrevLessonBtn = document.getElementById("mathPrevLessonBtn");
const mathNextLessonBtn = document.getElementById("mathNextLessonBtn");
const mathLessonIndicator = document.getElementById("mathLessonIndicator");

const mathPracticeResults = document.getElementById("mathPracticeResults");
const mathPracticeGradeButtons = document.querySelectorAll(".math-practice-grade-btn");
const mathPracticeLevelButtons = document.querySelectorAll(".math-practice-level-btn");
const mathPracticeChapterSelect = document.getElementById("mathPracticeChapterSelect");
const mathPracticeRefreshBtn = document.getElementById("mathPracticeRefreshBtn");

const physicsPracticeResults = document.getElementById("physicsPracticeResults");
const physicsPracticeGradeButtons = document.querySelectorAll(".physics-practice-grade-btn");
const physicsPracticeLevelButtons = document.querySelectorAll(".physics-practice-level-btn");
const physicsPracticeChapterSelect = document.getElementById("physicsPracticeChapterSelect");
const physicsPracticeRefreshBtn = document.getElementById("physicsPracticeRefreshBtn");

const activitySeriesRoot = document.getElementById("activitySeries");
const acidMetalInput = document.getElementById("acidMetalInput");
const acidCheckBtn = document.getElementById("acidCheckBtn");
const acidCheckResult = document.getElementById("acidCheckResult");
const displaceMetalInput = document.getElementById("displaceMetalInput");
const displaceIonInput = document.getElementById("displaceIonInput");
const displaceCheckBtn = document.getElementById("displaceCheckBtn");
const displaceResult = document.getElementById("displaceResult");

let mode = "reactants";
let gradeFilter = "all";
let periodicCategoryFilter = "all";
let periodicFamilyFilter = "all";
let physicsGradeFilter = "all";
let physicsTypeFilter = "all";
let mathGradeFilter = "all";
let mathTypeFilter = "all";
let mathProblemLevelFilter = "all";
let mathLessonCursor = 0;
let mathCurrentTopicIds = [];
let mathPracticeGradeFilter = "all";
let mathPracticeLevelFilter = "all";
let physicsPracticeGradeFilter = "all";
let physicsPracticeLevelFilter = "all";

function normalizeFormula(formula) {
  return formula.replace(/\s+/g, "").toUpperCase();
}

function canonicalizeTerm(term) {
  const compact = normalizeFormula(term).replace(/[^A-Z0-9]/g, "");
  return symbolAliases[compact] || term.trim();
}

function normalizeSearchText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9^+\-*/=().,;\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function expandMathQueryTerms(rawQuery) {
  const normalizedQuery = normalizeSearchText(rawQuery);
  if (!normalizedQuery) {
    return [];
  }

  const expanded = new Set(
    normalizedQuery
      .split(/[\s,;]+/)
      .map((token) => token.trim())
      .filter(Boolean)
  );
  expanded.add(normalizedQuery);

  Object.entries(mathSynonymMap).forEach(([baseTerm, aliases]) => {
    const normalizedVariants = [baseTerm, ...aliases].map((value) => normalizeSearchText(value));
    if (normalizedVariants.some((variant) => variant && normalizedQuery.includes(variant))) {
      normalizedVariants.forEach((variant) => {
        if (variant) {
          expanded.add(variant);
        }
      });
    }
  });

  return [...expanded].filter((term) => term.length >= 2);
}

function scoreMathTopic(topic, queryTerms, rawQuery) {
  if (!rawQuery) {
    return 0;
  }

  const normalizedQuery = normalizeSearchText(rawQuery);
  const titleText = normalizeSearchText(topic.title);
  const summaryText = normalizeSearchText(topic.summary || "");
  const explanationText = normalizeSearchText(topic.explanation || "");
  const formulaText = normalizeSearchText(topic.formula || "");
  const lessonText = normalizeSearchText(topic.lesson || "");
  const tagsText = normalizeSearchText((topic.tags || []).join(" "));
  const aliasesText = normalizeSearchText((topic.aliases || []).join(" "));

  let score = 0;

  if (titleText === normalizedQuery) {
    score += 120;
  }
  if (titleText.includes(normalizedQuery)) {
    score += 70;
  }
  if (lessonText.includes(normalizedQuery)) {
    score += 35;
  }

  queryTerms.forEach((term) => {
    if (titleText.includes(term)) {
      score += 16;
    }
    if (aliasesText.includes(term)) {
      score += 14;
    }
    if (formulaText.includes(term)) {
      score += 12;
    }
    if (tagsText.includes(term)) {
      score += 10;
    }
    if (summaryText.includes(term)) {
      score += 8;
    }
    if (explanationText.includes(term)) {
      score += 6;
    }
    if (lessonText.includes(term)) {
      score += 4;
    }
  });

  if (topic.type === "problem") {
    score += 2;
  }

  return score;
}

function expandPhysicsQueryTerms(rawQuery) {
  const normalizedQuery = normalizeSearchText(rawQuery);
  if (!normalizedQuery) {
    return [];
  }

  const expanded = new Set(
    normalizedQuery
      .split(/[\s,;]+/)
      .map((token) => token.trim())
      .filter(Boolean)
  );
  expanded.add(normalizedQuery);

  Object.entries(physicsSynonymMap).forEach(([baseTerm, aliases]) => {
    const normalizedVariants = [baseTerm, ...aliases].map((value) => normalizeSearchText(value));
    if (normalizedVariants.some((variant) => variant && normalizedQuery.includes(variant))) {
      normalizedVariants.forEach((variant) => {
        if (variant) {
          expanded.add(variant);
        }
      });
    }
  });

  return [...expanded].filter((term) => term.length >= 2);
}

function scorePhysicsTopic(topic, queryTerms, rawQuery) {
  if (!rawQuery) {
    return 0;
  }

  const normalizedQuery = normalizeSearchText(rawQuery);
  const titleText = normalizeSearchText(topic.title);
  const summaryText = normalizeSearchText(topic.summary || "");
  const explanationText = normalizeSearchText(topic.explanation || "");
  const formulaText = normalizeSearchText(topic.formula || "");
  const lessonText = normalizeSearchText(topic.lesson || "");
  const tagsText = normalizeSearchText((topic.tags || []).join(" "));
  const aliasesText = normalizeSearchText((topic.aliases || []).join(" "));

  let score = 0;
  if (titleText === normalizedQuery) {
    score += 120;
  }
  if (titleText.includes(normalizedQuery)) {
    score += 70;
  }
  if (lessonText.includes(normalizedQuery)) {
    score += 30;
  }

  queryTerms.forEach((term) => {
    if (titleText.includes(term)) {
      score += 16;
    }
    if (aliasesText.includes(term)) {
      score += 14;
    }
    if (formulaText.includes(term)) {
      score += 12;
    }
    if (tagsText.includes(term)) {
      score += 10;
    }
    if (summaryText.includes(term)) {
      score += 8;
    }
    if (explanationText.includes(term)) {
      score += 6;
    }
  });

  if (topic.type === "formula") {
    score += 1;
  }

  return score;
}

function buildMathPracticeSets(topics) {
  const result = [];
  const grades = ["8", "9"];

  grades.forEach((grade) => {
    mathChapterOrder.forEach((chapter) => {
      const chapterTopics = topics.filter((topic) => topic.grade === grade && topic.chapter === chapter);
      if (!chapterTopics.length) {
        return;
      }

      const problemTopics = chapterTopics.filter((topic) => topic.type === "problem");
      const formulaTopics = chapterTopics.filter((topic) => topic.type === "formula");
      const theoryTopics = chapterTopics.filter((topic) => topic.type === "theory");

      const baseBasic = problemTopics[0] || theoryTopics[0] || chapterTopics[0];
      const baseIntermediate = formulaTopics[0] || problemTopics[0] || chapterTopics[0];
      const baseAdvanced = problemTopics[1] || problemTopics[0] || formulaTopics[0] || chapterTopics[0];

      const createSet = (level, baseTopic) => {
        if (!baseTopic) {
          return;
        }

        const isBasic = level === "basic";
        const isIntermediate = level === "intermediate";
        const levelTitle = mathProblemLevelLabels[level] || level;

        const question = isBasic
          ? `Nêu khái niệm cốt lõi và 2 ý cần nhớ của chủ đề "${baseTopic.title}". Sau đó cho 1 ví dụ ngắn liên quan ${chapter.toLowerCase()}.`
          : isIntermediate
            ? `Giải bài tập mức ${levelTitle.toLowerCase()} thuộc "${baseTopic.title}" và trình bày từng bước biến đổi.`
            : `Giải bài toán vận dụng tổng hợp từ chủ đề "${baseTopic.title}", nêu rõ chiến lược chọn phương pháp và kiểm tra kết quả.`;

        const hint = isBasic
          ? `Đọc phần "Điểm cần nhớ" và "Mẹo ghi nhớ" của bài ${baseTopic.lesson}.`
          : isIntermediate
            ? `Sử dụng công thức: ${baseTopic.formula || "chọn công thức/chứng minh phù hợp"}.`
            : `Kết hợp ít nhất 2 ý trong chương ${chapter} lớp ${grade}; ưu tiên lập luận và kiểm tra điều kiện.`;

        const answer = isBasic
          ? `Đáp án mẫu: học sinh trình bày đúng khái niệm, nêu ít nhất 2 ý trong keyPoints và 1 ví dụ đúng ngữ cảnh chủ đề ${baseTopic.title}.`
          : isIntermediate
            ? `Đáp án mẫu: bài giải đúng quy trình, sử dụng công thức/chứng minh phù hợp, kết luận rõ ràng và có thử lại.`
            : `Đáp án mẫu: có phân tích đề, chọn phương pháp hợp lý, biến đổi chính xác và đánh giá tính hợp lý của đáp số.`;

        result.push({
          id: `practice-${grade}-${chapter}-${level}`,
          grade,
          chapter,
          level,
          title: `Đề ${levelTitle}: ${baseTopic.title}`,
          sourceTopicId: baseTopic.id,
          sourceLesson: baseTopic.lesson,
          question,
          hint,
          answer,
          tags: ["luyện tập", chapter, `lớp ${grade}`, levelTitle]
        });
      };

      createSet("basic", baseBasic);
      createSet("intermediate", baseIntermediate);
      createSet("advanced", baseAdvanced);
    });
  });

  return result;
}

function parseQuery(queryText) {
  return queryText
    .split(/[,+;]+/)
    .map((part) => canonicalizeTerm(part))
    .map((part) => part.trim())
    .filter(Boolean);
}

function buildFormulaVariants(term) {
  const canonical = canonicalizeTerm(term);
  const normalized = normalizeFormula(canonical);
  const variants = new Set([normalized]);

  const diatomicMap = {
    H: "H2",
    O: "O2",
    N: "N2",
    F: "F2",
    CL: "Cl2",
    BR: "Br2",
    I: "I2"
  };

  if (diatomicMap[normalized]) {
    variants.add(normalizeFormula(diatomicMap[normalized]));
  }

  return [...variants];
}

function getAcidProfileByFormula(formulaLike) {
  const norm = normalizeFormula(formulaLike);
  const match = Object.values(acidProfiles).find((item) => normalizeFormula(item.formula) === norm);
  return match || null;
}

function isMetalSymbol(symbol) {
  return symbol in commonMetalValence;
}

function detectCompoundClass(formulaLike) {
  const formula = canonicalizeTerm(formulaLike);
  const norm = normalizeFormula(formula);
  if (norm === "H2O") {
    return "water";
  }

  if (/^[A-Z][a-z]?$/.test(formula) || ["H2", "N2", "O2", "F2", "Cl2", "Br2", "I2", "S", "P", "C"].includes(formula)) {
    return isMetalSymbol(formula.replace(/[0-9]/g, "")) ? "metal_element" : "nonmetal_element";
  }

  if (getAcidProfileByFormula(formula)) {
    return "acid";
  }

  if (formula.includes("OH")) {
    return "base";
  }

  const oxygenCount = (formula.match(/O/g) || []).length;
  if (oxygenCount > 0 && !formula.includes("OH")) {
    if (/^[A-Z][a-z]?[0-9]*O([0-9]+)?$/.test(formula)) {
      const first = formula.match(/^([A-Z][a-z]?)/);
      if (first && isMetalSymbol(first[1])) {
        return "basic_oxide";
      }
      return "acidic_oxide";
    }
  }

  if (formula.includes("CO3") || formula.includes("HCO3")) {
    return "carbonate_salt";
  }

  return "salt";
}

function parseMetalFromCompound(formulaLike) {
  const formula = canonicalizeTerm(formulaLike);
  const first = formula.match(/^([A-Z][a-z]?)/);
  if (!first) {
    return null;
  }
  const metal = first[1];
  if (!isMetalSymbol(metal)) {
    return null;
  }
  return {
    symbol: metal,
    valence: commonMetalValence[metal]
  };
}

function inferMetalSulfurReaction(metal) {
  const valence = commonMetalValence[metal];
  if (!valence) {
    return null;
  }
  const sulfide = buildSaltFormula(metal, valence, "S", 2);
  const g = gcd(valence, 2);
  const metalCoeff = 2 / g;
  const sulfurCoeff = valence / g;
  return {
    equation: `${withCoeff(metalCoeff, metal)} + ${withCoeff(sulfurCoeff, "S")} -> ${sulfide}`,
    reactants: [metal, "S"],
    products: [sulfide],
    note: "Suy luận theo matrix nguyên tố: kim loại + lưu huỳnh tạo sunfua kim loại.",
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferMetalOxygenReaction(metal) {
  const valence = commonMetalValence[metal];
  if (!valence) {
    return null;
  }
  const oxide = buildSaltFormula(metal, valence, "O", 2);
  const g = gcd(valence, 2);
  const productCoeff = 2;
  const metalCoeff = (4 / g);
  const oxygenCoeff = (valence / g);
  return {
    equation: `${withCoeff(metalCoeff, metal)} + ${withCoeff(oxygenCoeff, "O2")} -> ${withCoeff(productCoeff, oxide)}`,
    reactants: [metal, "O2"],
    products: [oxide],
    note: "Suy luận theo matrix nguyên tố: kim loại tác dụng với oxi tạo oxit.",
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferAcidBaseByMatrix(baseFormula, acidFormula) {
  const acid = getAcidProfileByFormula(acidFormula);
  const metalInfo = parseMetalFromCompound(baseFormula);
  if (!acid || !metalInfo) {
    return null;
  }
  const expectedBase = metalInfo.valence === 1 ? `${metalInfo.symbol}OH` : `${metalInfo.symbol}(OH)${metalInfo.valence}`;
  if (normalizeFormula(expectedBase) !== normalizeFormula(baseFormula)) {
    return null;
  }
  return inferNeutralizationBySaltProduct(metalInfo.symbol, normalizeFormula(acid.formula));
}

function inferBasicOxideWaterReaction(oxideFormula) {
  const metalInfo = parseMetalFromCompound(oxideFormula);
  if (!metalInfo || !activeMetalsWithWater.has(metalInfo.symbol)) {
    return null;
  }

  const valence = metalInfo.valence;
  const expectedOxide = buildSaltFormula(metalInfo.symbol, valence, "O", 2);
  if (normalizeFormula(expectedOxide) !== normalizeFormula(oxideFormula)) {
    return null;
  }

  const g = gcd(valence, 2);
  const metalInOxide = 2 / g;
  const oxygenInOxide = valence / g;
  const hydroxide = valence === 1 ? `${metalInfo.symbol}OH` : `${metalInfo.symbol}(OH)${valence}`;

  return {
    equation: `${oxideFormula} + ${withCoeff(oxygenInOxide, "H2O")} -> ${withCoeff(metalInOxide, hydroxide)}`,
    reactants: [oxideFormula, "H2O"],
    products: [hydroxide],
    note: "Suy luận theo matrix hợp chất: oxit bazơ mạnh tác dụng với nước tạo bazơ.",
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function buildIonicSalt(cation, cationCharge, anion, anionCharge) {
  if ((cation === "H" && anion === "OH") || (cation === "OH" && anion === "H")) {
    return { formula: "H2O", cationCount: 1, anionCount: 1, cation, anion, cationCharge, anionCharge };
  }
  const g = gcd(cationCharge, anionCharge);
  const cationCount = anionCharge / g;
  const anionCount = cationCharge / g;
  const cationPoly = polyatomicIons.has(cation) && cationCount > 1;
  const anionPoly = polyatomicIons.has(anion) && anionCount > 1;
  const formula = `${buildFormula(cation, cationCount, cationPoly)}${buildFormula(anion, anionCount, anionPoly)}`;
  return { formula, cationCount, anionCount, cation, anion, cationCharge, anionCharge };
}

function getIonicCompoundInfo(formulaLike) {
  const canonical = canonicalizeTerm(formulaLike);
  return ionicCompoundMatrix[canonical] || null;
}

function isLikelyInsoluble(cation, anion) {
  if (solubleCations.has(cation)) {
    return false;
  }
  if (anion === "NO3") {
    return false;
  }
  return Boolean(insolublePairs[anion] && insolublePairs[anion].has(cation));
}

function solveDoubleReplacementCoefficients(s1, s2, p1, p2) {
  for (let a = 1; a <= 8; a += 1) {
    for (let b = 1; b <= 8; b += 1) {
      for (let c = 1; c <= 8; c += 1) {
        for (let d = 1; d <= 8; d += 1) {
          const okC1 = a * s1.cationCount === c * p1.cationCount;
          const okA1 = a * s1.anionCount === d * p2.anionCount;
          const okC2 = b * s2.cationCount === d * p2.cationCount;
          const okA2 = b * s2.anionCount === c * p1.anionCount;
          if (okC1 && okA1 && okC2 && okA2) {
            const g = gcd(gcd(a, b), gcd(c, d));
            return [a / g, b / g, c / g, d / g];
          }
        }
      }
    }
  }
  return null;
}

function inferDoubleReplacementPrecipitation(compoundA, compoundB) {
  const iA = getIonicCompoundInfo(compoundA);
  const iB = getIonicCompoundInfo(compoundB);
  if (!iA || !iB) {
    return null;
  }

  if (iA.cation === iB.cation || iA.anion === iB.anion) {
    return null;
  }

  const s1 = buildIonicSalt(iA.cation, iA.cationCharge, iA.anion, iA.anionCharge);
  const s2 = buildIonicSalt(iB.cation, iB.cationCharge, iB.anion, iB.anionCharge);
  const p1 = buildIonicSalt(iA.cation, iA.cationCharge, iB.anion, iB.anionCharge);
  const p2 = buildIonicSalt(iB.cation, iB.cationCharge, iA.anion, iA.anionCharge);

  if (p1.formula === "H2O" || p2.formula === "H2O") {
    return null;
  }

  const precipitates = [];
  if (isLikelyInsoluble(p1.cation, p1.anion)) {
    precipitates.push(p1.formula);
  }
  if (isLikelyInsoluble(p2.cation, p2.anion)) {
    precipitates.push(p2.formula);
  }
  if (!precipitates.length) {
    return null;
  }

  const coeffs = solveDoubleReplacementCoefficients(s1, s2, p1, p2);
  if (!coeffs) {
    return null;
  }
  const [a, b, c, d] = coeffs;

  return {
    equation: `${withCoeff(a, s1.formula)} + ${withCoeff(b, s2.formula)} -> ${withCoeff(c, p1.formula)} + ${withCoeff(d, p2.formula)}`,
    reactants: [s1.formula, s2.formula],
    products: [p1.formula, p2.formula],
    note: `Suy luận theo matrix hợp chất: phản ứng trao đổi tạo kết tủa (${precipitates.join(", ")}).`,
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferCarbonateAcidReaction(carbonateFormula, acidFormula) {
  const ionic = getIonicCompoundInfo(carbonateFormula);
  const acid = getAcidProfileByFormula(acidFormula);
  if (!ionic || !acid) {
    return null;
  }

  if (!["CO3", "HCO3"].includes(ionic.anion)) {
    return null;
  }

  const ionicCounts = buildIonicSalt(ionic.cation, ionic.cationCharge, ionic.anion, ionic.anionCharge);
  const carbonateUnitCoeff = ionicCounts.anionCount;
  const protonNeedPerAnion = ionic.anion === "CO3" ? 2 : 1;
  const neededH = carbonateUnitCoeff * protonNeedPerAnion;
  const salt = buildIonicSalt(ionic.cation, ionic.cationCharge, acid.anion, acid.anionCharge);
  const denomSalt = salt.cationCount / gcd(ionicCounts.cationCount, salt.cationCount);
  const denomAcid = acid.hCount / gcd(neededH, acid.hCount);
  const scale = lcm(denomSalt, denomAcid);

  const carbonateCoeff = scale;
  const saltCoeff = (scale * ionicCounts.cationCount) / salt.cationCount;
  const acidCoeff = (scale * neededH) / acid.hCount;
  const gasCoeff = carbonateUnitCoeff * scale;

  return {
    equation: `${withCoeff(carbonateCoeff, canonicalizeTerm(carbonateFormula))} + ${withCoeff(acidCoeff, acid.formula)} -> ${withCoeff(saltCoeff, salt.formula)} + ${withCoeff(gasCoeff, "CO2")} + ${withCoeff(gasCoeff, "H2O")}`,
    reactants: [canonicalizeTerm(carbonateFormula), acid.formula],
    products: [salt.formula, "CO2", "H2O"],
    note: "Suy luận theo matrix hợp chất: muối cacbonat/hiđrocacbonat tác dụng với axit giải phóng CO2.",
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferFromElementMatrix(left, right) {
  const results = [];
  const leftClass = detectCompoundClass(left);
  const rightClass = detectCompoundClass(right);
  const leftNorm = normalizeFormula(left);
  const rightNorm = normalizeFormula(right);

  const acidRight = getAcidProfileByFormula(right);
  if (leftClass === "metal_element" && acidRight && elementInferenceMatrix.metalRules.includes("metal_plus_acid")) {
    const acidKey = normalizeFormula(acidRight.formula);
    const reaction = inferMetalAcidReaction(left, acidKey);
    if (reaction) {
      results.push(reaction);
    } else {
      const advanced = inferOxidizingAcidReaction(left, acidKey);
      if (advanced) {
        results.push(advanced);
      }
    }
  }

  if (leftClass === "metal_element" && rightNorm === "H2O" && elementInferenceMatrix.metalRules.includes("metal_plus_water")) {
    const reaction = inferMetalWaterReaction(left);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (leftClass === "metal_element" && rightNorm === "O2" && elementInferenceMatrix.metalRules.includes("metal_plus_oxygen")) {
    const reaction = inferMetalOxygenReaction(left);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (leftClass === "metal_element" && rightNorm === "S" && elementInferenceMatrix.metalRules.includes("metal_plus_sulfur")) {
    const reaction = inferMetalSulfurReaction(left);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (leftClass === "metal_element" && rightClass === "salt" && elementInferenceMatrix.metalRules.includes("metal_plus_salt_displacement")) {
    const reaction = inferMetalSaltDisplacement(left, right);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (leftClass === "nonmetal_element" && rightNorm === "O2" && elementInferenceMatrix.nonMetalRules.includes("nonmetal_plus_oxygen")) {
    const reaction = inferNonMetalOxidationReaction(left, "O2");
    if (reaction) {
      results.push(reaction);
    }
  }

  return results;
}

function inferFromCompoundMatrix(left, right) {
  const results = [];
  const leftClass = detectCompoundClass(left);
  const rightClass = detectCompoundClass(right);

  if (compoundInferenceMatrix.rules.includes("acid_plus_base") && leftClass === "base" && rightClass === "acid") {
    const reaction = inferAcidBaseByMatrix(left, right);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (compoundInferenceMatrix.rules.includes("basic_oxide_plus_water") && leftClass === "basic_oxide" && rightClass === "water") {
    const reaction = inferBasicOxideWaterReaction(left);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (compoundInferenceMatrix.rules.includes("carbonate_plus_acid") && leftClass === "carbonate_salt" && rightClass === "acid") {
    const reaction = inferCarbonateAcidReaction(left, right);
    if (reaction) {
      results.push(reaction);
    }
  }

  if (compoundInferenceMatrix.rules.includes("double_replacement_precipitation") && ["salt", "base", "acid", "carbonate_salt"].includes(leftClass) && ["salt", "base", "acid", "carbonate_salt"].includes(rightClass)) {
    const reaction = inferDoubleReplacementPrecipitation(left, right);
    if (reaction) {
      results.push(reaction);
    }
  }

  return results;
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function buildFormula(unit, count, isPolyatomic) {
  if (count === 1) {
    return unit;
  }
  if (isPolyatomic) {
    return `(${unit})${count}`;
  }
  return `${unit}${count}`;
}

function buildSaltFormula(metal, metalValence, anion, anionCharge) {
  const g = gcd(metalValence, anionCharge);
  const cationCount = anionCharge / g;
  const anionCount = metalValence / g;
  const anionPoly = anion.length > 2;
  const left = buildFormula(metal, cationCount, false);
  const right = buildFormula(anion, anionCount, anionPoly);
  return `${left}${right}`;
}

function withCoeff(coeff, formula) {
  return coeff === 1 ? formula : `${coeff}${formula}`;
}

function inferMetalAcidReaction(metal, acidKey) {
  const acid = acidProfiles[acidKey];
  const metalValence = commonMetalValence[metal];
  if (!acid || !metalValence) {
    return null;
  }

  if (acid.isOxidizing) {
    return null;
  }

  const rank = activityRank[metal];
  if (rank === undefined) {
    return null;
  }

  if (rank >= activityRank.H) {
    return null;
  }

  const saltFormula = buildSaltFormula(metal, metalValence, acid.anion, acid.anionCharge);
  const g = gcd(metalValence, acid.anionCharge);
  let metalCoeff = acid.anionCharge / g;
  let acidCoeff = metalValence / g;
  let saltCoeff = 1;
  let h2Coeff = (acidCoeff * acid.hCount) / 2;

  if (!Number.isInteger(h2Coeff)) {
    metalCoeff *= 2;
    acidCoeff *= 2;
    saltCoeff *= 2;
    h2Coeff *= 2;
  }

  const equation = `${withCoeff(metalCoeff, metal)} + ${withCoeff(acidCoeff, acid.formula)} -> ${withCoeff(saltCoeff, saltFormula)} + ${withCoeff(h2Coeff, "H2")}`;
  return {
    equation,
    reactants: [metal, acid.formula],
    products: [saltFormula, "H2"],
    note: `Suy luận theo dãy hoạt động hóa học: ${metal} đứng trước H nên đẩy được H2 khỏi ${acid.formula} loãng.`,
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferOxidizingAcidReaction(metal, acidKey) {
  const acidFormula = acidProfiles[acidKey]?.formula;
  if (!acidFormula) {
    return null;
  }
  const bank = oxidizingAcidInference[acidFormula];
  if (!bank || !bank[metal]) {
    return null;
  }
  const picked = bank[metal];
  return {
    ...picked,
    level: "advanced",
    source: "matrix-advanced",
    confidence: "medium"
  };
}

function inferMetalWaterReaction(metal) {
  if (!activeMetalsWithWater.has(metal)) {
    return null;
  }
  const valence = commonMetalValence[metal];
  if (!valence) {
    return null;
  }

  let metalCoeff = 1;
  let waterCoeff = valence;
  let hydroxideCoeff = 1;
  let hydrogenCoeff = valence / 2;

  if (!Number.isInteger(hydrogenCoeff)) {
    metalCoeff *= 2;
    waterCoeff *= 2;
    hydroxideCoeff *= 2;
    hydrogenCoeff *= 2;
  }

  const hydroxideFormula = valence === 1 ? `${metal}OH` : `${metal}(OH)${valence}`;
  return {
    equation: `${withCoeff(metalCoeff, metal)} + ${withCoeff(waterCoeff, "H2O")} -> ${withCoeff(hydroxideCoeff, hydroxideFormula)} + ${withCoeff(hydrogenCoeff, "H2")}`,
    reactants: [metal, "H2O"],
    products: [hydroxideFormula, "H2"],
    note: `${metal} phản ứng với nước tạo bazơ và khí H2.`,
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferMetalSaltDisplacement(freeMetal, saltFormula) {
  const salt = getIonicCompoundInfo(saltFormula);
  const freeValence = commonMetalValence[freeMetal];
  if (!salt || !freeValence) {
    return null;
  }

  // In aqueous solution, these metals react with water first,
  // so a direct one-step metal displacement is not the dominant classroom model.
  if (activeMetalsWithWater.has(freeMetal)) {
    return null;
  }

  if (!isMetalSymbol(salt.cation) || salt.cation === freeMetal || salt.cation === "H") {
    return null;
  }

  const freeRank = activityRank[freeMetal];
  const ionRank = activityRank[salt.cation];
  if (freeRank === undefined || ionRank === undefined || freeRank >= ionRank) {
    return null;
  }

  const oldSalt = buildIonicSalt(salt.cation, salt.cationCharge, salt.anion, salt.anionCharge);
  const newSalt = buildIonicSalt(freeMetal, freeValence, salt.anion, salt.anionCharge);
  if (oldSalt.formula === newSalt.formula) {
    return null;
  }

  const gAnion = gcd(oldSalt.anionCount, newSalt.anionCount);
  let b = newSalt.anionCount / gAnion;
  let c = oldSalt.anionCount / gAnion;
  let a = c * newSalt.cationCount;
  let d = b * oldSalt.cationCount;
  const gCoeff = gcd(gcd(a, b), gcd(c, d));
  a /= gCoeff;
  b /= gCoeff;
  c /= gCoeff;
  d /= gCoeff;

  const isVeryReactive = veryReactiveMetalsInWater.has(freeMetal) || activeMetalsWithWater.has(freeMetal);

  return {
    equation: `${withCoeff(a, freeMetal)} + ${withCoeff(b, oldSalt.formula)} -> ${withCoeff(c, newSalt.formula)} + ${withCoeff(d, salt.cation)}`,
    reactants: [freeMetal, oldSalt.formula],
    products: [newSalt.formula, salt.cation],
    note: isVeryReactive
      ? `Suy luận theo dãy hoạt động: ${freeMetal} mạnh hơn ${salt.cation} nên có thể đẩy ${salt.cation} khỏi muối; trong dung dịch nước có thể xuất hiện phản ứng phụ với nước.`
      : `Suy luận theo dãy hoạt động: ${freeMetal} mạnh hơn ${salt.cation} nên đẩy được ${salt.cation} khỏi dung dịch muối.`,
    level: (freeValence >= 3 || salt.cationCharge >= 3) ? "grade1012" : "grade89",
    source: "matrix",
    confidence: isVeryReactive ? "low" : "medium"
  };
}

function inferNeutralizationBySaltProduct(metal, acidKey) {
  const acid = acidProfiles[acidKey];
  const valence = commonMetalValence[metal];
  if (!acid || !valence) {
    return null;
  }

  const hydroxideFormula = valence === 1 ? `${metal}OH` : `${metal}(OH)${valence}`;
  const saltFormula = buildSaltFormula(metal, valence, acid.anion, acid.anionCharge);
  const g = gcd(valence, acid.hCount);
  const baseCoeff = acid.hCount / g;
  const acidCoeff = valence / g;
  const saltCoeff = 1;
  const waterCoeff = (baseCoeff * valence);

  return {
    equation: `${withCoeff(baseCoeff, hydroxideFormula)} + ${withCoeff(acidCoeff, acid.formula)} -> ${withCoeff(saltCoeff, saltFormula)} + ${withCoeff(waterCoeff, "H2O")}`,
    reactants: [hydroxideFormula, acid.formula],
    products: [saltFormula, "H2O"],
    note: "Suy luận theo quy tắc trung hòa axit-bazơ.",
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferNonMetalOxidationReaction(element, oxidizer) {
  const elementNorm = normalizeFormula(element);
  const oxidizerNorm = normalizeFormula(oxidizer);
  if (oxidizerNorm !== "O2") {
    return null;
  }

  const map = {
    H: {
      equation: "2H2 + O2 -> 2H2O",
      reactants: ["H2", "O2"],
      products: ["H2O"],
      note: "Hidro cháy trong oxi tạo nước."
    },
    H2: {
      equation: "2H2 + O2 -> 2H2O",
      reactants: ["H2", "O2"],
      products: ["H2O"],
      note: "Hidro cháy trong oxi tạo nước."
    },
    S: {
      equation: "S + O2 -> SO2",
      reactants: ["S", "O2"],
      products: ["SO2"],
      note: "Luu huynh cháy trong oxi tạo SO2."
    },
    C: {
      equation: "C + O2 -> CO2",
      reactants: ["C", "O2"],
      products: ["CO2"],
      note: "Cacbon cháy hoàn toàn trong oxi tạo CO2."
    },
    P: {
      equation: "4P + 5O2 -> 2P2O5",
      reactants: ["P", "O2"],
      products: ["P2O5"],
      note: "Photpho cháy trong oxi tạo P2O5."
    }
  };

  const entry = map[elementNorm];
  if (!entry) {
    return null;
  }

  return {
    ...entry,
    level: "grade89",
    source: "matrix",
    confidence: "medium"
  };
}

function inferReactions(queryTerms, currentMode) {
  if (!queryTerms.length) {
    return [];
  }

  const inferred = [];

  if (currentMode === "reactants" && queryTerms.length === 2) {
    const [leftRaw, rightRaw] = queryTerms;
    const left = canonicalizeTerm(leftRaw);
    const right = canonicalizeTerm(rightRaw);

    inferred.push(...inferFromElementMatrix(left, right));
    inferred.push(...inferFromElementMatrix(right, left));
    inferred.push(...inferFromCompoundMatrix(left, right));
    inferred.push(...inferFromCompoundMatrix(right, left));
  }

  if (currentMode === "products" && queryTerms.length === 1) {
    const target = normalizeFormula(queryTerms[0]);
    const metals = Object.keys(commonMetalValence);
    const acids = Object.values(acidProfiles).map((item) => normalizeFormula(item.formula));
    const ionicCompounds = Object.keys(ionicCompoundMatrix);

    metals.forEach((metal) => {
      acids.forEach((acidKey) => {
        const direct = inferMetalAcidReaction(metal, acidKey);
        if (direct && direct.products.map(normalizeFormula).includes(target)) {
          inferred.push(direct);
        }

        const advanced = inferOxidizingAcidReaction(metal, acidKey);
        if (advanced && advanced.products.map(normalizeFormula).includes(target)) {
          inferred.push(advanced);
        }

        const neutralization = inferNeutralizationBySaltProduct(metal, acidKey);
        if (neutralization && neutralization.products.map(normalizeFormula).includes(target)) {
          inferred.push(neutralization);
        }
      });

      const waterReaction = inferMetalWaterReaction(metal);
      if (waterReaction && waterReaction.products.map(normalizeFormula).includes(target)) {
        inferred.push(waterReaction);
      }

      const oxygenReaction = inferMetalOxygenReaction(metal);
      if (oxygenReaction && oxygenReaction.products.map(normalizeFormula).includes(target)) {
        inferred.push(oxygenReaction);
      }

      const sulfurReaction = inferMetalSulfurReaction(metal);
      if (sulfurReaction && sulfurReaction.products.map(normalizeFormula).includes(target)) {
        inferred.push(sulfurReaction);
      }

      ionicCompounds.forEach((salt) => {
        const displacement = inferMetalSaltDisplacement(metal, salt);
        if (displacement && displacement.products.map(normalizeFormula).includes(target)) {
          inferred.push(displacement);
        }
      });

      const valence = commonMetalValence[metal];
      if (valence) {
        const oxide = buildSaltFormula(metal, valence, "O", 2);
        const baseFromOxide = inferBasicOxideWaterReaction(oxide);
        if (baseFromOxide && baseFromOxide.products.map(normalizeFormula).includes(target)) {
          inferred.push(baseFromOxide);
        }
      }
    });

    Object.keys(nonMetalOxideMap).forEach((nonMetal) => {
      const oxidation = inferNonMetalOxidationReaction(nonMetal, "O2");
      if (oxidation && oxidation.products.map(normalizeFormula).includes(target)) {
        inferred.push(oxidation);
      }
    });

    ionicCompounds.forEach((left) => {
      acids.forEach((acidKey) => {
        const acidFormula = acidProfiles[acidKey].formula;
        const carbonateAcid = inferCarbonateAcidReaction(left, acidFormula);
        if (carbonateAcid && carbonateAcid.products.map(normalizeFormula).includes(target)) {
          inferred.push(carbonateAcid);
        }
      });
    });

    for (let i = 0; i < ionicCompounds.length; i += 1) {
      for (let j = i + 1; j < ionicCompounds.length; j += 1) {
        const precipitation = inferDoubleReplacementPrecipitation(ionicCompounds[i], ionicCompounds[j]);
        if (precipitation && precipitation.products.map(normalizeFormula).includes(target)) {
          inferred.push(precipitation);
        }
      }
    }
  }

  return inferred;
}

function setMode(nextMode) {
  mode = nextMode;
  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === nextMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (nextMode === "reactants") {
    queryLabel.textContent = "Nhập chất phản ứng (ngăn cách bằng dấu phẩy)";
    queryInput.placeholder = "Ví dụ: NaOH, HCl";
  } else {
    queryLabel.textContent = "Nhập chất tạo thành cần tra cứu ngược";
    queryInput.placeholder = "Ví dụ: NaCl, H2O";
  }

  queryInput.value = "";
  showEmpty("Hãy nhập chất để bắt đầu tra cứu.");
}

function matchesForward(reaction, queryTerms) {
  const source = reaction.reactants.map(normalizeFormula);
  return queryTerms.every((term) => {
    const variants = buildFormulaVariants(term);
    return variants.some((candidate) => source.includes(candidate));
  });
}

function matchesReverse(reaction, queryTerms) {
  const source = reaction.products.map(normalizeFormula);
  return queryTerms.every((term) => {
    const variants = buildFormulaVariants(term);
    return variants.some((candidate) => source.includes(candidate));
  });
}

function formatChemicalText(text) {
  return String(text).replace(/(\)|[A-Za-z])([0-9]+)/g, "$1<sub>$2</sub>");
}

function formatEquationText(text) {
  return formatChemicalText(text).replace(/->/g, "→");
}

async function copyEquationToClipboard(text) {
  const safeText = String(text).replace(/<[^>]*>/g, "");

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(safeText);
      return true;
    }

    const helper = document.createElement("textarea");
    helper.value = safeText;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(helper);
    return ok;
  } catch (error) {
    console.error("Copy failed:", error);
    return false;
  }
}

function getReactionInsight(reaction) {
  if (reaction.source !== "curated") {
    return {
      type: reaction.source === "matrix-advanced" ? "Phản ứng suy luận nâng cao" : "Phản ứng tổng hợp theo quy tắc",
      condition: reaction.source === "matrix-advanced"
        ? "Có thể cần điều kiện đặc biệt (đặc, nóng hoặc kiểm soát môi trường phản ứng)."
        : "Kết quả suy luận từ dãy hoạt động, hóa trị và quy tắc axit-bazơ phổ thông.",
      observation: reaction.note,
      caution: "Nên đối chiếu thêm điều kiện thực nghiệm (nồng độ, nhiệt độ)."
    };
  }

  const direct = reactionInsights[reaction.equation];
  if (direct) {
    return direct;
  }

  const reactants = reaction.reactants.map(normalizeFormula);
  const products = reaction.products.map(normalizeFormula);
  const hasAcid = reactants.some((item) => ["HCL", "H2SO4", "HNO3"].includes(item));
  const hasHydroxide = reactants.some((item) => item.includes("OH"));
  const hasCarbonate = reactants.some((item) => item.includes("CO3"));
  const hasGasH2 = products.includes("H2");

  if (hasAcid && hasGasH2) {
    return {
      type: "Phản ứng thế",
      condition: "Axit loãng, thường ở nhiệt độ thường.",
      observation: "Kim loại tan dần và có khí H2 không màu thoát ra.",
      caution: "Khí H2 dễ cháy, tránh nguồn lửa."
    };
  }

  if (hasHydroxide && hasAcid) {
    return {
      type: "Trung hòa axit-bazơ",
      condition: "Dung dịch trong nước.",
      observation: "Tạo muối và nước; có thể kèm tỏa nhiệt nhẹ.",
      caution: "Pha trộn từ từ để tránh bắn dung dịch."
    };
  }

  if (hasCarbonate && hasAcid) {
    return {
      type: "Trao đổi (muối cacbonat + axit)",
      condition: "Trong dung dịch.",
      observation: "Sủi bọt khí CO2.",
      caution: "Dùng ống dẫn khí khi cần thu CO2."
    };
  }

  return {
    type: "Phản ứng vô cơ",
    condition: "Theo điều kiện chuẩn trong chương trình phổ thông (xem mục Ghi chú của phản ứng).",
    observation: reaction.note,
    caution: "Tuân thủ an toàn hóa chất khi thí nghiệm."
  };
}

function scoreReaction(reaction, queryTerms) {
  const reactantsNorm = reaction.reactants.map(normalizeFormula);
  const productsNorm = reaction.products.map(normalizeFormula);
  const termNorm = queryTerms.map(normalizeFormula);

  if (mode === "reactants") {
    const exactCount = reactantsNorm.length === termNorm.length && termNorm.every((term) => reactantsNorm.includes(term));
    return exactCount ? 100 : (termNorm.filter((term) => reactantsNorm.includes(term)).length * 10 - reactantsNorm.length);
  }

  const exactCount = productsNorm.length === termNorm.length && termNorm.every((term) => productsNorm.includes(term));
  return exactCount ? 100 : (termNorm.filter((term) => productsNorm.includes(term)).length * 10 - productsNorm.length);
}

function buildReactionKey(reaction) {
  const reactantsKey = reaction.reactants.map(normalizeFormula).sort().join("+");
  const productsKey = reaction.products.map(normalizeFormula).sort().join("+");
  return `${reactantsKey}->${productsKey}`;
}

function renderReactionCard(reaction) {
  const fragment = cardTemplate.content.cloneNode(true);
  fragment.querySelector(".reaction-equation").innerHTML = formatEquationText(reaction.equation);

  const copyBtn = fragment.querySelector(".copy-btn");
  copyBtn.dataset.copyText = reaction.equation;
  copyBtn.addEventListener("click", async () => {
    const ok = await copyEquationToClipboard(reaction.equation);
    if (ok) {
      copyBtn.textContent = "Đã sao chép";
      copyBtn.classList.add("copied");
      window.setTimeout(() => {
        copyBtn.textContent = "Sao chép";
        copyBtn.classList.remove("copied");
      }, 1200);
    }
  });

  const levelNode = fragment.querySelector(".reaction-level");
  levelNode.classList.add(reaction.level);
  levelNode.textContent = reactionLevels[reaction.level] || "Lớp 10-12";

  const sourceNode = fragment.querySelector(".reaction-origin");
  const sourceText = sourceLabel[reaction.source] || "Suy luận";
  const confidenceText = confidenceLabel[reaction.confidence] || "Trung bình";
  sourceNode.textContent = `${sourceText} | Tin cậy: ${confidenceText}`;

  const insight = getReactionInsight(reaction);

  const reactantsRoot = fragment.querySelector(".chip-list.reactants");
  reaction.reactants.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip reactant";
    chip.innerHTML = formatChemicalText(item);
    reactantsRoot.appendChild(chip);
  });

  const productsRoot = fragment.querySelector(".chip-list.products");
  reaction.products.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip product";
    chip.innerHTML = formatChemicalText(item);
    productsRoot.appendChild(chip);
  });

  fragment.querySelector(".reaction-note").textContent = `Ghi chú: ${reaction.note}`;

  const detailList = document.createElement("ul");
  detailList.className = "reaction-detail-list";
  detailList.innerHTML = [
    `<li><strong>Loại phản ứng:</strong> ${insight.type}</li>`,
    `<li><strong>Điều kiện:</strong> ${insight.condition}</li>`,
    `<li><strong>Hiện tượng:</strong> ${insight.observation}</li>`,
    `<li><strong>Lưu ý an toàn:</strong> ${insight.caution}</li>`
  ].join("");
  fragment.querySelector(".reaction-card").appendChild(detailList);

  resultsRoot.appendChild(fragment);
}

function renderPathwayCard(pathway) {
  const card = document.createElement("article");
  card.className = "reaction-card";
  const steps = pathway.steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
  card.innerHTML = `
    <p class="reaction-equation">Lộ trình nhiều bước: ${pathway.title}</p>
    <p class="reaction-level advanced">Nâng cao / ngoại lệ</p>
    <div class="reaction-flow">
      <div>
        <p class="flow-label">Các bước gợi ý</p>
        <pre class="pathway-steps">${formatEquationText(steps)}</pre>
      </div>
      <div>
        <p class="flow-label">Kết luận</p>
        <p class="reaction-note">${pathway.conclusion}</p>
      </div>
    </div>
    <p class="reaction-note">${pathway.note}</p>
  `;
  resultsRoot.appendChild(card);
}

function buildIndirectPathways(queryTerms) {
  if (mode !== "reactants" || queryTerms.length !== 2) {
    return [];
  }

  const [leftRaw, rightRaw] = queryTerms;
  const left = canonicalizeTerm(leftRaw);
  const right = canonicalizeTerm(rightRaw);
  const leftUp = normalizeFormula(left);
  const rightUp = normalizeFormula(right);

  const waterReactiveMetal = activeMetalsWithWater.has(left) ? left : (activeMetalsWithWater.has(right) ? right : "");
  const saltCandidate = waterReactiveMetal
    ? (waterReactiveMetal === left ? right : left)
    : "";
  const saltInfo = saltCandidate ? getIonicCompoundInfo(saltCandidate) : null;

  if (waterReactiveMetal && saltInfo && isMetalSymbol(saltInfo.cation)) {
    const hydroxide = commonMetalValence[waterReactiveMetal] === 1
      ? `${waterReactiveMetal}OH`
      : `${waterReactiveMetal}(OH)${commonMetalValence[waterReactiveMetal]}`;
    const step1 = inferMetalWaterReaction(waterReactiveMetal);
    const step2 = inferDoubleReplacementPrecipitation(hydroxide, canonicalizeTerm(saltCandidate));

    if (step1 && step2) {
      const precipitates = step2.products.filter((formula) => {
        const info = getIonicCompoundInfo(formula);
        return info ? isLikelyInsoluble(info.cation, info.anion) : false;
      });

      return [
        {
          title: `${waterReactiveMetal} + ${canonicalizeTerm(saltCandidate)} trong dung dịch nước`,
          steps: [step1.equation, step2.equation],
          conclusion: `Trong dung dịch nước, ${waterReactiveMetal} phản ứng trước với nước tạo ${hydroxide}, sau đó ${hydroxide} phản ứng trao đổi với ${canonicalizeTerm(saltCandidate)}.`,
          note: precipitates.length
            ? `Sản phẩm kết tủa ưu tiên quan sát: ${precipitates.join(", ")}.`
            : "Cần kiểm tra độ tan sản phẩm theo bảng tính tan để kết luận hiện tượng."
        }
      ];
    }
  }

  const metal = veryReactiveMetalsInWater.has(left) ? left : (veryReactiveMetalsInWater.has(right) ? right : "");
  const acid = acidFormingAnions[leftUp] ? leftUp : (acidFormingAnions[rightUp] ? rightUp : "");

  if (!metal || !acid) {
    return [];
  }

  const anion = acidFormingAnions[acid];
  const hydroxide = `${metal}OH`;
  const salt = `${metal}${anion}`;

  return [
    {
      title: `${metal} + ${acid} trong môi trường nước`,
      steps: [
        `2${metal} + 2H2O -> 2${hydroxide} + H2`,
        `${hydroxide} + ${acid} -> ${salt} + H2O`
      ],
      conclusion: `Nếu xét môi trường dung dịch, ${metal} ưu tiên phản ứng trước với nước, sau đó bazơ tạo thành trung hòa axit.`,
      note: `Phản ứng thực tế rất mãnh liệt, cần lưu ý an toàn thí nghiệm. Với ${metal} + ${acid}, có thể thấy như một chuỗi phản ứng liên tiếp.`
    }
  ];
}

function showEmpty(text, extraNote = "") {
  resultsRoot.innerHTML = "";

  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = text;
  resultsRoot.appendChild(empty);

  if (extraNote) {
    const note = document.createElement("div");
    note.className = "empty-state note";
    note.textContent = extraNote;
    resultsRoot.appendChild(note);
  }

  resultMeta.textContent = "Chưa có kết quả.";
}

function setGradeFilter(nextFilter) {
  gradeFilter = nextFilter;
  gradeButtons.forEach((button) => {
    const isActive = button.dataset.grade === nextFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (nextFilter === "all") {
    gradeHint.textContent = "Đang hiển thị: tất cả phản ứng trong ngân hàng dữ liệu.";
  } else if (nextFilter === "grade89") {
    gradeHint.textContent = "Đang hiển thị: phản ứng nền tảng phù hợp chương trình lớp 8-9.";
  } else if (nextFilter === "grade1012") {
    gradeHint.textContent = "Đang hiển thị: phản ứng trọng tâm chương trình lớp 10-12.";
  } else {
    gradeHint.textContent = "Đang hiển thị: phản ứng nâng cao, có điều kiện đặc biệt hoặc ngoại lệ quan trọng.";
  }
}

function detectNoReactionReason(queryTerms) {
  if (queryTerms.length !== 2) {
    return "";
  }

  const acids = ["HCL", "H2SO4", "HNO3"];
  const [a, b] = queryTerms.map(normalizeFormula);
  const acid = acids.includes(a) ? a : (acids.includes(b) ? b : "");
  if (!acid) {
    return "";
  }

  const metalTerm = acid === a ? queryTerms[1] : queryTerms[0];
  const metal = canonicalizeTerm(metalTerm);
  const rank = activityRank[metal];

  if (metal === "Fe" && (acid === "HNO3" || acid === "H2SO4")) {
    return `Gợi ý: Fe có thể bị thụ động hóa trong ${acid} đặc, nguội; nếu ${acid} đặc, nóng hoặc môi trường oxi hóa mạnh thì phản ứng có thể xảy ra với khí SO2/NO2.`;
  }

  if (rank === undefined || rank >= activityRank.H) {
    return `Gợi ý: ${metal} đứng sau H trong dãy hoạt động nên thường không phản ứng với ${acid} loãng (ví dụ Cu + HCl).`;
  }

  return `Gợi ý: ${metal} đứng trước H nên có thể phản ứng với ${acid} loãng. Bạn thử tìm bằng đúng dạng chất (ví dụ ${metal}, ${acid}) hoặc thêm điều kiện phản ứng.`;
}

function search(queryText) {
  const terms = parseQuery(queryText);
  if (!terms.length) {
    showEmpty("Hãy nhập tối thiểu 1 chất để tra cứu.");
    return;
  }

  const baseResults = inorganicReactions.filter((reaction) => (
    (gradeFilter === "all" || reaction.level === gradeFilter) &&
    (mode === "reactants" ? matchesForward(reaction, terms) : matchesReverse(reaction, terms))
  ));

  const inferredResults = inferReactions(terms, mode).filter((reaction) => (
    gradeFilter === "all" || reaction.level === gradeFilter
  ));

  const mergedMap = new Map();
  [...baseResults, ...inferredResults].forEach((reaction) => {
    const key = buildReactionKey(reaction);
    if (!mergedMap.has(key)) {
      mergedMap.set(key, reaction);
      return;
    }

    const existing = mergedMap.get(key);
    const existingPriority = sourcePriority[existing.source] || 0;
    const incomingPriority = sourcePriority[reaction.source] || 0;
    if (incomingPriority > existingPriority) {
      mergedMap.set(key, reaction);
    }
  });

  const results = [...mergedMap.values()].sort((a, b) => {
    const scoreDelta = scoreReaction(b, terms) - scoreReaction(a, terms);
    if (scoreDelta !== 0) {
      return scoreDelta;
    }
    return (sourcePriority[b.source] || 0) - (sourcePriority[a.source] || 0);
  });
  const pathways = buildIndirectPathways(terms);

  resultsRoot.innerHTML = "";
  if (!results.length && !pathways.length) {
    resultMeta.textContent = `0 kết quả cho: ${terms.join(", ")}`;
    const reason = mode === "reactants" ? detectNoReactionReason(terms) : "";
    showEmpty("Không tìm thấy phản ứng phù hợp. Hãy thử chất khác, ít chất hơn, hoặc đổi chế độ tra cứu.", reason);
    return;
  }

  const total = results.length + pathways.length;
  resultMeta.textContent = `${total} kết quả cho: ${terms.join(", ")}`;
  results.forEach(renderReactionCard);
  pathways.forEach(renderPathwayCard);
}

function switchModule(nextModule) {
  moduleTabs.forEach((tab) => {
    const isActive = tab.dataset.module === nextModule;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  Object.entries(modulePanels).forEach(([key, panel]) => {
    if (panel) {
      panel.classList.toggle("is-hidden", key !== nextModule);
    }
  });

  if (moduleNav) {
    moduleNav.classList.toggle("is-hidden", nextModule === "physics" || nextModule === "math" || nextModule === "organic");
  }

  const subjectKey = nextModule === "physics" ? "physics" : nextModule === "math" ? "math" : nextModule === "organic" ? "organic" : "chemistry";
  subjectButtons.forEach((button) => {
    const isActive = button.dataset.subject === subjectKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function getFilteredOrganicTopics() {
  const rawQuery = (organicSearchInput?.value || "").trim();
  if (!rawQuery) {
    return organicKnowledgeBase;
  }

  const normalizedQuery = normalizeSearchText(rawQuery);
  const queryTerms = normalizedQuery
    .split(/[\s,;]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  return [...organicKnowledgeBase]
    .map((topic) => {
      const haystack = [
        topic.title,
        topic.summary,
        topic.explanation,
        topic.formula,
        topic.lesson,
        ...(topic.tags || []),
        ...(topic.aliases || [])
      ].join(" ");
      const normalizedHaystack = normalizeSearchText(haystack);
      const matchScore = queryTerms.reduce((total, term) => total + (normalizedHaystack.includes(normalizeSearchText(term)) ? 1 : 0), 0);
      return { topic, score: matchScore + (normalizedHaystack.includes(normalizedQuery) ? 2 : 0) };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ topic }) => topic);
}

function renderOrganicTopics() {
  if (!organicResults) {
    return;
  }

  const topics = getFilteredOrganicTopics();
  organicResults.innerHTML = "";

  if (!topics.length) {
    organicResults.innerHTML = "<div class=\"empty-state\">Không tìm thấy chủ đề Hóa hữu cơ phù hợp. Hãy thử: metan, etilen, rượu etylic, axit axetic, protein.</div>";
    return;
  }

  topics.forEach((topic) => {
    const card = document.createElement("article");
    card.className = "physics-card";

    const keyPointsHtml = (topic.keyPoints || [])
      .map((point) => `<li>${point}</li>`)
      .join("");

    const tagsHtml = (topic.tags || [])
      .map((tag) => `<span class=\"physics-tag\">${tag}</span>`)
      .join("");

    const formulaHtml = topic.formula && topic.formula !== "-"
      ? `<p class="physics-formula">${topic.formula}</p>`
      : "";

    card.innerHTML = `
      <p class="physics-meta">Lớp ${topic.grade} | ${topic.chapter} | ${subjectTypeLabels[topic.type] || topic.type}</p>
      <h3>${topic.title}</h3>
      <div class="physics-detail-stack">
        <div class="physics-detail-block">
          <p class="physics-detail-label">Khái niệm</p>
          <p>${topic.summary}</p>
        </div>
        <div class="physics-detail-block">
          <p class="physics-detail-label">Giải thích</p>
          <p>${topic.explanation}</p>
        </div>
        <div class="physics-detail-block">
          <p class="physics-detail-label">Điểm cần nhớ</p>
          <ul class="physics-bullets">${keyPointsHtml}</ul>
        </div>
      </div>
      ${formulaHtml}
      <div class="physics-tags">${tagsHtml}</div>
    `;

    organicResults.appendChild(card);
  });
}

function getFilteredPhysicsTopics() {
  const rawQuery = (physicsSearchInput?.value || "").trim();
  const queryTerms = expandPhysicsQueryTerms(rawQuery);

  const filtered = physicsKnowledgeBaseEnhanced.filter((topic) => {
    const matchGrade = physicsGradeFilter === "all" || topic.grade === physicsGradeFilter;
    const matchType = physicsTypeFilter === "all" || topic.type === physicsTypeFilter;
    if (!matchGrade || !matchType) {
      return false;
    }

    if (!rawQuery) {
      return true;
    }

    const haystack = [
      topic.title,
      topic.summary,
      topic.explanation || "",
      topic.formula || "",
      topic.chapter,
      topic.lesson || "",
      ...(topic.tags || []),
      ...(topic.aliases || [])
    ].join(" ");
    const normalizedHaystack = normalizeSearchText(haystack);
    return queryTerms.some((term) => normalizedHaystack.includes(term));
  });

  return filtered
    .map((topic, index) => ({
      topic,
      index,
      score: scorePhysicsTopic(topic, queryTerms, rawQuery)
    }))
    .sort((a, b) => {
      const scoreDelta = b.score - a.score;
      if (scoreDelta !== 0) {
        return scoreDelta;
      }

      const chapterDelta = physicsChapterOrder.indexOf(a.topic.chapter) - physicsChapterOrder.indexOf(b.topic.chapter);
      if (chapterDelta !== 0) {
        return chapterDelta;
      }

      return a.index - b.index;
    })
    .map((entry) => entry.topic);
}

function renderPhysicsMap(topics) {
  if (!physicsMap) {
    return;
  }

  const countByChapter = new Map();
  topics.forEach((topic) => {
    countByChapter.set(topic.chapter, (countByChapter.get(topic.chapter) || 0) + 1);
  });

  physicsMap.innerHTML = "";
  physicsChapterOrder.forEach((chapter) => {
    const count = countByChapter.get(chapter) || 0;
    if (!count) {
      return;
    }
    const card = document.createElement("article");
    card.className = "physics-map-card";
    card.innerHTML = `<h3>${chapter}</h3><p>${count} mục kiến thức phù hợp bộ lọc hiện tại.</p>`;
    physicsMap.appendChild(card);
  });
}

function renderPhysicsResults() {
  if (!physicsResults) {
    return;
  }

  const topics = getFilteredPhysicsTopics();
  renderPhysicsMap(topics);
  physicsResults.innerHTML = "";

  if (!topics.length) {
    physicsResults.innerHTML = "<div class=\"empty-state\">Không tìm thấy mục kiến thức phù hợp. Bạn thử đổi từ khóa hoặc bộ lọc.</div>";
    return;
  }

  topics.forEach((topic) => {
    const card = document.createElement("article");
    card.className = "physics-card";

    const tagsHtml = (topic.tags || [])
      .map((tag) => `<span class=\"physics-tag\">${tag}</span>`)
      .join("");

    const explanation = topic.explanation || topic.summary || `Nội dung ${topic.title} thuộc phần ${topic.chapter}.`;
    const keyPoints = Array.isArray(topic.keyPoints) && topic.keyPoints.length
      ? topic.keyPoints
      : [
        topic.summary || `Khái niệm trọng tâm của ${topic.title}.`,
        topic.formula ? `Công thức liên quan: ${topic.formula}` : `Hãy ghi nhớ đặc điểm chính của ${topic.title}.`,
        `Mẹo ôn tập: liên hệ ${topic.title.toLowerCase()} với ví dụ thực tế trong đời sống và bài tập tương ứng.`
      ];
    const examples = Array.isArray(topic.examples) && topic.examples.length
      ? topic.examples
      : (topic.example ? [topic.example] : []);
    const memoryTip = topic.memoryTip || `Mẹo nhớ: hãy nối ${topic.title.toLowerCase()} với mẫu câu hỏi thường gặp trong phần ${topic.chapter}.`;
    const lessonHtml = topic.lesson ? `<div class="physics-detail-block"><p class="physics-detail-label">Bài học SGK</p><p>${topic.lesson}</p></div>` : "";

    const bulletsHtml = keyPoints.map((point) => `<li>${point}</li>`).join("");
    const examplesHtml = examples.length
      ? `<div class="physics-detail-block"><p class="physics-detail-label">Ví dụ</p><p class="physics-example">${examples[0]}</p></div>`
      : "";

    card.innerHTML = `
      <p class="physics-meta">Lớp ${topic.grade} | ${topic.chapter} | ${physicsTypeLabels[topic.type] || topic.type}</p>
      <h3>${topic.title}</h3>
      <div class="physics-detail-stack">
        <div class="physics-detail-block">
          <p class="physics-detail-label">Khái niệm</p>
          <p>${explanation}</p>
        </div>
        ${lessonHtml}
        <div class="physics-detail-block">
          <p class="physics-detail-label">Điểm cần nhớ</p>
          <ul class="physics-bullets">${bulletsHtml}</ul>
        </div>
        ${examplesHtml}
        <div class="physics-detail-block">
          <p class="physics-detail-label">Mẹo ghi nhớ</p>
          <p>${memoryTip}</p>
        </div>
      </div>
      ${topic.formula ? `<p class="physics-formula">${topic.formula}</p>` : ""}
      <div class="physics-tags">${tagsHtml}</div>
    `;
    physicsResults.appendChild(card);
  });
}

function getFilteredMathTopics() {
  const rawQuery = (mathSearchInput?.value || "").trim();
  const queryTerms = expandMathQueryTerms(rawQuery);

  const filtered = mathKnowledgeBase.filter((topic) => {
    const matchGrade = mathGradeFilter === "all" || topic.grade === mathGradeFilter;
    const matchType = mathTypeFilter === "all" || topic.type === mathTypeFilter;
    const matchProblemLevel = mathProblemLevelFilter === "all"
      || topic.type !== "problem"
      || topic.level === mathProblemLevelFilter;

    if (!matchGrade || !matchType || !matchProblemLevel) {
      return false;
    }

    if (!rawQuery) {
      return true;
    }

    const typeLabel = subjectTypeLabels[topic.type] || topic.type;
    const levelLabel = topic.type === "problem" ? (mathProblemLevelLabels[topic.level] || "") : "";
    const haystack = [
      topic.title,
      topic.summary,
      topic.explanation || "",
      topic.formula || "",
      topic.chapter,
      topic.lesson || "",
      typeLabel,
      levelLabel,
      ...(topic.tags || []),
      ...(topic.aliases || [])
    ].join(" ");
    const normalizedHaystack = normalizeSearchText(haystack);
    return queryTerms.some((term) => normalizedHaystack.includes(term));
  });

  return filtered
    .map((topic, index) => ({
      topic,
      index,
      score: scoreMathTopic(topic, queryTerms, rawQuery)
    }))
    .sort((a, b) => {
      const scoreDelta = b.score - a.score;
      if (scoreDelta !== 0) {
        return scoreDelta;
      }

      const chapterDelta = mathChapterOrder.indexOf(a.topic.chapter) - mathChapterOrder.indexOf(b.topic.chapter);
      if (chapterDelta !== 0) {
        return chapterDelta;
      }

      return a.index - b.index;
    })
    .map((entry) => entry.topic);
}

function renderMathMap(topics) {
  if (!mathMap) {
    return;
  }

  const countByChapter = new Map();
  topics.forEach((topic) => {
    countByChapter.set(topic.chapter, (countByChapter.get(topic.chapter) || 0) + 1);
  });

  mathMap.innerHTML = "";
  mathChapterOrder.forEach((chapter) => {
    const count = countByChapter.get(chapter) || 0;
    if (!count) {
      return;
    }
    const card = document.createElement("article");
    card.className = "physics-map-card";
    card.innerHTML = `<h3>${chapter}</h3><p>${count} mục kiến thức phù hợp bộ lọc hiện tại.</p>`;
    mathMap.appendChild(card);
  });
}

function updateMathLessonNavigator(total) {
  const safeTotal = Math.max(total, 0);
  if (!safeTotal) {
    if (mathLessonIndicator) {
      mathLessonIndicator.textContent = "Không có bài phù hợp";
    }
    if (mathPrevLessonBtn) {
      mathPrevLessonBtn.disabled = true;
    }
    if (mathNextLessonBtn) {
      mathNextLessonBtn.disabled = true;
    }
    return;
  }

  if (mathLessonIndicator) {
    mathLessonIndicator.textContent = `Bài ${mathLessonCursor + 1}/${safeTotal}`;
  }

  if (mathPrevLessonBtn) {
    mathPrevLessonBtn.disabled = mathLessonCursor <= 0;
  }
  if (mathNextLessonBtn) {
    mathNextLessonBtn.disabled = mathLessonCursor >= safeTotal - 1;
  }
}

function focusCurrentMathLesson() {
  const cards = [...(mathResults?.querySelectorAll(".physics-card") || [])];
  cards.forEach((card, idx) => {
    card.classList.toggle("math-active-lesson", idx === mathLessonCursor);
  });

  const activeCard = cards[mathLessonCursor];
  if (activeCard) {
    activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function initMathPracticeChapterOptions() {
  if (!mathPracticeChapterSelect) {
    return;
  }

  mathPracticeChapterSelect.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Tất cả chương";
  mathPracticeChapterSelect.appendChild(allOption);

  mathChapterOrder.forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter;
    option.textContent = chapter;
    mathPracticeChapterSelect.appendChild(option);
  });
}

function initPhysicsPracticeChapterOptions() {
  if (!physicsPracticeChapterSelect) {
    return;
  }

  physicsPracticeChapterSelect.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Tất cả chương";
  physicsPracticeChapterSelect.appendChild(allOption);

  physicsChapterOrder.forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter;
    option.textContent = chapter;
    physicsPracticeChapterSelect.appendChild(option);
  });
}

function getFilteredMathPracticeSets() {
  const selectedChapter = mathPracticeChapterSelect?.value || "all";
  return mathPracticeSets.filter((item) => {
    const matchGrade = mathPracticeGradeFilter === "all" || item.grade === mathPracticeGradeFilter;
    const matchLevel = mathPracticeLevelFilter === "all" || item.level === mathPracticeLevelFilter;
    const matchChapter = selectedChapter === "all" || item.chapter === selectedChapter;
    return matchGrade && matchLevel && matchChapter;
  });
}

function getFilteredPhysicsPracticeSets() {
  const selectedChapter = physicsPracticeChapterSelect?.value || "all";
  return physicsPracticeSets.filter((item) => {
    const matchGrade = physicsPracticeGradeFilter === "all" || item.grade === physicsPracticeGradeFilter;
    const matchLevel = physicsPracticeLevelFilter === "all" || item.level === physicsPracticeLevelFilter;
    const matchChapter = selectedChapter === "all" || item.chapter === selectedChapter;
    return matchGrade && matchLevel && matchChapter;
  });
}

function renderMathPracticeSets() {
  if (!mathPracticeResults) {
    return;
  }

  const sets = getFilteredMathPracticeSets();
  mathPracticeResults.innerHTML = "";

  if (!sets.length) {
    mathPracticeResults.innerHTML = "<div class=\"empty-state\">Chưa có bộ đề phù hợp bộ lọc hiện tại.</div>";
    return;
  }

  sets.forEach((item) => {
    const card = document.createElement("article");
    card.className = "physics-card";

    const tagsHtml = (item.tags || [])
      .map((tag) => `<span class=\"physics-tag\">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <p class="physics-meta">Lớp ${item.grade} | ${item.chapter} | ${mathProblemLevelLabels[item.level] || item.level}</p>
      <h3>${item.title}</h3>
      <div class="physics-detail-stack">
        <div class="physics-detail-block">
          <p class="physics-detail-label">Đề bài</p>
          <p>${item.question}</p>
        </div>
        <div class="physics-detail-block">
          <p class="physics-detail-label">Gợi ý</p>
          <p>${item.hint}</p>
        </div>
        <div class="physics-detail-block">
          <p class="physics-detail-label">Nguồn kiến thức</p>
          <p>${item.sourceLesson}</p>
        </div>
      </div>
      <div class="physics-detail-block">
        <p class="physics-detail-label">Câu trả lời của em</p>
        <textarea class="math-answer-input" rows="3" placeholder="Nhập cách làm hoặc đáp án chính của em..."></textarea>
        <button type="button" class="math-check-btn">Chấm nhanh</button>
        <p class="math-check-feedback"></p>
      </div>
      <details class="math-practice-answer">
        <summary>Xem đáp án mẫu</summary>
        <p>${item.answer}</p>
      </details>
      <div class="physics-tags">${tagsHtml}</div>
    `;

    const checkBtn = card.querySelector(".math-check-btn");
    const answerInput = card.querySelector(".math-answer-input");
    const feedback = card.querySelector(".math-check-feedback");
    if (checkBtn && answerInput && feedback) {
      checkBtn.addEventListener("click", () => applyQuickGrading(answerInput.value, item.expectedKeywords || [], feedback));
    }

    mathPracticeResults.appendChild(card);
  });
}

function renderPhysicsPracticeSets() {
  if (!physicsPracticeResults) {
    return;
  }

  const sets = getFilteredPhysicsPracticeSets();
  physicsPracticeResults.innerHTML = "";

  if (!sets.length) {
    physicsPracticeResults.innerHTML = "<div class=\"empty-state\">Chưa có bộ đề phù hợp bộ lọc hiện tại.</div>";
    return;
  }

  sets.forEach((item) => {
    const card = document.createElement("article");
    card.className = "physics-card";

    const tagsHtml = ["luyện tập", item.chapter, `lớp ${item.grade}`, mathProblemLevelLabels[item.level] || item.level]
      .map((tag) => `<span class=\"physics-tag\">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <p class="physics-meta">Lớp ${item.grade} | ${item.chapter} | ${mathProblemLevelLabels[item.level] || item.level}</p>
      <h3>${item.title}</h3>
      <div class="physics-detail-stack">
        <div class="physics-detail-block">
          <p class="physics-detail-label">Đề bài</p>
          <p>${item.question}</p>
        </div>
        <div class="physics-detail-block">
          <p class="physics-detail-label">Gợi ý</p>
          <p>${item.hint}</p>
        </div>
        <div class="physics-detail-block">
          <p class="physics-detail-label">Nguồn kiến thức</p>
          <p>${item.sourceLesson || "SGK Vật lý 8-9"}</p>
        </div>
      </div>
      <div class="physics-detail-block">
        <p class="physics-detail-label">Câu trả lời của em</p>
        <textarea class="math-answer-input" rows="3" placeholder="Nhập cách làm hoặc đáp án chính của em..."></textarea>
        <button type="button" class="math-check-btn">Chấm nhanh</button>
        <p class="math-check-feedback"></p>
      </div>
      <details class="math-practice-answer">
        <summary>Xem đáp án mẫu</summary>
        <p>${item.answer}</p>
      </details>
      <div class="physics-tags">${tagsHtml}</div>
    `;

    const checkBtn = card.querySelector(".math-check-btn");
    const answerInput = card.querySelector(".math-answer-input");
    const feedback = card.querySelector(".math-check-feedback");
    if (checkBtn && answerInput && feedback) {
      checkBtn.addEventListener("click", () => applyQuickGrading(answerInput.value, item.expectedKeywords || [], feedback));
    }

    physicsPracticeResults.appendChild(card);
  });
}

function applyQuickGrading(userAnswer, expectedKeywords, feedbackNode) {
  const userText = normalizeSearchText(userAnswer);
  const expected = expectedKeywords.map((key) => normalizeSearchText(key));
  if (!userText) {
    feedbackNode.textContent = "Bạn chưa nhập câu trả lời để chấm.";
    return;
  }

  const matched = expected.filter((key) => key && userText.includes(key));
  const ratio = expected.length ? (matched.length / expected.length) : 0;
  if (ratio >= 0.65) {
    feedbackNode.textContent = `Kết quả: Tốt (${matched.length}/${expected.length} ý chính khớp). Bạn có thể đối chiếu thêm đáp án mẫu để hoàn thiện trình bày.`;
  } else if (ratio >= 0.35) {
    feedbackNode.textContent = `Kết quả: Đạt một phần (${matched.length}/${expected.length} ý chính). Gợi ý: bổ sung các ý còn thiếu rồi chấm lại.`;
  } else {
    feedbackNode.textContent = "Kết quả: Chưa đạt. Hãy xem gợi ý và đáp án mẫu, sau đó viết lại lời giải theo từng bước.";
  }
}

function renderMathResults() {
  if (!mathResults) {
    return;
  }

  const topics = getFilteredMathTopics();
  renderMathMap(topics);
  mathResults.innerHTML = "";

  if (!topics.length) {
    mathCurrentTopicIds = [];
    mathLessonCursor = 0;
    updateMathLessonNavigator(0);
    mathResults.innerHTML = "<div class=\"empty-state\">Không tìm thấy mục kiến thức phù hợp. Bạn thử đổi từ khóa hoặc bộ lọc.</div>";
    return;
  }

  mathCurrentTopicIds = topics.map((topic) => topic.id);
  mathLessonCursor = Math.max(0, Math.min(mathLessonCursor, mathCurrentTopicIds.length - 1));
  updateMathLessonNavigator(mathCurrentTopicIds.length);

  topics.forEach((topic, index) => {
    const card = document.createElement("article");
    card.className = "physics-card";
    card.dataset.topicId = topic.id;
    card.classList.toggle("math-active-lesson", index === mathLessonCursor);
    card.addEventListener("click", () => {
      mathLessonCursor = index;
      updateMathLessonNavigator(mathCurrentTopicIds.length);
      focusCurrentMathLesson();
    });

    const tagsHtml = (topic.tags || [])
      .map((tag) => `<span class=\"physics-tag\">${tag}</span>`)
      .join("");

    const explanation = topic.explanation || topic.summary || `Nội dung ${topic.title} thuộc phần ${topic.chapter}.`;
    const keyPoints = Array.isArray(topic.keyPoints) && topic.keyPoints.length
      ? topic.keyPoints
      : [
        topic.summary || `Khái niệm trọng tâm của ${topic.title}.`,
        topic.formula ? `Công thức liên quan: ${topic.formula}` : `Hãy ghi nhớ đặc điểm chính của ${topic.title}.`,
        `Mẹo ôn tập: liên hệ ${topic.title.toLowerCase()} với dạng bài thường gặp.`
      ];
    const example = topic.example || "";
    const memoryTip = topic.memoryTip || `Mẹo nhớ: hãy nối ${topic.title.toLowerCase()} với phép suy luận và dạng bài có liên quan.`;
    const problemLevel = topic.type === "problem" ? (mathProblemLevelLabels[topic.level] || "Dạng bài") : "";
    const bulletsHtml = keyPoints.map((point) => `<li>${point}</li>`).join("");
    const exampleHtml = example ? `<div class="physics-detail-block"><p class="physics-detail-label">Ví dụ</p><p class="physics-example">${example}</p></div>` : "";
    const lessonHtml = topic.lesson ? `<div class="physics-detail-block"><p class="physics-detail-label">Bài học SGK</p><p>${topic.lesson}</p></div>` : "";

    card.innerHTML = `
      <p class="physics-meta">Lớp ${topic.grade} | ${topic.chapter} | ${subjectTypeLabels[topic.type] || topic.type}${problemLevel ? ` | ${problemLevel}` : ""}</p>
      <h3>${topic.title}</h3>
      <div class="physics-detail-stack">
        <div class="physics-detail-block">
          <p class="physics-detail-label">Khái niệm</p>
          <p>${explanation}</p>
        </div>
        ${lessonHtml}
        <div class="physics-detail-block">
          <p class="physics-detail-label">Điểm cần nhớ</p>
          <ul class="physics-bullets">${bulletsHtml}</ul>
        </div>
        ${exampleHtml}
        <div class="physics-detail-block">
          <p class="physics-detail-label">Mẹo ghi nhớ</p>
          <p>${memoryTip}</p>
        </div>
      </div>
      ${topic.formula ? `<p class="physics-formula">${topic.formula}</p>` : ""}
      <div class="physics-tags">${tagsHtml}</div>
    `;
    mathResults.appendChild(card);
  });

  focusCurrentMathLesson();
}

function setMathGradeFilter(nextGrade) {
  mathGradeFilter = nextGrade;
  mathLessonCursor = 0;
  mathGradeButtons.forEach((button) => {
    const isActive = button.dataset.grade === nextGrade;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderMathResults();
}

function setMathTypeFilter(nextType) {
  mathTypeFilter = nextType;
  mathLessonCursor = 0;
  mathTypeButtons.forEach((button) => {
    const isActive = button.dataset.type === nextType;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderMathResults();
}

function setMathProblemLevelFilter(nextLevel) {
  mathProblemLevelFilter = nextLevel;
  mathLessonCursor = 0;
  mathLevelButtons.forEach((button) => {
    const isActive = button.dataset.level === nextLevel;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderMathResults();
}

function goToPreviousMathLesson() {
  if (!mathCurrentTopicIds.length || mathLessonCursor <= 0) {
    return;
  }
  mathLessonCursor -= 1;
  updateMathLessonNavigator(mathCurrentTopicIds.length);
  focusCurrentMathLesson();
}

function goToNextMathLesson() {
  if (!mathCurrentTopicIds.length || mathLessonCursor >= mathCurrentTopicIds.length - 1) {
    return;
  }
  mathLessonCursor += 1;
  updateMathLessonNavigator(mathCurrentTopicIds.length);
  focusCurrentMathLesson();
}

function setMathPracticeGradeFilter(nextGrade) {
  mathPracticeGradeFilter = nextGrade;
  mathPracticeGradeButtons.forEach((button) => {
    const isActive = button.dataset.grade === nextGrade;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderMathPracticeSets();
}

function setMathPracticeLevelFilter(nextLevel) {
  mathPracticeLevelFilter = nextLevel;
  mathPracticeLevelButtons.forEach((button) => {
    const isActive = button.dataset.level === nextLevel;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderMathPracticeSets();
}

function setPhysicsPracticeGradeFilter(nextGrade) {
  physicsPracticeGradeFilter = nextGrade;
  physicsPracticeGradeButtons.forEach((button) => {
    const isActive = button.dataset.grade === nextGrade;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderPhysicsPracticeSets();
}

function setPhysicsPracticeLevelFilter(nextLevel) {
  physicsPracticeLevelFilter = nextLevel;
  physicsPracticeLevelButtons.forEach((button) => {
    const isActive = button.dataset.level === nextLevel;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderPhysicsPracticeSets();
}

function setPhysicsGradeFilter(nextGrade) {
  physicsGradeFilter = nextGrade;
  physicsGradeButtons.forEach((button) => {
    const isActive = button.dataset.grade === nextGrade;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderPhysicsResults();
}

function setPhysicsTypeFilter(nextType) {
  physicsTypeFilter = nextType;
  physicsTypeButtons.forEach((button) => {
    const isActive = button.dataset.type === nextType;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderPhysicsResults();
}

function getCategoryCountMap() {
  const countMap = Object.fromEntries(Object.keys(categoryLabels).map((key) => [key, 0]));
  periodicElements.forEach((element) => {
    const category = getElementCategoryKey(element);
    if (countMap[category] !== undefined) {
      countMap[category] += 1;
    }
  });
  return countMap;
}

function matchesFamilyFilter(category) {
  if (periodicFamilyFilter === "all") {
    return true;
  }
  return periodicFamilyCategories[periodicFamilyFilter]?.has(category) || false;
}

function setPeriodicGroupHint(message) {
  if (periodicGroupHint) {
    periodicGroupHint.textContent = message;
  }
}

function applyPeriodicCategoryFilter() {
  const tiles = document.querySelectorAll(".element-tile");
  tiles.forEach((tile) => {
    const matchesCategory = periodicCategoryFilter === "all" || tile.classList.contains(periodicCategoryFilter);
    const matchesFamily = matchesFamilyFilter(tile.dataset.category || "");
    const matches = matchesCategory && matchesFamily;
    tile.classList.toggle("dimmed", !matches);
  });

  document.querySelectorAll(".legend-chip").forEach((chip) => {
    const isActive = chip.dataset.category === periodicCategoryFilter;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });

  periodicQuickFilters.forEach((button) => {
    const isActive = button.dataset.family === periodicFamilyFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function setPeriodicCategoryFilter(categoryKey) {
  periodicCategoryFilter = categoryKey;
  if (categoryKey === "all") {
    setPeriodicGroupHint("Bấm một nhóm để tô sáng các nguyên tố tương ứng trong bảng.");
  } else {
    const label = categoryLabels[categoryKey] || categoryKey;
    const desc = categoryDescriptions[categoryKey] || "";
    setPeriodicGroupHint(`${label}: ${desc}`);
  }
  applyPeriodicCategoryFilter();
}

function setPeriodicFamilyFilter(familyKey) {
  periodicFamilyFilter = familyKey;
  if (familyKey === "all") {
    setPeriodicGroupHint("Bộ lọc nhanh: hiển thị tất cả nguyên tố.");
  } else if (familyKey === "metal") {
    setPeriodicGroupHint("Bộ lọc nhanh: chỉ giữ các nguyên tố thuộc nhóm kim loại.");
  } else if (familyKey === "nonmetal") {
    setPeriodicGroupHint("Bộ lọc nhanh: chỉ giữ các nguyên tố phi kim và khí hiếm.");
  } else {
    setPeriodicGroupHint("Bộ lọc nhanh: chỉ giữ các nguyên tố á kim.");
  }
  applyPeriodicCategoryFilter();
}

function buildLegend() {
  periodicLegend.innerHTML = "";
  const categoryCount = getCategoryCountMap();

  const allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = "legend-chip all";
  allChip.dataset.category = "all";
  allChip.textContent = `Tất cả nhóm (${periodicElements.length})`;
  allChip.addEventListener("click", () => setPeriodicCategoryFilter("all"));
  allChip.addEventListener("mouseenter", () => setPeriodicGroupHint("Hiển thị toàn bộ nhóm nguyên tố trong bảng tuần hoàn."));
  allChip.title = "Hiển thị toàn bộ nhóm nguyên tố trong bảng tuần hoàn.";
  periodicLegend.appendChild(allChip);

  Object.entries(categoryLabels).forEach(([key, label]) => {
    const count = categoryCount[key] || 0;
    if (count === 0) {
      return;
    }

    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `legend-chip ${key}`;
    chip.dataset.category = key;
    const desc = categoryDescriptions[key] || "";
    chip.textContent = `${label} (${count})`;
    chip.title = desc;
    chip.setAttribute("aria-label", `${label}. ${desc}`);
    chip.addEventListener("click", () => setPeriodicCategoryFilter(key));
    chip.addEventListener("mouseenter", () => setPeriodicGroupHint(`${label}: ${desc}`));
    periodicLegend.appendChild(chip);
  });

  applyPeriodicCategoryFilter();
}

function renderElementDetail(element) {
  const categoryName = categoryLabels[getElementCategoryKey(element)] || "Khác";
  const valence = element.valence || "Đang cập nhật";
  const molarMass = element.molarMass || "Đang cập nhật";
  const electronConfig = element.electronConfig || "Đang cập nhật";

  elementResult.innerHTML = `
    <h3>${element.symbol} - ${element.name}</h3>
    <p><strong>Số hiệu nguyên tử:</strong> ${element.z}</p>
    <p><strong>Chu kỳ:</strong> ${element.period <= 7 ? element.period : (element.period === 8 ? "Lantan" : "Actini")}</p>
    <p><strong>Nhóm:</strong> ${element.group || "f-block"}</p>
    <p><strong>Phân loại:</strong> ${categoryName}</p>
    <p><strong>Khối lượng mol:</strong> ${molarMass} g/mol</p>
    <p><strong>Hóa trị thường gặp:</strong> ${valence}</p>
    <p><strong>Cấu hình electron:</strong> ${electronConfig}</p>
  `;
}

function renderPeriodicTable() {
  periodicGrid.innerHTML = "";
  periodicElements.forEach((element) => {
    const category = getElementCategoryKey(element);
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `element-tile ${category}`;
    tile.dataset.category = category;
    tile.dataset.symbol = element.symbol;
    tile.style.gridColumn = String(element.group || 3);
    tile.style.gridRow = String(element.period);
    tile.innerHTML = `<span class="z">${element.z}</span><span class="sym">${element.symbol}</span><span class="name">${element.name}</span>`;

    tile.addEventListener("click", () => {
      document.querySelectorAll(".element-tile.active").forEach((node) => node.classList.remove("active"));
      tile.classList.add("active");
      renderElementDetail(element);
    });

    periodicGrid.appendChild(tile);
  });

  applyPeriodicCategoryFilter();
}

function findElement(queryText) {
  const q = queryText.trim().toLowerCase();
  if (!q) {
    elementResult.textContent = "Hãy nhập ký hiệu, tên hoặc số hiệu nguyên tử để tra cứu.";
    return;
  }

  const aliasSymbol = symbolAliases[normalizeFormula(q).replace(/[^A-Z0-9]/g, "")];
  const byAtomic = Number.parseInt(q, 10);
  const element = periodicElements.find((item) => (
    item.symbol.toLowerCase() === String(aliasSymbol || "").toLowerCase() ||
    item.symbol.toLowerCase() === q ||
    item.name.toLowerCase().includes(q) ||
    item.z === byAtomic
  ));

  if (!element) {
    elementResult.textContent = "Không tìm thấy nguyên tố phù hợp.";
    return;
  }

  renderElementDetail(element);
  document.querySelectorAll(".element-tile").forEach((tile) => {
    tile.classList.toggle("active", tile.dataset.symbol === element.symbol);
  });
}

function renderActivitySeries() {
  activitySeriesRoot.innerHTML = "";
  activitySeries.forEach((symbol) => {
    const chip = document.createElement("span");
    chip.className = `activity-chip ${symbol === "H" ? "hydrogen" : ""}`.trim();
    chip.textContent = symbol;
    activitySeriesRoot.appendChild(chip);
  });
}

function normalizeMetalInput(value) {
  const raw = value.trim();
  if (!raw) {
    return "";
  }
  const mapped = canonicalizeTerm(raw);
  return mapped.charAt(0).toUpperCase() + mapped.slice(1).toLowerCase();
}

function checkAcidReaction() {
  const metal = normalizeMetalInput(acidMetalInput.value);
  if (!metal) {
    acidCheckResult.textContent = "Nhập kim loại để kiểm tra.";
    return;
  }
  if (!(metal in activityRank)) {
    acidCheckResult.textContent = `Chưa có ${metal} trong dãy chuẩn. Hãy nhập ký hiệu kim loại như Zn, Fe, Cu, Ag...`;
    return;
  }

  if (activityRank[metal] < activityRank.H) {
    acidCheckResult.textContent = `${metal} đứng trước H => thường phản ứng với axit loãng (HCl, H2SO4 loãng) và giải phóng H2.`;
  } else {
    acidCheckResult.textContent = `${metal} đứng sau H => thường không phản ứng với HCl loãng hoặc H2SO4 loãng.`;
  }
}

function checkDisplacementReaction() {
  const freeMetal = normalizeMetalInput(displaceMetalInput.value);
  const ionMetal = normalizeMetalInput(displaceIonInput.value);

  if (!freeMetal || !ionMetal) {
    displaceResult.textContent = "Nhập đủ cả 2 kim loại để dự đoán phản ứng thế.";
    return;
  }

  if (!(freeMetal in activityRank) || !(ionMetal in activityRank)) {
    displaceResult.textContent = "Một trong hai kim loại chưa có trong dãy chuẩn. Hãy nhập ký hiệu như Fe, Cu, Ag...";
    return;
  }

  if (activityRank[freeMetal] < activityRank[ionMetal]) {
    displaceResult.textContent = `${freeMetal} hoạt động mạnh hơn ${ionMetal} => có thể đẩy ${ionMetal} ra khỏi dung dịch muối.`;
  } else {
    displaceResult.textContent = `${freeMetal} hoạt động yếu hơn hoặc bằng ${ionMetal} => thường không xảy ra phản ứng thế.`;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search(queryInput.value);
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

gradeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setGradeFilter(button.dataset.grade);
    if (queryInput.value.trim()) {
      search(queryInput.value);
      return;
    }
    showEmpty("Hãy nhập chất để bắt đầu tra cứu.");
  });
});

quickTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    const query = tag.dataset.query || "";
    queryInput.value = query;
    search(query);
  });
});

moduleTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchModule(tab.dataset.module));
});

subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.disabled) {
      return;
    }

    if (button.dataset.subject === "physics") {
      switchModule("physics");
      return;
    }

    if (button.dataset.subject === "math") {
      switchModule("math");
      return;
    }

    if (button.dataset.subject === "organic") {
      switchModule("organic");
      return;
    }

    switchModule("reactions");
  });
});

periodicQuickFilters.forEach((button) => {
  button.addEventListener("click", () => setPeriodicFamilyFilter(button.dataset.family || "all"));
});

physicsGradeButtons.forEach((button) => {
  button.addEventListener("click", () => setPhysicsGradeFilter(button.dataset.grade || "all"));
});
physicsTypeButtons.forEach((button) => {
  button.addEventListener("click", () => setPhysicsTypeFilter(button.dataset.type || "all"));
});

mathGradeButtons.forEach((button) => {
  button.addEventListener("click", () => setMathGradeFilter(button.dataset.grade || "all"));
});

mathTypeButtons.forEach((button) => {
  button.addEventListener("click", () => setMathTypeFilter(button.dataset.type || "all"));
});

mathLevelButtons.forEach((button) => {
  button.addEventListener("click", () => setMathProblemLevelFilter(button.dataset.level || "all"));
});

mathPracticeGradeButtons.forEach((button) => {
  button.addEventListener("click", () => setMathPracticeGradeFilter(button.dataset.grade || "all"));
});

mathPracticeLevelButtons.forEach((button) => {
  button.addEventListener("click", () => setMathPracticeLevelFilter(button.dataset.level || "all"));
});

physicsPracticeGradeButtons.forEach((button) => {
  button.addEventListener("click", () => setPhysicsPracticeGradeFilter(button.dataset.grade || "all"));
});

physicsPracticeLevelButtons.forEach((button) => {
  button.addEventListener("click", () => setPhysicsPracticeLevelFilter(button.dataset.level || "all"));
});

if (mathPracticeChapterSelect) {
  mathPracticeChapterSelect.addEventListener("change", renderMathPracticeSets);
}

if (mathPracticeRefreshBtn) {
  mathPracticeRefreshBtn.addEventListener("click", renderMathPracticeSets);
}

if (physicsPracticeChapterSelect) {
  physicsPracticeChapterSelect.addEventListener("change", renderPhysicsPracticeSets);
}

if (physicsPracticeRefreshBtn) {
  physicsPracticeRefreshBtn.addEventListener("click", renderPhysicsPracticeSets);
}

if (mathPrevLessonBtn) {
  mathPrevLessonBtn.addEventListener("click", goToPreviousMathLesson);
}

if (mathNextLessonBtn) {
  mathNextLessonBtn.addEventListener("click", goToNextMathLesson);
}

if (organicSearchBtn) {
  organicSearchBtn.addEventListener("click", renderOrganicTopics);
}

if (organicSearchInput) {
  organicSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      renderOrganicTopics();
    }
  });
}

if (physicsSearchBtn) {
  physicsSearchBtn.addEventListener("click", renderPhysicsResults);
}

if (physicsSearchInput) {
  physicsSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      renderPhysicsResults();
    }
  });
}

if (mathSearchBtn) {
  mathSearchBtn.addEventListener("click", () => {
    mathLessonCursor = 0;
    renderMathResults();
  });
}

if (mathSearchInput) {
  mathSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      mathLessonCursor = 0;
      renderMathResults();
    }
  });
}

elementSearchBtn.addEventListener("click", () => findElement(elementSearchInput.value));
elementSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    findElement(elementSearchInput.value);
  }
});

acidCheckBtn.addEventListener("click", checkAcidReaction);
displaceCheckBtn.addEventListener("click", checkDisplacementReaction);

buildLegend();
renderPeriodicTable();
renderActivitySeries();
renderOrganicTopics();
renderPhysicsResults();
initMathPracticeChapterOptions();
initPhysicsPracticeChapterOptions();
renderMathResults();
renderMathPracticeSets();
renderPhysicsPracticeSets();
setGradeFilter("all");
showEmpty("Hãy nhập chất để bắt đầu tra cứu.");
