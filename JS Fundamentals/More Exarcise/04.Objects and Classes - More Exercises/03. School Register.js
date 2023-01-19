function schoolRegister(data) {

    let list = [];
    
    for (let el of data) {
        let studentInfo = {};
        let info = el.split(': ').join().split(',')
        let name = info[1];
        let grade = Number(info[3]);
        let score = Number(info[5]);
        if (score > 3) {
            grade++;
            studentInfo = {name, grade, score};
            list.push(studentInfo);
        }
        
    }

    list.sort((a,b) => a['grade'] - b['grade']);
    let grade = list[0]['grade'];
    let sum = 0;
    let name = [];
    let counter = 0;

    for (let el of list) {
        if (el['grade'] === grade) {
            name.push(el['name']);
            sum += Number(el['score']);
            counter++;
        } else {
            console.log(`${grade} Grade`);
            console.log(`List of students: ${name.join(', ')}`);
            console.log(`Average annual score from last year: ${(sum / name.length).toFixed(2)}`);
            console.log('\t');
            sum = 0;
            name = [];
            counter = 0;
            grade = el[`grade`];
            name.push(el['name']);
            sum += Number(el['score']);
            counter++;
        }
    }

    console.log(`${grade} Grade`);
    console.log(`List of students: ${name.join(', ')}`);
    console.log(`Average annual score from last year: ${(sum / name.length).toFixed(2)}`);
    console.log();

}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);
