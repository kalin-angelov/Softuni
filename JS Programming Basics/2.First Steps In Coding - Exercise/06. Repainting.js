function repainting(input){
  
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let priceOfNylon = (nylon + 2) * 1.50;
    let morePaint = (10 * paint) / 100;
    let priceOfPaint = (paint + morePaint) * 14.50;
    let priceOfPaintThinner = paintThinner * 5.00;
    let materialsPrice = priceOfNylon + priceOfPaint + priceOfPaintThinner + 0.40;
    let priceOfWorkerForHour = ((30 * materialsPrice) / 100) * hoursWork;
    let total = materialsPrice + priceOfWorkerForHour;


    console.log(total)

}
repainting(["10","11","4","8"])
