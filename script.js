const inorganicReactionsRaw = [
  { equation: "2Na + 2H2O -> 2NaOH + H2", reactants: ["Na", "H2O"], products: ["NaOH", "H2"], note: "Natri phản ứng mãnh liệt với nước lạnh." },
  { equation: "4Na + O2 -> 2Na2O", reactants: ["Na", "O2"], products: ["Na2O"], note: "Kim loại kiềm dễ bị oxi hóa ngoài không khí." },
  { equation: "2Na + Cl2 -> 2NaCl", reactants: ["Na", "Cl2"], products: ["NaCl"], note: "Đốt nóng Na trong khí Cl2." },
  { equation: "2Na + 2HCl -> 2NaCl + H2", reactants: ["Na", "HCl"], products: ["NaCl", "H2"], note: "Kim loại kiềm đẩy H2 khỏi axit." },
  { equation: "Na2O + H2O -> 2NaOH", reactants: ["Na2O", "H2O"], products: ["NaOH"], note: "Oxit bazơ mạnh tạo bazơ mạnh." },
  { equation: "2NaOH + CO2 -> Na2CO3 + H2O", reactants: ["NaOH", "CO2"], products: ["Na2CO3", "H2O"], note: "Hấp thụ CO2 bằng NaOH." },
  { equation: "Na2CO3 + 2HCl -> 2NaCl + CO2 + H2O", reactants: ["Na2CO3", "HCl"], products: ["NaCl", "CO2", "H2O"], note: "Muối cacbonat tác dụng với axit tạo khí CO2." },
  { equation: "NaHCO3 + HCl -> NaCl + CO2 + H2O", reactants: ["NaHCO3", "HCl"], products: ["NaCl", "CO2", "H2O"], note: "Muối hiđrocacbonat tác dụng với axit." },
  { equation: "2NaHCO3 -> Na2CO3 + CO2 + H2O", reactants: ["NaHCO3"], products: ["Na2CO3", "CO2", "H2O"], note: "Nhiệt phân natri hiđrocacbonat." },
  { equation: "2NaOH + CuSO4 -> Cu(OH)2 + Na2SO4", reactants: ["NaOH", "CuSO4"], products: ["Cu(OH)2", "Na2SO4"], note: "Xuất hiện kết tủa xanh lam Cu(OH)2." },

  { equation: "2K + 2H2O -> 2KOH + H2", reactants: ["K", "H2O"], products: ["KOH", "H2"], note: "K phản ứng rất mạnh với nước, có thể bốc cháy." },
  { equation: "4K + O2 -> 2K2O", reactants: ["K", "O2"], products: ["K2O"], note: "Kim loại kiềm bị oxi hóa nhanh." },
  { equation: "2K + Cl2 -> 2KCl", reactants: ["K", "Cl2"], products: ["KCl"], note: "Phản ứng hóa hợp của kim loại kiềm." },
  { equation: "2KOH + CO2 -> K2CO3 + H2O", reactants: ["KOH", "CO2"], products: ["K2CO3", "H2O"], note: "Bazơ mạnh hấp thụ oxit axit." },
  { equation: "K2CO3 + 2HCl -> 2KCl + CO2 + H2O", reactants: ["K2CO3", "HCl"], products: ["KCl", "CO2", "H2O"], note: "Tạo khí CO2 khi cho axit vào muối cacbonat." },

  { equation: "Ba + 2H2O -> Ba(OH)2 + H2", reactants: ["Ba", "H2O"], products: ["Ba(OH)2", "H2"], note: "Ba phản ứng mạnh với nước ở nhiệt độ thường." },
  { equation: "Ba + Cl2 -> BaCl2", reactants: ["Ba", "Cl2"], products: ["BaCl2"], note: "Phản ứng hóa hợp tạo muối clorua." },
  { equation: "Ba + 2HCl -> BaCl2 + H2", reactants: ["Ba", "HCl"], products: ["BaCl2", "H2"], note: "Bari phản ứng với axit loãng giải phóng khí H2." },
  { equation: "BaO + H2O -> Ba(OH)2", reactants: ["BaO", "H2O"], products: ["Ba(OH)2"], note: "Oxit bazơ mạnh tạo bazơ tương ứng." },
  { equation: "Ba(OH)2 + CO2 -> BaCO3 + H2O", reactants: ["Ba(OH)2", "CO2"], products: ["BaCO3", "H2O"], note: "Tạo kết tủa trắng BaCO3." },
  { equation: "BaCO3 + 2HCl -> BaCl2 + CO2 + H2O", reactants: ["BaCO3", "HCl"], products: ["BaCl2", "CO2", "H2O"], note: "Muối cacbonat của bari tác dụng với axit." },
  { equation: "BaCl2 + Na2SO4 -> BaSO4 + 2NaCl", reactants: ["BaCl2", "Na2SO4"], products: ["BaSO4", "NaCl"], note: "BaSO4 kết tủa trắng không tan." },
  { equation: "Ba(OH)2 + H2SO4 -> BaSO4 + 2H2O", reactants: ["Ba(OH)2", "H2SO4"], products: ["BaSO4", "H2O"], note: "Trung hòa kèm kết tủa BaSO4." },

  { equation: "CaO + H2O -> Ca(OH)2", reactants: ["CaO", "H2O"], products: ["Ca(OH)2"], note: "Phản ứng tôi vôi tỏa nhiệt." },
  { equation: "Ca(OH)2 + CO2 -> CaCO3 + H2O", reactants: ["Ca(OH)2", "CO2"], products: ["CaCO3", "H2O"], note: "Nước vôi trong hóa đục." },
  { equation: "Ca + 2HCl -> CaCl2 + H2", reactants: ["Ca", "HCl"], products: ["CaCl2", "H2"], note: "Canxi tan dần trong axit, thoát khí H2." },
  { equation: "CaCO3 + CO2 + H2O -> Ca(HCO3)2", reactants: ["CaCO3", "CO2", "H2O"], products: ["Ca(HCO3)2"], note: "Đá vôi tan trong nước mưa chứa CO2." },
  { equation: "CaCO3 + 2HCl -> CaCl2 + CO2 + H2O", reactants: ["CaCO3", "HCl"], products: ["CaCl2", "CO2", "H2O"], note: "Sủi bọt khí CO2." },
  { equation: "CaCO3 -> CaO + CO2", reactants: ["CaCO3"], products: ["CaO", "CO2"], note: "Nhiệt phân đá vôi." },

  { equation: "Mg + 2HCl -> MgCl2 + H2", reactants: ["Mg", "HCl"], products: ["MgCl2", "H2"], note: "Mg đứng trước H nên phản ứng với axit loãng." },
  { equation: "2Mg + O2 -> 2MgO", reactants: ["Mg", "O2"], products: ["MgO"], note: "Mg cháy sáng chói tạo MgO." },
  { equation: "MgO + 2HCl -> MgCl2 + H2O", reactants: ["MgO", "HCl"], products: ["MgCl2", "H2O"], note: "Oxit bazơ phản ứng với axit." },

  { equation: "2Al + 6HCl -> 2AlCl3 + 3H2", reactants: ["Al", "HCl"], products: ["AlCl3", "H2"], note: "Nhôm phản ứng sau khi phá lớp oxit bảo vệ." },
  { equation: "4Al + 3O2 -> 2Al2O3", reactants: ["Al", "O2"], products: ["Al2O3"], note: "Bề mặt nhôm tạo màng Al2O3 bảo vệ." },
  { equation: "2Al + Fe2O3 -> Al2O3 + 2Fe", reactants: ["Al", "Fe2O3"], products: ["Al2O3", "Fe"], note: "Phản ứng nhiệt nhôm." },

  { equation: "Zn + 2HCl -> ZnCl2 + H2", reactants: ["Zn", "HCl"], products: ["ZnCl2", "H2"], note: "Thí nghiệm điều chế H2 trong PTN." },
  { equation: "Zn + H2SO4 -> ZnSO4 + H2", reactants: ["Zn", "H2SO4"], products: ["ZnSO4", "H2"], note: "Kim loại đứng trước H tác dụng với axit loãng." },
  { equation: "Zn + CuSO4 -> ZnSO4 + Cu", reactants: ["Zn", "CuSO4"], products: ["ZnSO4", "Cu"], note: "Zn đẩy Cu khỏi dung dịch muối." },

  { equation: "Fe + 2HCl -> FeCl2 + H2", reactants: ["Fe", "HCl"], products: ["FeCl2", "H2"], note: "Sắt phản ứng với axit loãng giải phóng H2." },
  { equation: "Fe + S -> FeS", reactants: ["Fe", "S"], products: ["FeS"], note: "Đun nóng bột sắt và lưu huỳnh tạo sắt(II) sunfua." },
  { equation: "Fe + CuSO4 -> FeSO4 + Cu", reactants: ["Fe", "CuSO4"], products: ["FeSO4", "Cu"], note: "Sắt đẩy đồng khỏi muối đồng." },
  { equation: "4Fe + 3O2 -> 2Fe2O3", reactants: ["Fe", "O2"], products: ["Fe2O3"], note: "Quá trình gỉ sắt khi có O2 và ẩm." },
  { equation: "3Fe + 2O2 -> Fe3O4", reactants: ["Fe", "O2"], products: ["Fe3O4"], note: "Sắt cháy trong oxi tạo Fe3O4." },
  { equation: "Fe2O3 + 3CO -> 2Fe + 3CO2", reactants: ["Fe2O3", "CO"], products: ["Fe", "CO2"], note: "Khử quặng trong lò cao." },

  { equation: "2Cu + O2 -> 2CuO", reactants: ["Cu", "O2"], products: ["CuO"], note: "Đồng bị oxi hóa khi đun nóng trong không khí." },
  { equation: "CuO + 2HCl -> CuCl2 + H2O", reactants: ["CuO", "HCl"], products: ["CuCl2", "H2O"], note: "Đồng(II) oxit phản ứng với axit." },
  { equation: "CuO + H2SO4 -> CuSO4 + H2O", reactants: ["CuO", "H2SO4"], products: ["CuSO4", "H2O"], note: "Tạo dung dịch CuSO4 màu xanh." },
  { equation: "Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag", reactants: ["Cu", "AgNO3"], products: ["Cu(NO3)2", "Ag"], note: "Cu đẩy Ag vì Cu hoạt động mạnh hơn Ag." },
  { equation: "CuSO4 + 2NaOH -> Cu(OH)2 + Na2SO4", reactants: ["CuSO4", "NaOH"], products: ["Cu(OH)2", "Na2SO4"], note: "Tạo kết tủa Cu(OH)2 xanh lam." },
  { equation: "Cu(OH)2 -> CuO + H2O", reactants: ["Cu(OH)2"], products: ["CuO", "H2O"], note: "Nhiệt phân bazơ không tan." },
  { equation: "CuO + H2 -> Cu + H2O", reactants: ["CuO", "H2"], products: ["Cu", "H2O"], note: "Phản ứng khử oxit đồng." },

  { equation: "2AgNO3 + Cu -> Cu(NO3)2 + 2Ag", reactants: ["AgNO3", "Cu"], products: ["Cu(NO3)2", "Ag"], note: "Kim loại hoạt động mạnh đẩy kim loại yếu hơn." },
  { equation: "AgNO3 + NaCl -> AgCl + NaNO3", reactants: ["AgNO3", "NaCl"], products: ["AgCl", "NaNO3"], note: "Xuất hiện kết tủa trắng AgCl." },

  { equation: "SO3 + H2O -> H2SO4", reactants: ["SO3", "H2O"], products: ["H2SO4"], note: "Oxit axit tạo axit tương ứng." },
  { equation: "2H2 + O2 -> 2H2O", reactants: ["H2", "O2"], products: ["H2O"], note: "Hidro cháy trong oxi tạo nước." },
  { equation: "P2O5 + 3H2O -> 2H3PO4", reactants: ["P2O5", "H2O"], products: ["H3PO4"], note: "Tạo axit photphoric." },
  { equation: "NH4Cl + NaOH -> NaCl + NH3 + H2O", reactants: ["NH4Cl", "NaOH"], products: ["NaCl", "NH3", "H2O"], note: "Nhận biết ion NH4+ bằng khí NH3 mùi khai." },
  { equation: "2KClO3 -> 2KCl + 3O2", reactants: ["KClO3"], products: ["KCl", "O2"], note: "Nhiệt phân KClO3 (MnO2 xúc tác)." },
  { equation: "2H2O2 -> 2H2O + O2", reactants: ["H2O2"], products: ["H2O", "O2"], note: "Phân hủy H2O2." },
  { equation: "2FeCl2 + Cl2 -> 2FeCl3", reactants: ["FeCl2", "Cl2"], products: ["FeCl3"], note: "Clo oxi hóa Fe2+ lên Fe3+." },
  { equation: "4Fe(OH)2 + O2 + 2H2O -> 4Fe(OH)3", reactants: ["Fe(OH)2", "O2", "H2O"], products: ["Fe(OH)3"], note: "Fe(OH)2 ngoài không khí chuyển dần sang nâu đỏ." },
  { equation: "Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O", reactants: ["Cu", "HNO3"], products: ["Cu(NO3)2", "NO2", "H2O"], note: "HNO3 đặc có tính oxi hóa mạnh, Cu phản ứng tạo khí NO2 màu nâu đỏ." },
  { equation: "3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O", reactants: ["Cu", "HNO3"], products: ["Cu(NO3)2", "NO", "H2O"], note: "Với HNO3 loãng, Cu tạo NO không màu hóa nâu ngoài không khí." },
  { equation: "Cu + 2H2SO4 -> CuSO4 + SO2 + 2H2O", reactants: ["Cu", "H2SO4"], products: ["CuSO4", "SO2", "H2O"], note: "Chỉ xảy ra rõ với H2SO4 đặc, nóng." }
];

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

