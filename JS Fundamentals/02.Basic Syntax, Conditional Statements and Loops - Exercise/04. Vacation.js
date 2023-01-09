function vacation(numberOfPeople, typeOfGroup, day) {

    let price = 0;
    switch (typeOfGroup) {

        case 'Students': 
            if (day === 'Friday') {  
                price = numberOfPeople * 8.45;
            } else if (day === 'Saturday') {
                price = numberOfPeople * 9.80;
            } else if (day === 'Sunday') {
                price = numberOfPeople * 10.46;
            }
                if (numberOfPeople >= 30) {
                    price *= 0.85;
                }
            break;  

        case 'Business':         
            if (numberOfPeople >= 100) {
                if (day === 'Friday') {
                    price = (numberOfPeople - 10) * 10.90;
                } else if (day === 'Saturday') {
                    price = (numberOfPeople - 10) * 15.60;
                } else if (day === 'Sunday') {
                    price = (numberOfPeople - 10) * 16;
                }
            } else {
                if (day === 'Friday') {
                    price = numberOfPeople * 10.90;
                } else if (day === 'Saturday') {
                    price = numberOfPeople * 15.60;
                } else if (day === 'Sunday') {
                    price = numberOfPeople * 16;
                }
            }
            break;

        case 'Regular':
            if (day === 'Friday') {
                price = numberOfPeople * 15;
            } else if (day === 'Saturday') {
                price = numberOfPeople * 20;
            } else if (day === 'Sunday') {
                price = numberOfPeople * 22.50;
            }
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                price *= 0.95;
            }
    }
    
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, 'Students', 'Sunday')
