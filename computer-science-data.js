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
    },
    {
      id: "cs9-software-life-cycle",
      grade: "9",
      chapter: "Tin học cơ bản",
      type: "theory",
      title: "Vòng đời phần mềm",
      summary: "Phát triển phần mềm gồm nhiều giai đoạn: phân tích, thiết kế, lập trình, kiểm thử và bảo trì.",
      explanation: "Một phần mềm tốt không chỉ chạy được mà còn cần được thiết kế rõ ràng, kiểm thử kỹ lưỡng và bảo trì liên tục. Mỗi giai đoạn có mục đích riêng để đảm bảo chất lượng.",
      keyPoints: [
        "Phân tích nhu cầu xác định vấn đề cần giải quyết",
        "Thiết kế mô tả cấu trúc và chức năng",
        "Kiểm thử và bảo trì đảm bảo phần mềm ổn định"
      ],
      formula: "Nhu cầu → Thiết kế → Lập trình → Kiểm thử → Bảo trì",
      example: "Ví dụ: khi xây dựng ứng dụng học tập, ta cần xác định mục đích trước khi viết code.",
      memoryTip: "Mẹo nhớ: phần mềm cần đi từ ý tưởng đến sử dụng bền vững.",
      tags: ["phần mềm", "thiết kế", "bảo trì"],
      aliases: ["software lifecycle", "SDLC"],
      lesson: "SGK Khoa học máy tính 9 - Phát triển phần mềm"
    },
    {
      id: "cs9-sorting",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      type: "theory",
      title: "Sắp xếp dữ liệu",
      summary: "Sắp xếp là thao tác đặt các phần tử theo trật tự hợp lý như tăng dần hoặc giảm dần.",
      explanation: "Trong nhiều bài toán, việc sắp xếp dữ liệu giúp tìm kiếm dễ hơn, dễ xử lý dữ liệu và trình bày thông tin rõ ràng. Có nhiều cách sắp xếp như chèn, đổi chỗ, chọn và xếp chồng.",
      keyPoints: [
        "Sắp xếp có thể tăng hoặc giảm dần",
        "Sắp xếp giúp tìm kiếm và xử lý dữ liệu dễ hơn",
        "Mỗi thuật toán sắp xếp có ưu điểm và thời gian khác nhau"
      ],
      formula: "Dữ liệu ban đầu → Sắp xếp → Dữ liệu có trật tự",
      example: "Ví dụ: sắp xếp tên học sinh trong danh sách lớp theo thứ tự bảng chữ cái.",
      memoryTip: "Mẹo nhớ: sắp xếp làm dữ liệu dễ đọc và dễ xử lý hơn.",
      tags: ["sắp xếp", "thuật toán", "dữ liệu"],
      aliases: ["sorting", "order data"],
      lesson: "SGK Khoa học máy tính 9 - Sắp xếp dữ liệu"
    },
    {
      id: "cs9-digital-ethics",
      grade: "9",
      chapter: "An toàn thông tin",
      type: "theory",
      title: "Đạo đức số và quyền riêng tư",
      summary: "Khi sử dụng Internet, cần tôn trọng quyền riêng tư, tránh chia sẻ thông tin nhạy cảm và không xâm phạm người khác.",
      explanation: "Thông tin cá nhân như số điện thoại, địa chỉ, hình ảnh, mật khẩu cần được bảo vệ. Việc lộ thông tin có thể dẫn tới trộm cắp tài khoản, quấy rối hoặc lừa đảo trực tuyến.",
      keyPoints: [
        "Không chia sẻ mật khẩu cho người khác",
        "Cẩn trọng với link lạ và ứng dụng không rõ nguồn",
        "Bảo vệ dữ liệu cá nhân là nghĩa vụ số"
      ],
      formula: "Bảo mật dữ liệu = bảo vệ danh tính + tránh lừa đảo + tôn trọng người khác",
      example: "Ví dụ: không đăng ảnh, số điện thoại hoặc địa chỉ nhà quá rộng rãi trên mạng xã hội.",
      memoryTip: "Mẹo nhớ: mạng là nơi bạn cần giữ bí mật như trong đời thực.",
      tags: ["quyền riêng tư", "đạo đức số", "an toàn"],
      aliases: ["digital ethics", "privacy"],
      lesson: "SGK Khoa học máy tính 9 - Đạo đức số"
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
    },
    {
      id: "cs9-practice-07",
      grade: "9",
      chapter: "Tin học cơ bản",
      level: "basic",
      title: "Đề Nhận biết: Vòng đời phần mềm",
      question: "Hãy nêu các giai đoạn chính trong phát triển một phần mềm và vai trò của từng giai đoạn.",
      hint: "Có giai đoạn phân tích, thiết kế, lập trình, kiểm thử, bảo trì.",
      answer: "Phần mềm được phát triển qua các giai đoạn: phân tích nhu cầu, thiết kế, lập trình, kiểm thử và bảo trì. Mỗi giai đoạn giúp xác định vấn đề, tạo kế hoạch, viết code và đảm bảo phần mềm hoạt động ổn định lâu dài.",
      expectedKeywords: ["phân tích", "thiết kế", "lập trình", "kiểm thử", "bảo trì"],
      sourceLesson: "SGK Khoa học máy tính 9 - Phát triển phần mềm"
    },
    {
      id: "cs9-practice-08",
      grade: "9",
      chapter: "Thuật toán và lập trình",
      level: "intermediate",
      title: "Đề Thông hiểu: Sắp xếp dữ liệu",
      question: "Vì sao cần sắp xếp dữ liệu trước khi tìm kiếm hoặc xử lý thông tin?",
      hint: "Hãy liên hệ đến hiệu quả, sự rõ ràng và dễ quản lý.",
      answer: "Sắp xếp dữ liệu giúp tổ chức thông tin theo trật tự thuận tiện, làm cho việc tìm kiếm, so sánh hoặc xử lý nhanh và hiệu quả hơn. Khi dữ liệu đã có trật tự, các thuật toán xử lý cũng dễ tối ưu hơn.",
      expectedKeywords: ["sắp xếp", "tìm kiếm", "hiệu quả", "trật tự"],
      sourceLesson: "SGK Khoa học máy tính 9 - Sắp xếp dữ liệu"
    },
    {
      id: "cs9-practice-09",
      grade: "9",
      chapter: "An toàn thông tin",
      level: "advanced",
      title: "Đề Vận dụng: Bình an trên mạng",
      question: "Nêu 4 hành vi an toàn cần thực hiện khi sử dụng Internet để bảo vệ bản thân.",
      hint: "Đừng chia sẻ quá nhiều, không tin link lạ, bảo vệ tài khoản và cẩn trọng với hình ảnh cá nhân.",
      answer: "Các hành vi cần làm gồm: dùng mật khẩu mạnh và khác nhau cho từng tài khoản, kích hoạt xác thực hai lớp, không mở link hoặc tệp lạ, không chia sẻ quá nhiều thông tin cá nhân trên mạng và cập nhật phần mềm thường xuyên.",
      expectedKeywords: ["mật khẩu mạnh", "xác thực hai lớp", "link lạ", "thông tin cá nhân"],
      sourceLesson: "SGK Khoa học máy tính 9 - An toàn thông tin"
    }
  ]
};

