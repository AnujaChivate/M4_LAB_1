"use strict";

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const addEmployeeForm = document.getElementById("addForm");
const employeeTable = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
const employeeCount = document.getElementById("empCount");

// ADD EMPLOYEE
addEmployeeForm.addEventListener("submit", (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const idInput = addEmployeeForm.elements["id"].value;
    const nameInput = addEmployeeForm.elements["name"].value;
    const extensionInput = addEmployeeForm.elements["extension"].value;
    const emailInput = addEmployeeForm.elements["email"].value;
    const departmentInput = addEmployeeForm.elements["department"].value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExtension = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDepartment = row.insertCell(4);
    let cellActions = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(idInput));
    cellName.appendChild(document.createTextNode(nameInput));
    cellExtension.appendChild(document.createTextNode(extensionInput));
    cellEmail.appendChild(document.createTextNode(emailInput));
    cellDepartment.appendChild(document.createTextNode(departmentInput));

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger");

    deleteButton.innerText = "X";

    // DELETE EMPLOYEE CLICK EVENT HANDLER
    deleteButton.addEventListener("click", deleteEmployee);

    cellActions.appendChild(deleteButton);

    // RESET THE FORM
    addEmployeeForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    addEmployeeForm.elements["id"].focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    updateEmployeeCount();
});

// DELETE EMPLOYEE
function deleteEmployee(e) {
    // GET SELECTED ROW
    const row = e.target.parentElement.parentElement;
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeTable.deleteRow(row.rowIndex);
        count--;
        updateEmployeeCount();
    }
}

// UPDATE EMPLOYEE COUNT
function updateEmployeeCount() {
    if (count > 0) {
        employeeCount.innerText = `(${count})`;
    } else {
        employeeCount.innerText = "";
    }
}
