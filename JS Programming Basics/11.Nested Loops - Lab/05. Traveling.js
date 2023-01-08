function traveling(input) {
    
    let index = 0;
    let destination = input[index++];

    while (destination !== "End") {

        let place = destination;
        let budget = Number(input[index++]);
        let savings = 0;

        while (savings < budget) {

            let mony = Number(input[index++]);
            savings += mony;
            
        }

        console.log(`Going to ${place}!`)
        destination = input[index++];
    }

}
traveling(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"])
