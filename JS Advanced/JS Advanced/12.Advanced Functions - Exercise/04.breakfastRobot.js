function solution() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function command(str) {

        let [command, product, quantity] = str.split(' ');

        switch (command) {
            case "restock":
                if (product === "protein") {
                    stock.protein = stock.protein + Number(quantity);
                } else if (product === "carbohydrate") {
                    stock.carbohydrate = stock.carbohydrate + Number(quantity);
                } else if (product === "fat") {
                    stock.fat = stock.fat + Number(quantity);
                } else if (product === "flavour") {
                    stock.flavour = stock.flavour + Number(quantity);
                }
                return "Success";
                
            case "report":
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
            case "prepare":
                if (product === "apple") {
                    let apple = {
                        appleCarbohydrate: 1 * quantity,
                        appleFlavour: 2 * quantity
                    }
                    if(stock.carbohydrate >= apple.appleCarbohydrate && stock.flavour >= apple.appleFlavour) {
                        stock.carbohydrate = stock.carbohydrate - apple.appleCarbohydrate;
                        stock.flavour = stock.flavour - apple.appleFlavour;
                        return "Success";
                    } else {
                        let result;
                        stock.carbohydrate < apple.appleCarbohydrate ? result = `Error: not enough carbohydrate in stock` : result = `Error: not enough flavour in stock`;
                        return result;
                    }
                } else if (product === 'lemonade') {
                    let lemonade = {
                        lemonadeCarbohydrate: 10 * quantity,
                        lemonadeFlavour: 20 * quantity
                    }
                    if(stock.carbohydrate >= lemonade.lemonadeCarbohydrate && stock.flavour >= lemonade.lemonadeFlavour) {
                        stock.carbohydrate = stock.carbohydrate - lemonade.lemonadeCarbohydrate;
                        stock.flavour = stock.flavour - lemonade.lemonadeFlavour;
                        return "Success";
                    } else {
                        let result;
                        stock.carbohydrate < lemonade.lemonadeCarbohydrate ? result = `Error: not enough carbohydrate in stock` : result = `Error: not enough flavour in stock`;
                        return result;
                    }
                } else if (product === 'burger') {
                    let burger = {
                        burgerCarbohydrate: 5 * quantity,
                        burgerFat: 7 * quantity,
                        burgerFlavour: 3 * quantity 
                    }
                    if (stock.carbohydrate >= burger.burgerCarbohydrate && stock.fat >= burger.burgerFat && stock.flavour >= burger.burgerFlavour) {
                        stock.carbohydrate = stock.carbohydrate - burger.burgerCarbohydrate;
                        stock.fat = stock.fat - burger.burgerFat;
                        stock.flavour = stock.flavour - burger.burgerFlavour;
                        return `Success`;
                    } else {
                        let product;
                        if (stock.carbohydrate < burger.burgerCarbohydrate) {
                            product = "carbohydrate"
                        } else if (stock.fat < burger.burgerFat) {
                            product = "fat";
                        } else {
                            product = 'flavour'
                        }
                        return `Error: not enough ${product} in stock `
                    }
                } else if (product === 'eggs')  {
                    let eggs = {
                        eggsProtein: 5 * quantity,
                        eggsFat: 1 * quantity,
                        eggsFlavour: 1 * quantity 
                    }
                    if (stock.protein >= eggs.eggsProtein && stock.fat >= eggs.eggsFat && stock.flavour >= eggs.eggsFlavour) {
                        stock.protein = stock.protein - eggs.eggsProtein;
                        stock.fat = stock.fat - eggs.eggsFat;
                        stock.flavour = stock.flavour - eggs.eggsFlavour;
                        return `Success`;
                    } else {
                        let product;
                        if (stock.protein < eggs.eggsProtein) {
                            product = "protein"
                        } else if (stock.fat < eggs.eggsFat) {
                            product = "fat";
                        } else {
                            product = 'flavour'
                        }
                        return `Error: not enough ${product} in stock `
                    }
                } else if (product === 'turkey') {
                    let turkey = {
                        turkeyProtein: 10 * quantity,
                        turkeyCarbohydrate: 10 * quantity,
                        turkeyFat: 10 * quantity,
                        turkeyFlavour: 10 * quantity 
                    }
                    if (stock.carbohydrate >= turkey.turkeyCarbohydrate && stock.fat >= turkey.turkeyFat && stock.flavour >= turkey.turkeyFlavour && stock.protein >= turkey.turkeyProtein) {
                        stock.carbohydrate = stock.carbohydrate - turkey.turkeyCarbohydrate;
                        stock.fat = stock.fat - turkey.turkeyFat;
                        stock.flavour = stock.flavour - turkey.turkeyFlavour;
                        stock.protein = stock.protein - turkey.turkeyProtein;
                        return `Success`;
                    } else {
                        let product;
                        if (stock.carbohydrate < turkey.turkeyCarbohydrate) {
                            product = "carbohydrate";
                        } else if (stock.fat < turkey.turkeyFat) {
                            product = "fat";
                        } else if (stock.protein < turkey.turkeyProtein) {
                            product = "protein";
                        } else {
                            product = "flavour";
                        }
                        return `Error: not enough ${product} in stock `
                    }
                }
                
        }
    }
}
let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
