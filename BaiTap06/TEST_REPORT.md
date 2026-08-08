# TEST REPORT - WEBSITE QUẢN LÝ SINH VIÊN

## 1. Thông tin chung

### Tên dự án

Website Quản lý Sinh viên

### Mục tiêu kiểm thử

Kiểm tra các chức năng chính của Website Quản lý Sinh viên, phát hiện lỗi trong quá trình sử dụng và kiểm tra lại sau khi sửa lỗi.

### Phạm vi kiểm thử

Các chức năng được kiểm thử:

- Thêm sinh viên
- Sửa sinh viên
- Xóa sinh viên
- Tìm kiếm sinh viên
- Lưu dữ liệu bằng LocalStorage
- Kiểm tra dữ liệu đầu vào
- Kiểm tra mã sinh viên bị trùng
- Kiểm tra số điện thoại không hợp lệ

---

## 2. Môi trường kiểm thử

### Công nghệ

- HTML
- CSS
- JavaScript
- LocalStorage

### Công cụ

- Visual Studio Code
- Trình duyệt Google Chrome

### Phương pháp

Thực hiện kiểm thử trực tiếp trên website theo các Test Case đã xây dựng.

---

## 3. Tổng hợp kết quả kiểm thử

| Test Case | Nội dung                              | Kết quả |
| --------- | ------------------------------------- | ------- |
| TC01      | Thêm sinh viên hợp lệ                 | PASS    |
| TC02      | Bỏ trống thông tin                    | PASS    |
| TC03      | Sửa sinh viên                         | PASS    |
| TC04      | Xóa sinh viên                         | PASS    |
| TC05      | Tìm kiếm sinh viên tồn tại            | PASS    |
| TC06      | Tìm kiếm sinh viên không tồn tại      | PASS    |
| TC07      | Kiểm tra dữ liệu sau khi F5           | PASS    |
| TC08      | Kiểm tra số điện thoại đúng 10 chữ số | PASS    |
| TC09      | Kiểm tra số điện thoại sai định dạng  | PASS    |
| TC10      | Kiểm tra mã sinh viên bị trùng        | PASS    |

### Tổng kết

- Tổng số Test Case: 10
- PASS cuối cùng: 10
- FAIL cuối cùng: 0
- Tỷ lệ PASS cuối cùng: 100%

---

## 4. Chi tiết kiểm thử

### TC01 - Thêm sinh viên hợp lệ

Kiểm tra khả năng thêm một sinh viên với đầy đủ thông tin hợp lệ.

Kết quả: PASS

Minh chứng:

`evidence/TC01_add_student_pass.png`

---

### TC02 - Bỏ trống thông tin

Kiểm tra hệ thống khi người dùng không nhập đầy đủ thông tin bắt buộc.

Kết quả: PASS

Minh chứng:

`evidence/TC02_empty_pass.png`

---

### TC03 - Sửa sinh viên

Kiểm tra khả năng chỉnh sửa thông tin của sinh viên đã tồn tại.

Kết quả: PASS

Minh chứng:

`evidence/TC03_edit_student_pass.png`

---

### TC04 - Xóa sinh viên

Kiểm tra khả năng xóa sinh viên khỏi danh sách.

Kết quả: PASS

Minh chứng:

`evidence/TC04_delete_student_pass.png`

---

### TC05 - Tìm kiếm sinh viên tồn tại

Kiểm tra khả năng tìm kiếm sinh viên theo mã sinh viên, họ tên hoặc lớp khi dữ liệu tồn tại.

Kết quả: PASS

Minh chứng:

`evidence/TC05_search_existing_pass.png`

---

### TC06 - Tìm kiếm sinh viên không tồn tại

Kiểm tra hệ thống khi từ khóa tìm kiếm không có dữ liệu phù hợp.

Kết quả: PASS

Minh chứng:

`evidence/TC06_search_not_found_pass.png`

---

### TC07 - Kiểm tra LocalStorage sau khi F5

Kiểm tra dữ liệu sinh viên có còn tồn tại sau khi tải lại trang hay không.

