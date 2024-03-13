let Employees = [];
let totalWorkingHours = 0;

document.getElementById("btn-add").addEventListener('click', function() {
    let EmployeeID = document.getElementById("txtEmployeeID").value.trim();
    let EmployeeName = document.getElementById("txtEmployeeName").value.trim();
    let WorkingHours = parseInt(document.getElementById("txtWorkingHours").value.trim());

    if(EmployeeID === "" || EmployeeName === "" || isNaN(WorkingHours) || WorkingHours <= 0) {
        alert("Please fill out all fields correctly.");
        return;
    }

    Employees.push([EmployeeID, EmployeeName, WorkingHours]);
    totalWorkingHours += WorkingHours;
    DrawList();
});

function remove(index) {
    totalWorkingHours -= Employees[index][2];
    Employees.splice(index, 1);
    DrawList();
}

function DrawList() {
    let List = "";

    for(let x = 0; x < Employees.length; x++)
    List += "<div class='row mt-1'><div class='col'>"+ Employees[x][0] + "</div><div class='col'>"+ Employees[x][1] + "</div><div class='col'>"+ Employees[x][2] + " hours</div><div class='col'><button class='btn btn-danger' onclick='remove("+x+")'>Remove</button></div></div>";

    document.getElementById("ul-list").innerHTML = List;
    document.getElementById("total-working-hours").innerText = "" + totalWorkingHours;
}
