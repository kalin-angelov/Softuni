function cinema(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let price = 0;

    switch (type){
        case "Premiere":
            price = r * c * 12.00;
            break;
        case "Normal":
            price = r * c * 7.50;
            break;
        case "Discount":
            price = r* c * 5.00;
            break;
    }
    console.log(price.toFixed(2));
    console.log("leva")
}
cinema(["Discount","12","30"])
