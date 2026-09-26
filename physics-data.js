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
      explanation: "Chuyển động cơ học là hiện tượng thay đổi vị trí của vật theo thời gian so với vật mốc đã chọn. Một vật có thể đứng yên đối với một vật mốc nhưng lại chuyển động so với vật mốc khác.",
      keyPoints: [
        "Vật mốc là vật dùng để so sánh vị trí của vật đang xét.",
        "Quỹ đạo là đường mà vật đi qua trong quá trình chuyển động.",
        "Chuyển động và đứng yên phụ thuộc vào cách chọn vật mốc."
      ],
      example: "Ví dụ: người ngồi trên xe máy đứng yên so với xe, nhưng chuyển động so với mặt đường.",
      memoryTip: "Mẹo nhớ: không có vật mốc thì không nói được vật đang đứng yên hay chuyển động.",
      tags: ["vật mốc", "quỹ đạo", "đứng yên", "chuyển động"]
    },
    {
      id: "p8-speed",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Vận tốc",
      summary: "Vận tốc cho biết độ nhanh/chậm của chuyển động.",
      explanation: "Vận tốc là đại lượng mô tả mức độ nhanh chậm và hướng của chuyển động. Khi biết quãng đường và thời gian đi, ta có thể tính vận tốc bằng công thức v = s/t.",
      keyPoints: [
        "Công thức cơ bản: v = s/t.",
        "Đơn vị thường gặp là m/s và km/h.",
        "Biến đổi đơn vị cần đúng để tránh sai số khi làm bài."
      ],
      formula: "v = s/t; s = v.t; t = s/v",
      example: "Ví dụ: đi 60 km trong 2 giờ thì vận tốc là 30 km/h.",
      memoryTip: "Mẹo nhớ: ‘v = s chia t’; quãng đường lớn hơn thì vận tốc lớn hơn nếu thời gian không đổi.",
      tags: ["vận tốc", "m/s", "km/h", "đổi đơn vị"]
    },
    {
      id: "p8-force-balance",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Hai lực cân bằng",
      summary: "Hai lực cân bằng là hai lực cùng phương, ngược chiều và có độ lớn bằng nhau tác dụng lên cùng một vật.",
      explanation: "Khi hai lực có cùng phương, ngược chiều, cùng độ lớn và tác dụng lên cùng một vật, hợp lực của chúng bằng 0. Vì vậy vật không thay đổi trạng thái chuyển động.",
      keyPoints: [
        "Hai lực cân bằng phải cùng phương và ngược chiều.",
        "Độ lớn của hai lực phải bằng nhau.",
        "Hợp lực bằng 0 nên vật có thể đứng yên hoặc chuyển động thẳng đều."
      ],
      example: "Ví dụ: hai người kéo một vật bằng hai lực bằng nhau nhưng ngược hướng, vật không đổi chuyển động.",
      memoryTip: "Mẹo nhớ: cân bằng = đối trọng bằng nhau, ngược chiều, cùng tác dụng lên một vật.",
      tags: ["lực", "cân bằng", "hợp lực"]
    },
    {
      id: "p8-inertia",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Quán tính",
      summary: "Vật có xu hướng bảo toàn trạng thái chuyển động hoặc đứng yên khi không có lực làm thay đổi trạng thái đó.",
      explanation: "Quán tính là tính chất giữ nguyên trạng thái cũ của vật. Nếu không có lực làm thay đổi, vật sẽ tiếp tục đứng yên hoặc chuyển động thẳng đều.",
      keyPoints: [
        "Vật có xu hướng giữ nguyên vận tốc cũ.",
        "Cần phải có lực mới để thay đổi vận tốc hoặc hướng.",
        "Quán tính giải thích các hiện tượng nguy hiểm khi xe dừng đột ngột."
      ],
      example: "Ví dụ: khi xe phanh gấp, người ngồi trong xe vẫn có xu hướng tiếp tục chuyển động về phía trước.",
      memoryTip: "Mẹo nhớ: quán tính là ‘sự ngại đổi trạng thái’ của vật.",
      tags: ["quán tính", "chuyển động", "an toàn giao thông"]
    },
    {
      id: "p8-pressure-solid",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Áp suất chất rắn",
      summary: "Áp suất phụ thuộc vào lực ép và diện tích bề mặt bị ép.",
      explanation: "Áp suất chất rắn là lực tác dụng trên một đơn vị diện tích. Với cùng lực ép, diện tích nhỏ thì áp suất lớn hơn.",
      keyPoints: [
        "Công thức: p = F/S.",
        "Lực ép lớn thì áp suất lớn.",
        "Diện tích bề mặt nhỏ thì áp suất lớn hơn."
      ],
      formula: "p = F/S",
      example: "Ví dụ: cần cắm cọc vào đất, càng dùng đầu nhọn thì áp suất càng lớn.",
      memoryTip: "Mẹo nhớ: áp suất = lực chia diện tích; càng nhỏ bề mặt thì càng mạnh.",
      tags: ["áp suất", "Pascal", "N/m2"]
    },
    {
      id: "p8-pressure-liquid",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Áp suất chất lỏng",
      summary: "Áp suất chất lỏng tại một điểm phụ thuộc vào độ sâu và trọng lượng riêng.",
      explanation: "Trong chất lỏng, áp suất tăng theo độ sâu. Đáy bể có áp suất lớn hơn mặt nước vì phải chịu trọng lượng của cột chất lỏng trên đó.",
      keyPoints: [
        "Công thức: p = d.h.",
        "Độ sâu càng lớn thì áp suất càng lớn.",
        "Áp suất ở cùng độ sâu là như nhau theo mọi hướng."
      ],
      formula: "p = d.h",
      example: "Ví dụ: ở đáy hồ sâu, áp suất nước lớn hơn ở phần nông hơn.",
      memoryTip: "Mẹo nhớ: chất lỏng ép mạnh hơn khi sâu hơn.",
      tags: ["chất lỏng", "độ sâu", "trọng lượng riêng"]
    },
    {
      id: "p8-communicating-vessels",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Bình thông nhau",
      summary: "Trong bình thông nhau chứa cùng một chất lỏng đứng yên, mực chất lỏng ở các nhánh bằng nhau.",
      explanation: "Trong bình thông nhau, khi chất lỏng đứng yên thì mực ở các nhánh sẽ bằng nhau nếu cùng loại chất lỏng và áp suất ngoài như nhau. Đây là hệ quả của áp suất chất lỏng.",
      keyPoints: [
        "Cùng một chất lỏng thì mực bằng nhau khi đứng yên.",
        "Nếu nhánh có tiết diện khác nhau, mức nước vẫn bằng nhau.",
        "Nguyên lý này dùng trong các thùng chứa và hệ thống cấp nước."
      ],
      example: "Ví dụ: hai bình nối nhau bằng ống, nước ở hai nhánh có cùng mức khi đứng yên.",
      memoryTip: "Mẹo nhớ: ‘mức nước bằng nhau trong bình thông nhau’.",
      tags: ["bình thông nhau", "chất lỏng", "thăng bằng"]
    },
    {
      id: "p8-archimedes",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Lực đẩy Archimedes",
      summary: "Độ lớn lực đẩy bằng trọng lượng phần chất lỏng bị vật chiếm chỗ.",
      explanation: "Khi vật đặt trong chất lỏng, chất lỏng tác dụng lực đẩy lên vật theo phương thẳng đứng từ dưới lên. Lực này quyết định vật nổi hay chìm.",
      keyPoints: [
        "Công thức: FA = d.V.",
        "Vật nổi nếu lực đẩy lớn hơn hoặc bằng trọng lượng vật.",
        "Vật chìm nếu trọng lượng lớn hơn lực đẩy."
      ],
      formula: "FA = d.V",
      example: "Ví dụ: chiếc thuyền nổi vì lực đẩy của nước đủ lớn để cân bằng trọng lượng chiếc thuyền.",
      memoryTip: "Mẹo nhớ: nổi hay chìm là so sánh lực đẩy với trọng lượng vật.",
      tags: ["lực đẩy", "nổi chìm", "thể tích chiếm chỗ"]
    },
    {
      id: "p8-work",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Công cơ học",
      summary: "Công cơ học được sinh ra khi lực làm vật dịch chuyển theo hướng lực.",
      explanation: "Công cơ học là công sinh ra khi có lực tác dụng và vật có dịch chuyển theo hướng của lực. Nếu lực vuông góc với hướng chuyển động thì không có công.",
      keyPoints: [
        "Công thức: A = F.s.",
        "Chỉ có công khi có dịch chuyển theo hướng lực.",
        "Lực vuông góc với chuyển động không sinh công."
      ],
      formula: "A = F.s",
      example: "Ví dụ: khi kéo vali theo hướng ngang, có công vì vali dịch chuyển theo hướng kéo.",
      memoryTip: "Mẹo nhớ: công cần đồng thời có lực và dịch chuyển theo hướng lực.",
      tags: ["công", "Jun", "dịch chuyển"]
    },
    {
      id: "p8-power",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Công suất",
      summary: "Công suất cho biết tốc độ thực hiện công.",
      explanation: "Công suất mô tả mức độ nhanh hay chậm của việc thực hiện công. Người hoặc thiết bị nào làm việc nhanh hơn thì có công suất lớn hơn.",
      keyPoints: [
        "Công thức: P = A / t.",
        "Công suất lớn nghĩa là làm việc nhanh hơn.",
        "Đơn vị cơ bản là watt (W)."
      ],
      formula: "P = A/t",
      example: "Ví dụ: hai máy bơm cùng bơm nước nhưng máy nào bơm nhanh hơn thì có công suất lớn hơn.",
      memoryTip: "Mẹo nhớ: công suất là ‘tốc độ làm việc’.",
      tags: ["công suất", "W", "kW"]
    },
    {
      id: "p8-mechanical-energy",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Cơ năng, động năng và thế năng",
      summary: "Cơ năng là năng lượng của vật do chuyển động hoặc vị trí của vật so với mốc.",
      explanation: "Một vật có thể có động năng khi chuyển động và có thế năng khi ở vị trí cao hoặc bị biến dạng đàn hồi. Trong nhiều quá trình, động năng và thế năng chuyển hóa qua lại với nhau.",
      keyPoints: [
        "Động năng gắn với vận tốc chuyển động của vật.",
        "Thế năng hấp dẫn tăng khi vật ở vị trí cao hơn mốc.",
        "Thế năng đàn hồi xuất hiện khi vật đàn hồi bị biến dạng.",
        "Cơ năng có thể chuyển hóa giữa động năng và thế năng."
      ],
      example: "Ví dụ: quả bóng ném lên cao có động năng lớn lúc rời tay, lên cao thì động năng giảm và thế năng tăng.",
      memoryTip: "Mẹo nhớ: chạy nhanh thì nhiều động năng; đứng cao thì nhiều thế năng.",
      tags: ["cơ năng", "động năng", "thế năng", "chuyển hóa năng lượng"]
    },
    {
      id: "p8-density",
      grade: "8",
      chapter: "Cơ học",
      type: "formula",
      title: "Khối lượng riêng và trọng lượng riêng",
      summary: "Khối lượng riêng cho biết khối lượng trong một đơn vị thể tích; trọng lượng riêng cho biết trọng lượng trên một đơn vị thể tích.",
      explanation: "Khối lượng riêng và trọng lượng riêng cho biết mật độ vật chất. Với cùng thể tích, vật có khối lượng lớn hơn thì có khối lượng riêng lớn hơn.",
      keyPoints: [
        "Khối lượng riêng: D = m / V.",
        "Trọng lượng riêng: d = P / V.",
        "Vật có khối lượng riêng lớn hơn thường nặng hơn trong cùng thể tích."
      ],
      formula: "D = m/V; d = P/V",
      example: "Ví dụ: sắt có khối lượng riêng lớn hơn gỗ nên cùng thể tích, sắt nặng hơn gỗ.",
      memoryTip: "Mẹo nhớ: mật độ lớn = vật nặng hơn trong cùng thể tích.",
      tags: ["khối lượng riêng", "trọng lượng riêng", "g/cm3", "kg/m3"]
    },
    {
      id: "p8-thermal-energy",
      grade: "8",
      chapter: "Nhiệt học",
      type: "theory",
      title: "Nhiệt năng",
      summary: "Nhiệt năng của vật là tổng động năng của các phân tử cấu tạo nên vật.",
      explanation: "Nhiệt năng phụ thuộc vào nhiệt độ và số lượng chất. Khi các phân tử chuyển động nhanh hơn, nhiệt năng của vật tăng.",
      keyPoints: [
        "Nhiệt năng liên quan đến chuyển động hỗn loạn của phân tử.",
        "Nhiệt độ cao hơn thường đi kèm với nhiệt năng lớn hơn.",
        "Cùng nhiệt độ nhưng khối lượng khác nhau thì nhiệt năng có thể khác nhau."
      ],
      example: "Ví dụ: nước nóng có nhiệt năng lớn hơn nước lạnh ở cùng khối lượng và thể tích.",
      memoryTip: "Mẹo nhớ: nhiệt năng là ‘động năng của các phân tử’.",
      tags: ["nhiệt năng", "phân tử", "nhiệt độ"]
    },
    {
      id: "p8-heat-transfer",
      grade: "8",
      chapter: "Nhiệt học",
      type: "theory",
      title: "Dẫn nhiệt, đối lưu, bức xạ nhiệt",
      summary: "Ba hình thức truyền nhiệt cơ bản trong tự nhiên và kỹ thuật.",
      explanation: "Nhiệt có thể lan truyền theo ba cách: dẫn nhiệt qua chất rắn, đối lưu qua chất lỏng và khí, và bức xạ bằng sóng điện từ.",
      keyPoints: [
        "Dẫn nhiệt xảy ra trong vật rắn như kim loại.",
        "Đối lưu xảy ra khi chất lỏng hoặc khí chuyển động.",
        "Bức xạ nhiệt truyền qua khoảng không mà không cần môi trường trung gian."
      ],
      example: "Ví dụ: tay đặt lên cốc nước nóng nóng lên do dẫn nhiệt; Mặt Trời làm ấm Trái Đất bằng bức xạ nhiệt.",
      memoryTip: "Mẹo nhớ: dẫn = qua chất rắn, đối lưu = trong chất lỏng/khí, bức xạ = không cần chất mang.",
      tags: ["dẫn nhiệt", "đối lưu", "bức xạ"]
    },
    {
      id: "p8-heat-quantity",
      grade: "8",
      chapter: "Nhiệt học",
      type: "formula",
      title: "Nhiệt lượng",
      summary: "Nhiệt lượng vật thu vào hoặc tỏa ra khi thay đổi nhiệt độ.",
      explanation: "Nhiệt lượng là lượng nhiệt mà vật thu vào hoặc tỏa ra khi thay đổi nhiệt độ. Nó phụ thuộc vào khối lượng, nhiệt dung riêng và độ chênh lệch nhiệt độ.",
      keyPoints: [
        "Công thức: Q = m.c.Δt.",
        "Khối lượng lớn hơn thì cần hoặc tỏa nhiều nhiệt lượng hơn.",
        "Nhiệt dung riêng là tính chất riêng của từng chất."
      ],
      formula: "Q = m.c.Δt",
      example: "Ví dụ: cùng đun 1 kg nước và 1 kg dầu, lượng nhiệt cần khác nhau vì nhiệt dung riêng khác nhau.",
      memoryTip: "Mẹo nhớ: Q = m c Δt; nóng lên hay lạnh đi đều phụ thuộc vào ba yếu tố này.",
      tags: ["nhiệt lượng", "nhiệt dung riêng", "delta t"]
    },
    {
      id: "p8-thermal-balance",
      grade: "8",
      chapter: "Nhiệt học",
      type: "problem",
      title: "Bài toán cân bằng nhiệt",
      summary: "Trong hệ kín, bỏ qua thất thoát: tổng nhiệt lượng tỏa ra bằng tổng nhiệt lượng thu vào.",
      explanation: "Cân bằng nhiệt là trạng thái mà hai vật trao đổi nhiệt cho đến khi cùng nhiệt độ. Nếu hệ kín và không thất thoát, tổng nhiệt lượng tỏa bằng tổng nhiệt lượng thu.",
      keyPoints: [
        "Hệ kín là hệ không trao đổi nhiệt với môi trường ngoài.",
        "Nhiệt độ cuối cùng của hệ là nhiệt độ chung.",
        "Nhiệt lượng tỏa = nhiệt lượng thu trong trường hợp không có hao phí."
      ],
      formula: "Qtỏa = Qthu",
      example: "Ví dụ: nước nóng trộn với nước lạnh, cuối cùng cả hai có cùng nhiệt độ khi hệ đạt cân bằng nhiệt.",
      memoryTip: "Mẹo nhớ: trong hệ kín, nhiệt tỏa ra bằng nhiệt thu vào.",
      tags: ["cân bằng nhiệt", "trộn chất", "nhiệt kế"]
    },
    {
      id: "p9-current",
      grade: "9",
      chapter: "Điện học",
      type: "theory",
      title: "Dòng điện và cường độ dòng điện",
      summary: "Dòng điện là dòng chuyển dời có hướng của các điện tích; cường độ dòng điện đặc trưng độ mạnh yếu của dòng điện.",
      explanation: "Dòng điện xuất hiện khi các hạt mang điện di chuyển có hướng trong mạch. Cường độ dòng điện cho biết lượng điện tích đi qua tiết diện mạch trong một đơn vị thời gian.",
      keyPoints: [
        "Cường độ dòng điện có đơn vị là ampe (A).",
        "Dòng điện chỉ có trong mạch kín.",
        "Các thiết bị như đèn, quạt, tủ lạnh hoạt động nhờ có dòng điện."
      ],
      example: "Ví dụ: dây dẫn nối nguồn điện với bóng đèn tạo thành mạch kín, dòng điện chạy qua làm bóng đèn sáng.",
      memoryTip: "Mẹo nhớ: dòng điện cần ‘mạch kín’ và ‘điện tích chuyển động có hướng’.",
      tags: ["dòng điện", "ampe", "điện tích"]
    },
    {
      id: "p9-voltage",
      grade: "9",
      chapter: "Điện học",
      type: "theory",
      title: "Hiệu điện thế",
      summary: "Hiệu điện thế giữa hai điểm biểu thị khả năng sinh công của điện trường khi dịch chuyển điện tích.",
      explanation: "Hiệu điện thế là chênh lệch điện thế giữa hai điểm. Nó cho biết khả năng thực hiện công của điện trường và là nguyên nhân khiến điện tích di chuyển trong mạch.",
      keyPoints: [
        "Đơn vị là vôn (V).",
        "Hiệu điện thế càng lớn thì khả năng sinh công càng mạnh.",
        "Mạch phải có nguồn điện để tạo ra hiệu điện thế."
      ],
      example: "Ví dụ: pin 1,5 V tạo hiệu điện thế để đèn pin sáng.",
      memoryTip: "Mẹo nhớ: hiệu điện thế là độ chênh lệch điện áp, khiến dòng điện chạy.",
      tags: ["hiệu điện thế", "vôn", "nguồn điện"]
    },
    {
      id: "p9-ohm",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Định luật Ohm",
      summary: "Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở.",
      explanation: "Định luật Ohm mô tả mối quan hệ giữa cường độ dòng điện I, hiệu điện thế U và điện trở R trong một mạch điện đơn giản. Nếu điện trở không đổi thì I tăng khi U tăng và giảm khi R tăng.",
      keyPoints: [
        "Công thức: I = U/R; U = I.R; R = U/I.",
        "Điện trở làm cản trở dòng điện.",
        "Nếu U tăng, I tăng khi R không đổi."
      ],
      formula: "I = U/R; U = I.R; R = U/I",
      example: "Ví dụ: nếu điện áp tăng gấp đôi mà điện trở không đổi, cường độ dòng điện cũng tăng gấp đôi.",
      memoryTip: "Mẹo nhớ: ‘I = U/R’ là công thức cốt lõi của mạch điện cơ bản.",
      tags: ["định luật Ohm", "điện trở", "mạch điện"]
    },
    {
      id: "p9-resistance-wire",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Điện trở dây dẫn",
      summary: "Điện trở phụ thuộc chiều dài, tiết diện và vật liệu làm dây.",
      explanation: "Điện trở của dây dẫn phụ thuộc vào chiều dài, tiết diện và điện trở suất của vật liệu. Dây dài hơn, mảnh hơn, hoặc làm từ vật liệu có điện trở suất lớn thì có điện trở lớn hơn.",
      keyPoints: [
        "Công thức: R = ρ.l/S.",
        "Chiều dài dây càng lớn thì điện trở càng lớn.",
        "Tiết diện càng lớn thì điện trở càng nhỏ."
      ],
      formula: "R = ρ.l/S",
      example: "Ví dụ: dây đồng dài và mảnh sẽ có điện trở lớn hơn dây đồng ngắn và dày.",
      memoryTip: "Mẹo nhớ: dây dài, mảnh và cản lớn thì điện trở lớn.",
      tags: ["điện trở suất", "dây dẫn", "vật liệu"]
    },
    {
      id: "p9-series-parallel",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Mạch nối tiếp và song song",
      summary: "Tính điện trở tương đương theo từng kiểu ghép mạch.",
      explanation: "Trong mạch nối tiếp, điện trở tương đương bằng tổng các điện trở. Trong mạch song song, tổng nghịch đảo điện trở tương đương bằng tổng nghịch đảo từng điện trở.",
      keyPoints: [
        "Mạch nối tiếp: Rtđ = R1 + R2 + ...",
        "Mạch song song: 1/Rtđ = 1/R1 + 1/R2 + ...",
        "Bài toán ghép mạch cần phân biệt rõ kiểu mắc."
      ],
      formula: "Rtđ(nt)=R1+R2+...; 1/Rtđ(ss)=1/R1+1/R2+...",
      example: "Ví dụ: hai bóng đèn mắc song song thì mỗi bóng chịu cùng điện áp nhưng dòng điện chia nhau.",
      memoryTip: "Mẹo nhớ: nối tiếp là cộng trực tiếp, song song là cộng nghịch đảo.",
      tags: ["nối tiếp", "song song", "điện trở tương đương"]
    },
    {
      id: "p9-electric-work",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Công của dòng điện",
      summary: "Điện năng tiêu thụ trong một đoạn mạch trong thời gian t.",
      explanation: "Công của dòng điện là năng lượng mà mạch chuyển hóa thành công có ích hoặc nhiệt trong thời gian dùng. Công này được tính bằng tích của hiệu điện thế, cường độ dòng điện và thời gian.",
      keyPoints: [
        "Công thức: A = U.I.t.",
        "Công lớn khi thời gian sử dụng dài hơn.",
        "Năng lượng tiêu thụ có thể biến thành nhiệt, ánh sáng hoặc cơ năng."
      ],
      formula: "A = U.I.t",
      example: "Ví dụ: bếp điện chạy trong 1 giờ tiêu thụ nhiều điện năng hơn khi chạy 30 phút.",
      memoryTip: "Mẹo nhớ: công điện = U × I × t; dài thời gian thì tiêu thụ năng lượng nhiều hơn.",
      tags: ["công điện", "điện năng", "Jun"]
    },
    {
      id: "p9-electric-power",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Công suất điện",
      summary: "Công suất điện cho biết tốc độ tiêu thụ điện năng.",
      explanation: "Công suất điện cho biết năng lượng tiêu thụ trong một đơn vị thời gian. Thiết bị có công suất lớn hơn thì tiêu thụ năng lượng nhanh hơn trong cùng một khoảng thời gian.",
      keyPoints: [
        "Công thức: P = U.I = I².R = U²/R.",
        "Đơn vị là W (watt).",
        "Công suất càng lớn thì thiết bị càng mạnh hoặc tiêu hao điện càng nhanh."
      ],
      formula: "P = U.I = I2.R = U2/R",
      example: "Ví dụ: máy sấy có công suất lớn hơn bóng đèn nên tỏa nhiệt mạnh hơn.",
      memoryTip: "Mẹo nhớ: công suất là ‘nhịp độ tiêu thụ điện năng’.",
      tags: ["công suất", "W", "kWh"]
    },
    {
      id: "p9-joule-lenz",
      grade: "9",
      chapter: "Điện học",
      type: "formula",
      title: "Định luật Joule-Lenz",
      summary: "Nhiệt lượng tỏa ra trên dây dẫn khi có dòng điện chạy qua.",
      explanation: "Khi dòng điện chạy qua dây dẫn có điện trở, một phần năng lượng điện chuyển thành nhiệt. Đây là nguyên lý tạo ra nhiệt trong bàn là, bếp điện và dây nung.",
      keyPoints: [
        "Công thức: Q = I².R.t.",
        "Nhiệt lượng tỏa ra tăng nếu điện trở, cường độ hoặc thời gian tăng.",
        "Đây là cơ sở cho thiết bị gia nhiệt điện."
      ],
      formula: "Q = I2.R.t",
      example: "Ví dụ: bếp điện nóng vì dây nung có điện trở, dòng điện chạy qua làm tỏa nhiệt.",
      memoryTip: "Mẹo nhớ: điện trở nóng lên vì dòng điện làm tỏa nhiệt.",
      tags: ["Joule-Lenz", "tỏa nhiệt", "bàn là", "bếp điện"]
    },
    {
      id: "p9-household-electricity",
      grade: "9",
      chapter: "Điện học",
      type: "problem",
      title: "Bài toán điện năng tiêu thụ gia đình",
      summary: "Tính điện năng và tiền điện theo công suất thiết bị và thời gian sử dụng.",
      explanation: "Bài toán điện năng gia đình liên quan đến công suất, thời gian hoạt động và giá điện. Từ đó ta tính được điện năng tiêu thụ và số tiền phải trả.",
      keyPoints: [
        "A(kWh) = P(kW) × t(h).",
        "Công suất lớn và thời gian sử dụng dài thì điện năng tiêu thụ nhiều hơn.",
        "Bài toán thực tế thường yêu cầu tính tiền từ tổng số kWh tiêu thụ."
      ],
      formula: "A(kWh) = P(kW).t(h)",
      example: "Ví dụ: một máy 1 kW chạy 3 giờ sẽ tiêu thụ 3 kWh điện.",
      memoryTip: "Mẹo nhớ: điện năng = công suất × thời gian, rút gọn thành kWh để tính tiền.",
      tags: ["hóa đơn điện", "kWh", "thực tế"]
    },
    {
      id: "p9-magnet",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Nam châm và từ trường",
      summary: "Từ trường tồn tại xung quanh nam châm và dòng điện, có thể biểu diễn bằng đường sức từ.",
      explanation: "Nam châm tạo ra từ trường ở xung quanh; từ trường không nhìn thấy nhưng có thể tác dụng lực lên nam châm khác, dây dẫn có dòng điện và các hạt mang điện.",
      keyPoints: [
        "Có hai cực từ: Bắc và Nam.",
        "Đường sức từ đi ra từ cực Bắc và vào cực Nam.",
        "Từ trường mạnh nhất ở gần các cực nam châm."
      ],
      example: "Ví dụ: kim la bàn quay để chỉ hướng Bắc - Nam vì chịu tác dụng của từ trường Trái Đất.",
      memoryTip: "Mẹo nhớ: đường sức từ đi từ cực Bắc ra, vào cực Nam.",
      tags: ["nam châm", "đường sức từ", "cực từ"]
    },
    {
      id: "p9-solenoid",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Ống dây có dòng điện",
      summary: "Ống dây có dòng điện chạy qua có từ trường giống nam châm thẳng.",
      explanation: "Một ống dây có dòng điện tạo ra từ trường trong lòng ống dây. Nếu ta bọc dây quanh lõi sắt, từ trường sẽ mạnh hơn và có thể tạo thành nam châm điện.",
      keyPoints: [
        "Ống dây có dòng điện có tính chất giống nam châm thẳng.",
        "Từ trường trong ống dây mạnh hơn nếu tăng số vòng dây.",
        "Quy tắc nắm tay phải giúp xác định hướng từ trường."
      ],
      example: "Ví dụ: nam châm điện trong chuông báo, rơ le và relay dùng ống dây có dòng điện.",
      memoryTip: "Mẹo nhớ: ống dây có dòng điện là nam châm điện tạm thời.",
      tags: ["ống dây", "quy tắc nắm tay phải", "từ trường"]
    },
    {
      id: "p9-induction",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Hiện tượng cảm ứng điện từ",
      summary: "Suất điện động cảm ứng xuất hiện khi từ thông qua mạch kín biến thiên.",
      explanation: "Khi từ thông qua một mạch kín thay đổi, sẽ xuất hiện dòng điện cảm ứng. Đây là nguyên lý của máy phát điện và các thiết bị dùng để biến đổi năng lượng.",
      keyPoints: [
        "Từ thông phải biến thiên theo thời gian.",
        "Dòng điện cảm ứng xuất hiện trong mạch kín.",
        "Máy phát điện hoạt động theo hiện tượng cảm ứng điện từ."
      ],
      example: "Ví dụ: quay cuộn dây trong từ trường sẽ tạo ra dòng điện cảm ứng như trong máy phát điện.",
      memoryTip: "Mẹo nhớ: biến thiên từ thông → xuất hiện dòng điện cảm ứng.",
      tags: ["cảm ứng điện từ", "máy phát điện", "từ thông"]
    },
    {
      id: "p9-transformer",
      grade: "9",
      chapter: "Điện từ học",
      type: "formula",
      title: "Máy biến thế và truyền tải điện năng",
      summary: "Máy biến thế dùng cảm ứng điện từ để tăng hoặc giảm hiệu điện thế xoay chiều.",
      explanation: "Trong truyền tải điện năng đi xa, người ta thường tăng hiệu điện thế để giảm hao phí trên đường dây, sau đó hạ áp khi đưa vào sử dụng dân dụng.",
      keyPoints: [
        "Máy biến thế hoạt động với dòng điện xoay chiều.",
        "Tỉ số điện áp tỉ lệ với tỉ số số vòng dây cuộn thứ cấp và sơ cấp.",
        "Tăng điện áp truyền tải giúp giảm cường độ dòng điện và giảm hao phí nhiệt.",
        "Điện lưới dân dụng cần hạ áp để đảm bảo an toàn và phù hợp thiết bị."
      ],
      formula: "U1/U2 = N1/N2; Phao phi = I^2.R",
      example: "Ví dụ: điện từ nhà máy được nâng lên hàng trăm kV để truyền xa rồi hạ xuống 220V trước khi vào hộ gia đình.",
      memoryTip: "Mẹo nhớ: truyền xa thì tăng áp, dùng trong nhà thì hạ áp.",
      tags: ["máy biến thế", "truyền tải điện", "hao phí", "điện áp"]
    },
    {
      id: "p9-light-line",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Sự truyền thẳng của ánh sáng",
      summary: "Trong môi trường trong suốt đồng tính, ánh sáng truyền theo đường thẳng.",
      explanation: "Ánh sáng đi theo đường thẳng khi không bị khúc xạ, phản xạ hoặc bị vật cản chắn. Đây là nguyên lý giải thích bóng tối, nhật thực và nguyệt thực.",
      keyPoints: [
        "Môi trường trong suốt đồng tính giúp tia sáng đi thẳng.",
        "Nếu có vật cản, sẽ có vùng tối phía sau vật gọi là bóng tối.",
        "Nhật thực xảy ra khi Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng theo hướng từ Mặt Trời tới Trái Đất."
      ],
      example: "Ví dụ: khi pin đèn chiếu qua một lỗ nhỏ, vùng sáng trên tường có hình dạng đường thẳng tương ứng với nguồn sáng.",
      memoryTip: "Mẹo nhớ: ánh sáng đi thẳng trong môi trường đồng chất; nó đổi hướng khi gặp mặt phân cách hoặc vật chắn.",
      tags: ["tia sáng", "bóng tối", "nhật thực", "nguyệt thực"]
    },
    {
      id: "p9-reflection",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Định luật phản xạ ánh sáng",
      summary: "Tia phản xạ nằm trong mặt phẳng tới và góc phản xạ bằng góc tới.",
      explanation: "Khi tia sáng gặp gương phẳng, nó bị bật ngược lại theo nguyên tắc góc tới bằng góc phản xạ. Đây là cơ sở để dựng ảnh trong gương phẳng.",
      keyPoints: [
        "Góc tới là góc giữa tia tới và pháp tuyến tại điểm tới.",
        "Góc phản xạ bằng góc tới và nằm trong cùng mặt phẳng với tia tới và pháp tuyến.",
        "Ảnh tạo bởi gương phẳng luôn ảo, bằng chiều cao vật và cách gương bằng khoảng cách vật đến gương."
      ],
      example: "Ví dụ: nhìn vào gương phẳng, ảnh của bạn hiện ra như một vật ảo đặt sau gương nhưng kích thước bằng thật.",
      memoryTip: "Mẹo nhớ: ‘góc tới = góc phản xạ’, cả hai nằm trong cùng mặt phẳng với pháp tuyến.",
      tags: ["phản xạ", "gương phẳng", "góc tới", "góc phản xạ"]
    },
    {
      id: "p9-refraction",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Khúc xạ ánh sáng",
      summary: "Khi truyền xiên qua mặt phân cách hai môi trường trong suốt, tia sáng bị gãy khúc.",
      explanation: "Khi ánh sáng đi từ không khí sang nước hoặc kính, vận tốc thay đổi nên tia sáng đổi hướng. Sự đổi hướng này gọi là khúc xạ.",
      keyPoints: [
        "Tia sáng đi từ môi trường loãng sang môi trường đặc thì lệch lại gần pháp tuyến.",
        "Tia sáng đi từ môi trường đặc sang môi trường loãng thì lệch ra xa pháp tuyến.",
        "Chiết suất n = c/v là đại lượng mô tả mức độ khúc xạ của môi trường."
      ],
      example: "Ví dụ: khi đặt một chiếc đũa vào nước, đũa trông bị gãy ở mặt nước vì ánh sáng truyền qua lớp nước bị lệch hướng.",
      memoryTip: "Mẹo nhớ: ‘đi từ loãng sang đặc, lệch vào gần pháp tuyến’; ‘đi từ đặc sang loãng, lệch ra xa pháp tuyến’.",
      tags: ["khúc xạ", "chiết suất", "môi trường"]
    },
    {
      id: "p9-white-light",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Ánh sáng trắng và ánh sáng màu",
      summary: "Ánh sáng trắng là hỗn hợp của nhiều ánh sáng màu; ánh sáng đơn sắc chỉ có một màu xác định.",
      explanation: "Ánh sáng từ Mặt Trời hoặc đèn trắng thường là ánh sáng trắng. Khi đi qua các hệ quang học phù hợp, ánh sáng trắng có thể tách thành nhiều dải màu khác nhau.",
      keyPoints: [
        "Ánh sáng trắng chứa nhiều thành phần màu.",
        "Ánh sáng đơn sắc có một màu xác định và không bị phân tích thêm bởi lăng kính thông thường.",
        "Màu sắc ta thấy phụ thuộc vào ánh sáng chiếu tới và khả năng phản xạ/hấp thụ của vật.",
        "Dải màu cơ bản thường quan sát gồm đỏ, cam, vàng, lục, lam, chàm, tím."
      ],
      example: "Ví dụ: đèn LED trắng phát ra ánh sáng trắng nên khi chiếu vào vật có nhiều màu khác nhau ta vẫn thấy vật có màu riêng của nó.",
      memoryTip: "Mẹo nhớ: trắng là hỗn hợp nhiều màu, đơn sắc là chỉ một màu.",
      tags: ["ánh sáng trắng", "ánh sáng màu", "đơn sắc", "quang phổ"]
    },
    {
      id: "p9-dispersion-light",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Tán sắc ánh sáng",
      summary: "Tán sắc là hiện tượng ánh sáng trắng bị phân tách thành nhiều màu khi đi qua lăng kính.",
      explanation: "Khi qua lăng kính, các thành phần màu trong ánh sáng trắng bị lệch với góc khác nhau do chiết suất của môi trường phụ thuộc màu sắc (bước sóng). Vì vậy xuất hiện dải quang phổ từ đỏ đến tím.",
      keyPoints: [
        "Tán sắc thường quan sát rõ với lăng kính thủy tinh.",
        "Màu tím lệch nhiều hơn màu đỏ trong cùng điều kiện.",
        "Hiện tượng cầu vồng trong tự nhiên liên quan đến tán sắc ánh sáng Mặt Trời trong giọt nước.",
        "Tán sắc chứng minh ánh sáng trắng là hỗn hợp nhiều ánh sáng màu."
      ],
      example: "Ví dụ: chiếu chùm sáng trắng hẹp qua lăng kính, trên màn chắn thu được dải nhiều màu liên tiếp.",
      memoryTip: "Mẹo nhớ: lăng kính tách trắng thành 7 màu, tím lệch nhiều hơn đỏ.",
      tags: ["tán sắc ánh sáng", "lăng kính", "quang phổ", "cầu vồng"]
    },
    {
      id: "p9-color-filters",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Sự trộn ánh sáng màu và kính lọc màu",
      summary: "Các ánh sáng màu khi chồng lên nhau có thể tạo màu mới; kính lọc màu chỉ truyền ánh sáng cùng màu của nó.",
      explanation: "Trong trộn màu ánh sáng, các màu cơ bản cộng hợp theo quy tắc khác với trộn màu sơn. Kính lọc màu cho qua tốt nhất ánh sáng cùng màu và hấp thụ nhiều thành phần màu khác.",
      keyPoints: [
        "Trộn ánh sáng đỏ và lục có thể cho vàng (trong mô hình cộng hợp).",
        "Kính lọc màu đỏ truyền ánh sáng đỏ mạnh hơn các màu khác.",
        "Vật nhìn qua kính lọc có thể tối đi nếu màu vật không phù hợp.",
        "Cần phân biệt trộn ánh sáng và trộn chất màu (mực/sơn)."
      ],
      example: "Ví dụ: đặt tấm lọc đỏ trước nguồn sáng trắng sẽ thu được chùm sáng thiên đỏ đi qua.",
      memoryTip: "Mẹo nhớ: kính lọc màu nào thì ưu tiên cho màu đó đi qua.",
      tags: ["trộn ánh sáng", "kính lọc màu", "màu sắc", "quang học"]
    },
    {
      id: "p9-color-objects",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Màu sắc các vật dưới ánh sáng trắng và ánh sáng màu",
      summary: "Màu vật quan sát được phụ thuộc vào ánh sáng chiếu tới và khả năng phản xạ của vật.",
      explanation: "Một vật có màu nào là do nó phản xạ mạnh ánh sáng màu đó và hấp thụ phần lớn các màu còn lại. Khi thay đổi nguồn sáng chiếu, màu quan sát của vật có thể thay đổi.",
      keyPoints: [
        "Vật đỏ dưới ánh sáng trắng phản xạ mạnh thành phần đỏ.",
        "Vật trắng phản xạ nhiều thành phần màu, vật đen hấp thụ nhiều ánh sáng.",
        "Chiếu ánh sáng xanh vào vật đỏ có thể làm vật trông tối hơn.",
        "Màu nhìn thấy là kết quả của tương tác nguồn sáng và vật."
      ],
      example: "Ví dụ: áo đỏ dưới đèn xanh lam thường trông sẫm hơn vì thiếu thành phần đỏ để phản xạ.",
      memoryTip: "Mẹo nhớ: vật hiện màu gì là do phản xạ màu đó, không chỉ do bản thân vật.",
      tags: ["màu sắc vật", "phản xạ ánh sáng", "ánh sáng trắng", "ánh sáng màu"]
    },
    {
      id: "p9-lens",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Thấu kính hội tụ và phân kỳ",
      summary: "Nhận biết đặc điểm của mỗi loại thấu kính và tính chất ảnh tạo bởi chúng.",
      explanation: "Thấu kính hội tụ làm chùm sáng hội tụ tại tiêu điểm; thấu kính phân kỳ làm chùm sáng tản ra. Cả hai đều tạo ảnh với tính chất khác nhau tùy vị trí vật.",
      keyPoints: [
        "Thấu kính hội tụ có thể tạo ảnh thật hoặc ảnh ảo tùy vị trí vật.",
        "Thấu kính phân kỳ luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật.",
        "Tiêu điểm là điểm mà chùm sáng song song đi qua thấu kính hội tụ hoặc phân kỳ."
      ],
      example: "Ví dụ: kính lúp, kính mắt cận và kính thiên văn thường dùng thấu kính hội tụ hoặc phân kỳ tùy mục đích quan sát.",
      memoryTip: "Mẹo nhớ: hội tụ ‘gộp’ chùm sáng lại, phân kỳ ‘tản’ chùm sáng ra.",
      tags: ["thấu kính", "ảnh thật", "ảnh ảo", "tiêu điểm"]
    },
    {
      id: "p9-lens-drawing",
      grade: "9",
      chapter: "Quang học",
      type: "problem",
      title: "Dạng bài dựng ảnh qua thấu kính",
      summary: "Dùng các tia đặc biệt để xác định vị trí ảnh và tính chất ảnh.",
      explanation: "Dạng bài dựng ảnh yêu cầu xác định vị trí vật, tia sáng đặc biệt và ảnh tạo thành. Cần phân biệt trường hợp vật ở trước tiêu điểm, ở tiêu điểm và ngoài tiêu điểm.",
      keyPoints: [
        "Dùng 3 tia đặc biệt: tia song song với trục chính, tia đi qua tiêu điểm và tia đi qua tâm quang học.",
        "Ảnh thật được tạo khi các tia ló hội tụ lại; ảnh ảo là giao điểm kéo dài của các tia ló.",
        "Một bài toán dựng ảnh thường yêu cầu xác định vị trí, chiều cao và tính chất của ảnh."
      ],
      example: "Ví dụ: khi vật đặt ngoài tiêu điểm của thấu kính hội tụ, ảnh thu được là ảnh thật ngược chiều và có thể lớn hơn vật.",
      memoryTip: "Mẹo nhớ: trước tiêu điểm thì ảnh ảo, sau tiêu điểm thường ảnh thật; với thấu kính phân kỳ thì luôn ảnh ảo, cùng chiều và nhỏ hơn vật.",
      tags: ["dựng hình", "tia đặc biệt", "trục chính"]
    },
    {
      id: "p9-prism-problem",
      grade: "9",
      chapter: "Quang học",
      type: "problem",
      title: "Dạng bài nhận biết tán sắc qua lăng kính",
      summary: "Bài tập thường yêu cầu xác định thứ tự màu, mức độ lệch và giải thích hiện tượng tán sắc.",
      explanation: "Trong dạng bài này, học sinh cần nhận diện bản chất: mỗi ánh sáng màu có chiết suất khác nhau trong thủy tinh, nên góc lệch khác nhau. Kết quả là chùm tia trắng tách thành dải màu.",
      keyPoints: [
        "Thứ tự màu trong quang phổ thường từ đỏ đến tím.",
        "Tím lệch nhiều hơn đỏ khi qua lăng kính.",
        "Ánh sáng đơn sắc không tiếp tục tách thành dải nhiều màu trong cùng điều kiện.",
        "Lập luận cần gắn với chiết suất phụ thuộc màu sắc."
      ],
      example: "Ví dụ: đề bài hỏi tia nào lệch nhiều hơn giữa đỏ và tím, đáp án là tia tím.",
      memoryTip: "Mẹo nhớ: bài lăng kính thì nhớ ngay 'tím lệch nhiều - đỏ lệch ít'.",
      tags: ["dạng bài quang học", "lăng kính", "tán sắc", "quang phổ"]
    },
    {
      id: "p9-eye-defects",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Mắt cận, mắt viễn và cách khắc phục",
      summary: "Mắt cận nhìn xa kém, mắt viễn nhìn gần kém; khắc phục bằng thấu kính phù hợp.",
      explanation: "Ở mắt cận, ảnh của vật ở xa rơi trước võng mạc; còn ở mắt viễn, ảnh của vật gần rơi sau võng mạc. Dùng thấu kính phân kỳ cho mắt cận và thấu kính hội tụ cho mắt viễn để đưa ảnh về đúng võng mạc.",
      keyPoints: [
        "Mắt cận thường đeo kính phân kỳ.",
        "Mắt viễn thường đeo kính hội tụ.",
        "Điều tiết mắt là sự thay đổi tiêu cự thủy tinh thể để nhìn rõ ở các khoảng cách khác nhau.",
        "Giữ khoảng cách học tập hợp lý giúp bảo vệ mắt."
      ],
      example: "Ví dụ: học sinh cận nhìn bảng mờ ở xa nhưng nhìn sách gần rõ hơn.",
      memoryTip: "Mẹo nhớ: cận đi với phân kỳ, viễn đi với hội tụ.",
      tags: ["mắt cận", "mắt viễn", "kính phân kỳ", "kính hội tụ", "điều tiết"]
    },
    {
      id: "p8-friction",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Lực ma sát",
      summary: "Lực ma sát cản chuyển động tương đối giữa hai bề mặt tiếp xúc.",
      explanation: "Lực ma sát xuất hiện khi hai bề mặt tiếp xúc và có xu hướng trượt lên nhau. Nó có thể làm giảm tốc độ chuyển động hoặc ngăn vật trượt đi.",
      keyPoints: [
        "Lực ma sát có phương ngược hướng chuyển động tương đối.",
        "Bề mặt càng nhám thì ma sát càng lớn.",
        "Ma sát có thể có lợi như khi đi bộ, nhưng cũng gây hao phí năng lượng."
      ],
      example: "Ví dụ: khi xe đạp phanh, ma sát giữa má phanh và bánh làm xe dừng lại.",
      memoryTip: "Mẹo nhớ: ma sát là lực ‘ngăn trượt’, luôn chống lại xu hướng chuyển động tương đối.",
      tags: ["ma sát", "trượt", "phanh", "cản chuyển động"]
    },
    {
      id: "p8-force-motion",
      grade: "8",
      chapter: "Cơ học",
      type: "theory",
      title: "Quan hệ giữa lực và chuyển động",
      summary: "Lực làm thay đổi vận tốc của vật, do đó làm vật tăng tốc, giảm tốc hoặc đổi hướng.",
      explanation: "Một vật đang chuyển động thẳng đều chỉ thay đổi vận tốc khi có lực tác dụng. Lực là nguyên nhân thay đổi trạng thái chuyển động của vật.",
      keyPoints: [
        "Không có lực thì vật duy trì trạng thái cũ.",
        "Lực khiến vật tăng tốc, giảm tốc hoặc đổi hướng.",
        "Một vật có thể đang chuyển động nhưng nếu lực cân bằng thì vận tốc không đổi."
      ],
      example: "Ví dụ: khi đẩy xe đạp, xe tăng tốc lên; khi phanh, xe giảm tốc độ.",
      memoryTip: "Mẹo nhớ: lực là nguyên nhân ‘đổi vận tốc’ của vật.",
      tags: ["lực", "vận tốc", "tăng tốc", "giảm tốc"]
    },
    {
      id: "p8-pressure-application",
      grade: "8",
      chapter: "Cơ học",
      type: "problem",
      title: "Ứng dụng của áp suất trong đời sống",
      summary: "Áp suất được ứng dụng trong máy ép, dao, đinh, bánh xe và bơm nước.",
      explanation: "Trong thực tế, người ta dùng nguyên lý áp suất để tăng hiệu quả trong các thiết bị như dao, đinh, búa, bơm, bánh xe, và hệ thống thủy lực.",
      keyPoints: [
        "Dao sắc có cạnh mảnh nên áp suất lớn hơn.",
        "Bánh xe giúp giảm áp suất lên mặt đất so với bánh cứng.",
        "Bơm nước dùng áp suất để đẩy chất lỏng đi theo hướng mong muốn."
      ],
      formula: "p = F/S",
      example: "Ví dụ: đinh có đầu nhọn dễ cắm vào gỗ vì diện tích tiếp xúc nhỏ nên áp suất lớn.",
      memoryTip: "Mẹo nhớ: áp suất lớn khi diện tích nhỏ, nên dụng cụ có đầu nhọn dễ xuyên vào vật.",
      tags: ["ứng dụng", "dao", "đinh", "áp suất"]
    },
    {
      id: "p8-heat-expansion",
      grade: "8",
      chapter: "Nhiệt học",
      type: "theory",
      title: "Nở vì nhiệt",
      summary: "Nhiều vật nở ra khi nóng lên và co lại khi lạnh đi.",
      explanation: "Khi nhiệt độ tăng, các phân tử chuyển động mạnh hơn và khoảng cách giữa chúng tăng lên, làm vật nở ra. Đây là nguyên lý quan trọng trong kỹ thuật và đời sống.",
      keyPoints: [
        "Vật rắn, lỏng, khí đều có thể nở vì nhiệt.",
        "Nhiệt độ càng cao thì nở càng nhiều.",
        "Nở vì nhiệt được ứng dụng trong dấu vạch trên nhiệt kế, cầu đường, mạch điện."
      ],
      example: "Ví dụ: thanh ray đường sắt có khe hở để khi nở vì nhiệt không bị cong vênh.",
      memoryTip: "Mẹo nhớ: nóng lên thì vật nở ra, lạnh đi thì co lại.",
      tags: ["nở vì nhiệt", "co giãn", "đường sắt", "nhiệt kế"]
    },
    {
      id: "p9-electric-circuit",
      grade: "9",
      chapter: "Điện học",
      type: "theory",
      title: "Mạch điện và các đại lượng cơ bản",
      summary: "Một mạch điện gồm nguồn điện, dây dẫn, công tắc và các thiết bị tiêu thụ.",
      explanation: "Để mạch điện hoạt động, cần có nguồn điện tạo hiệu điện thế và mạch kín cho dòng điện đi qua. Mỗi phần tử trong mạch đều có vai trò riêng.",
      keyPoints: [
        "Nguồn điện tạo hiệu điện thế.",
        "Dây dẫn cho dòng điện đi từ nguồn tới thiết bị.",
        "Công tắc đóng ngắt mạch và đèn, quạt là tải tiêu thụ."
      ],
      example: "Ví dụ: mạch điện trong nhà gồm dây dẫn, cầu chì, ổ cắm và các thiết bị điện tiêu thụ.",
      memoryTip: "Mẹo nhớ: ‘nguồn – dây – tải – công tắc’ là sơ đồ mạch điện cơ bản.",
      tags: ["mạch điện", "nguồn", "dây dẫn", "công tắc"]
    },
    {
      id: "p9-meter",
      grade: "9",
      chapter: "Điện học",
      type: "theory",
      title: "Các dụng cụ đo điện và nguyên tắc sử dụng",
      summary: "Ampe kế, vôn kế, ôm kế được dùng để đo cường độ dòng điện, hiệu điện thế và điện trở.",
      explanation: "Các dụng cụ đo điện được mắc vào mạch theo cách riêng để đo đúng đại lượng. Nếu mắc sai cách, số liệu đo sẽ không chính xác.",
      keyPoints: [
        "Ampe kế mắc nối tiếp với mạch.",
        "Vôn kế mắc song song với đoạn mạch cần đo.",
        "Khi đo điện trở, phải ngắt nguồn trước khi dùng ôm kế."
      ],
      example: "Ví dụ: đo điện áp của bóng đèn, ta mắc vôn kế song song với bóng đèn.",
      memoryTip: "Mẹo nhớ: ampe kế nối tiếp, vôn kế song song, ôm kế đo điện trở khi nguồn tắt.",
      tags: ["ampe kế", "vôn kế", "đo điện", "mắc mạch"]
    },
    {
      id: "p9-magnetic-force",
      grade: "9",
      chapter: "Điện từ học",
      type: "theory",
      title: "Lực từ và tác dụng lên dây dẫn có dòng điện",
      summary: "Dây dẫn mang dòng điện đặt trong từ trường chịu lực từ.",
      explanation: "Một dây dẫn có dòng điện đặt trong từ trường sẽ chịu một lực từ gọi là lực điện từ. Đây là nguyên lý hoạt động của động cơ điện.",
      keyPoints: [
        "Lực từ phụ thuộc vào dòng điện, từ trường và chiều dài dây dẫn.",
        "Động cơ điện hoạt động nhờ lực từ.",
        "Chiều lực từ được xác định bằng quy tắc bàn tay trái."
      ],
      example: "Ví dụ: động cơ điện trong quạt, máy bơm, xe điện hoạt động nhờ lực từ tác dụng lên cuộn dây.",
      memoryTip: "Mẹo nhớ: dòng điện + từ trường = lực từ, đó là cơ chế của động cơ điện.",
      tags: ["lực từ", "động cơ điện", "bàn tay trái"]
    },
    {
      id: "p9-optical-instruments",
      grade: "9",
      chapter: "Quang học",
      type: "theory",
      title: "Dụng cụ quang học",
      summary: "Kính lúp, máy ảnh, kính hiển vi và kính thiên văn là các dụng cụ quang học dùng thấu kính để tạo ảnh rõ hơn, lớn hơn hoặc quan sát vật ở xa.",
      explanation: "Các dụng cụ quang học hoạt động dựa trên hiện tượng khúc xạ và hội tụ ánh sáng qua thấu kính hoặc gương. Mỗi thiết bị có mục tiêu riêng: có thể tạo ảnh lớn hơn, đem vật ở xa gần hơn, hoặc chụp hình ảnh thật của vật. Câu hỏi trọng tâm là cách ánh sáng đi qua hệ thống quang học để hình thành ảnh rõ và đúng vị trí.",
      keyPoints: [
        "Kính lúp là thấu kính hội tụ, giúp ta nhìn vật rất gần và thấy vật lớn hơn so với mắt thường.",
        "Kính hiển vi dùng nhiều thấu kính để phóng đại vật rất nhỏ, giúp quan sát cấu trúc chi tiết của tế bào hoặc vật thể nhỏ.",
        "Kính thiên văn dùng thấu kính hoặc gương để quan sát các thiên thể ở rất xa, giúp hình ảnh rõ hơn và lớn hơn.",
        "Máy ảnh dùng thấu kính hội tụ để tạo ảnh thật của vật trên phim hoặc cảm biến điện tử.",
        "Từ trường quang học, tiêu cự và khoảng cách vật-ảnh quyết định độ phóng đại và độ rõ của ảnh tạo ra."
      ],
      formula: "Ảnh phóng đại phụ thuộc vào khoảng cách vật ảnh: M ≈ d'/d hoặc dùng mô hình thấu kính mỏng để xác định vị trí và kích thước ảnh.",
      example: "Ví dụ: khi quan sát Mặt Trăng bằng kính thiên văn, thấu kính hội tụ làm cho hình ảnh thiên thể trở nên lớn hơn và rõ ràng hơn so với quan sát bằng mắt thường. Trong máy ảnh, vật qua thấu kính sẽ tạo ảnh thật ngược chiều trên cảm biến.",
      memoryTip: "Mẹo nhớ: thấu kính là 'đường ray dẫn ánh sáng'; kính lúp, kính hiển vi, kính thiên văn và máy ảnh đều chỉ là các biến thể của cùng một nguyên lý: làm cho ánh sáng hội tụ để tạo ảnh rõ hơn.",
      tags: ["kính lúp", "thấu kính", "máy ảnh", "kính hiển vi", "kính thiên văn", "phóng đại", "hội tụ ánh sáng"]
    }
  ]
};
