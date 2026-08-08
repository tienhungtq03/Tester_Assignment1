# TEST PLAN - WEBSITE QUẢN LÝ SINH VIÊN

## 1. Mục tiêu kiểm thử

Kiểm thử website Quản lý Sinh viên nhằm xác định các chức năng hoạt động đúng theo yêu cầu và phát hiện các lỗi có thể xảy ra trong quá trình sử dụng.

## 2. Phạm vi kiểm thử

Các chức năng được kiểm thử gồm:

- Thêm sinh viên
- Hiển thị danh sách sinh viên
- Sửa thông tin sinh viên
- Xóa sinh viên
- Tìm kiếm sinh viên
- Lưu và khôi phục dữ liệu bằng LocalStorage

## 3. Loại kiểm thử

Bài kiểm thử bao gồm:

- Kiểm thử chức năng thông thường
- Boundary Case
- Edge Case
- Error Handling
- Kiểm tra dữ liệu sau khi tải lại trang

## 4. Môi trường kiểm thử

- Trình duyệt: Google Chrome hoặc Cốc Cốc
- Hệ điều hành: Windows
- Công nghệ: HTML, CSS, JavaScript
- Lưu trữ dữ liệu: LocalStorage
- Không sử dụng cơ sở dữ liệu bên ngoài

## 5. Phương pháp kiểm thử

Quy trình kiểm thử:

Phân tích chức năng
→ Tạo Test Case
→ Chạy Test
→ Ghi nhận kết quả
→ Phát hiện lỗi
→ Sửa lỗi
→ Test lại
→ Đánh giá Pass/Fail

## 6. Tiêu chí Pass/Fail

### Pass

Test Case được đánh giá Pass khi kết quả thực tế giống với kết quả mong đợi.

### Fail

Test Case được đánh giá Fail khi kết quả thực tế khác với kết quả mong đợi hoặc chức năng không hoạt động đúng.

## 7. Minh chứng

Kết quả kiểm thử được lưu trong thư mục `evidence`, bao gồm ảnh chụp màn hình quá trình kiểm thử và kết quả Pass/Fail.
