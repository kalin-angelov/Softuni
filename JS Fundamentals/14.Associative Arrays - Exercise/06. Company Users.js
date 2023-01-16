function companyUsers(data) {

    let company = new Map()
    for (let info of data) {
        let [name, id] = info.split(' -> ');
        if (!company.has(name)) {
            company.set(name, id);
        } else {
            if (!company.get(name).includes(id)) {
                let nextMember = company.get(name) + ', ' + id;
                company.set(name, nextMember); 
            }
            
        }
    }
    let entries = Array.from(company);
    let sortCompany = entries.sort(([nameA, valueA], [nameB, valueB]) => {
        return nameA.localeCompare(nameB);
    })
    for (let [name, idNum] of sortCompany) {
        let id = idNum.split(', ');
        console.log(name);
        for (let el of id ) {
            console.log(`-- ${el}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])
