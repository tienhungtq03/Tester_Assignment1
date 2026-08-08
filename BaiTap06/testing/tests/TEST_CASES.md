# TEST CASES - WEBSITE QUẢN LÝ SINH VIÊN

## TC01 - Thêm sinh viên với dữ liệu hợp lệ

### Mục tiêu

Kiểm tra chức năng thêm một sinh viên khi người dùng nhập đầy đủ dữ liệu hợp lệ.

### Loại kiểm thử

Normal Case

### Tiền điều kiện

- Website đang chạy.
- Người dùng đang ở trang Quản lý Sinh viên.
- Danh sách sinh viên có thể thao tác bình thường.

### Dữ liệu kiểm thử

- Mã sinh viên: SV001
- Họ tên: Nguyễn Văn An
- Email: nguyenvanan@example.com

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Nhập mã sinh viên `SV001`.
3. Nhập họ tên `Nguyễn Văn An`.
4. Nhập email `nguyenvanan@example.com`.
5. Nhấn nút `Thêm`.

### Kết quả mong đợi

Sinh viên mới được thêm vào danh sách và hiển thị đầy đủ thông tin.

### Kết quả thực tế

Sinh viên SV001 - Nguyễn Văn An được thêm thành công và hiển thị trong danh sách.

### Kết quả

## PASS

## TC02 - Thêm sinh viên khi bỏ trống thông tin

### Mục tiêu

Kiểm tra hệ thống xử lý như thế nào khi người dùng cố gắng thêm sinh viên nhưng bỏ trống thông tin bắt buộc.

### Loại kiểm thử

Error Handling

### Tiền điều kiện

- Website đang chạy.
- Người dùng đang ở trang Quản lý Sinh viên.

### Dữ liệu kiểm thử

- Mã sinh viên: để trống
- Họ tên: để trống
- Email: để trống

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Không nhập thông tin vào các trường dữ liệu.
3. Nhấn nút `Thêm`.

### Kết quả mong đợi

Hệ thống không tạo sinh viên có thông tin trống và phải xử lý dữ liệu không hợp lệ theo thiết kế của website.

### Kết quả thực tế

Hệ thống không cho phép tạo sinh viên khi thông tin bắt buộc bị bỏ trống.

### Kết quả

## PASS

## TC03 - Sửa thông tin sinh viên

### Mục tiêu

Kiểm tra chức năng chỉnh sửa thông tin của một sinh viên đã tồn tại.

### Loại kiểm thử

Normal Case

### Tiền điều kiện

- Website đang chạy.
- Đã có ít nhất một sinh viên trong danh sách.

### Dữ liệu kiểm thử

- Sinh viên cần sửa: SV001
- Họ tên mới: Nguyễn Văn Bình
- Email mới: nguyenvanbinh@example.com

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Tìm sinh viên có mã `SV001`.
3. Nhấn nút `Sửa`.
4. Thay đổi họ tên thành `Nguyễn Văn Bình`.
5. Thay đổi email thành `nguyenvanbinh@example.com`.
6. Lưu thông tin.

### Kết quả mong đợi

Thông tin sinh viên được cập nhật thành công và danh sách hiển thị thông tin mới.

### Kết quả thực tế

Thông tin sinh viên SV001 được cập nhật thành công và danh sách hiển thị thông tin mới.

### Kết quả

## PASS

## TC04 - Xóa sinh viên

### Mục tiêu

Kiểm tra chức năng xóa một sinh viên đã tồn tại trong danh sách.

### Loại kiểm thử

Normal Case

### Tiền điều kiện

- Website đang chạy.
- Danh sách có ít nhất một sinh viên.
- Sinh viên cần xóa đang tồn tại.

### Dữ liệu kiểm thử

- Sinh viên cần xóa: SV001

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Tìm sinh viên có mã `SV001`.
3. Nhấn nút `Xóa`.
4. Xác nhận thao tác nếu hệ thống yêu cầu.

### Kết quả mong đợi

Sinh viên SV001 được xóa khỏi danh sách và không còn hiển thị.

### Kết quả thực tế

Sinh viên SV001 được xóa thành công và không còn hiển thị trong danh sách.

### Kết quả

## PASS

## TC05 - Tìm kiếm sinh viên tồn tại

### Mục tiêu

Kiểm tra chức năng tìm kiếm khi nhập thông tin của một sinh viên đang tồn tại trong danh sách.

### Loại kiểm thử

Normal Case

### Tiền điều kiện

- Website đang chạy.
- Danh sách có sinh viên để tìm kiếm.

### Dữ liệu kiểm thử

- Từ khóa tìm kiếm: Nguyễn Văn An

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Nhập `Nguyễn Văn An` vào ô tìm kiếm.
3. Quan sát danh sách kết quả.

### Kết quả mong đợi

Hệ thống hiển thị sinh viên có thông tin phù hợp với từ khóa tìm kiếm.

### Kết quả thực tế

Hệ thống tìm kiếm và hiển thị đúng sinh viên phù hợp với từ khóa đã nhập.

### Kết quả

## PASS

## TC06 - Tìm kiếm sinh viên không tồn tại

### Mục tiêu

Kiểm tra cách hệ thống xử lý khi người dùng tìm kiếm một sinh viên không tồn tại trong danh sách.

### Loại kiểm thử

Edge Case

### Tiền điều kiện

- Website đang chạy.
- Danh sách sinh viên có dữ liệu.

### Dữ liệu kiểm thử

- Từ khóa tìm kiếm: `XYZ999`

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Nhập `XYZ999` vào ô tìm kiếm.
3. Quan sát kết quả hiển thị.

### Kết quả mong đợi

