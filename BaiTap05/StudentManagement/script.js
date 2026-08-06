// ==============================
// Student Management System
// ==============================

// Danh sách sinh viên
let students = JSON.parse(localStorage.getItem("students")) || [];

// Chỉ số sinh viên đang sửa
let editIndex = -1;

// ==============================
// Lấy phần tử
// ==============================

const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const searchInput = document.getElementById("search");

const studentId = document.getElementById("studentId");
const fullName = document.getElementById("fullName");
const birthday = document.getElementById("birthday");
const gender = document.getElementById("gender");
const className = document.getElementById("className");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");

// ==============================
// Hiển thị danh sách
// ==============================

function renderStudents(data = students) {
  studentTable.innerHTML = "";

  if (data.length === 0) {
    studentTable.innerHTML = `
            <tr>
                <td colspan="8" class="empty">
                    Không có sinh viên nào
                </td>
            </tr>
        `;

    return;
  }

  data.forEach((student, index) => {
    studentTable.innerHTML += `
        <tr>

            <td>${student.studentId}</td>

            <td>${student.fullName}</td>

            <td>${student.birthday}</td>

            <td>${student.gender}</td>

            <td>${student.className}</td>

            <td>${student.email}</td>

            <td>${student.phone}</td>

            <td>

                <button
                    class="action-btn edit"
                    onclick="editStudent(${index})"
                >
                    Sửa
                </button>

                <button
                    class="action-btn delete"
                    onclick="deleteStudent(${index})"
                >
                    Xóa
                </button>

            </td>

        </tr>
        `;
  });
}

// ==============================
// Lưu LocalStorage
// ==============================

function saveLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

// ==============================
// Làm sạch Form
// ==============================

function clearForm() {
  studentForm.reset();

  editIndex = -1;

  saveBtn.textContent = "Thêm sinh viên";
}

// ==============================
// Thêm / Cập nhật
// ==============================

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Kiểm tra dữ liệu

  if (
    studentId.value.trim() === "" ||
    fullName.value.trim() === "" ||
    birthday.value === "" ||
    className.value.trim() === "" ||
    email.value.trim() === "" ||
    phone.value.trim() === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin.");

    return;
  }

  const student = {
    studentId: studentId.value.trim(),

    fullName: fullName.value.trim(),

    birthday: birthday.value,

    gender: gender.value,

    className: className.value.trim(),

    email: email.value.trim(),

    phone: phone.value.trim(),
  };

  // Thêm mới

  if (editIndex === -1) {
    // Kiểm tra trùng mã

    const existed = students.find(
      (item) => item.studentId === student.studentId,
    );

    if (existed) {
      alert("Mã sinh viên đã tồn tại.");

      return;
    }

    students.push(student);

    alert("Thêm sinh viên thành công.");
  }

  // Cập nhật
  else {
    students[editIndex] = student;

    alert("Cập nhật thành công.");
  }

  saveLocalStorage();

  renderStudents();

  clearForm();
});

// ==============================
// Khởi động
// ==============================

renderStudents();
// ==============================
// Sửa sinh viên
// ==============================

function editStudent(index) {
  editIndex = index;

  const student = students[index];

  studentId.value = student.studentId;
  fullName.value = student.fullName;
  birthday.value = student.birthday;
  gender.value = student.gender;
  className.value = student.className;
  email.value = student.email;
  phone.value = student.phone;

  // Không cho sửa mã sinh viên
  studentId.disabled = true;

  saveBtn.textContent = "Cập nhật sinh viên";

  // Cuộn lên form
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ==============================
// Xóa sinh viên
// ==============================

function deleteStudent(index) {
  const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sinh viên này?");

  if (!confirmDelete) {
    return;
  }

  students.splice(index, 1);

  saveLocalStorage();

  renderStudents();

  clearForm();

  alert("Đã xóa sinh viên.");
}

// ==============================
// Tìm kiếm sinh viên
// ==============================

searchInput.addEventListener("keyup", function () {
  const keyword = searchInput.value.toLowerCase().trim();

  const result = students.filter(
    (student) =>
      student.studentId.toLowerCase().includes(keyword) ||
      student.fullName.toLowerCase().includes(keyword) ||
      student.className.toLowerCase().includes(keyword),
  );

  renderStudents(result);
});

// ==============================
// Nút làm mới Form
// ==============================

resetBtn.addEventListener("click", function () {
  clearForm();

  studentId.disabled = false;
});

// ==============================
// Ghi đè clearForm
// ==============================

function clearForm() {
  studentForm.reset();

  editIndex = -1;

  studentId.disabled = false;

  saveBtn.textContent = "Thêm sinh viên";
}
// ==============================
// Validation Email
// ==============================

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

// ==============================
// Validation Số điện thoại
// ==============================

function isValidPhone(phone) {
  const regex = /^[0-9]{10}$/;

  return regex.test(phone);
}

// ==============================
// Kiểm tra dữ liệu nhập
// ==============================

function validateForm() {
  if (studentId.value.trim() === "") {
    alert("Vui lòng nhập mã sinh viên.");

    studentId.focus();

    return false;
  }

  if (fullName.value.trim() === "") {
    alert("Vui lòng nhập họ tên.");

    fullName.focus();

    return false;
  }

  if (birthday.value === "") {
    alert("Vui lòng chọn ngày sinh.");

    birthday.focus();

    return false;
  }

  if (className.value.trim() === "") {
    alert("Vui lòng nhập lớp.");

    className.focus();

    return false;
  }

  if (!isValidEmail(email.value.trim())) {
    alert("Email không hợp lệ.");

    email.focus();

    return false;
  }

  if (!isValidPhone(phone.value.trim())) {
    alert("Số điện thoại phải gồm đúng 10 chữ số.");

    phone.focus();

    return false;
  }

  return true;
}

// ==============================
// Gắn validation vào form
// ==============================

studentForm.addEventListener("submit", function (e) {
  if (!validateForm()) {
    e.preventDefault();

    return;
  }
});

// ==============================
// Sắp xếp danh sách theo mã SV
// ==============================

function sortStudents() {
  students.sort((a, b) => a.studentId.localeCompare(b.studentId));
}

// ==============================
// Khởi tạo dữ liệu
// ==============================

sortStudents();

renderStudents();

// ==============================
// Lưu khi đóng trang
// ==============================

window.addEventListener("beforeunload", function () {
  saveLocalStorage();
});

// ==============================
// Kết thúc chương trình
// ==============================

console.log("Student Management System Ready.");