const levelByEquation = {
  "2Na + 2H2O -> 2NaOH + H2": "grade89",
  "4Na + O2 -> 2Na2O": "grade89",
  "2Na + Cl2 -> 2NaCl": "grade89",
  "2Na + 2HCl -> 2NaCl + H2": "grade89",
  "Na2O + H2O -> 2NaOH": "grade89",
  "2NaOH + CO2 -> Na2CO3 + H2O": "grade89",
  "Na2CO3 + 2HCl -> 2NaCl + CO2 + H2O": "grade89",
  "NaHCO3 + HCl -> NaCl + CO2 + H2O": "grade89",
  "2NaHCO3 -> Na2CO3 + CO2 + H2O": "grade89",
  "2NaOH + CuSO4 -> Cu(OH)2 + Na2SO4": "grade89",
  "2K + 2H2O -> 2KOH + H2": "grade89",
  "4K + O2 -> 2K2O": "grade89",
  "2K + Cl2 -> 2KCl": "grade89",
  "2KOH + CO2 -> K2CO3 + H2O": "grade89",
  "K2CO3 + 2HCl -> 2KCl + CO2 + H2O": "grade89",
  "Ba + 2H2O -> Ba(OH)2 + H2": "grade89",
  "Ba + Cl2 -> BaCl2": "grade89",
  "Ba + 2HCl -> BaCl2 + H2": "grade89",
  "BaO + H2O -> Ba(OH)2": "grade89",
  "Ba(OH)2 + CO2 -> BaCO3 + H2O": "grade89",
  "BaCO3 + 2HCl -> BaCl2 + CO2 + H2O": "grade89",
  "BaCl2 + Na2SO4 -> BaSO4 + 2NaCl": "grade89",
  "Ba(OH)2 + H2SO4 -> BaSO4 + 2H2O": "grade89",
  "CaO + H2O -> Ca(OH)2": "grade89",
  "Ca(OH)2 + CO2 -> CaCO3 + H2O": "grade89",
  "Ca + 2HCl -> CaCl2 + H2": "grade89",
  "CaCO3 + CO2 + H2O -> Ca(HCO3)2": "grade89",
  "CaCO3 + 2HCl -> CaCl2 + CO2 + H2O": "grade89",
  "CaCO3 -> CaO + CO2": "grade89",
  "Mg + 2HCl -> MgCl2 + H2": "grade89",
  "2Mg + O2 -> 2MgO": "grade89",
  "MgO + 2HCl -> MgCl2 + H2O": "grade89",
  "Zn + 2HCl -> ZnCl2 + H2": "grade89",
  "Zn + CuSO4 -> ZnSO4 + Cu": "grade89",
  "Fe + 2HCl -> FeCl2 + H2": "grade89",
  "Fe + S -> FeS": "grade89",
  "Fe + CuSO4 -> FeSO4 + Cu": "grade89",
  "2Cu + O2 -> 2CuO": "grade89",
  "CuO + 2HCl -> CuCl2 + H2O": "grade89",
  "CuSO4 + 2NaOH -> Cu(OH)2 + Na2SO4": "grade89",
  "AgNO3 + NaCl -> AgCl + NaNO3": "grade89",
  "NH4Cl + NaOH -> NaCl + NH3 + H2O": "grade89",
  "4Al + 3O2 -> 2Al2O3": "grade1012",
  "2Al + 6HCl -> 2AlCl3 + 3H2": "grade1012",
  "2Al + Fe2O3 -> Al2O3 + 2Fe": "grade1012",
  "Zn + H2SO4 -> ZnSO4 + H2": "grade1012",
  "4Fe + 3O2 -> 2Fe2O3": "grade1012",
  "3Fe + 2O2 -> Fe3O4": "grade1012",
  "Fe2O3 + 3CO -> 2Fe + 3CO2": "grade1012",
  "CuO + H2SO4 -> CuSO4 + H2O": "grade1012",
  "Cu(OH)2 -> CuO + H2O": "grade1012",
  "CuO + H2 -> Cu + H2O": "grade1012",
  "2AgNO3 + Cu -> Cu(NO3)2 + 2Ag": "grade1012",
  "SO3 + H2O -> H2SO4": "grade1012",
  "2H2 + O2 -> 2H2O": "grade89",
  "P2O5 + 3H2O -> 2H3PO4": "grade1012",
  "2KClO3 -> 2KCl + 3O2": "grade1012",
  "2H2O2 -> 2H2O + O2": "grade1012",
  "2FeCl2 + Cl2 -> 2FeCl3": "grade1012",
  "4Fe(OH)2 + O2 + 2H2O -> 4Fe(OH)3": "grade1012",
  "Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O": "advanced",
  "3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O": "advanced",
  "Cu + 2H2SO4 -> CuSO4 + SO2 + 2H2O": "advanced"
};

