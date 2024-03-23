const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collects the employee data
const collectEmployees = function() {
  
  let employeesArray = []
  let continueAdding = true

  while (continueAdding) {
    let firstName = ''
    let lastName = ''
    let salary = ''

    while (!firstName || !isNaN(firstName)) {
      firstName = prompt('Enter first name:')
    }

    while (!lastName || !isNaN(lastName)) {
      lastName = prompt('Enter last name:')
    }

    while (!salary || isNaN(salary)) {
      salary = prompt('Enter salary:')
    }

    const employeeData = { 
      firstName: firstName, 
      lastName: lastName, 
      salary: Number(salary)
    }

    employeesArray.push(employeeData)
  
    let continueInput = window.confirm('Do you want add another Employee?')

    if (!continueInput) {
      continueAdding = false
    }

  }
  return employeesArray
}

// Displays the average Salary
const displayAverageSalary = function(employeesArray) {
  const salaryAvg = employeesArray.reduce((x,y) => (x+y.salary), 0)/employeesArray.length

  console.log('The average employee salary is '+ salaryAvg)
}

// Selects a random employee
const getRandomEmployee = function(employeesArray) {


const randomIndex= Math.floor(Math.random() * employeesArray.length);

const randomEmployee = employeesArray[randomIndex]

console.log(`Our random drawing winner is: ${randomEmployee.firstName} ${randomEmployee.lastName}`)
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
