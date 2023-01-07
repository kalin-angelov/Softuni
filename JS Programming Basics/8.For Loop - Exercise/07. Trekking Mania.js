function trekkingMania(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;
    
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < n; i++) {
        
        let group = Number(input[index]);
        index++;
       if (group <= 5) {
            musala += group;
            group = Number(input[index]);
       } else if (group >= 6 && group <= 12) { 
            monblan += group;
            group = Number(input[index]);
       } else if (group >= 13 && group <= 25) {  
            kilimanjaro += group;
            group = Number(input[index]);
       } else if (group >= 26 && group <= 40) {
           k2 += group;
           group = Number(input[index]);
       } else {  
           everest += group;
           group = Number(input[index]);
       }
    }

    
    let allPeople = musala + monblan + kilimanjaro + k2 + everest;
    let pMusala = musala / allPeople *100;
    let pMonblan = monblan / allPeople * 100;
    let pKilimanjaro = kilimanjaro / allPeople * 100;
    let pK2 = k2 / allPeople * 100;
    let pEverest = everest / allPeople * 100;

    console.log(`${pMusala.toFixed(2)}%`);
    console.log(`${pMonblan.toFixed(2)}%`);
    console.log(`${pKilimanjaro.toFixed(2)}%`);
    console.log(`${pK2.toFixed(2)}%`);
    console.log(`${pEverest.toFixed(2)}%`);

}

trekkingMania(["5","25","41","31","250","6"])
