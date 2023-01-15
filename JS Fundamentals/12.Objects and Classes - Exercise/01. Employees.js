function employees(arrayWithEmployees) {

    let employee = {};
    for (let el of arrayWithEmployees) {
        let employeeNumber = el.length;
        employee.name = el;
        console.log(`Name: ${employee.name} -- Personal Number: ${employeeNumber}`);
    }

}
employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])