const inorganicReactions = inorganicReactionsRaw.map((reaction) => ({
  ...reaction,
  level: levelByEquation[reaction.equation] || "grade1012",
  source: "curated",
  confidence: "high"
}));

const oxidizingAcidInference = {
  HNO3: {
    Cu: {
      equation: "3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O",
      reactants: ["Cu", "HNO3"],
      products: ["Cu(NO3)2", "NO", "H2O"],
      note: "Axit nitric có tính oxi hóa mạnh; với HNO3 loãng, Cu tạo NO."
    },
    Fe: {
      equation: "Fe + 6HNO3 -> Fe(NO3)3 + 3NO2 + 3H2O",
      reactants: ["Fe", "HNO3"],
      products: ["Fe(NO3)3", "NO2", "H2O"],
      note: "HNO3 đặc, nóng oxi hóa Fe tạo NO2; HNO3 đặc nguội có thể làm Fe thụ động hóa ở bề mặt."
    },
    Ag: {
      equation: "3Ag + 4HNO3 -> 3AgNO3 + NO + 2H2O",
      reactants: ["Ag", "HNO3"],
      products: ["AgNO3", "NO", "H2O"],
      note: "Ag không phản ứng với HCl nhưng phản ứng với HNO3 do tính oxi hóa của NO3-."
    }
  },
  H2SO4: {
    Cu: {
      equation: "Cu + 2H2SO4 -> CuSO4 + SO2 + 2H2O",
      reactants: ["Cu", "H2SO4"],
      products: ["CuSO4", "SO2", "H2O"],
      note: "Chỉ xảy ra rõ với H2SO4 đặc, nóng."
    },
    Fe: {
      equation: "2Fe + 6H2SO4 -> Fe2(SO4)3 + 3SO2 + 6H2O",
      reactants: ["Fe", "H2SO4"],
      products: ["Fe2(SO4)3", "SO2", "H2O"],
      note: "Trong H2SO4 đặc, nóng, Fe bị oxi hóa mạnh; ở nhiệt độ thấp/nguội, bề mặt Fe có thể thụ động hóa."
    },
    Ag: {
      equation: "2Ag + 2H2SO4 -> Ag2SO4 + SO2 + 2H2O",
      reactants: ["Ag", "H2SO4"],
      products: ["Ag2SO4", "SO2", "H2O"],
      note: "Bạc phản ứng trong môi trường H2SO4 đặc, nóng."
    }
  }
};

