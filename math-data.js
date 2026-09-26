window.MATH_DATA = {
  chapterOrder: ["Số học", "Đại số", "Hình học", "Thống kê và xác suất"],
  knowledgeBase: [
    {
      id: "math8-rational-number-set",
      grade: "8",
      chapter: "Số học",
      type: "theory",
      title: "Tập hợp số hữu tỉ",
      summary: "Số hữu tỉ là số viết được dưới dạng a/b với a, b là số nguyên và b khác 0.",
      explanation: "Mọi số nguyên, số thập phân hữu hạn và số thập phân vô hạn tuần hoàn đều là số hữu tỉ. Trục số giúp so sánh và biểu diễn số hữu tỉ trực quan.",
      keyPoints: [
        "Q gồm các số dạng a/b, b != 0.",
        "Số nguyên là trường hợp đặc biệt của số hữu tỉ.",
        "Số thập phân hữu hạn hoặc tuần hoàn đều đổi được ra phân số.",
        "So sánh số hữu tỉ bằng quy đồng hoặc chuyển về số thập phân."
      ],
      formula: "x thuộc Q <=> x = a/b, b != 0",
      example: "Ví dụ: -3 = -3/1; 0.125 = 1/8; 0.3(6) = 11/30.",
      memoryTip: "Mẹo nhớ: thấy số viết được thành phân số thì kết luận ngay là hữu tỉ.",
      tags: ["số hữu tỉ", "trục số", "so sánh"]
    },
    {
      id: "math8-rational-operations",
      grade: "8",
      chapter: "Số học",
      type: "formula",
      title: "Phép tính với số hữu tỉ",
      summary: "Thực hiện phép cộng, trừ, nhân, chia số hữu tỉ theo quy tắc phân số.",
      explanation: "Với biểu thức hữu tỉ, cần ưu tiên rút gọn trước khi nhân chia và quy đồng trước khi cộng trừ để tránh sai số và tính nhanh hơn.",
      keyPoints: [
        "Cộng trừ phân số: quy đồng mẫu.",
        "Nhân phân số: nhân tử với tử, mẫu với mẫu.",
        "Chia phân số: nhân với nghịch đảo.",
        "Có thể dùng tính chất giao hoán, kết hợp, phân phối để biến đổi."
      ],
      formula: "a/b + c/d = (ad + bc)/bd; (a/b) : (c/d) = (a/b) * (d/c)",
      example: "Ví dụ: 3/4 - 5/6 = 9/12 - 10/12 = -1/12.",
      memoryTip: "Mẹo nhớ: chia phân số là nhân ngược, cộng trừ thì cùng mẫu.",
      tags: ["phân số", "quy đồng", "rút gọn"]
    },
    {
      id: "math8-power-rules",
      grade: "8",
      chapter: "Số học",
      type: "formula",
      title: "Lũy thừa với số mũ tự nhiên",
      summary: "Lũy thừa biểu diễn phép nhân lặp lại cùng một số.",
      explanation: "Các quy tắc lũy thừa giúp rút gọn biểu thức nhanh, nhất là khi biến đổi đơn thức và đa thức ở phần đại số lớp 8 và lớp 9.",
      keyPoints: [
        "a^m * a^n = a^(m+n)",
        "a^m : a^n = a^(m-n), a != 0",
        "(a^m)^n = a^(mn)",
        "(ab)^n = a^n * b^n"
      ],
      formula: "a^m * a^n = a^(m+n); a^m / a^n = a^(m-n)",
      example: "Ví dụ: 2^3 * 2^4 = 2^7 = 128.",
      memoryTip: "Mẹo nhớ: cùng cơ số, nhân thì cộng mũ, chia thì trừ mũ.",
      tags: ["lũy thừa", "số mũ", "biến đổi"]
    },
    {
      id: "math8-proportion",
      grade: "8",
      chapter: "Số học",
      type: "problem",
      title: "Tỉ lệ thức và dãy tỉ số bằng nhau",
      summary: "Tỉ lệ thức là đẳng thức của hai tỉ số và là nền tảng cho bài toán chia theo tỉ lệ.",
      explanation: "Khi biết quan hệ tỉ lệ, ta có thể đặt ẩn theo cùng hệ số rồi dùng tổng hoặc hiệu để tìm từng đại lượng.",
      keyPoints: [
        "a/b = c/d => ad = bc",
        "Dùng dãy tỉ số bằng nhau để xử lý nhiều đại lượng cùng tỉ lệ.",
        "Nên kiểm tra điều kiện mẫu khác 0.",
        "Đây là dạng hay gặp trong bài toán thực tế về chia phần."
      ],
      formula: "a/b = c/d = e/f => (a+c+e)/(b+d+f)",
      example: "Ví dụ: chia 210 theo tỉ lệ 2:3:5 được 42, 63, 105.",
      memoryTip: "Mẹo nhớ: bài chia theo tỉ lệ luôn nghĩ đến đặt 2k, 3k, 5k...",
      tags: ["tỉ lệ thức", "dãy tỉ số", "chia tỉ lệ"]
    },
    {
      id: "math8-percent-application",
      grade: "8",
      chapter: "Số học",
      type: "problem",
      title: "Bài toán phần trăm và lãi lỗ",
      summary: "Phần trăm được dùng trong giảm giá, tăng giá, lãi suất và thống kê đời sống.",
      explanation: "Để tránh nhầm, luôn quy đổi phần trăm về hệ số nhân. Tăng p% tương đương nhân 1 + p/100; giảm p% tương đương nhân 1 - p/100.",
      keyPoints: [
        "p% = p/100",
        "Giá mới sau tăng p%: Gmoi = Gcu * (1 + p/100)",
        "Giá mới sau giảm p%: Gmoi = Gcu * (1 - p/100)",
        "Hai lần thay đổi phần trăm liên tiếp không cộng trực tiếp phần trăm."
      ],
      formula: "Gmoi = Gcu * (1 ± p/100)",
      example: "Ví dụ: 500000 giảm 20% còn 400000.",
      memoryTip: "Mẹo nhớ: phần trăm luôn đổi thành hệ số nhân trước khi bấm máy.",
      tags: ["phần trăm", "lãi lỗ", "ứng dụng"]
    },
    {
      id: "math8-monomial",
      grade: "8",
      chapter: "Đại số",
      type: "theory",
      title: "Đơn thức và bậc của đơn thức",
      summary: "Đơn thức là tích của một số với các biến có số mũ tự nhiên.",
      explanation: "Hiểu đúng khái niệm đơn thức giúp học sinh phân loại biểu thức, rút gọn và chuẩn bị cho phép nhân chia đa thức.",
      keyPoints: [
        "Hệ số là phần số của đơn thức.",
        "Bậc của đơn thức là tổng các số mũ của biến.",
        "Đơn thức đồng dạng có cùng phần biến.",
        "Cộng trừ chỉ thực hiện được với đơn thức đồng dạng."
      ],
      formula: "Don thuc: a*x^m*y^n; bac = m+n",
      example: "Ví dụ: -3x^2y có hệ số -3 và bậc 3.",
      memoryTip: "Mẹo nhớ: nhìn phần biến để xét đồng dạng, nhìn tổng mũ để xét bậc.",
      tags: ["đơn thức", "hệ số", "bậc"]
    },
    {
      id: "math8-polynomial",
      grade: "8",
      chapter: "Đại số",
      type: "theory",
      title: "Đa thức và thu gọn đa thức",
      summary: "Đa thức là tổng các đơn thức; thu gọn bằng cách nhóm hạng tử đồng dạng.",
      explanation: "Thu gọn đúng giúp tránh sai lệch khi thay giá trị biến và khi tính tổng, hiệu, tích các đa thức ở bước sau.",
      keyPoints: [
        "Mỗi hạng tử của đa thức là một đơn thức.",
        "Bậc đa thức là bậc cao nhất của các hạng tử có hệ số khác 0.",
        "Nhóm các hạng tử đồng dạng trước khi cộng trừ.",
        "Nên sắp xếp theo lũy thừa giảm dần để dễ quan sát."
      ],
      formula: "P(x) = a_nx^n + ... + a_1x + a_0",
      example: "Ví dụ: 3x^2 - 2x + x^2 + 5 = 4x^2 - 2x + 5.",
      memoryTip: "Mẹo nhớ: thu gọn là gom cùng loại trước, tính hệ số sau.",
      tags: ["đa thức", "thu gọn", "hạng tử"]
    },
    {
      id: "math8-identities",
      grade: "8",
      chapter: "Đại số",
      type: "formula",
      title: "Hằng đẳng thức đáng nhớ",
      summary: "Bảy hằng đẳng thức là công cụ cốt lõi để khai triển và phân tích đa thức.",
      explanation: "Khi gặp biểu thức có dạng đặc biệt, áp dụng trực tiếp hằng đẳng thức sẽ tiết kiệm thời gian và giảm sai số tính toán.",
      keyPoints: [
        "(a+b)^2 = a^2 + 2ab + b^2",
        "(a-b)^2 = a^2 - 2ab + b^2",
        "a^2 - b^2 = (a-b)(a+b)",
        "(a+b)^3, (a-b)^3, a^3 ± b^3 cần thuộc chính xác."
      ],
      formula: "a^2-b^2=(a-b)(a+b); a^3+b^3=(a+b)(a^2-ab+b^2)",
      example: "Ví dụ: x^2 - 9 = (x-3)(x+3).",
      memoryTip: "Mẹo nhớ: bình phương thì 3 hạng tử, lập phương thì 4 hạng tử.",
      tags: ["hằng đẳng thức", "khai triển", "phân tích"]
    },
    {
      id: "math8-factorization",
      grade: "8",
      chapter: "Đại số",
      type: "problem",
      title: "Phân tích đa thức thành nhân tử",
      summary: "Phân tích thành nhân tử giúp giải phương trình và rút gọn biểu thức hữu tỉ.",
      explanation: "Các phương pháp chính gồm đặt nhân tử chung, nhóm hạng tử, dùng hằng đẳng thức và tách hạng tử trung gian.",
      keyPoints: [
        "Ưu tiên tìm nhân tử chung trước.",
        "Kiểm tra có dạng hằng đẳng thức không.",
        "Khi nhóm hạng tử, cần tạo cùng thừa số ngoặc.",
        "Sau khi phân tích nên nhân ngược lại để kiểm tra."
      ],
      formula: "ax+ay = a(x+y); x^2+5x+6 = (x+2)(x+3)",
      example: "Ví dụ: 2x^2 - 8x = 2x(x-4).",
      memoryTip: "Mẹo nhớ: nhìn nhanh nhân tử chung là bước tiết kiệm nhất.",
      tags: ["phân tích nhân tử", "nhân tử chung", "nhóm hạng tử"]
    },
    {
      id: "math8-rational-expression",
      grade: "8",
      chapter: "Đại số",
      type: "formula",
      title: "Phân thức đại số và điều kiện xác định",
      summary: "Phân thức đại số là thương của hai đa thức với mẫu khác 0.",
      explanation: "ĐKXĐ là phần bắt buộc trong bài phân thức. Bỏ quên điều kiện sẽ dẫn đến mất điểm dù biến đổi đúng.",
      keyPoints: [
        "Phân thức A/B có nghĩa khi B != 0.",
        "Rút gọn bằng cách phân tích tử và mẫu thành nhân tử.",
        "Quy đồng mẫu để cộng trừ phân thức.",
        "Kết quả cuối cần kèm điều kiện ban đầu."
      ],
      formula: "A/B ± C/D = (AD ± BC)/BD, voi B,D != 0",
      example: "Ví dụ: (x^2-1)/(x-1) = x+1, điều kiện x != 1.",
      memoryTip: "Mẹo nhớ: làm phân thức luôn viết ĐKXĐ trước dòng 1.",
      tags: ["phân thức", "điều kiện xác định", "quy đồng"]
    },
    {
      id: "math8-linear-equation",
      grade: "8",
      chapter: "Đại số",
      type: "formula",
      title: "Phương trình bậc nhất một ẩn",
      summary: "Giải phương trình dạng ax + b = 0 bằng biến đổi tương đương.",
      explanation: "Biến đổi phương trình theo hai phép tương đương cơ bản: cộng/trừ cùng số ở hai vế và nhân/chia cùng số khác 0 ở hai vế.",
      keyPoints: [
        "Dạng chuẩn: ax+b=0, a!=0.",
        "Chuyển vế đổi dấu.",
        "Chia cho hệ số của x.",
        "Thử lại nghiệm để chống sai sót dấu."
      ],
      formula: "ax+b=0 => x=-b/a",
      example: "Ví dụ: 5x+10=0 => x=-2.",
      memoryTip: "Mẹo nhớ: 2 bước cố định là chuyển hạng tự do, chia hệ số a.",
      tags: ["phương trình bậc nhất", "biến đổi tương đương", "nghiệm"]
    },
    {
      id: "math8-word-problems-equation",
      grade: "8",
      chapter: "Đại số",
      type: "problem",
      title: "Giải bài toán bằng lập phương trình",
      summary: "Bài toán thực tế được chuyển thành phương trình một ẩn để tìm đáp số.",
      explanation: "Các dạng quen thuộc gồm chuyển động, năng suất, công việc chung, toán tuổi, toán phần trăm và toán hình học có tham số.",
      keyPoints: [
        "Chọn ẩn và ghi điều kiện cho ẩn.",
        "Lập biểu thức theo dữ kiện đề bài.",
        "Lập phương trình then chốt từ quan hệ chính.",
        "Kết luận theo ngôn ngữ đề bài, đối chiếu điều kiện."
      ],
      formula: "quang duong = van toc * thoi gian; nang suat = khoi luong/thoi gian",
      example: "Ví dụ: Hai số hơn kém 14 và tổng 50 => hai số là 32 và 18.",
      memoryTip: "Mẹo nhớ: ẩn có điều kiện, kết quả phải trả về đúng đại lượng hỏi.",
      tags: ["lập phương trình", "toán thực tế", "chuyển động"]
    },
    {
      id: "math8-parallel-lines",
      grade: "8",
      chapter: "Hình học",
      type: "theory",
      title: "Đường thẳng song song và góc",
      summary: "Khi một đường thẳng cắt hai đường song song sẽ tạo các cặp góc bằng nhau hoặc bù nhau.",
      explanation: "Đây là chương nền cho suy luận hình học lớp 8, dùng nhiều trong chứng minh tam giác đồng dạng và bài toán góc lớp 9.",
      keyPoints: [
        "Góc đồng vị bằng nhau.",
        "Góc so le trong bằng nhau.",
        "Hai góc trong cùng phía bù nhau.",
        "Dấu hiệu nhận biết song song qua các cặp góc."
      ],
      formula: "neu a // b => goc dong vi bang nhau, goc trong cung phia bu nhau",
      example: "Ví dụ: Nếu một cặp góc so le trong bằng nhau thì hai đường thẳng song song.",
      memoryTip: "Mẹo nhớ: song song thì đồng vị bằng, trong cùng phía bù.",
      tags: ["song song", "góc đồng vị", "góc so le trong"]
    },
    {
      id: "math8-triangle-congruence",
      grade: "8",
      chapter: "Hình học",
      type: "theory",
      title: "Các trường hợp bằng nhau của tam giác",
      summary: "Hai tam giác bằng nhau khi thỏa một trong các bộ điều kiện cạnh và góc tương ứng.",
      explanation: "Chứng minh tam giác bằng nhau là công cụ để suy ra đoạn bằng nhau, góc bằng nhau, song song và vuông góc trong nhiều bài chứng minh.",
      keyPoints: [
        "c-c-c, c-g-c, g-c-g là ba trường hợp cơ bản.",
        "Tam giác vuông có trường hợp cạnh huyền - cạnh góc vuông.",
        "Cần chỉ rõ thứ tự đỉnh tương ứng.",
        "Sau khi kết luận bằng nhau mới suy ra hệ quả tương ứng."
      ],
      formula: "ΔABC = ΔDEF => AB=DE, BC=EF, AC=DF",
      example: "Ví dụ: AB=DE, AC=DF, góc A=góc D => ΔABC=ΔDEF (c-g-c).",
      memoryTip: "Mẹo nhớ: viết thứ tự đỉnh đúng là chìa khóa tránh suy luận sai.",
      tags: ["tam giác bằng nhau", "chứng minh", "hình học"]
    },
    {
      id: "math8-special-quadrilaterals",
      grade: "8",
      chapter: "Hình học",
      type: "theory",
      title: "Tứ giác đặc biệt",
      summary: "Các tứ giác đặc biệt gồm hình thang, hình bình hành, hình chữ nhật, hình thoi, hình vuông.",
      explanation: "Mỗi loại tứ giác có dấu hiệu nhận biết và tính chất riêng, đặc biệt về cạnh đối, đường chéo và góc.",
      keyPoints: [
        "Hình bình hành: cạnh đối song song và bằng nhau.",
        "Hình chữ nhật: hình bình hành có một góc vuông.",
        "Hình thoi: hình bình hành có hai cạnh kề bằng nhau.",
        "Hình vuông vừa là hình chữ nhật vừa là hình thoi."
      ],
      formula: "S_hinh thang = (a+b)h/2; S_hinh binh hanh = a*h",
      example: "Ví dụ: Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành.",
      memoryTip: "Mẹo nhớ: hình vuông là giao của chữ nhật và thoi.",
      tags: ["tứ giác", "hình bình hành", "hình vuông"]
    },
    {
      id: "math8-area-quadrilateral",
      grade: "8",
      chapter: "Hình học",
      type: "formula",
      title: "Diện tích tứ giác thông dụng",
      summary: "Nắm công thức diện tích giúp giải nhanh bài toán thực tế và bài tổng hợp.",
      explanation: "Tùy dữ kiện đề bài, có thể chọn công thức trực tiếp hoặc chia hình thành các tam giác/hình quen thuộc để tính diện tích.",
      keyPoints: [
        "S_hinh chu nhat = a*b",
        "S_hinh thang = (a+b)h/2",
        "S_hinh thoi = d1*d2/2",
        "S_hinh binh hanh = a*h"
      ],
      formula: "S_chu nhat=a*b; S_thang=(a+b)h/2; S_thoi=d1*d2/2",
      example: "Ví dụ: Hình thoi có d1=10, d2=8 thì diện tích bằng 40.",
      memoryTip: "Mẹo nhớ: diện tích thoi và tam giác đều có chia 2 do đặc điểm đường chéo/chiều cao.",
      tags: ["diện tích", "hình thang", "hình thoi"]
    },
    {
      id: "math8-pythagorean",
      grade: "8",
      chapter: "Hình học",
      type: "formula",
      title: "Định lý Pythagoras và đảo",
      summary: "Trong tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông; đảo dùng để nhận biết vuông.",
      explanation: "Định lý và định lý đảo thường xuất hiện trong bài toán tính cạnh, chứng minh vuông góc và kiểm tra tam giác vuông.",
      keyPoints: [
        "a^2 + b^2 = c^2 nếu tam giác vuông tại góc giữa a và b.",
        "Nếu a^2 + b^2 = c^2 thì tam giác vuông.",
        "Bộ ba 3-4-5, 5-12-13 là các tam giác vuông quen thuộc.",
        "Nên xác định rõ cạnh lớn nhất trước khi áp dụng đảo."
      ],
      formula: "a^2+b^2=c^2",
      example: "Ví dụ: tam giác có cạnh 6, 8, 10 là tam giác vuông vì 6^2+8^2=10^2.",
      memoryTip: "Mẹo nhớ: dùng cạnh lớn nhất làm ứng viên cạnh huyền.",
      tags: ["Pythagoras", "tam giác vuông", "nhận biết"]
    },
    {
      id: "math8-circle",
      grade: "8",
      chapter: "Hình học",
      type: "theory",
      title: "Đường tròn, dây cung, tiếp tuyến",
      summary: "Đường tròn gồm các điểm cách đều tâm; dây và tiếp tuyến có các tính chất quan trọng.",
      explanation: "Các bài toán đường tròn lớp 8-9 thường yêu cầu liên hệ bán kính, dây, khoảng cách đến tâm và tính chất tiếp tuyến vuông góc bán kính.",
      keyPoints: [
        "Đường kính là dây lớn nhất.",
        "Bán kính vuông góc dây thì đi qua trung điểm dây.",
        "Tiếp tuyến tại A vuông góc OA.",
        "Hai tiếp tuyến cắt nhau từ một điểm ngoài có độ dài bằng nhau."
      ],
      formula: "C = 2*pi*r; S = pi*r^2",
      example: "Ví dụ: từ điểm M ngoài đường tròn, MA và MB là hai tiếp tuyến thì MA=MB.",
      memoryTip: "Mẹo nhớ: cứ thấy tiếp tuyến là nghĩ đến vuông góc bán kính.",
      tags: ["đường tròn", "tiếp tuyến", "dây cung"]
    },
    {
      id: "math8-statistics-basic",
      grade: "8",
      chapter: "Thống kê và xác suất",
      type: "theory",
      title: "Thu thập và biểu diễn dữ liệu",
      summary: "Dữ liệu được tổ chức bằng bảng, biểu đồ cột, biểu đồ đoạn thẳng để rút ra nhận xét.",
      explanation: "Trọng tâm của thống kê lớp 8 là đọc hiểu dữ liệu, tránh suy diễn cảm tính và biết diễn giải bằng ngôn ngữ toán học đơn giản.",
      keyPoints: [
        "Phân biệt dữ liệu định lượng và định tính.",
        "Bảng tần số cho biết số lần xuất hiện.",
        "Biểu đồ cột phù hợp để so sánh nhóm.",
        "Cần ghi rõ đơn vị khi trình bày kết quả."
      ],
      formula: "tan so = so lan xuat hien",
      example: "Ví dụ: số giờ tự học của 10 học sinh được lập bảng tần số để so sánh.",
      memoryTip: "Mẹo nhớ: thống kê tốt bắt đầu từ dữ liệu sạch và có đơn vị.",
      tags: ["thống kê", "bảng tần số", "biểu đồ cột"]
    },
    {
      id: "math8-average",
      grade: "8",
      chapter: "Thống kê và xác suất",
      type: "formula",
      title: "Số trung bình cộng",
      summary: "Số trung bình cộng đo mức đại diện trung tâm của một dãy số.",
      explanation: "Trong dữ liệu có tần số, nên dùng công thức trung bình có trọng số để tính nhanh và chính xác.",
      keyPoints: [
        "Trung bình cộng = tổng giá trị chia số phần tử.",
        "Có tần số thì dùng trung bình trọng số.",
        "Giá trị ngoại lai có thể làm lệch trung bình.",
        "So sánh trung bình với trung vị để hiểu phân bố dữ liệu."
      ],
      formula: "x̄ = (x1+x2+...+xn)/n; x̄ = sum(x_i*f_i)/sum(f_i)",
      example: "Ví dụ: điểm 7, 8, 8, 9 có trung bình cộng 8.",
      memoryTip: "Mẹo nhớ: có tần số thì nhân trước, cộng sau, chia tổng tần số.",
      tags: ["trung bình cộng", "thống kê", "trọng số"]
    },
    {
      id: "math8-probability-intro",
      grade: "8",
      chapter: "Thống kê và xác suất",
      type: "theory",
      title: "Sự kiện và khả năng xảy ra",
      summary: "Xác suất mô tả mức độ khả năng xảy ra của một sự kiện ngẫu nhiên.",
      explanation: "Ở mức cơ bản, học sinh nhận diện không gian mẫu và sự kiện thuận lợi trong các thí nghiệm đơn giản như tung đồng xu, gieo xúc xắc.",
      keyPoints: [
        "Xác suất nằm trong [0,1].",
        "P(A)=0 là sự kiện không thể, P(A)=1 là chắc chắn.",
        "Trong mô hình đồng khả năng: P(A)=n(A)/n(Omega).",
        "Cần đếm đủ không gian mẫu trước khi tính."
      ],
      formula: "P(A) = n(A)/n(Omega)",
      example: "Ví dụ: gieo xúc xắc, xác suất ra số chẵn là 3/6 = 1/2.",
      memoryTip: "Mẹo nhớ: xác suất bằng số cách thuận lợi chia tổng số cách.",
      tags: ["xác suất", "sự kiện", "không gian mẫu"]
    },

    {
      id: "math9-real-number",
      grade: "9",
      chapter: "Số học",
      type: "theory",
      title: "Số thực và căn bậc hai",
      summary: "Tập số thực gồm số hữu tỉ và vô tỉ; căn bậc hai số học là căn không âm.",
      explanation: "Các phép biến đổi chứa căn đòi hỏi điều kiện xác định và thao tác chính xác để tránh sinh nghiệm ngoại lai.",
      keyPoints: [
        "x >= 0 mới có căn bậc hai số học sqrt(x).",
        "sqrt(a)*sqrt(b)=sqrt(ab) khi a,b>=0.",
        "sqrt(a/b)=sqrt(a)/sqrt(b) khi a>=0,b>0.",
        "Khử mẫu chứa căn bằng nhân liên hợp khi cần."
      ],
      formula: "(sqrt(a))^2=a; sqrt(a^2)=|a|",
      example: "Ví dụ: sqrt(50)=5sqrt(2).",
      memoryTip: "Mẹo nhớ: căn bậc hai số học luôn không âm.",
      tags: ["số thực", "căn bậc hai", "biến đổi căn thức"]
    },
    {
      id: "math9-radical-expression",
      grade: "9",
      chapter: "Số học",
      type: "formula",
      title: "Rút gọn biểu thức chứa căn",
      summary: "Biểu thức chứa căn được rút gọn bằng tách thừa số chính phương và quy đồng.",
      explanation: "Dạng này xuất hiện dày trong đề tuyển sinh lớp 10, đặc biệt ở câu rút gọn và tính giá trị biểu thức.",
      keyPoints: [
        "Tách a = m^2*n để đưa m ra ngoài căn.",
        "Dùng hằng đẳng thức liên hợp để khử căn ở mẫu.",
        "Gộp các căn đồng dạng sau khi rút gọn.",
        "Luôn kèm điều kiện xác định khi có mẫu hoặc căn."
      ],
      formula: "1/(sqrt(a)-sqrt(b)) = (sqrt(a)+sqrt(b))/(a-b)",
      example: "Ví dụ: (3sqrt(8)-sqrt(18))/sqrt(2)=3.",
      memoryTip: "Mẹo nhớ: thấy mẫu có căn thì nghĩ ngay đến liên hợp.",
      tags: ["căn thức", "liên hợp", "rút gọn"]
    },
    {
      id: "math9-equation-radical",
      grade: "9",
      chapter: "Số học",
      type: "problem",
      title: "Phương trình chứa căn",
      summary: "Giải phương trình chứa căn bằng điều kiện xác định và biến đổi tương đương.",
      explanation: "Thao tác bình phương hai vế có thể sinh nghiệm ngoại lai nên bước thử lại nghiệm là bắt buộc.",
      keyPoints: [
        "Đặt điều kiện xác định trước khi giải.",
        "Cô lập căn rồi mới bình phương.",
        "Có thể đặt ẩn phụ với căn lặp.",
        "Thử lại toàn bộ nghiệm tìm được vào phương trình gốc."
      ],
      formula: "sqrt(f(x)) = g(x) => f(x)=g(x)^2 va g(x)>=0",
      example: "Ví dụ: sqrt(x+5)=x-1 cho nghiệm x=4.",
      memoryTip: "Mẹo nhớ: bình phương xong phải quay lại thử nghiệm gốc.",
      tags: ["phương trình căn", "điều kiện", "ngoại lai"]
    },
    {
      id: "math9-direct-inverse-proportion",
      grade: "9",
      chapter: "Số học",
      type: "problem",
      title: "Đại lượng tỉ lệ thuận và tỉ lệ nghịch",
      summary: "Hai đại lượng có thể tỉ lệ thuận hoặc tỉ lệ nghịch tùy mối quan hệ thực tế.",
      explanation: "Nhận dạng đúng mối quan hệ sẽ giúp lập công thức nhanh trong các bài toán năng suất, chuyển động và vật lý cơ bản.",
      keyPoints: [
        "Tỉ lệ thuận: y = kx.",
        "Tỉ lệ nghịch: y = k/x.",
        "Tính chất dãy tỉ số giúp điền bảng nhanh.",
        "Luôn xét đơn vị đo để kiểm tra hợp lý."
      ],
      formula: "y=kx; y=k/x",
      example: "Ví dụ: cùng quãng đường, vận tốc tăng 2 lần thì thời gian giảm 2 lần.",
      memoryTip: "Mẹo nhớ: cùng tăng cùng giảm là thuận, một tăng một giảm là nghịch.",
      tags: ["tỉ lệ thuận", "tỉ lệ nghịch", "ứng dụng"]
    },
    {
      id: "math9-linear-function",
      grade: "9",
      chapter: "Đại số",
      type: "formula",
      title: "Hàm số bậc nhất y = ax + b",
      summary: "Đồ thị hàm số bậc nhất là đường thẳng, phụ thuộc vào a và b.",
      explanation: "Phần này là nền tảng để xử lý giao điểm đồ thị, biện luận hệ phương trình theo tham số và đọc ý nghĩa hệ số.",
      keyPoints: [
        "a>0: hàm đồng biến; a<0: hàm nghịch biến.",
        "b là tung độ gốc.",
        "Hai đường thẳng song song khi cùng hệ số góc.",
        "Hai đường thẳng trùng nhau khi cùng a và b."
      ],
      formula: "y=ax+b; he so goc = a",
      example: "Ví dụ: y=-2x+3 cắt trục tung tại (0,3).",
      memoryTip: "Mẹo nhớ: a quyết định nghiêng, b quyết định vị trí cắt trục tung.",
      tags: ["hàm số bậc nhất", "đồ thị", "hệ số góc"]
    },
    {
      id: "math9-line-graph-intersection",
      grade: "9",
      chapter: "Đại số",
      type: "problem",
      title: "Giao điểm hai đường thẳng",
      summary: "Giao điểm của hai đường thẳng là nghiệm của hệ hai phương trình bậc nhất hai ẩn.",
      explanation: "Có thể tìm giao điểm bằng cách giải hệ hoặc thay thế đồ thị nếu số liệu đẹp.",
      keyPoints: [
        "Lập hệ từ hai phương trình đường thẳng.",
        "Giải hệ bằng thế hoặc cộng đại số.",
        "Kết quả (x0,y0) là tọa độ giao điểm.",
        "Kiểm tra lại bằng cách thay vào cả hai phương trình."
      ],
      formula: "d1: y=a1x+b1; d2: y=a2x+b2",
      example: "Ví dụ: y=2x+1 và y=-x+4 cắt nhau tại (1,3).",
      memoryTip: "Mẹo nhớ: tìm giao điểm chính là giải hệ phương trình.",
      tags: ["giao điểm", "đường thẳng", "hệ phương trình"]
    },
    {
      id: "math9-systems-linear",
      grade: "9",
      chapter: "Đại số",
      type: "problem",
      title: "Hệ hai phương trình bậc nhất hai ẩn",
      summary: "Giải hệ bằng phương pháp thế hoặc cộng đại số.",
      explanation: "Dạng bài này xuyên suốt lớp 9 và thường kết hợp với bài toán thực tế như tuổi, năng suất, chuyển động, hình học tọa độ.",
      keyPoints: [
        "Dạng tổng quát: ax+by=c; dx+ey=f.",
        "Thế phù hợp khi dễ rút một ẩn.",
        "Cộng đại số phù hợp khi dễ triệt tiêu hệ số.",
        "Biện luận số nghiệm qua vị trí hai đường thẳng."
      ],
      formula: "{ax+by=c; dx+ey=f}",
      example: "Ví dụ: {x+y=7; 2x-y=5} => x=4, y=3.",
      memoryTip: "Mẹo nhớ: chọn cách làm sao triệt tiêu ẩn nhanh nhất.",
      tags: ["hệ phương trình", "phương pháp thế", "cộng đại số"]
    },
    {
      id: "math9-quadratic-equation",
      grade: "9",
      chapter: "Đại số",
      type: "formula",
      title: "Phương trình bậc hai một ẩn",
      summary: "Giải phương trình bậc hai bằng công thức nghiệm và delta.",
      explanation: "Ngoài công thức nghiệm, học sinh cần thành thạo phân tích thành nhân tử khi hệ số đẹp để làm nhanh.",
      keyPoints: [
        "Dạng chuẩn: ax^2+bx+c=0, a!=0.",
        "Delta = b^2-4ac quyết định số nghiệm thực.",
        "Có thể dùng Delta phẩy: Delta' = (b/2)^2-ac.",
        "Kiểm tra nghiệm bằng định lý Viète khi cần."
      ],
      formula: "x = (-b ± sqrt(b^2-4ac))/(2a)",
      example: "Ví dụ: 2x^2-5x+2=0 => x=2 hoặc x=1/2.",
      memoryTip: "Mẹo nhớ: nhìn hệ số chẵn thử Delta phẩy cho gọn.",
      tags: ["phương trình bậc hai", "delta", "công thức nghiệm"]
    },
    {
      id: "math9-vieta",
      grade: "9",
      chapter: "Đại số",
      type: "formula",
      title: "Hệ thức Viète",
      summary: "Viète liên hệ tổng và tích hai nghiệm của phương trình bậc hai.",
      explanation: "Viète giúp tính nhanh biểu thức theo nghiệm và giải bài toán điều kiện tham số mà không cần giải tường minh nghiệm.",
      keyPoints: [
        "Nếu x1, x2 là nghiệm thì x1+x2 = -b/a.",
        "x1*x2 = c/a.",
        "Từ tổng và tích lập phương trình có hai nghiệm cho trước.",
        "Kết hợp bất đẳng thức để xét điều kiện nghiệm dương, âm."
      ],
      formula: "x1+x2=-b/a; x1*x2=c/a",
      example: "Ví dụ: với x^2-5x+6=0 thì tổng nghiệm 5, tích nghiệm 6.",
      memoryTip: "Mẹo nhớ: tổng lấy đối của b chia a, tích là c chia a.",
      tags: ["Viète", "nghiệm", "tham số"]
    },
    {
      id: "math9-quadratic-function",
      grade: "9",
      chapter: "Đại số",
      type: "theory",
      title: "Hàm số y = ax^2 (a != 0)",
      summary: "Đồ thị hàm số y=ax^2 là parabol có đỉnh O và trục đối xứng Oy.",
      explanation: "Nội dung này rèn kỹ năng đọc hình, so sánh giá trị hàm và chuẩn bị cho đồ thị hàm bậc hai ở lớp 10.",
      keyPoints: [
        "a>0: parabol mở lên; a<0: parabol mở xuống.",
        "|a| lớn thì đồ thị hẹp hơn.",
        "Đồ thị đi qua gốc tọa độ.",
        "Điểm đối xứng qua Oy có cùng tung độ."
      ],
      formula: "y=ax^2",
      example: "Ví dụ: y=2x^2 tại x=1 cho y=2, tại x=-1 cũng cho y=2.",
      memoryTip: "Mẹo nhớ: parabol ax^2 luôn đối xứng qua trục Oy.",
      tags: ["parabol", "hàm bậc hai", "đồ thị"]
    },
    {
      id: "math9-equation-by-substitution",
      grade: "9",
      chapter: "Đại số",
      type: "problem",
      title: "Giải phương trình quy về bậc hai",
      summary: "Nhiều phương trình có thể đặt ẩn phụ để đưa về dạng bậc hai quen thuộc.",
      explanation: "Các dạng hay gặp: trùng phương, chứa căn đối xứng, hoặc chứa x + 1/x. Điều kiện ẩn phụ cần được kiểm soát chặt.",
      keyPoints: [
        "Nhận dạng biểu thức lặp để đặt t.",
        "Giải phương trình theo t trước.",
        "Quay lại giải theo x.",
        "Đối chiếu điều kiện của ẩn phụ và biến gốc."
      ],
      formula: "x^4-5x^2+4=0 dat t=x^2 => t^2-5t+4=0",
      example: "Ví dụ: x^4-5x^2+4=0 => x=±1, ±2.",
      memoryTip: "Mẹo nhớ: đặt ẩn phụ để giảm bậc và về dạng quen.",
      tags: ["ẩn phụ", "quy về bậc hai", "phương trình"]
    },
    {
      id: "math9-word-problems-system",
      grade: "9",
      chapter: "Đại số",
      type: "problem",
      title: "Giải bài toán bằng lập hệ phương trình",
      summary: "Dùng hai ẩn khi bài toán có hai đại lượng chưa biết liên hệ độc lập.",
      explanation: "Dạng điển hình: chuyển động ngược chiều/cùng chiều, năng suất hai tổ, bài toán hình chữ nhật, bài toán phần trăm nhiều lần thay đổi.",
      keyPoints: [
        "Đặt hai ẩn rõ nghĩa và đơn vị.",
        "Lập hai phương trình từ hai dữ kiện độc lập.",
        "Giải hệ và loại nghiệm không thực tế.",
        "Viết kết luận đầy đủ bằng câu văn."
      ],
      formula: "he 2 an tu du lieu de bai",
      example: "Ví dụ: tổng hai số 36, hiệu 8 => hai số 22 và 14.",
      memoryTip: "Mẹo nhớ: mỗi dữ kiện chính thường sinh ra một phương trình.",
      tags: ["lập hệ", "toán thực tế", "đại số ứng dụng"]
    },
    {
      id: "math9-angle-circle",
      grade: "9",
      chapter: "Hình học",
      type: "theory",
      title: "Góc ở tâm và góc nội tiếp",
      summary: "Góc nội tiếp chắn cùng cung bằng nửa góc ở tâm chắn cung đó.",
      explanation: "Chủ đề cung-góc là xương sống của hình học đường tròn lớp 9 và thường kết hợp với tứ giác nội tiếp.",
      keyPoints: [
        "Góc ở tâm bằng số đo cung chắn.",
        "Góc nội tiếp bằng nửa số đo cung chắn.",
        "Hai góc nội tiếp chắn cùng một cung thì bằng nhau.",
        "Góc tạo bởi tiếp tuyến và dây bằng góc nội tiếp chắn cung đối diện."
      ],
      formula: "goc noi tiep = 1/2 * so do cung chan",
      example: "Ví dụ: cung AB 100 do thì góc nội tiếp chắn AB bằng 50 do.",
      memoryTip: "Mẹo nhớ: nội tiếp luôn bằng nửa cung chắn.",
      tags: ["góc nội tiếp", "góc ở tâm", "đường tròn"]
    },
    {
      id: "math9-cyclic-quadrilateral",
      grade: "9",
      chapter: "Hình học",
      type: "theory",
      title: "Tứ giác nội tiếp",
      summary: "Tứ giác nội tiếp có tổng hai góc đối bằng 180 độ.",
      explanation: "Nhận diện tứ giác nội tiếp giúp mở khóa nhiều bài chứng minh đẳng giác và đồng dạng trong đường tròn.",
      keyPoints: [
        "Dấu hiệu chính: tổng hai góc đối bằng 180 do.",
        "Góc ngoài bằng góc trong đối diện.",
        "Nếu cùng nhìn một đoạn thẳng dưới hai góc bằng nhau thì nội tiếp.",
        "Hay kết hợp với góc nội tiếp và tiếp tuyến."
      ],
      formula: "A + C = 180 do; B + D = 180 do",
      example: "Ví dụ: tứ giác có góc A=70 do, góc C=110 do => nội tiếp.",
      memoryTip: "Mẹo nhớ: nội tiếp nghĩ ngay đến cặp góc đối bù nhau.",
      tags: ["tứ giác nội tiếp", "đường tròn", "chứng minh"]
    },
    {
      id: "math9-tangent-secant",
      grade: "9",
      chapter: "Hình học",
      type: "formula",
      title: "Hệ thức tiếp tuyến - cát tuyến",
      summary: "Từ điểm ngoài đường tròn có hệ thức bình phương tiếp tuyến bằng tích hai đoạn cát tuyến.",
      explanation: "Đây là hệ thức mạnh để tính độ dài, thường đi cùng tam giác đồng dạng trong bài hình nâng cao lớp 9.",
      keyPoints: [
        "PA^2 = PB*PC khi PA là tiếp tuyến, PBC là cát tuyến.",
        "Nếu có hai cát tuyến từ P: PB*PC = PD*PE.",
        "Nên vẽ rõ thứ tự điểm trên cát tuyến.",
        "Kiểm tra đơn vị độ dài đồng nhất."
      ],
      formula: "PA^2 = PB*PC",
      example: "Ví dụ: PB=3, PC=12 thì PA = 6.",
      memoryTip: "Mẹo nhớ: tiếp tuyến bình phương, cát tuyến nhân hai đoạn.",
      tags: ["tiếp tuyến", "cát tuyến", "hệ thức"]
    },
    {
      id: "math9-similar-triangle",
      grade: "9",
      chapter: "Hình học",
      type: "theory",
      title: "Tam giác đồng dạng",
      summary: "Tam giác đồng dạng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ.",
      explanation: "Đồng dạng là chìa khóa cho các bài toán đo gián tiếp chiều cao, khoảng cách, và bài toán tỉ số diện tích.",
      keyPoints: [
        "Ba trường hợp: g-g, c-g-c tỉ lệ, c-c-c tỉ lệ.",
        "Tỉ số chu vi bằng tỉ số đồng dạng k.",
        "Tỉ số diện tích bằng k^2.",
        "Nên xác định cặp tam giác đồng dạng rõ ràng trước khi suy ra hệ thức."
      ],
      formula: "AB/A'B' = AC/A'C' = BC/B'C' = k; S1/S2 = k^2",
      example: "Ví dụ: tam giác có tỉ số đồng dạng 2 thì tỉ số diện tích là 4.",
      memoryTip: "Mẹo nhớ: đồng dạng thì cạnh theo k, diện tích theo k bình phương.",
      tags: ["đồng dạng", "tỉ số", "diện tích"]
    },
    {
      id: "math9-right-triangle-altitude",
      grade: "9",
      chapter: "Hình học",
      type: "formula",
      title: "Hệ thức lượng trong tam giác vuông",
      summary: "Các hệ thức lượng liên hệ cạnh góc vuông, cạnh huyền và đường cao.",
      explanation: "Phần hệ thức lượng dùng nhiều trong bài tính độ dài không cần góc, đồng thời liên hệ chặt với lượng giác.",
      keyPoints: [
        "h^2 = p*q (đường cao và hình chiếu).",
        "b^2 = a*p, c^2 = a*q.",
        "1/h^2 = 1/b^2 + 1/c^2.",
        "Kết hợp với Pythagoras để kiểm tra kết quả."
      ],
      formula: "h^2=pq; b^2=ap; c^2=aq",
      example: "Ví dụ: p=4, q=9 thì h=6.",
      memoryTip: "Mẹo nhớ: cao bình phương bằng tích hai hình chiếu.",
      tags: ["hệ thức lượng", "tam giác vuông", "đường cao"]
    },
    {
      id: "math9-trigonometry-right-triangle",
      grade: "9",
      chapter: "Hình học",
      type: "formula",
      title: "Tỉ số lượng giác trong tam giác vuông",
      summary: "Sin, cos, tan, cot liên hệ góc nhọn với các cạnh tam giác vuông.",
      explanation: "Lượng giác là công cụ đo gián tiếp rất mạnh trong thực tế: chiều cao tòa nhà, góc nghiêng mái, khoảng cách quan sát.",
      keyPoints: [
        "sin a = doi/huyen; cos a = ke/huyen.",
        "tan a = doi/ke; cot a = ke/doi.",
        "tan a = sin a / cos a.",
        "Với góc nhọn: sin tăng thì cos giảm."
      ],
      formula: "sin a = a/c; cos a = b/c; tan a = a/b",
      example: "Ví dụ: tam giác vuông có doi=3, ke=4 => tan = 3/4.",
      memoryTip: "Mẹo nhớ: sin-doi, cos-ke, tan-doi tren ke.",
      tags: ["lượng giác", "sin cos tan", "tam giác vuông"]
    },
    {
      id: "math9-circle-area-sector",
      grade: "9",
      chapter: "Hình học",
      type: "formula",
      title: "Diện tích hình quạt và độ dài cung",
      summary: "Độ dài cung và diện tích hình quạt phụ thuộc số đo góc ở tâm.",
      explanation: "Các bài toán cung và quạt thường xuất hiện trong phần đường tròn, gắn với tỉ lệ giữa phần và toàn phần.",
      keyPoints: [
        "Độ dài cung l = alpha/360 * 2*pi*r.",
        "Diện tích quạt S = alpha/360 * pi*r^2.",
        "Đổi đơn vị góc trước khi tính nếu cần.",
        "Kiểm tra alpha trong khoảng 0..360."
      ],
      formula: "l=(alpha/360)*2*pi*r; S=(alpha/360)*pi*r^2",
      example: "Ví dụ: r=6, alpha=60 do => l=2pi, S=6pi.",
      memoryTip: "Mẹo nhớ: công thức quạt là công thức cả hình tròn nhân alpha/360.",
      tags: ["hình quạt", "độ dài cung", "đường tròn"]
    },
    {
      id: "math9-geometry-proof-strategy",
      grade: "9",
      chapter: "Hình học",
      type: "problem",
      title: "Chiến lược chứng minh hình học",
      summary: "Bài chứng minh hình học cần chiến lược trình bày mạch lạc và chọn định lý đúng.",
      explanation: "Nhiều học sinh mất điểm vì ý đúng nhưng trình bày rời rạc. Cần tổ chức theo từng mục tiêu trung gian trước khi đạt kết luận cuối.",
      keyPoints: [
        "Vẽ hình chuẩn, ký hiệu rõ giả thiết và kết luận.",
        "Phân tích ngược từ kết luận để chọn công cụ.",
        "Ưu tiên tạo tam giác bằng nhau/đồng dạng hoặc tứ giác nội tiếp.",
        "Mỗi suy luận cần nêu căn cứ định lý."
      ],
      formula: "ket luan trung gian -> ket luan cuoi",
      example: "Ví dụ: muốn chứng minh AM vuông BC, có thể chứng minh góc AMB = 90 do.",
      memoryTip: "Mẹo nhớ: chứng minh hình học là đi qua chuỗi mục tiêu nhỏ, không nhảy bước.",
      tags: ["chứng minh hình", "chiến lược", "trình bày"]
    },
    {
      id: "math9-statistics-table",
      grade: "9",
      chapter: "Thống kê và xác suất",
      type: "theory",
      title: "Bảng tần số, tần suất và biểu đồ",
      summary: "Tần số và tần suất giúp mô tả phân bố dữ liệu trong một mẫu điều tra.",
      explanation: "Ở lớp 9, học sinh cần đọc hiểu và so sánh dữ liệu bằng biểu đồ cột, biểu đồ đoạn, biểu đồ quạt tròn ở mức cơ bản.",
      keyPoints: [
        "Tần số là số lần xuất hiện.",
        "Tần suất = tần số / cỡ mẫu.",
        "Tổng các tần suất bằng 1 (hoặc 100%).",
        "Biểu đồ phải ghi tên trục và đơn vị."
      ],
      formula: "f_i = n_i/N",
      example: "Ví dụ: 8/40 học sinh chọn CLB Toán thì tần suất là 0.2.",
      memoryTip: "Mẹo nhớ: tần suất là bản chuẩn hóa của tần số.",
      tags: ["tần số", "tần suất", "biểu đồ"]
    },
    {
      id: "math9-central-tendency",
      grade: "9",
      chapter: "Thống kê và xác suất",
      type: "formula",
      title: "Trung bình, trung vị, mốt",
      summary: "Ba đại lượng đặc trưng trung tâm cho dữ liệu có ý nghĩa khác nhau.",
      explanation: "Trung bình nhạy với ngoại lai, trung vị bền vững hơn, mốt phản ánh giá trị xuất hiện nhiều nhất.",
      keyPoints: [
        "Trung bình cộng dùng toàn bộ dữ liệu.",
        "Trung vị là giá trị giữa sau khi sắp xếp.",
        "Mốt là giá trị có tần số lớn nhất.",
        "Chọn đại lượng phù hợp mục đích phân tích."
      ],
      formula: "x̄ = sum(x_i)/n",
      example: "Ví dụ: dãy 5,5,6,7,20 có trung bình 8.6 nhưng trung vị là 6.",
      memoryTip: "Mẹo nhớ: dữ liệu lệch mạnh thì trung vị đáng tin hơn trung bình.",
      tags: ["trung vị", "mốt", "trung bình"]
    },
    {
      id: "math9-probability-model",
      grade: "9",
      chapter: "Thống kê và xác suất",
      type: "theory",
      title: "Mô hình xác suất cổ điển",
      summary: "Khi các khả năng đồng đều, xác suất bằng tỉ số số trường hợp thuận lợi trên tổng trường hợp.",
      explanation: "Mô hình cổ điển áp dụng tốt cho bài chọn ngẫu nhiên trong tập hữu hạn có các phần tử đồng khả năng.",
      keyPoints: [
        "P(A)=n(A)/n(Omega) khi đồng khả năng.",
        "Xác suất biến cố đối: P(khong A)=1-P(A).",
        "Biết đếm tổ hợp cơ bản sẽ giải nhanh.",
        "Kiểm tra tính hợp lệ: 0<=P(A)<=1."
      ],
      formula: "P(A) = n(A)/n(Omega); P(A_bar)=1-P(A)",
      example: "Ví dụ: bốc 1 thẻ từ 1..20, xác suất bội của 3 là 6/20=3/10.",
      memoryTip: "Mẹo nhớ: xác suất của biến cố đối thường tính nhanh hơn trực tiếp.",
      tags: ["xác suất cổ điển", "biến cố đối", "đếm"]
    },
    {
      id: "math9-combined-probability-problem",
      grade: "9",
      chapter: "Thống kê và xác suất",
      type: "problem",
      title: "Bài toán xác suất tổng hợp",
      summary: "Bài toán xác suất tổng hợp yêu cầu đếm chính xác không gian mẫu và sự kiện.",
      explanation: "Dạng thường gặp: bốc bi, rút thẻ, chọn học sinh, tung đồng xu và xúc xắc nhiều lần ở mức cơ bản.",
      keyPoints: [
        "Vẽ bảng hoặc cây khả năng để đếm.",
        "Phân tách biến cố thành các trường hợp rời nhau.",
        "Tránh đếm trùng bằng cách quy ước thứ tự rõ ràng.",
        "Rút gọn phân số xác suất ở kết quả cuối."
      ],
      formula: "P(A) = so truong hop thuan loi / tong truong hop",
      example: "Ví dụ: tung 2 đồng xu, xác suất có đúng 1 mặt ngửa là 2/4=1/2.",
      memoryTip: "Mẹo nhớ: muốn đúng xác suất thì đếm mẫu trước, đếm sự kiện sau.",
      tags: ["xác suất", "không gian mẫu", "bài toán tổng hợp"]
    }
  ]
};
