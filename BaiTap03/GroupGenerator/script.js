function generateGroups() {
  const input = document.getElementById("students").value.trim();

  const groupCount = parseInt(document.getElementById("groupCount").value);

  if (input === "") {
    alert("Vui lòng nhập danh sách sinh viên!");
    return;
  }

  const students = input
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s !== "");

  if (groupCount < 2) {
    alert("Số nhóm phải lớn hơn hoặc bằng 2.");
    return;
  }

  // Xáo trộn ngẫu nhiên (Fisher-Yates)
  for (let i = students.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [students[i], students[j]] = [students[j], students[i]];
  }

  let groups = [];

  for (let i = 0; i < groupCount; i++) {
    groups.push([]);
  }

  students.forEach((student, index) => {
    groups[index % groupCount].push(student);
  });

  let html = "<h2>Kết quả chia nhóm</h2>";

  groups.forEach((group, index) => {
    html += `
        <div class="group">
            <h3>Nhóm ${index + 1}</h3>
            <ul>
                ${group.map((member) => `<li>${member}</li>`).join("")}
            </ul>
        </div>
        `;
  });

  document.getElementById("result").innerHTML = html;
}

function resetForm() {
  document.getElementById("students").value = "";

  document.getElementById("groupCount").value = 3;

  document.getElementById("result").innerHTML = "";
}