const reactionInsights = {
  "Ca + 2HCl -> CaCl2 + H2": {
    type: "Phản ứng thế (kim loại + axit)",
    condition: "Dung dịch HCl loãng, nhiệt độ thường.",
    observation: "Canxi tan dần, có bọt khí H2 không màu thoát ra mạnh.",
    caution: "Khí H2 dễ cháy, tránh nguồn lửa gần miệng ống nghiệm."
  },
  "2K + 2HCl -> 2KCl + H2": {
    type: "Phản ứng thế rất mãnh liệt",
    condition: "Rất nguy hiểm trong dung dịch nước; K thường phản ứng dữ dội với nước trước.",
    observation: "Phản ứng bùng mạnh, có thể phát nhiệt và bắn tóe.",
    caution: "Không làm trực tiếp trong điều kiện phổ thông khi thiếu bảo hộ chuyên dụng."
  },
  "Ba + 2HCl -> BaCl2 + H2": {
    type: "Phản ứng thế (kim loại hoạt động mạnh + axit)",
    condition: "Dung dịch HCl loãng.",
    observation: "Bari tan, giải phóng khí H2.",
    caution: "Muối bari tan có độc tính, hạn chế tiếp xúc."
  },
  "Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O": {
    type: "Oxi hoa-khu (nang cao)",
    condition: "HNO3 đặc.",
    observation: "Tạo khí NO2 màu nâu đỏ, dung dịch xanh Cu(NO3)2.",
    caution: "NO2 độc, cần hệ thống hút khí."
  }
};

