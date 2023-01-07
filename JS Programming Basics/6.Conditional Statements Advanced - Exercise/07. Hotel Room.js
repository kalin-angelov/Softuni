function hotelRoom(input){
    let month = input[0];
    let night = Number(input[1]);

    switch (month){
        case "May":
        case "October":
            studio = night * 50;
            apartment = night * 65;
            if (night <= 7){
                priceS = studio + 0;
                priceA = apartment + 0; 
            } else if (night > 7 && night < 14){
                priceS = studio * 0.95;
                priceA = apartment + 0;
            } else if (night > 14){
                priceS = studio * 0.70;
                priceA = apartment * 0.90;
            }
            break;
        case "June":
        case "September":
            studio = night * 75.20;
            apartment = night * 68.70;
            if (night > 14){
                priceS = studio * 0.80;
                priceA = apartment * 0.90;
            } else {
                priceS = studio + 0;
                priceA = apartment + 0;
            }
            break;
        case "July":
        case "August":
            studio = night * 76;
            apartment = night * 77;
            if (night > 14){
                priceS = studio + 0;
                priceA = apartment * 0.90;
            } else {
                priceS = studio + 0; 
                priceA = apartment + 0;
            }
            break;
    } 
    console.log(`Apartment: ${priceA.toFixed(2)} lv.`)
    console.log(`Studio: ${priceS.toFixed(2)} lv.`)
}
hotelRoom(["May","8"])
