function bonusScoringSystem(data) {

    let studentsNum = data.shift();
    let lecturesNum = data.shift();
    let additionalBonus = data.shift();
    let bonusArray = [];
    for (let attendance of data) {
        let totalBonus = Math.ceil(Number(attendance) / Number(lecturesNum) * (5 + Number(additionalBonus)));
        bonusArray.push(totalBonus);
    }
    data = data.sort((a,b) => b - a);
    bonusArray = bonusArray.sort((a,b) => b - a);
    console.log(`Max Bonus: ${bonusArray[0]}.`);
    console.log(`The student has attended ${data[0]} lectures.`);
}
bonusScoringSystem(['10', '30', '14', '8','23', '27', '28', '15','17', '25', '26', '5','18']);
