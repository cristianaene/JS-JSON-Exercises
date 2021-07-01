// parse json string into a js variable: this is an array of objects

let employeeList = JSON.parse(employees);
console.table(employeeList);

// loop through the array
for (let i = 0; i < employeeList.length; i++) {
    // for each object, create the html for a table row 
    let row = `
    <tr>
        <td> ${employeeList[i].id}</td>
        <td>${employeeList[i].firstName}</td>
        <td>${employeeList[i].lastName}</td>
        <td>${employeeList[i].email}</td>
        <td>${employeeList[i].job}</td>
        <td>${employeeList[i].salary}</td>
    </tr>
    `;

    // write it to the inner html of the table
    document.getElementById("employeelist").innerHTML += row;
}





