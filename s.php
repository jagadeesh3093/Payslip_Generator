<!DOCTYPE html>
<html>
  <head>
    <title>Employee Salary</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Employee Salary</h1>
    <div class="container" d-flex:justify-content-center>
      <div class="row">
        <div class="dropdown">
          <label for="department">Select Department:</label>
          <br />
          <?php
            $files = glob('*.xlsx');
            echo '<select id="departmentDropdown">';
            echo '<option value="">Select a department</option>';
            foreach ($files as $file) {
              $filename = basename($file);
              if ($filename !== 'demo.xlsx') {
                echo '<option value="' . $filename . '">' . $filename . '</option>';
              }
            }
            echo '</select>';
          ?>
          
          <label for="monthDropdown">Select Month:</label>
            <br />
            <select id="monthDropdown">
                <option value="">Select a Month</option>
              </select>
              <label for="employee">Select Employee:</label>
          <br />
          <select id="employeeDropdown">
            <option value="">Select an employee</option>
          </select>  
        <button id="generatePaySlipBtn">Generate Pay Slip</button>
        </div>
      </div>
      </div>
      
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.6/xlsx.full.min.js"></script>
  <script src="my.js"></script>
  </body>
</html>
