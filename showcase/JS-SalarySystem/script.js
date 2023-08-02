const salaryForm = document.getElementById("salaryForm");
const salaryTableBody = document.querySelector("#salaryTable tbody");

salaryForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const employeeNameInput = document.getElementById("employeeName");
  const salaryAmountInput = document.getElementById("salaryAmount");

  const employeeName = employeeNameInput.value;
  const salaryAmount = salaryAmountInput.value;

  addEmployeeToTable(employeeName, salaryAmount);

  employeeNameInput.value = "";
  salaryAmountInput.value = "";
});

function addEmployeeToTable(name, salary) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${salary}</td>
  `;
  salaryTableBody.appendChild(newRow);
}
function exportToExcel() {
  const table = document.getElementById("salaryTable");
  const rows = table.getElementsByTagName("tr");
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.table_to_sheet(table);
  XLSX.utils.book_append_sheet(workbook, worksheet, "SalaryData");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  saveExcelFile(excelBuffer, "SalaryData.xlsx");
}

function saveExcelFile(buffer, filename) {
  const blob = new Blob([buffer], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const exportBtn = document.getElementById("exportBtn");
exportBtn.addEventListener("click", exportToExcel);
