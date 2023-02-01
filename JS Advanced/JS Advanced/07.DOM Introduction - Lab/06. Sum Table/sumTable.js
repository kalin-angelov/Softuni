function sumTable() {

    let row = document.querySelectorAll("tbody tr");
    let sum = 0;
    for (let i = 1; i < row.length; i++) {
        let cols = row[i].children;
        let num = cols[cols.length - 1].textContent;
        sum += Number(num);
    }
    document.getElementById('sum').textContent = sum;
};