window.AI_DATA = {
  chapterOrder: [
    "Nền tảng AI",
    "Dữ liệu lớn và ML",
    "Deep Learning",
    "LLM & Chat",
    "Ứng dụng AI",
    "Phát triển AI"
  ],
  knowledgeBase: [
    {
      id: "ai-overview",
      grade: "9",
      chapter: "Nền tảng AI",
      category: "overview",
      categoryLabel: "Tổng quan",
      type: "theory",
      title: "AI là gì",
      summary: "AI là lĩnh vực cho phép máy tính học từ dữ liệu, nhận diện mẫu và đưa ra quyết định hoặc dự đoán.",
      explanation: "AI không phải chỉ là robot tự động, mà là tập hợp các kỹ thuật giúp máy tính xử lý dữ liệu, học từ ví dụ và thực hiện các tác vụ như nhận dạng, gợi ý, dịch, và phân tích hình ảnh.",
      keyPoints: [
        "AI là khả năng máy tính mô phỏng tư duy và học hỏi từ dữ liệu.",
        "AI có thể giải quyết bài toán phân loại, dự đoán, nhận dạng và tối ưu hóa.",
        "Để AI hiệu quả, cần dữ liệu chất lượng, mô hình phù hợp và giám sát đúng cách."
      ],
      formula: "Dữ liệu + mô hình + học máy -> AI",
      example: "Ví dụ: hệ thống gợi ý video, chatbot, nhận diện khuôn mặt đều là ứng dụng AI.",
      memoryTip: "Mẹo nhớ: AI học từ dữ liệu, giống cách con người học từ trải nghiệm.",
      tags: ["AI", "tổng quan", "học máy"],
      aliases: ["artificial intelligence", "ai basics"],
      lesson: "Nhập môn Trí tuệ nhân tạo - Khái niệm AI"
    },
    {
      id: "ai-big-data",
      grade: "9",
      chapter: "Dữ liệu lớn và ML",
      category: "ml",
      categoryLabel: "Dữ liệu & ML",
      type: "theory",
      title: "Dữ liệu lớn và vai trò của dữ liệu",
      summary: "Dữ liệu lớn là tập dữ liệu rất lớn, đa dạng và phát sinh nhanh; AI cần dữ liệu đủ lớn và đúng chuẩn để học hiệu quả.",
      explanation: "Dữ liệu cần được thu thập, làm sạch, tổ chức và đánh nhãn để máy học có thể tìm ra mẫu. Nếu dữ liệu thiếu chất lượng, mô hình AI sẽ sai lệch hoặc thiên vị.",
      keyPoints: [
        "Dữ liệu lớn là dữ liệu khổng lồ, đa dạng và thay đổi nhanh.",
        "Dữ liệu cần được làm sạch và gán nhãn trước khi huấn luyện.",
        "Chất lượng dữ liệu ảnh hưởng trực tiếp đến chất lượng AI."
      ],
      formula: "Dữ liệu sạch + nhãn đúng + mô hình phù hợp = học tốt",
      example: "Ví dụ: hệ thống chấm điểm học sinh hoặc gợi ý sản phẩm dựa trên hàng triệu lượt tương tác người dùng.",
      memoryTip: "Mẹo nhớ: AI mạnh hay yếu phụ thuộc rất lớn vào dữ liệu đầu vào.",
      tags: ["dữ liệu lớn", "data", "AI cơ bản"],
      aliases: ["big data", "data quality"],
      lesson: "Dữ liệu lớn và machine learning cơ bản"
    },
    {
      id: "ai-ml",
      grade: "9",
      chapter: "Dữ liệu lớn và ML",
      category: "ml",
      categoryLabel: "Dữ liệu & ML",
      type: "theory",
      title: "Machine Learning (ML)",
      summary: "Machine Learning là cách máy tính học từ dữ liệu thay vì chỉ làm theo lập trình cứng. Học từ ví dụ và tự cải thiện dự đoán.",
      explanation: "Trong ML, mô hình học các mẫu trong dữ liệu và dự đoán cho dữ liệu mới. Có ba nhóm chính: học có giám sát, học không giám sát và học tăng cường.",
      keyPoints: [
        "Học có giám sát: có dữ liệu đầu vào và nhãn đúng.",
        "Học không giám sát: tìm cấu trúc ẩn trong dữ liệu.",
        "Học tăng cường: mô hình học qua thử sai và phần thưởng."
      ],
      formula: "Ví dụ -> mẫu -> mô hình -> dự đoán",
      example: "Ví dụ: hệ thống phân loại email spam, dự đoán thời tiết, gợi ý sản phẩm.",
      memoryTip: "Mẹo nhớ: ML là máy học từ dữ liệu, không phải lập trình từng trường hợp.",
      tags: ["machine learning", "ML", "dự đoán"],
      aliases: ["machine learning", "ml"],
      lesson: "Machine Learning - Học máy căn bản"
    },
    {
      id: "ai-dl",
      grade: "9",
      chapter: "Deep Learning",
      category: "ml",
      categoryLabel: "Dữ liệu & ML",
      type: "theory",
      title: "Deep Learning (DL)",
      summary: "Deep Learning là một nhánh của ML sử dụng mạng nơ-ron sâu để xử lý dữ liệu phức tạp như hình ảnh, âm thanh và ngôn ngữ.",
      explanation: "Mạng nơ-ron sâu có nhiều lớp ẩn, giúp mô hình học được các đặc trưng phức tạp. DL đặc biệt mạnh trong nhận dạng ảnh, giọng nói và tiếng nói tự nhiên.",
      keyPoints: [
        "DL là ML ở mức sâu hơn với nhiều lớp ẩn.",
        "Mạng nơ-ron có thể học đặc trưng tự động.",
        "DL hiệu quả khi dữ liệu lớn và tính toán mạnh."
      ],
      formula: "Dữ liệu lớn + mạng nơ-ron sâu + tối ưu hóa -> DL",
      example: "Ví dụ: nhận diện khuôn mặt, nhận dạng giọng nói, chẩn đoán hình ảnh y khoa.",
      memoryTip: "Mẹo nhớ: DL là mô hình học sâu hơn, mạnh hơn với dữ liệu phức tạp.",
      tags: ["deep learning", "neural network", "AI nâng cao"],
      aliases: ["deep learning", "neural network"],
      lesson: "Deep Learning - Mạng nơ-ron sâu"
    },
    {
      id: "ai-llm",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      categoryLabel: "LLM & Chat",
      type: "theory",
      title: "LLM là gì",
      summary: "LLM (Large Language Model) là mô hình ngôn ngữ lớn, được huấn luyện trên lượng dữ liệu văn bản khổng lồ để hiểu và tạo ra ngôn ngữ con người.",
      explanation: "LLM có thể trả lời câu hỏi, tóm tắt văn bản, dịch thuật, viết code và tạo nội dung. Chúng hoạt động bằng cách dự đoán từ tiếp theo trong chuỗi văn bản dựa trên các mẫu đã học.",
      keyPoints: [
        "LLM đọc và dự đoán văn bản theo ngữ cảnh.",
        "Mô hình dùng token để biểu diễn từng phần của văn bản.",
        "LLM rất mạnh trong ngôn ngữ, nhưng vẫn cần giám sát và kiểm định."
      ],
      formula: "Token -> ngữ cảnh -> dự đoán từ tiếp theo -> câu trả lời",
      example: "Ví dụ: ChatGPT trả lời câu hỏi, viết email, giải thích lý thuyết, hoặc dịch văn bản.",
      memoryTip: "Mẹo nhớ: LLM là máy tính đã học rất nhiều mẫu ngôn ngữ từ dữ liệu khổng lồ.",
      tags: ["LLM", "ngôn ngữ lớn", "ChatGPT"],
      aliases: ["large language model", "chatgpt"],
      lesson: "LLM và hệ thống chat hiện đại"
    },
    {
      id: "ai-chat-system",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      categoryLabel: "LLM & Chat",
      type: "problem",
      title: "Cách 1 hệ thống chat hoạt động",
      summary: "Một hệ thống chat như ChatGPT cần dữ liệu, mô hình, cơ sở hạ tầng, bộ lưu trữ hội thoại và hệ thống xử lý triệu người dùng cùng lúc.",
      explanation: "Hệ thống chat đầu tiên cần thu thập dữ liệu văn bản từ nhiều nguồn, sau đó lọc, gán nhãn, làm sạch, huấn luyện mô hình, rồi triển khai lên máy chủ. Khi người dùng gửi câu hỏi, hệ thống sẽ xử lý prompt, chạy mô hình và trả kết quả trong thời gian ngắn.",
      keyPoints: [
        "Thu thập dữ liệu: văn bản, hội thoại, mã nguồn, metadata.",
        "Làm sạch dữ liệu: loại bỏ lỗi, nội dung nhạy cảm, dữ liệu lặp.",
        "Huấn luyện: mô hình học cách dự đoán từ tiếp theo trong ngữ cảnh.",
        "Triển khai: lưu cache, tối ưu latency, quản lý hàng triệu người dùng cùng lúc."
      ],
      formula: "Prompt -> xử lý -> mô hình -> kết quả -> phản hồi người dùng",
      example: "Ví dụ: khi bạn hỏi 'viết một bài thuyết minh', hệ thống chuyển câu hỏi thành prompt, mô hình suy luận và trả lời theo ngữ cảnh.",
      memoryTip: "Mẹo nhớ: AI chat là một hệ thống có dữ liệu, mô hình và phần mềm vận hành đồng thời.",
      tags: ["chatbot", "prompt", "hệ thống chat"],
      aliases: ["chat system", "chatgpt architecture"],
      lesson: "Kiến trúc hệ thống chat và LLM"
    },
    {
      id: "ai-voice",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      categoryLabel: "LLM & Chat",
      type: "theory",
      title: "AI voice và xử lý giọng nói",
      summary: "AI voice chuyển đổi giọng nói thành văn bản và ngược lại, giúp ứng dụng trợ lý ảo, dịch vụ điện thoại và tìm kiếm bằng giọng nói.",
      explanation: "Hệ thống voice cần cả mô hình ASR (Automatic Speech Recognition) và TTS (Text to Speech). Dữ liệu âm thanh được xử lý để phân tích tần số, ý nghĩa, ngữ cảnh và phản hồi với giọng nói tự nhiên hơn.",
      keyPoints: [
        "ASR: nhận dạng giọng nói thành văn bản.",
        "TTS: biến văn bản thành giọng nói.",
        "Các ứng dụng gồm trợ lý ảo, call center, chuyển đổi ngôn ngữ."
      ],
      formula: "Giọng nói -> ASR -> ngữ nghĩa -> mô hình AI -> TTS -> giọng nói",
      example: "Ví dụ: trợ lý ảo trên điện thoại, giọng nói điều khiển ứng dụng, dịch thoại trực tiếp.",
      memoryTip: "Mẹo nhớ: voice AI biến âm thanh thành ý nghĩa và ngược lại.",
      tags: ["voice AI", "giọng nói", "ASR"],
      aliases: ["speech recognition", "voice assistant"],
      lesson: "AI giọng nói và xử lý âm thanh"
    },
    {
      id: "ai-apps",
      grade: "9",
      chapter: "Ứng dụng AI",
      category: "applications",
      categoryLabel: "Ứng dụng",
      type: "theory",
      title: "Ứng dụng AI trong đời sống",
      summary: "AI hiện diện trong giáo dục, y tế, nông nghiệp, giao thông, thương mại và giải trí, giúp tăng hiệu quả và tạo ra trải nghiệm cá nhân hóa.",
      explanation: "Trong giáo dục, AI hỗ trợ học tập cá nhân hóa; trong y tế, AI hỗ trợ chẩn đoán hình ảnh; trong nông nghiệp, AI giám sát mùa vụ và tối ưu khí hậu; trong giao thông, AI dự báo lưu lượng và hỗ trợ lái xe.",
      keyPoints: [
        "Giáo dục: hệ thống học tập cá nhân hóa và gia sư ảo.",
        "Y tế: chẩn đoán hình ảnh và quản lý bệnh án.",
        "Giao thông: nhận diện biển báo, dự báo ùn tắc và điều khiển tự động."
      ],
      formula: "AI + dữ liệu + thiết bị -> giải pháp thông minh trong thực tế",
      example: "Ví dụ: ứng dụng tìm đường, gợi ý sản phẩm, chatbot hỗ trợ khách hàng, camera nhận diện người đi bộ.",
      memoryTip: "Mẹo nhớ: AI làm tốt nhất khi giải quyết các bài toán lặp lại và dữ liệu lớn.",
      tags: ["ứng dụng AI", "đời sống", "thực tiễn"],
      aliases: ["AI applications", "real world AI"],
      lesson: "AI trong cuộc sống và sản xuất"
    },
    {
      id: "ai-dev",
      grade: "9",
      chapter: "Phát triển AI",
      category: "development",
      categoryLabel: "Phát triển AI",
      type: "theory",
      title: "Cách phát triển một hệ thống AI",
      summary: "Phát triển AI gồm nhiều bước: xác định vấn đề, thu thập dữ liệu, chuẩn bị dữ liệu, chọn mô hình, huấn luyện, đánh giá, triển khai và giám sát.",
      explanation: "Một hệ thống AI không bắt đầu bằng mã máy, mà bằng xác định bài toán rõ ràng: cần dự đoán gì, dữ liệu nào, giải pháp nào và thành công được đo bằng tiêu chí nào. Bước sau đó là xây dựng dữ liệu, mô hình, thử nghiệm và triển khai tới người dùng.",
      keyPoints: [
        "Xác định bài toán: AI giúp giải quyết gì?",
        "Thu thập và làm sạch dữ liệu: dữ liệu phải đầy đủ và đáng tin cậy.",
        "Huấn luyện và đánh giá: đo độ chính xác, độ tin cậy và lỗi.",
        "Triển khai: đưa mô hình vào các hệ thống thực tế và giám sát liên tục."
      ],
      formula: "Bài toán -> dữ liệu -> mô hình -> đánh giá -> triển khai",
      example: "Ví dụ: xây dựng hệ thống gợi ý học sinh cần có dữ liệu điểm, thói quen học tập và mô hình dự đoán sự tiến bộ.",
      memoryTip: "Mẹo nhớ: AI là một quy trình, không phải chỉ là một đoạn code.",
      tags: ["phát triển AI", "pipeline", "mô hình"],
      aliases: ["AI development", "model pipeline"],
      lesson: "Cách xây dựng hệ thống AI từ bài toán đến công cụ"
    },
    {
      id: "ai-problem-types",
      grade: "9",
      chapter: "Nền tảng AI",
      category: "overview",
      categoryLabel: "Tổng quan",
      type: "theory",
      title: "Các loại bài toán AI",
      summary: "AI giải quyết nhiều loại bài toán khác nhau như phân loại, hồi quy, tìm kiếm, nhận dạng và sinh nội dung.",
      explanation: "Không phải mọi bài toán đều giống nhau. Một mô hình AI phải phù hợp với loại dữ liệu và mục tiêu: phân loại ảnh, dự đoán giá, tìm kiếm thông tin, dịch ngôn ngữ hay sinh câu trả lời.",
      keyPoints: [
        "Phân loại: chọn 1 trong nhiều nhãn như spam hay không spam.",
        "Hồi quy: dự đoán giá trị số như giá nhà, nhiệt độ, doanh thu.",
        "Nhận dạng: nhận biết hình ảnh, âm thanh, chữ viết, giọng nói.",
        "Tạo nội dung: viết văn bản, hình ảnh, âm thanh hoặc mã nguồn."
      ],
      formula: "Bài toán -> dạng dữ liệu -> mô hình phù hợp -> kết quả",
      example: "Ví dụ: AI phân loại email rác, dự đoán điểm học tập, nhận diện thú cưng hoặc viết đoạn văn bản theo yêu cầu.",
      memoryTip: "Mẹo nhớ: mỗi bài toán AI cần mô hình phù hợp với đầu vào và đầu ra mong muốn.",
      tags: ["bài toán AI", "phân loại", "dự đoán"],
      aliases: ["AI task", "problem types"],
      lesson: "Phân loại bài toán AI và ứng dụng"
    },
    {
      id: "ai-feature-engineering",
      grade: "9",
      chapter: "Dữ liệu lớn và ML",
      category: "ml",
      categoryLabel: "Dữ liệu & ML",
      type: "theory",
      title: "Làm sạch dữ liệu và trích xuất đặc trưng",
      summary: "Dữ liệu thô thường chứa nhiễu, thiếu sót hoặc không phù hợp. AI cần làm sạch và biến đổi dữ liệu thành tính năng có thể học được.",
      explanation: "Trước khi huấn luyện mô hình, ta cần loại bỏ lỗi, chuẩn hóa định dạng, chọn thuộc tính quan trọng và tạo ra các đặc trưng phù hợp. Điều này giúp mô hình học tốt hơn và giảm sai lệch.",
      keyPoints: [
        "Dữ liệu thiếu hoặc sai cần được xử lý trước khi huấn luyện.",
        "Chuẩn hóa số liệu giúp các mô hình học ổn định hơn.",
        "Đặc trưng tốt làm cho mô hình dễ học và dễ giải thích hơn."
      ],
      formula: "Dữ liệu thô -> làm sạch -> trích xuất đặc trưng -> mô hình",
      example: "Ví dụ: chuyển dữ liệu thời tiết, độ ẩm, nhiệt độ thành các biến số để dự báo mưa.",
      memoryTip: "Mẹo nhớ: dữ liệu sạch là nền tảng của mô hình chính xác.",
      tags: ["feature engineering", "data cleaning", "dữ liệu"],
      aliases: ["feature engineering", "data preprocessing"],
      lesson: "Dữ liệu thô, làm sạch dữ liệu và trích xuất đặc trưng"
    },
    {
      id: "ai-evaluation",
      grade: "9",
      chapter: "Dữ liệu lớn và ML",
      category: "ml",
      categoryLabel: "Dữ liệu & ML",
      type: "formula",
      title: "Đánh giá mô hình AI",
      summary: "Mô hình AI không chỉ cần chạy, mà còn cần được đánh giá bằng đúng thước đo để biết độ chính xác và độ tin cậy.",
      explanation: "Các thước đo thường gặp là độ chính xác, precision, recall, F1-score, loss và confusion matrix. Đánh giá giúp phát hiện mô hình quá khớp, thiếu dữ liệu hoặc sai lệch trong dự đoán.",
      keyPoints: [
        "Độ chính xác đo tỷ lệ dự đoán đúng trên tất cả dữ liệu.",
        "Precision và recall giúp đánh giá khi dữ liệu mất cân bằng.",
        "Một mô hình tốt cần cả độ chính xác và khả năng tổng quát hóa."
      ],
      formula: "Đánh giá = độ chính xác + độ tin cậy + khả năng tổng quát",
      example: "Ví dụ: đánh giá mô hình chẩn đoán bệnh ngoài việc xem đúng số ca còn phải xem số ca bỏ sót và số ca dương tính giả.",
      memoryTip: "Mẹo nhớ: AI cần được đo bằng cả kết quả và độ tin cậy, không chỉ bằng cảm giác.",
      tags: ["đánh giá mô hình", "precision", "recall"],
      aliases: ["model evaluation", "metrics"],
      lesson: "Đánh giá mô hình và tiêu chí hiệu quả"
    },
    {
      id: "ai-transformer",
      grade: "9",
      chapter: "Deep Learning",
      category: "ml",
      categoryLabel: "Dữ liệu & ML",
      type: "theory",
      title: "Transformer và cơ chế Attention",
      summary: "Transformer là kiến trúc mô hình mạnh mẽ trong AI ngôn ngữ, giúp hệ thống hiểu mối quan hệ giữa các từ trong câu và tạo ra văn bản chính xác hơn.",
      explanation: "Cơ chế Attention cho phép mô hình tập trung vào phần quan trọng của câu thay vì xem từng từ như nhau. Đây là nền tảng cho hầu hết LLM hiện đại như GPT, BERT và các mô hình dịch thuật.",
      keyPoints: [
        "Attention giúp mô hình hiểu trọng tâm của câu.",
        "Transformer xử lý dữ liệu tuần tự hiệu quả hơn nhiều mô hình cũ.",
        "Nền tảng kỹ thuật cho ChatGPT, dịch thuật, tóm tắt và chatbot."
      ],
      formula: "Input -> embedding -> attention -> transformer -> output",
      example: "Ví dụ: trong câu 'học sinh đọc sách trong thư viện', mô hình hiểu 'học sinh' là chủ thể và 'đọc sách' là hành động chính.",
      memoryTip: "Mẹo nhớ: Attention giống cách con người chú ý vào điểm quan trọng trong câu.",
      tags: ["Transformer", "Attention", "LLM"],
      aliases: ["transformer", "attention"],
      lesson: "Transformer và cơ chế attention trong LLM"
    },
    {
      id: "ai-finetune",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      categoryLabel: "LLM & Chat",
      type: "theory",
      title: "Fine-tuning và prompt engineering",
      summary: "Fine-tuning là quá trình điều chỉnh mô hình đã học sẵn cho một nhiệm vụ cụ thể; prompt engineering là cách viết lệnh để hướng dẫn mô hình tốt hơn.",
      explanation: "Một mô hình LLM ban đầu có thể trả lời rất nhiều câu hỏi, nhưng để phục vụ một mục tiêu cụ thể như dạy toán, hỗ trợ tư vấn hoặc nội dung marketing, ta cần chỉnh sửa mô hình hoặc dùng prompt hợp lý.",
      keyPoints: [
        "Prompt tốt giúp mô hình trả lời rõ hơn, ngắn gọn và phù hợp mục đích.",
        "Fine-tuning phù hợp khi cần chuyên môn sâu hoặc hành vi cố định.",
        "Prompt engineering là cách thiết kế câu lệnh để hướng dẫn AI."
      ],
      formula: "Prompt rõ -> ngữ cảnh tốt -> câu trả lời chất lượng hơn",
      example: "Ví dụ: hỏi 'giải thích phép nhân ma trận cho học sinh lớp 10 bằng ngôn ngữ đơn giản' sẽ tốt hơn câu hỏi mơ hồ.",
      memoryTip: "Mẹo nhớ: mô hình tốt nhưng prompt đúng mới cho ra kết quả tốt nhất.",
      tags: ["prompt engineering", "fine-tuning", "LLM"],
      aliases: ["prompt", "fine tuning"],
      lesson: "Fine-tuning và kỹ thuật prompt"
    },
    {
      id: "ai-inference",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      categoryLabel: "LLM & Chat",
      type: "theory",
      title: "Inference và tối ưu hiệu năng hệ thống AI",
      summary: "Inference là quá trình chạy mô hình đã huấn luyện để suy luận trên dữ liệu mới. Hệ thống AI cần tối ưu tốc độ và chi phí để phục vụ hàng triệu người dùng.",
      explanation: "Sau khi mô hình được huấn luyện, ta cần triển khai để người dùng tương tác. Tại thời điểm này, các yếu tố quan trọng bao gồm độ trễ, chi phí tính toán, bộ nhớ và khả năng mở rộng của hệ thống.",
      keyPoints: [
        "Inference là giai đoạn mô hình suy luận dữ liệu mới.",
        "Một hệ thống AI cần trả lời nhanh và ổn định.",
        "Caching, batch processing và tối ưu mô hình giúp giảm chi phí."
      ],
      formula: "Mô hình -> đầu vào -> suy luận -> đầu ra",
      example: "Ví dụ: hệ thống chatbot cần phản hồi trong vài giây cho nhiều lượt hỏi đồng thời.",
      memoryTip: "Mẹo nhớ: chạy AI hiệu quả không chỉ là mô hình mạnh mà còn là hệ thống vận hành tốt.",
      tags: ["inference", "tối ưu hiệu năng", "LLM"],
      aliases: ["inference engine", "latency"],
      lesson: "Suy luận và tối ưu hiệu suất AI"
    },
    {
      id: "ai-ethics",
      grade: "9",
      chapter: "Ứng dụng AI",
      category: "applications",
      categoryLabel: "Ứng dụng",
      type: "problem",
      title: "Đạo đức và trách nhiệm khi dùng AI",
      summary: "AI mang lại tiềm năng lớn nhưng cũng có rủi ro về riêng tư, thiên vị, tin giả, và phụ thuộc quá mức vào công nghệ.",
      explanation: "Khi dùng AI, cần bảo vệ dữ liệu cá nhân, tránh phân biệt đối xử, và kiểm tra thông tin trước khi tin tưởng hoàn toàn. Mọi hệ thống AI đều cần có giám sát và cam kết sử dụng có trách nhiệm.",
      keyPoints: [
        "Không chia sẻ thông tin nhạy cảm với công cụ AI không được kiểm soát.",
        "Dữ liệu huấn luyện cần công bằng và đa dạng.",
        "Mọi quyết định quan trọng vẫn cần người dùng xem xét kỹ lưỡng."
      ],
      formula: "Công nghệ mạnh + đạo đức + giám sát = AI an toàn",
      example: "Ví dụ: AI có thể tạo ra thông tin sai lệch hoặc ưu tiên sai nhóm người nếu dữ liệu bị thiên vị.",
      memoryTip: "Mẹo nhớ: AI mạnh nhưng không thể thay thế trách nhiệm của con người.",
      tags: ["đạo đức AI", "privacy", "responsible AI"],
      aliases: ["ethics", "AI safety"],
      lesson: "Đạo đức, bảo mật và trách nhiệm khi dùng AI"
    },
    {
      id: "ai-mlops",
      grade: "9",
      chapter: "Phát triển AI",
      category: "development",
      categoryLabel: "Phát triển AI",
      type: "theory",
      title: "MLOps và triển khai AI thực tế",
      summary: "MLOps là cách quản lý vòng đời mô hình AI từ huấn luyện, kiểm thử, triển khai tới giám sát sau khi đưa vào sử dụng.",
      explanation: "Một mô hình AI không chỉ cần tốt trên dữ liệu thử nghiệm, mà còn cần ổn định trong sản phẩm thật. MLOps giúp tự động hóa quy trình cập nhật dữ liệu, kiểm tra hiệu suất và phát hiện lỗi sau khi ra mắt.",
      keyPoints: [
        "MLOps bao gồm triển khai, giám sát, cập nhật và kiểm thử mô hình.",
        "Phần mềm cần theo dõi sự thay đổi của dữ liệu và hiệu suất của mô hình.",
        "Cập nhật mô hình định kỳ giúp hệ thống AI không bị lỗi thời."
      ],
      formula: "Mô hình -> triển khai -> giám sát -> cập nhật -> cải thiện",
      example: "Ví dụ: ứng dụng gợi ý mua hàng cần cập nhật mô hình theo xu hướng người dùng mới và dữ liệu theo thời gian.",
      memoryTip: "Mẹo nhớ: AI sau khi ra mắt vẫn cần được bảo dưỡng như một hệ thống phần mềm thực tế.",
      tags: ["MLOps", "triển khai AI", "monitoring"],
      aliases: ["mlops", "deployment"],
      lesson: "MLOps và vòng đời mô hình AI"
    }
  ],
  practiceSets: [
    {
      id: "ai-practice-01",
      grade: "9",
      chapter: "Nền tảng AI",
      category: "overview",
      title: "Đề Nhận biết: AI là gì",
      question: "AI có thể giúp con người làm gì trong học tập và đời sống? Nêu ít nhất 3 ví dụ.",
      hint: "Hãy nghĩ đến hỗ trợ học tập, nhận diện, gợi ý, tự động hóa.",
      answer: "AI có thể hỗ trợ học tập cá nhân hóa, gợi ý nội dung phù hợp, nhận dạng hình ảnh, giọng nói, và tự động hóa các công việc lặp lại. Ví dụ: chatbot hỗ trợ học bài, hệ thống gợi ý video, nhận dạng biển báo, nhận diện khuôn mặt.",
      expectedKeywords: ["học tập cá nhân hóa", "gợi ý", "nhận dạng", "tự động hóa"],
      sourceLesson: "AI cơ bản và ứng dụng trong đời sống"
    },
    {
      id: "ai-practice-02",
      grade: "9",
      chapter: "Dữ liệu lớn và ML",
      category: "ml",
      title: "Đề Thông hiểu: Vì sao dữ liệu quan trọng?",
      question: "Tại sao chất lượng dữ liệu quyết định chất lượng của AI? Hãy giải thích bằng ví dụ.",
      hint: "Nếu dữ liệu sai, mô hình sẽ đưa ra kết quả sai.",
      answer: "AI học từ dữ liệu. Nếu dữ liệu thiếu, sai lệch hoặc thiên vị, mô hình sẽ học những mẫu sai và đưa ra quyết định không chính xác. Ví dụ: nếu dữ liệu huấn luyện không có nhiều hình ảnh của người lớn tuổi, hệ thống nhận diện khuôn mặt có thể nhận diện kém đối tượng này.",
      expectedKeywords: ["chất lượng dữ liệu", "thiên vị", "mô hình", "đưa ra quyết định sai"],
      sourceLesson: "Dữ liệu lớn và học máy"
    },
    {
      id: "ai-practice-03",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      title: "Đề Vận dụng: Hệ thống chat hoạt động như thế nào?",
      question: "Mô tả ngắn gọn quy trình một hệ thống chat như ChatGPT xử lý câu hỏi của người dùng.",
      hint: "Xem qua các bước: prompt, mô hình, trả lời, lưu trữ và hiệu năng.",
      answer: "Người dùng nhập một prompt. Hệ thống sẽ xử lý prompt, chuyển qua mô hình ngôn ngữ, mô hình dự đoán câu trả lời phù hợp theo ngữ cảnh, rồi gửi ra phản hồi. Để đáp ứng hàng triệu người dùng, hệ thống cần cả phần mềm xử lý câu hỏi, máy chủ mạnh, cache và cơ chế giám sát chất lượng.",
      expectedKeywords: ["prompt", "mô hình ngôn ngữ", "dự đoán", "trả lời", "hàng triệu người dùng"],
      sourceLesson: "LLM và kiến trúc hệ thống chat"
    },
    {
      id: "ai-practice-04",
      grade: "9",
      chapter: "Phát triển AI",
      category: "development",
      title: "Đề Vận dụng: Xây dựng hệ thống AI",
      question: "Nếu muốn xây dựng một hệ thống AI hỗ trợ học tập, bạn sẽ làm theo các bước nào?",
      hint: "Xác định bài toán, thu thập dữ liệu, đánh giá, triển khai.",
      answer: "Đầu tiên cần xác định bài toán: AI sẽ giúp học sinh học gì? Sau đó thu thập dữ liệu về bài giảng, câu hỏi, tiến độ học tập và đánh giá. Tiếp theo chọn mô hình phù hợp, huấn luyện và kiểm thử độ chính xác. Cuối cùng triển khai vào ứng dụng, giám sát hiệu quả và cập nhật liên tục.",
      expectedKeywords: ["xác định bài toán", "thu thập dữ liệu", "mô hình", "kiểm thử", "triển khai"],
      sourceLesson: "Quy trình xây dựng hệ thống AI"
    },
    {
      id: "ai-practice-05",
      grade: "9",
      chapter: "Ứng dụng AI",
      category: "applications",
      title: "Đề Nhận biết: AI trong cuộc sống",
      question: "Nêu 3 lĩnh vực đời sống mà AI đang được ứng dụng và giải thích cách AI hỗ trợ ở đó.",
      hint: "Hãy nghĩ đến giáo dục, y tế, giao thông, thương mại điện tử.",
      answer: "AI đang được ứng dụng trong giáo dục để cá nhân hóa lộ trình học, trong y tế để hỗ trợ chẩn đoán hình ảnh, và trong giao thông để nhận diện biển báo hay dự báo lưu lượng. Trong thương mại điện tử, AI còn gợi ý sản phẩm dựa trên lịch sử mua hàng.",
      expectedKeywords: ["giáo dục", "y tế", "giao thông", "thương mại điện tử"],
      sourceLesson: "AI trong cuộc sống và sản xuất"
    },
    {
      id: "ai-practice-06",
      grade: "9",
      chapter: "LLM & Chat",
      category: "llm",
      title: "Đề Vận dụng: Prompt và hiệu quả AI",
      question: "Tại sao một prompt rõ ràng lại giúp AI trả lời tốt hơn? Hãy nêu nguyên lý cơ bản.",
      hint: "Prompt rõ ràng giúp AI hiểu đúng mục tiêu, ngữ cảnh và yêu cầu đầu ra.",
      answer: "Prompt rõ ràng giúp AI hiểu đúng mục tiêu, ngữ cảnh và cách trình bày câu trả lời. Nếu prompt mơ hồ, AI sẽ suy diễn theo nhiều hướng khác nhau và dễ trả lời thiếu chính xác hoặc quá rộng. Việc đưa ra câu hỏi rõ, có giới hạn và ví dụ cụ thể giúp câu trả lời sát với yêu cầu.",
      expectedKeywords: ["prompt rõ ràng", "ngữ cảnh", "câu trả lời", "mục tiêu"],
      sourceLesson: "Prompt engineering và LLM"
    }
  ]
};

