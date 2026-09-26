# Toán Lý Hóa

Website tra cứu phản ứng hóa học vô cơ dành cho học sinh THCS/THPT.

## Tính năng

- Tra cứu phản ứng theo chất phản ứng
- Tra cứu ngược theo sản phẩm
- Lọc theo cấp lớp (8-9, 10-12, nâng cao)
- Bảng tuần hoàn nguyên tố
- Dãy hoạt động hóa học
- Hỗ trợ các phản ứng phổ biến và suy luận theo ma trận hóa học

## Cách mở trên GitHub Pages

1. Vào GitHub repository: https://github.com/uandrb/toanlyhoa
2. Chọn tab Settings
3. Vào mục Pages
4. Chọn:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
5. Lưu lại
6. Sau vài phút, trang sẽ có link dạng:
   - https://uandrb.github.io/toanlyhoa/

> Vì file `index.html` nằm ở thư mục gốc, GitHub Pages sẽ tự render trang chính khi repo được deploy.

## Chạy local

```bash
python3 -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000/
```

## Nội dung chính

- `index.html` — giao diện chính
- `styles.css` — giao diện và thiết kế
- `script.js` — logic tra cứu phản ứng, matrix suy luận, bảng tuần hoàn
- `periodic-data.js` — dữ liệu nguyên tố
