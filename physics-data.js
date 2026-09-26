window.PHYSICS_DATA = {
  chapterOrder: ["Cơ học", "Nhiệt học", "Điện học", "Điện từ học", "Quang học"],
  knowledgeBase: [
    {
      id: "p8-motion-mech",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Chuyển động cơ học",
      summary: "Một vật chuyển động khi vị trí của nó so với vật mốc thay đổi theo thời gian.",
      tags: ["vật mốc", "quỹ đạo", "đứng yên", "chuyển động"]
    },
    {
      id: "p8-speed",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Vận tốc",
      summary: "Vận tốc cho biết độ nhanh/chậm của chuyển động.",
      formula: "v = s/t; s = v.t; t = s/v",
      tags: ["vận tốc", "m/s", "km/h", "đổi đơn vị"]
    },
    {
      id: "p8-force-balance",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Hai lực cân bằng",
      summary: "Hai lực cân bằng là hai lực cùng phương, ngược chiều và có độ lớn bằng nhau tác dụng lên cùng một vật.",
      tags: ["lực", "cân bằng", "hợp lực"]
    },
    {
      id: "p8-inertia",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Quán tính",
      summary: "Vật có xu hướng bảo toàn trạng thái chuyển động hoặc đứng yên khi không có lực làm thay đổi trạng thái đó.",
      tags: ["quán tính", "chuyển động", "an toàn giao thông"]
    },
    {
      id: "p8-pressure-solid",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Áp suất chất rắn",
      summary: "Áp suất phụ thuộc vào lực ép và diện tích bề mặt bị ép.",
      formula: "p = F/S",
      tags: ["áp suất", "Pascal", "N/m2"]
    },
    {
      id: "p8-pressure-liquid",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Áp suất chất lỏng",
      summary: "Áp suất chất lỏng tại một điểm phụ thuộc vào độ sâu và trọng lượng riêng.",
      formula: "p = d.h",
      tags: ["chất lỏng", "độ sâu", "trọng lượng riêng"]
    },
    {
      id: "p8-communicating-vessels",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Bình thông nhau",
      summary: "Trong bình thông nhau chứa cùng một chất lỏng đứng yên, mực chất lỏng ở các nhánh bằng nhau.",
      tags: ["bình thông nhau", "chất lỏng", "thăng bằng"]
    },
    {
      id: "p8-archimedes",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Lực đẩy Archimedes",
      summary: "Độ lớn lực đẩy bằng trọng lượng phần chất lỏng bị vật chiếm chỗ.",
      formula: "FA = d.V",
      tags: ["lực đẩy", "nổi chìm", "thể tích chiếm chỗ"]
    },
    {
      id: "p8-work",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Công cơ học",
      summary: "Công cơ học được sinh ra khi lực làm vật dịch chuyển theo hướng lực.",
      formula: "A = F.s",
      tags: ["công", "Jun", "dịch chuyển"]
    },
    {
      id: "p8-power",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Công suất",
      summary: "Công suất cho biết tốc độ thực hiện công.",
      formula: "P = A/t",
      tags: ["công suất", "W", "kW"]
    },
    {
      id: "p8-density",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Khối lượng riêng và trọng lượng riêng",
      summary: "Khối lượng riêng cho biết khối lượng trong một đơn vị thể tích; trọng lượng riêng cho biết trọng lượng trên một đơn vị thể tích.",
      formula: "D = m/V; d = P/V",
      tags: ["khối lượng riêng", "trọng lượng riêng", "g/cm3", "kg/m3"]
    },
    {
      id: "p8-thermal-energy",
      grade: "8",
      chapter: "Nhiệt học",
      type: "theory",
      title: "Nhiệt năng",
      summary: "Nhiệt năng của vật là tổng động năng của các phân tử cấu tạo nên vật.",
      tags: ["nhiệt năng", "phân tử", "nhiệt độ"]
    },
    {
      id: "p8-heat-transfer",
      grade: "8",
      chapter: "Nhiệt học",
      type: "theory",
      title: "Dẫn nhiệt, đối lưu, bức xạ nhiệt",
      summary: "Ba hình thức truyền nhiệt cơ bản trong tự nhiên và kỹ thuật.",
      tags: ["dẫn nhiệt", "đối lưu", "bức xạ"]
    },
    {
      id: "p8-heat-quantity",
      grade: "8",
      chapter: "Nhiệt học",
      type: "formula",
      title: "Nhiệt lượng",
      summary: "Nhiệt lượng vật thu vào hoặc tỏa ra khi thay đổi nhiệt độ.",
      formula: "Q = m.c.Δt",
      tags: ["nhiệt lượng", "nhiệt dung riêng", "delta t"]
    },
    {
      id: "p8-thermal-balance",
      grade: "8",
      chapter: "Nhiệt học",
      type: "problem",
      title: "Bài toán cân bằng nhiệt",
      summary: "Trong hệ kín, bỏ qua thất thoát: tổng nhiệt lượng tỏa ra bằng tổng nhiệt lượng thu vào.",
      formula: "Qtỏa = Qthu",
      tags: ["cân bằng nhiệt", "trộn chất", "nhiệt kế"]
    },

    {
      id: "p9-current",
      grade: "9",
      chapter: "Điện học",
      type: "theory",
      title: "Dòng điện và cường độ dòng điện",
      summary: "Dòng điện là dòng chuyển dời có hướng của các điện tích; cường độ dòng điện đặc trưng độ mạnh yếu của dòng điện.",
      tags: ["dòng điện", "ampe", "điện tích"]
    },
    {
      id: "p9-voltage",
      grade: "9",
      chapter: "Điện học",
      type: "theory",
      title: "Hiệu điện thế",
      summary: "Hiệu điện thế giữa hai điểm biểu thị khả năng sinh công của điện trường khi dịch chuyển điện tích.",
      tags: ["hiệu điện thế", "vôn", "nguồn điện"]
    },
    {
      id: "p9-ohm",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Định luật Ohm",
      summary: "Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở.",
      formula: "I = U/R; U = I.R; R = U/I",
      tags: ["định luật Ohm", "điện trở", "mạch điện"]
    },
    {
      id: "p9-resistance-wire",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Điện trở dây dẫn",
      summary: "Điện trở phụ thuộc chiều dài, tiết diện và vật liệu làm dây.",
      formula: "R = ρ.l/S",
      tags: ["điện trở suất", "dây dẫn", "vật liệu"]
    },
    {
      id: "p9-series-parallel",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Mạch nối tiếp và song song",
      summary: "Tính điện trở tương đương theo từng kiểu ghép mạch.",
      formula: "Rtđ(nt)=R1+R2+...; 1/Rtđ(ss)=1/R1+1/R2+...",
      tags: ["nối tiếp", "song song", "điện trở tương đương"]
    },
    {
      id: "p9-electric-work",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Công của dòng điện",
      summary: "Điện năng tiêu thụ trong một đoạn mạch trong thời gian t.",
      formula: "A = U.I.t",
      tags: ["công điện", "điện năng", "Jun"]
    },
    {
      id: "p9-electric-power",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Công suất điện",
      summary: "Công suất điện cho biết tốc độ tiêu thụ điện năng.",
      formula: "P = U.I = I2.R = U2/R",
      tags: ["công suất", "W", "kWh"]
    },
    {
      id: "p9-joule-lenz",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Định luật Joule-Lenz",
      summary: "Nhiệt lượng tỏa ra trên dây dẫn khi có dòng điện chạy qua.",
      formula: "Q = I2.R.t",
      tags: ["Joule-Lenz", "tỏa nhiệt", "bàn là", "bếp điện"]
    },
    {
      id: "p9-household-electricity",
      grade: "9",
      chapter: "Điện học",
      type: "problem",
      title: "Bài toán điện năng tiêu thụ gia đình",
      summary: "Tính điện năng và tiền điện theo công suất thiết bị và thời gian sử dụng.",
      formula: "A(kWh) = P(kW).t(h)",
      tags: ["hóa đơn điện", "kWh", "thực tế"]
    },

    {
      id: "p9-magnet",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Nam châm và từ trường",
      summary: "Từ trường tồn tại xung quanh nam châm và dòng điện, có thể biểu diễn bằng đường sức từ.",
      tags: ["nam châm", "đường sức từ", "cực từ"]
    },
    {
      id: "p9-solenoid",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Ống dây có dòng điện",
      summary: "Ống dây có dòng điện chạy qua có từ trường giống nam châm thẳng.",
      tags: ["ống dây", "quy tắc nắm tay phải", "từ trường"]
    },
    {
      id: "p9-induction",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Hiện tượng cảm ứng điện từ",
      summary: "Suất điện động cảm ứng xuất hiện khi từ thông qua mạch kín biến thiên.",
      tags: ["cảm ứng điện từ", "máy phát điện", "từ thông"]
    },

    {
      id: "p9-light-line",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Sự truyền thẳng của ánh sáng",
      summary: "Trong môi trường trong suốt đồng tính, ánh sáng truyền theo đường thẳng.",
      tags: ["tia sáng", "bóng tối", "nhật thực", "nguyệt thực"]
    },
    {
      id: "p9-reflection",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Định luật phản xạ ánh sáng",
      summary: "Tia phản xạ nằm trong mặt phẳng tới và góc phản xạ bằng góc tới.",
      tags: ["phản xạ", "gương phẳng", "góc tới", "góc phản xạ"]
    },
    {
      id: "p9-refraction",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Khúc xạ ánh sáng",
      summary: "Khi truyền xiên qua mặt phân cách hai môi trường trong suốt, tia sáng bị gãy khúc.",
      tags: ["khúc xạ", "chiết suất", "môi trường"]
    },
    {
      id: "p9-lens",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Thấu kính hội tụ và phân kỳ",
      summary: "Nhận biết đặc điểm của mỗi loại thấu kính và tính chất ảnh tạo bởi chúng.",
      tags: ["thấu kính", "ảnh thật", "ảnh ảo", "tiêu điểm"]
    },
    {
      id: "p9-lens-drawing",
      grade: "9",
      chapter: "Quang học",
      type: "problem",
      title: "Dạng bài dựng ảnh qua thấu kính",
      summary: "Dùng các tia đặc biệt để xác định vị trí ảnh và tính chất ảnh.",
      tags: ["dựng hình", "tia đặc biệt", "trục chính"]
    }
  ]
};
