function summerOutfit(input){
    let temperature = Number(input[0]);
    let timeOfDay = input[1];
    
    switch (timeOfDay){
        case "Morning":
            if (temperature >= 10 && temperature <= 18){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            } else if (temperature > 18 && temperature <= 24){
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
        case "Afternoon":
            if (temperature >= 10 && temperature <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            } else if (temperature > 18 && temperature <= 24){
                outfit = "T-Shirt";
                shoes = "Sandals";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            }    
            break;
        case "Evening":
            if (temperature >= 10 && temperature <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            } else if (temperature > 18 && temperature <= 24){
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            } else {
                outfit = "Shirt";
                shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            }    
            break;
    }

}
summerOutfit(["28","Evening"])
