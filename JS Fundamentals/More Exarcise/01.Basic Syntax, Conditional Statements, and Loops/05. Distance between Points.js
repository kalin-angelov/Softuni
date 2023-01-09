function distanceBetweenPoints(x1, y1, x2, y2) {

    let x = (x1 - x2) * (x1 - x2);
    let y = (y2 - y1) * (y2 - y1); 
    let res = Math.sqrt(y + x); 
    console.log(res);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)
