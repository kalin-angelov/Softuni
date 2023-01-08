function moving(input) {

    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let hight = Number(input[index++]);
    let apartmentSpace = width * length * hight;
    let boxesSpace = 0;

    while(true) {
        let boxes = input[index];

        if (boxes === "Done") {
            let diff = Math.abs(apartmentSpace - boxesSpace);
            console.log(`${diff} Cubic meters left.`);
            break;
        }
        
        boxes = Number(input[index]);
        boxesSpace += boxes;

        if (boxesSpace > apartmentSpace) {
            let diff = Math.abs(apartmentSpace - boxesSpace);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }

        boxes = input[index++];

    }
}
moving(["10", "1","2","4", "6","Done"])
