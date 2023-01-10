function dayOfWeek(number) {

    if (number < 1 || number > 7) {

        console.log('Invalid day!');
    } else {
        let dayOfWeekArr = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]

        console.log(dayOfWeekArr[number - 1]);
    }
}
dayOfWeek(3)