Hệ thống không hiển thị sinh viên không phù hợp với từ khóa và xử lý trường hợp không có kết quả theo thiết kế của website.

### Kết quả thực tế

Hệ thống không hiển thị sinh viên khi từ khóa XYZ999 không tồn tại trong danh sách.

### Kết quả

## PASS

## TC07 - Kiểm tra dữ liệu sau khi tải lại trang

### Mục tiêu

Kiểm tra dữ liệu sinh viên có được lưu lại sau khi người dùng tải lại trang hay không.

### Loại kiểm thử

Normal Case

### Tiền điều kiện

- Website đang chạy.
- Đã có ít nhất một sinh viên trong danh sách.
- Website sử dụng LocalStorage để lưu dữ liệu.

### Dữ liệu kiểm thử

- Sinh viên: sử dụng một sinh viên đang có trong danh sách.

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Kiểm tra một sinh viên đang tồn tại trong danh sách.
3. Nhấn F5 để tải lại trang.
4. Quan sát lại danh sách sinh viên.

### Kết quả mong đợi

Dữ liệu sinh viên vẫn còn trong danh sách sau khi trang được tải lại.

### Kết quả thực tế

Sau khi tải lại trang bằng phím F5, dữ liệu sinh viên vẫn được giữ lại và hiển thị trong danh sách.

### Kết quả

## PASS

---

## TC08 - Kiểm tra giới hạn số điện thoại

### Mục tiêu

Kiểm tra hệ thống khi người dùng nhập số điện thoại ở giới hạn cho phép.

### Loại kiểm thử

Boundary Case

### Tiền điều kiện

- Website đang chạy.
- Người dùng đang ở chức năng thêm sinh viên.

### Quy tắc kiểm tra

Số điện thoại phải gồm đúng 10 chữ số.

### Dữ liệu kiểm thử

- Mã sinh viên: SV008
- Họ tên: Nguyễn Văn Tám
- Ngày sinh: 2000-01-01
- Giới tính: Nam
- Lớp: CNTT01
- Email: nguyenvantam@example.com
- Số điện thoại: 0123456789

### Các bước thực hiện

1. Mở chức năng thêm sinh viên.
2. Nhập đầy đủ thông tin sinh viên.
3. Nhập số điện thoại gồm đúng 10 chữ số: `0123456789`.
4. Nhấn nút `Thêm sinh viên`.
5. Quan sát kết quả.

### Kết quả mong đợi

Hệ thống chấp nhận số điện thoại gồm đúng 10 chữ số và cho phép thêm sinh viên.

### Kết quả thực tế

Hệ thống chấp nhận số điện thoại gồm đúng 10 chữ số và thêm sinh viên thành công.

### Kết quả

## PASS

## TC09 - Nhập số điện thoại không hợp lệ

### Mục tiêu

Kiểm tra hệ thống xử lý khi người dùng nhập số điện thoại không đúng định dạng.

### Loại kiểm thử

Error Handling

### Tiền điều kiện

- Website đang chạy.
- Người dùng đang ở chức năng thêm sinh viên.

### Dữ liệu kiểm thử

- Mã sinh viên: SV009
- Họ tên: Nguyễn Văn Chín
- Ngày sinh: 2000-01-01
- Giới tính: Nam
- Lớp: CNTT01
- Email: nguyenvanchin@example.com
- Số điện thoại: 012345678

### Các bước thực hiện

1. Mở chức năng thêm sinh viên.
2. Nhập đầy đủ thông tin sinh viên.
3. Nhập số điện thoại gồm 9 chữ số: `012345678`.
4. Nhấn nút `Thêm sinh viên`.
5. Quan sát thông báo của hệ thống.

### Kết quả mong đợi

Hệ thống từ chối dữ liệu và hiển thị thông báo yêu cầu số điện thoại phải gồm đúng 10 chữ số.

### Kết quả thực tế

Sau khi sửa validation, hệ thống từ chối số điện thoại gồm 9 chữ số và hiển thị thông báo yêu cầu số điện thoại phải gồm đúng 10 chữ số. Sinh viên không được thêm vào danh sách.

### Kết quả

## PASS

## TC10 - Thêm sinh viên bị trùng mã sinh viên

### Mục tiêu

Kiểm tra hệ thống xử lý khi người dùng nhập mã sinh viên đã tồn tại trong danh sách.

### Loại kiểm thử

Error Handling

### Tiền điều kiện

- Website đang chạy.
- Danh sách đã có một sinh viên.
- Mã sinh viên của sinh viên đó đã tồn tại.

### Dữ liệu kiểm thử

- Mã sinh viên: sử dụng lại một mã đã tồn tại, ví dụ `SV002`
- Họ tên: Nguyễn Văn Trùng
- Ngày sinh: 2000-01-01
- Giới tính: Nam
- Lớp: CNTT01
- Email: nguyenvantrung@example.com
- Số điện thoại: 0987654321

### Các bước thực hiện

1. Mở website Quản lý Sinh viên.
2. Xác định một mã sinh viên đang tồn tại trong danh sách.
3. Nhập lại chính mã sinh viên đó vào form.
4. Nhập các thông tin khác.
5. Nhấn nút `Thêm sinh viên`.
6. Quan sát thông báo của hệ thống.

### Kết quả mong đợi

Hệ thống không cho phép thêm sinh viên có mã đã tồn tại và hiển thị thông báo:

"Mã sinh viên đã tồn tại."

### Kết quả thực tế

Hệ thống phát hiện mã sinh viên đã tồn tại, hiển thị thông báo "Mã sinh viên đã tồn tại." và không thêm sinh viên mới.

### Kết quả

PASS