const activitySeries = ["K", "Ba", "Ca", "Na", "Mg", "Al", "Zn", "Fe", "Ni", "Sn", "Pb", "H", "Cu", "Hg", "Ag", "Pt", "Au"];
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

const moduleTabs = document.querySelectorAll(".module-tab");
const modulePanels = {
  reactions: document.getElementById("module-reactions"),
  periodic: document.getElementById("module-periodic"),
  activity: document.getElementById("module-activity"),
  practice: document.getElementById("module-practice")
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

const periodicGrid = document.getElementById("periodicGrid");
const periodicLegend = document.getElementById("periodicLegend");
const elementResult = document.getElementById("elementResult");
const elementSearchInput = document.getElementById("elementSearchInput");
const elementSearchBtn = document.getElementById("elementSearchBtn");

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

function normalizeFormula(formula) {
  return formula.replace(/\s+/g, "").toUpperCase();
}

function canonicalizeTerm(term) {
  const compact = normalizeFormula(term).replace(/[^A-Z0-9]/g, "");
  return symbolAliases[compact] || term.trim();
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
    panel.classList.toggle("is-hidden", key !== nextModule);
  });
}

function buildLegend() {
  periodicLegend.innerHTML = "";
  Object.entries(categoryLabels).forEach(([key, label]) => {
    const chip = document.createElement("span");
    chip.className = `legend-chip ${key}`;
    chip.textContent = label;
    periodicLegend.appendChild(chip);
  });
}

function renderElementDetail(element) {
  const categoryName = categoryLabels[element.category] || "Khác";
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
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `element-tile ${element.category}`;
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
setGradeFilter("all");
showEmpty("Hãy nhập chất để bắt đầu tra cứu.");
