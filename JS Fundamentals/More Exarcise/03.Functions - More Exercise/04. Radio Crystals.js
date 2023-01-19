function radioCrystals(arr) {

    let finalProduct = arr.shift();
    let xray = 1;
    for (let i = 0; i < arr.length; i++) {
        let material = Number(arr[i]);
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let materialIsReady = true;
        console.log(`Processing chunk ${material} microns`);
        while (material >= finalProduct) {
            material /= 4;
            if (material < finalProduct) {
                material *= 4;
                break;
            }
            cut++;
        }
        if (material === finalProduct && materialIsReady) {
            console.log(`Cut x${cut}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);;
            console.log(`Finished crystal ${material} microns`);
            materialIsReady = false;
        } else if (materialIsReady && cut > 0){
            console.log(`Cut x${cut}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
        }
        while (material >= finalProduct) {
            material *= 0.80;
            if (material < finalProduct) {
                material /= 0.80;
                break;
            }
            lap++;
        }
        if (material === finalProduct && materialIsReady) {
            console.log(`Lap x${lap}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${material} microns`);
            materialIsReady = false;
        } else if (materialIsReady && lap > 0) {
            console.log(`Lap x${lap}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
        }
        while (material >= finalProduct) {
            material -= 20;
            if (material < finalProduct) {
                material += 20;
                break;
            }
            grind++;
        }
        if (material === finalProduct && materialIsReady) {
            console.log(`Grind x${grind}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${material} microns`);
            materialIsReady = false;
        } else if (materialIsReady && grind > 0) {
            console.log(`Grind x${grind}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
        
        }
        while (material > finalProduct) {
            material -= 2;
            etch++;
        }
        if (material === finalProduct && materialIsReady) {
            console.log(`Etch x${etch}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${material} microns`);
            materialIsReady = false;
        } else if (materialIsReady && etch > 0) {
            console.log(`Etch x${etch}`);
            material = Math.floor(material);
            console.log(`Transporting and washing`);
        }
        if (material + 1 === finalProduct && xray === 1 && materialIsReady) {
            material += 1;
            console.log(`X-ray x${xray}`);
            console.log(`Finished crystal ${material} microns`);
            xray--;
            materialIsReady = false;
        }
    }
}
radioCrystals([1375, 50000]);
