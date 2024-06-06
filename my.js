var url = "demo.xlsx";
const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.responseType = "arraybuffer";
xhr.onload = function(e) {
  const data = new Uint8Array(xhr.response);
  const workbook = XLSX.read(data, { type: "array" });
  const departmentDropdown = document.getElementById("departmentDropdown");
  departmentDropdown.addEventListener("change", function() {
    const selectedDepartment = departmentDropdown.value;
    const url = selectedDepartment; // Construct the URL based on the selected department
    
    xhr.open("GET", url, true); // Re-use xhr for subsequent requests
    xhr.responseType = "arraybuffer";
    xhr.onload = function(e) {
      const data = new Uint8Array(xhr.response);
      const workbook = XLSX.read(data, { type: "array" });

      // Extract the sheet names and populate the month dropdown
      const sheetDropdown = document.getElementById("monthDropdown");
      sheetDropdown.innerHTML = ""; // Clear the dropdown first
      let defaultOption = document.createElement("option");
      defaultOption.text = "Select a sheet";
      defaultOption.value = "";
      sheetDropdown.add(defaultOption);
      workbook.SheetNames.forEach(function(sheetName) {
        const option = document.createElement("option");
        option.value = sheetName;
        option.text = sheetName;
        sheetDropdown.appendChild(option);
      });
     // Extract the department names and populate the dropdown
     const employeeDropdown = document.getElementById("employeeDropdown");
     const monthDropdown = document.getElementById("monthDropdown");
     
     monthDropdown.addEventListener("change", function() {
       const selectedMonth = monthDropdown.value;
       const sheet = workbook.Sheets[selectedMonth];
     
       const employees = new Set();
       for (const cell in sheet) {
         if (cell[0] === 'B') {
             employees.add(sheet[cell].v);
         }
       }
       employeeDropdown.innerHTML = ""; // Clear the dropdown first
       for (const employee of employees) {
         const option = document.createElement("option");
         option.value = employee;
         option.text = employee;
         employeeDropdown.add(option);
       }
     });
     const generatePaySlipBtn = document.getElementById("generatePaySlipBtn");
     generatePaySlipBtn.addEventListener("click", function() {
        const selectedEmployee = employeeDropdown.value;
        const selectedMonth = monthDropdown.value;
        const sheet = workbook.Sheets[selectedMonth];
        let row;
        for (const cell in sheet) {
          if (cell[0] === 'B' && sheet[cell].v === selectedEmployee) {
              row = parseInt(cell.substring(1));
              break;
          }
        }
  const selectedEmployee1 = employeeDropdown.options[employeeDropdown.selectedIndex].text;
  const emp=selectedEmployee1;
  const agp= sheet["F" + row].v;
  const pay = sheet["E" + row].v;
  const dept =sheet["D" + row].v;
  const desg = sheet["C" + row].v;
  const da = sheet["G" + row].v;
  const hra = Math.floor(sheet["H"+ row].v);
  const other1 = sheet["I"+ row].v;
  const gsalary = sheet["J"+ row].v;
  const pt = sheet["O"+ row].v;
  const other2 =sheet["Q" + row].v;
  const tds=sheet["M"+ row].v;
  const nsalary=Math.floor(sheet["S"+ row].v);
  const agp1= sheet["F" + row].v;
  const pay1 = sheet["E" + row].v;
  const dept1 =sheet["D" + row].v;
  const desg1 = sheet["C" + row].v;
  const da1= sheet["G" + row].v;
  const hra1 = sheet["H"+ row].v;
  const other11 = sheet["I"+ row].v;
  const gsalary1 = sheet["J"+ row].v;
  const pt1 = sheet["O"+ row].v;
  const other21 =sheet["Q" + row].v;
  const tds1=sheet["M"+ row].v;
  const nsalary1=Math.floor(sheet["S"+ row].v);
  const sm=monthDropdown.value;
  const sm1=monthDropdown.value;
  const paySlipUrl = "pdf1.html?employee=" + encodeURIComponent(selectedEmployee1) + "&agp=" + agp + "&pay=" + pay + "&dept=" + dept + "&desg=" + desg + "&da=" + da + "&hra=" + hra +"&other1=" + other1 + "&gsalary=" + gsalary + "&pt=" +pt + "&other2=" + other2 + "&tds=" + tds + "&nsalary=" + nsalary + "&sm=" + sm +"&sm1=" +sm1 +"&emp=" +emp+ "&agp1=" + agp1 + "&pay1=" + pay1 + "&dept1=" + dept1 + "&desg1=" + desg1 + "&da1=" + da1 + "&hra1=" + hra1 +"&other11=" + other11 + "&gsalary1=" + gsalary1 + "&pt1=" +pt1 + "&other21=" + other21 + "&tds1=" + tds1 + "&nsalary1=" + nsalary1;
  window.open(paySlipUrl, "_blank");
   // Clear selected department and employee
   const departmentDropdown = document.getElementById("departmentDropdown");
   departmentDropdown.selectedIndex = 0;
   monthDropdown.innerHTML= "";
   employeeDropdown.innerHTML = "";
});  
    };
    xhr.send();
  });
};
xhr.send();