Kết quả: PASS

Minh chứng:

`evidence/TC07_localstorage_after_refresh_pass.png`

---

### TC08 - Kiểm tra số điện thoại đúng 10 chữ số

Kiểm tra trường số điện thoại với dữ liệu gồm đúng 10 chữ số.

Kết quả: PASS

Minh chứng:

`evidence/TC08_phone_boundary_pass.png`

---

### TC09 - Kiểm tra số điện thoại sai định dạng

Kiểm tra hệ thống khi người dùng nhập số điện thoại không đủ 10 chữ số.

#### Kết quả lần đầu

Test Case ban đầu bị FAIL vì hệ thống vẫn cho phép thêm sinh viên khi số điện thoại không đúng định dạng.

Minh chứng:

`evidence/TC09_invalid_phone_fail.png`

#### Phân tích và sửa lỗi

Kiểm tra lại code và bổ sung validation cho số điện thoại.

Hệ thống sử dụng hàm kiểm tra định dạng số điện thoại để yêu cầu số điện thoại phải gồm đúng 10 chữ số.

Sau khi sửa code, thực hiện test lại.

#### Kết quả sau khi sửa

Hệ thống hiển thị thông báo lỗi và không cho phép thêm sinh viên khi số điện thoại không hợp lệ.

Kết quả: PASS

Minh chứng:

`evidence/TC09_invalid_phone_fixed_pass.png`

---

### TC10 - Kiểm tra mã sinh viên bị trùng

Kiểm tra hệ thống khi người dùng nhập mã sinh viên đã tồn tại.

Hệ thống kiểm tra mã sinh viên trước khi thêm dữ liệu mới.

Nếu mã sinh viên đã tồn tại, hệ thống hiển thị thông báo:

"Mã sinh viên đã tồn tại."

và không thêm sinh viên mới.

Kết quả: PASS

Minh chứng:

`evidence/TC10_duplicate_student_id_pass.png`

---

## 5. Lỗi đã phát hiện và cách xử lý

### Bug: Số điện thoại không hợp lệ vẫn được thêm

#### Mô tả

Khi nhập số điện thoại không đúng định dạng, hệ thống ban đầu vẫn cho phép thêm sinh viên.

#### Test Case phát hiện

TC09

#### Kết quả ban đầu

FAIL

#### Nguyên nhân

Phần kiểm tra dữ liệu đầu vào chưa được tích hợp đúng vào luồng xử lý khi submit form.

#### Cách xử lý

Bổ sung và tích hợp hàm `validateForm()` vào quá trình submit form.

Hệ thống kiểm tra:

- Mã sinh viên
- Họ tên
- Ngày sinh
- Lớp
- Email
- Số điện thoại

Đối với số điện thoại, hệ thống yêu cầu đúng 10 chữ số.

#### Kết quả sau khi sửa

Thực hiện test lại TC09 và kết quả là PASS.

---

## 6. Đánh giá kết quả

Sau khi thực hiện kiểm thử, các chức năng chính của Website Quản lý Sinh viên đều hoạt động theo yêu cầu kiểm thử.

10 Test Case đã được thực hiện.

Kết quả cuối cùng:

- 10 Test Case PASS
- 0 Test Case FAIL
- 1 lỗi được phát hiện trong quá trình kiểm thử
- Lỗi đã được sửa và kiểm thử lại thành công

---

## 7. Kết luận

Quá trình kiểm thử cho thấy Website Quản lý Sinh viên đáp ứng các chức năng chính được kiểm tra.

Quá trình thực hiện không chỉ dừng ở việc chạy Test Case mà còn thực hiện quy trình:

AI hỗ trợ phân tích → Tạo Test Case → Chạy Test → Phát hiện lỗi → Phân tích nguyên nhân → Sửa code → Test lại → PASS.

Qua bài thực hành, người thực hiện hiểu được cách sử dụng AI để hỗ trợ quá trình kiểm thử nhưng vẫn phải trực tiếp kiểm tra kết quả, xác định nguyên nhân lỗi và quyết định cách sửa phù hợp.
