function matchDates(input) {

    let data = input[0];
    let regexp = /(?<day>\d{2})(.|-|\/)(?<month>[A-Za-z]{3})\2(?<year>\d{4})/g;
    let valid;

    while((valid = regexp.exec(data)) !== null) {
        let day = valid.groups['day'];
        let month = valid.groups['month'];
        let year = valid.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
