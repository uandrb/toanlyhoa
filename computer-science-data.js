window.CS_DATA = {
  chapterOrder: [
    "Tin học cơ bản",
    "Thuật toán và lập trình",
    "Mạng máy tính",
    "An toàn thông tin",
    "Trí tuệ nhân tạo và dữ liệu"
  ],
  knowledgeBase: [
    {
      id: "cs9-computer-system",
      grade: "9",
      chapter: "Tin học cơ bản",
      type: "theory",
      title: "Máy tính và hệ thống thông tin",
      summary: "Máy tính bao gồm phần cứng, phần mềm và dữ liệu để xử lý thông tin.",
      explanation: "Phần cứng là các thiết bị vật lý, phần mềm là chương trình điều khiển hoạt động, còn dữ liệu là thông tin được lưu trữ và xử lý.",
      keyPoints: [
        "Phần cứng gồm CPU, bộ nhớ, thiết bị nhập/xuất.",
        "Phần mềm gồm hệ điều hành và ứng dụng.",
        "Dữ liệu được lưu trữ dưới dạng số nhị phân." 
      ],
      formula: "Input -> Xử lý -> Output",
      example: "Ví dụ: gõ văn bản vào máy tính, chương trình xử lý rồi hiển thị trên màn hình.",
      memoryTip: "Mẹo nhớ: hiểu máy tính theo chu trình vào - xử lý - ra.",
      tags: ["máy tính", "phần cứng", "phần mềm"],
      aliases: ["computer", "hardware", "software"],
      lesson: "SGK Khoa học máy tính 9 - Khái niệm máy tính"
    },
    {
      id: "cs9-binary",
      grade: "9",
      chapter: "Tin học cơ bản",
      type: "formula",
      title: "Hệ đếm nhị phân",
      summary: "Máy tính làm việc với hệ đếm nhị phân 0 và 1.",
      explanation: "Mỗi bit là một chữ số nhị phân. Nhiều bit ghép lại thành byte, từ đó biểu diễn dữ liệu và chương trình.",
      keyPoints: [
        "Bit là đơn vị cơ bản của dữ liệu.",
        "1 byte = 8 bit.",
        "Số nhị phân là nền tảng của dữ liệu máy tính."
      ],
      formula: "1 byte = 8 bit; 1010₂ = 10₁₀",
      example: "Ví dụ: số 5 trong nhị phân là 101.",
      memoryTip: "Mẹo nhớ: 0 và 1 là chữ ký của máy tính.",
      tags: ["nhị phân", "bit", "byte"],
      aliases: ["binary", "bit", "byte"],
      lesson: "SGK Khoa học máy tính 9 - Hệ nhị phân"
    },
    {
      id: "cs9-algorithm",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "theory",
      title: "Thuật toán là gì",
      summary: "Thuật toán là dãy các bước có thứ tự để giải quyết một bài toán.",
      explanation: "Thuật toán cần rõ ràng, đúng thứ tự và kết thúc sau hữu hạn bước. Một thuật toán tốt phải đúng, hiệu quả và dễ hiểu.",
      keyPoints: [
        "Thuật toán là phương pháp giải quyết bài toán.",
        "Các bước phải rõ ràng, có thứ tự.",
        "Thuật toán phải kết thúc trong thời gian hữu hạn."
      ],
      formula: "Bước 1 -> Bước 2 -> ... -> Kết quả",
      example: "Ví dụ: thuật toán tìm số lớn nhất trong 3 số: so sánh từng cặp và chọn giá trị lớn hơn.",
      memoryTip: "Mẹo nhớ: thuật toán là 'hướng dẫn từng bước' cho máy tính.",
      tags: ["thuật toán", "bước", "giải quyết"],
      aliases: ["algorithm", "procedure"],
      lesson: "SGK Khoa học máy tính 9 - Thuật toán"
    },
    {
      id: "cs9-flowchart",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "theory",
      title: "Sơ đồ khối và biểu diễn thuật toán",
      summary: "Sơ đồ khối giúp mô tả thuật toán theo hình ảnh trực quan và dễ theo dõi.",
      explanation: "Sơ đồ khối dùng các hình dạng chuẩn như hình chữ nhật, hình thoi, hình oval để mô tả xử lý, điều kiện và đầu vào/đầu ra.",
      keyPoints: [
        "Hình chữ nhật biểu diễn thao tác.",
        "Hình thoi biểu diễn điều kiện.",
        "Hình oval biểu diễn bắt đầu/kết thúc."
      ],
      example: "Ví dụ: sơ đồ kiểm tra số chẵn lẻ có hình thoi 'x % 2 == 0'.",
      memoryTip: "Mẹo nhớ: sơ đồ khối giúp 'nhìn thấy' thuật toán.",
      tags: ["sơ đồ khối", "flowchart", "điều kiện"],
      aliases: ["flowchart", "biểu đồ thuật toán"],
      lesson: "SGK Khoa học máy tính 9 - Biểu diễn thuật toán"
    },
    {
      id: "cs9-variables",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "theory",
      title: "Biến và kiểu dữ liệu",
      summary: "Biến là vùng nhớ lưu trữ dữ liệu, còn kiểu dữ liệu xác định dạng dữ liệu đó.",
      explanation: "Một biến có tên, kiểu dữ liệu và giá trị. Kiểu dữ liệu quyết định giá trị có thể lưu và phép toán được thực hiện trên biến đó.",
      keyPoints: [
        "Biến lưu trữ giá trị tạm thời.",
        "Kiểu dữ liệu gồm số nguyên, số thực, chuỗi, boolean.",
        "Tên biến nên mang tính mô tả và dễ đọc."
      ],
      formula: "Tên biến = giá trị",
      example: "Ví dụ: age = 15, name = 'Lan', isPassed = true.",
      memoryTip: "Mẹo nhớ: biến là hộp chứa dữ liệu của chương trình.",
      tags: ["biến", "kiểu dữ liệu", "boolean"],
      aliases: ["variable", "datatype"],
      lesson: "SGK Khoa học máy tính 9 - Biến và kiểu dữ liệu"
    },
    {
      id: "cs9-condition",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "problem",
      title: "Cấu trúc rẽ nhánh",
      summary: "Cấu trúc rẽ nhánh giúp chương trình chọn hành động dựa trên điều kiện.",
      explanation: "Nếu điều kiện đúng thì thực hiện khối lệnh thứ nhất, nếu sai thì thực hiện khối lệnh khác. Đây là nền tảng cho mọi phần mềm tương tác.",
      keyPoints: [
        "if dùng cho điều kiện đơn.",
        "if else xử lý hai nhánh.",
        "if lồng nhau giúp xét nhiều trường hợp."
      ],
      formula: "if (điều kiện) { ... } else { ... }",
      example: "Ví dụ: nếu điểm >= 5 thì đỗ, ngược lại thì rớt.",
      memoryTip: "Mẹo nhớ: điều kiện quyết định hướng đi của chương trình.",
      tags: ["if else", "rẽ nhánh", "điều kiện"],
      aliases: ["branching", "if"],
      lesson: "SGK Khoa học máy tính 9 - Cấu trúc rẽ nhánh"
    },
    {
      id: "cs9-loop",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "theory",
      title: "Vòng lặp",
      summary: "Vòng lặp lặp lại một tập lệnh nhiều lần theo điều kiện cho trước.",
      explanation: "Vòng lặp giúp xử lý dữ liệu lớn hiệu quả hơn vì không cần viết lại cùng khối lệnh nhiều lần. Có hai kiểu phổ biến: vòng lặp xác định và vòng lặp điều kiện.",
      keyPoints: [
        "for dùng khi biết số lần lặp.",
        "while dùng khi chưa biết trước số lần lặp.",
        "Vòng lặp cần điều kiện thoát để tránh lặp vô hạn."
      ],
      formula: "for (i = 0; i < n; i++) { ... }",
      example: "Ví dụ: in ra 10 số đầu tiên từ 1 đến 10.",
      memoryTip: "Mẹo nhớ: vòng lặp là cách lập trình lặp lại công việc.",
      tags: ["vòng lặp", "for", "while"],
      aliases: ["loop", "iteration"],
      lesson: "SGK Khoa học máy tính 9 - Vòng lặp"
    },
    {
      id: "cs9-network",
      grade: "9",
      chapter: "Mạng máy tính",
      type: "theory",
      title: "Mạng máy tính và Internet",
      summary: "Mạng máy tính cho phép các thiết bị trao đổi thông tin với nhau.",
      explanation: "Internet là mạng máy tính toàn cầu kết nối hàng tỷ thiết bị. Thông tin được truyền dưới dạng gói dữ liệu qua các thiết bị mạng.",
      keyPoints: [
        "Mạng LAN và WAN là hai dạng mạng phổ biến.",
        "IP và tên miền giúp xác định thiết bị trên mạng.",
        "Internet giúp truyền dữ liệu qua nhiều tuyến đường." 
      ],
      formula: "Thiết bị -> Router -> Internet -> Thiết bị khác",
      example: "Ví dụ: khi truy cập trang web, máy tính gửi yêu cầu đến máy chủ và nhận lại dữ liệu.",
      memoryTip: "Mẹo nhớ: mạng là hệ thống kết nối các thiết bị.",
      tags: ["mạng", "internet", "router"],
      aliases: ["network", "internet"],
      lesson: "SGK Khoa học máy tính 9 - Mạng máy tính"
    },
    {
      id: "cs9-web",
      grade: "9",
      chapter: "Mạng máy tính",
      type: "theory",
      title: "Trang web và trình duyệt",
      summary: "Trang web được xây dựng bằng HTML, CSS và JavaScript, hiển thị trên trình duyệt.",
      explanation: "HTML định nghĩa cấu trúc trang, CSS định dạng giao diện, JavaScript làm tương tác. Trình duyệt là phần mềm đọc và hiển thị nội dung web.",
      keyPoints: [
        "HTML là cấu trúc nội dung.",
        "CSS trang trí giao diện.",
        "JavaScript làm tương tác động." 
      ],
      formula: "HTML + CSS + JS = Trang web",
      example: "Ví dụ: một trang học tập có tiêu đề, nút bấm, và layout đẹp.",
      memoryTip: "Mẹo nhớ: HTML tạo khung, CSS tạo kiểu, JS tạo hành vi.",
      tags: ["web", "html", "css", "javascript"],
      aliases: ["website", "html"],
      lesson: "SGK Khoa học máy tính 9 - Web cơ bản"
    },
    {
      id: "cs9-security",
      grade: "9",
      chapter: "An toàn thông tin",
      type: "theory",
      title: "An toàn thông tin cá nhân",
      summary: "An toàn thông tin là cách bảo vệ dữ liệu và tài khoản khỏi bị đánh cắp hoặc lạm dụng.",
      explanation: "Mật khẩu mạnh, cập nhật phần mềm, tránh truy cập sai nguồn, và bảo vệ dữ liệu cá nhân là các biện pháp quan trọng để giảm rủi ro online.",
      keyPoints: [
        "Mật khẩu phải dài và khó đoán.",
        "Không nên mở tệp nguy hiểm hoặc click link lạ.",
        "Sao lưu dữ liệu giúp giảm thiểu mất mát."
      ],
      example: "Ví dụ: dùng xác thực hai lớp để bảo vệ tài khoản mạng xã hội.",
      memoryTip: "Mẹo nhớ: bảo vệ dữ liệu là bảo vệ danh tính số của bạn.",
      tags: ["an toàn", "mật khẩu", "phishing"],
      aliases: ["cybersecurity", "security"],
      lesson: "SGK Khoa học máy tính 9 - An toàn thông tin"
    },
    {
      id: "cs9-ai",
      grade: "9",
      chapter: "Trí tuệ nhân tạo và dữ liệu",
      type: "theory",
      title: "Trí tuệ nhân tạo",
      summary: "AI là lĩnh vực máy tính mô phỏng khả năng học tập, suy luận và giải quyết vấn đề.",
      explanation: "AI sử dụng dữ liệu để nhận dạng mẫu, học từ những ví dụ và đưa ra dự đoán hoặc quyết định. AI ngày nay được ứng dụng trong nhận diện giọng nói, hình ảnh và gợi ý thông minh.",
      keyPoints: [
        "AI học từ dữ liệu.",
        "AI có thể nhận diện mẫu và đưa ra dự đoán.",
        "AI cần được dùng có trách nhiệm và đạo đức."
      ],
      example: "Ví dụ: hệ thống gợi ý phim, nhận diện khuôn mặt hay chatbot thông minh đều dựa trên AI.",
      memoryTip: "Mẹo nhớ: AI không phải thần kỳ, nó học từ dữ liệu.",
      tags: ["AI", "học máy", "dữ liệu"],
      aliases: ["artificial intelligence", "machine learning"],
      lesson: "SGK Khoa học máy tính 9 - AI và dữ liệu"
    },
    {
      id: "cs9-datatype-big-o",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "formula",
      title: "Độ phức tạp thuật toán",
      summary: "Độ phức tạp đo lượng thời gian hoặc bộ nhớ cần để thuật toán chạy.",
      explanation: "Thường dùng ký hiệu O(n), O(log n), O(n²) để ước lượng hiệu quả. Nếu thuật toán xử lý dữ liệu lớn, độ phức tạp thấp thì tốt hơn.",
      keyPoints: [
        "O(1): hằng số.",
        "O(log n): chia để trị.",
        "O(n): xử lý tuyến tính.",
        "O(n²): xử lý lặp lồng nhau."
      ],
      formula: "T(n) = O(n) hoặc T(n) = O(n²)",
      example: "Ví dụ: tìm kiếm tuyến tính có độ phức tạp O(n), còn tìm kiếm nhị phân có O(log n).",
      memoryTip: "Mẹo nhớ: càng đơn giản càng hiệu quả với dữ liệu lớn.",
      tags: ["độ phức tạp", "O(n)", "thời gian"],
      aliases: ["Big O", "complexity"],
      lesson: "SGK Khoa học máy tính 9 - Độ phức tạp thuật toán"
    },
    {
      id: "cs9-advanced-security",
      grade: "9",
      chapter: "An toàn thông tin",
      type: "theory",
      level: "advanced",
      title: "Mật mã học cơ bản và bảo vệ dữ liệu",
      summary: "Mật mã học dùng các kỹ thuật mã hóa để bảo vệ thông tin trước các cuộc tấn công trên mạng.",
      explanation: "Mã hóa chuyển dữ liệu gốc thành dạng không đọc được nếu không có khóa giải mã. Việc bảo vệ dữ liệu cần cả kỹ thuật phần mềm lẫn ý thức người dùng.",
      keyPoints: [
        "Mật mã học bảo vệ dữ liệu ở cả lúc truyền và lưu trữ",
        "Khóa công khai và khóa riêng là nền tảng phần lớn hệ thống bảo mật",
        "Bảo vệ dữ liệu cần kết hợp khóa mật, xác thực và ý thức người dùng"
      ],
      formula: "Dữ liệu gốc -> mã hóa -> dữ liệu đã mã hóa -> giải mã -> dữ liệu gốc",
      example: "Ví dụ: khi đăng nhập website, dữ liệu tài khoản được truyền theo cách mã hóa để tránh bị nghe lén.",
      memoryTip: "Mẹo nhớ: mã hóa là cách giấu thông tin khỏi người không được phép xem.",
      tags: ["mật mã", "mã hóa", "bảo mật", "nâng cao"],
      aliases: ["encryption", "cryptography", "security"],
      lesson: "SGK Khoa học máy tính 9 - Bảo mật nâng cao"
    },
    {
      id: "cs9-advanced-ai",
      grade: "9",
      chapter: "Trí tuệ nhân tạo và dữ liệu",
      type: "problem",
      level: "advanced",
      title: "AI, dữ liệu và trách nhiệm trong sử dụng công nghệ",
      summary: "AI không chỉ là công cụ thông minh mà còn cần đánh giá đạo đức, sự công bằng và độ tin cậy của dữ liệu.",
      explanation: "Nếu dữ liệu huấn luyện không đa dạng hoặc có thiên vị, AI có thể đưa ra quyết định không công bằng. Vì vậy, cần kiểm tra dữ liệu, giải thích kết quả và giám sát hoạt động AI.",
      keyPoints: [
        "AI phụ thuộc rất lớn vào chất lượng dữ liệu đầu vào",
        "Dữ liệu thiên vị có thể tạo ra kết quả không công bằng",
        "Kiểm tra và giám sát AI là cần thiết trong thực tiễn"
      ],
      formula: "Dữ liệu tốt + mô hình phù hợp + giám sát -> AI đáng tin cậy",
      example: "Ví dụ: một hệ thống gợi ý cần tránh thiên vị về giới tính, tuổi tác hoặc khu vực.",
      memoryTip: "Mẹo nhớ: AI mạnh chỉ khi dữ liệu tốt và người dùng có trách nhiệm.",
      tags: ["AI", "đạo đức", "dữ liệu", "nâng cao"],
      aliases: ["ethical AI", "responsible AI"],
      lesson: "SGK Khoa học máy tính 9 - AI và đạo đức"
    }
  ],
  practiceSets: [
    {
      id: "cs9-practice-01",
      grade: "9",
      chapter: "Tin học cơ bản",
      level: "basic",
      title: "Đề Nhận biết: Phần cứng và phần mềm",
      question: "Hãy phân biệt phần cứng và phần mềm trong máy tính, cho ví dụ minh họa.",
      hint: "Một phần là thiết bị vật lý, một phần là chương trình.",
      answer: "Phần cứng là các thiết bị vật lý như bàn phím, chuột, màn hình, CPU. Phần mềm là các chương trình điều khiển máy tính như hệ điều hành, trình duyệt, phần mềm soạn thảo. Cả hai phối hợp để máy tính hoạt động.",
      expectedKeywords: ["phần cứng", "phần mềm", "CPU", "hệ điều hành"],
      sourceLesson: "SGK Khoa học máy tính 9 - Máy tính"
    },
    {
      id: "cs9-practice-02",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      level: "basic",
      title: "Đề Nhận biết: Thuật toán",
      question: "Thuật toán là gì? Nêu 3 đặc điểm quan trọng của một thuật toán tốt.",
      hint: "Dãy bước, rõ ràng, kết thúc.",
      answer: "Thuật toán là dãy các bước có thứ tự để giải một bài toán. Một thuật toán tốt phải rõ ràng, có thứ tự thực hiện, và phải kết thúc sau hữu hạn bước; ngoài ra phải đúng và hiệu quả.",
      expectedKeywords: ["dãy bước", "thứ tự", "kết thúc", "đúng"],
      sourceLesson: "SGK Khoa học máy tính 9 - Thuật toán"
    },
    {
      id: "cs9-practice-03",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      level: "intermediate",
      title: "Đề Thông hiểu: Cấu trúc rẽ nhánh",
      question: "Viết một ví dụ cụ thể về cấu trúc if else trong thực tiễn của chương trình học tập.",
      hint: "Dùng điều kiện điểm số hoặc tuổi.",
      answer: "Ví dụ: nếu điểm >= 5 thì thông báo 'Đỗ', nếu điểm < 5 thì thông báo 'Rớt'. Đây là cấu trúc if else giúp máy tính đưa ra quyết định dựa trên điều kiện.",
      expectedKeywords: ["if else", "điểm", "đỗ", "rớt", "điều kiện"],
      sourceLesson: "SGK Khoa học máy tính 9 - Rẽ nhánh"
    },
    {
      id: "cs9-practice-04",
      grade: "9",
      chapter: "Mạng máy tính",
      level: "intermediate",
      title: "Đề Thông hiểu: Internet",
      question: "Internet giúp con người làm gì trong học tập và công việc? Nêu ít nhất 3 ứng dụng.",
      hint: "Tìm kiếm, liên lạc, học online, chia sẻ tài liệu.",
      answer: "Internet hỗ trợ tra cứu thông tin, học tập trực tuyến, giao tiếp qua email hoặc ứng dụng nhắn tin, chia sẻ tài liệu và làm việc nhóm. Nó cũng cho phép truy cập dịch vụ và dữ liệu từ xa.",
      expectedKeywords: ["tra cứu", "học tập trực tuyến", "giao tiếp", "chia sẻ"],
      sourceLesson: "SGK Khoa học máy tính 9 - Mạng máy tính"
    },
    {
      id: "cs9-practice-05",
      grade: "9",
      chapter: "An toàn thông tin",
      level: "advanced",
      title: "Đề Vận dụng: Bảo mật thông tin",
      question: "Hãy nêu các biện pháp tối thiểu để bảo vệ tài khoản cá nhân khi sử dụng mạng internet.",
      hint: "Mật khẩu, xác thực hai lớp, tránh link lạ.",
      answer: "Nên đặt mật khẩu dài và khó đoán, kích hoạt xác thực hai lớp, không mở liên kết lạ, không cung cấp thông tin cá nhân cho người không rõ danh tính, và thường xuyên sao lưu dữ liệu quan trọng.",
      expectedKeywords: ["mật khẩu", "xác thực hai lớp", "link lạ", "sao lưu"],
      sourceLesson: "SGK Khoa học máy tính 9 - An toàn thông tin"
    },
    {
      id: "cs9-practice-06",
      grade: "9",
      chapter: "Trí tuệ nhân tạo và dữ liệu",
      level: "advanced",
      title: "Đề Vận dụng: AI và đạo đức",
      question: "Tại sao việc sử dụng AI cần có ý thức đạo đức và kiểm soát dữ liệu?",
      hint: "Hãy liên hệ đến quyền riêng tư, thông tin sai lệch và ảnh hưởng xã hội.",
      answer: "AI làm việc dựa trên dữ liệu, nên nếu dữ liệu không rõ ràng, sai lệch hoặc không minh bạch, kết quả có thể gây sai lệch, phân biệt đối xử hoặc xâm phạm quyền riêng tư. Vì vậy, cần dùng AI có trách nhiệm, kiểm tra dữ liệu và bảo vệ thông tin cá nhân.",
      expectedKeywords: ["đạo đức", "dữ liệu", "quyền riêng tư", "sai lệch"],
      sourceLesson: "SGK Khoa học máy tính 9 - AI và dữ liệu"
    }
  ]
};
