function areaOfFigures(input){
  
    let shape = input[0];
    if(shape === "square"){
        let num = Number(input[1]);
        let area = num * num;
        console.log(area.toFixed(3));
    } else if(shape === "rectangle"){
        let num = Number(input[1]);
        let num2 = Number(input[2]);
        let area = num * num2;
        console.log(area.toFixed(3));
    } else if (shape === "circle"){
        let num = Number(input[1]);
        let pi = Math.PI;
        let area = pi * (num * num);
        console.log(area.toFixed(3));
    } else if (shape === "triangle"){
        let num = Number(input[1]);
        let num2 = Number(input[2]);
        let area = (num * num2) / 2;
        console.log(area.toFixed(3));
    }

}
areaOfFigures(["circle","6"])
