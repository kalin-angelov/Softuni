function histogram(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;
    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;
   
    for (let i = 0; i < n; i++) {
        let num = Number(input[index])
        index++
       if (num < 200) {
           percent1++;
       } else if (num >= 200 && num <= 399) {
           percent2++;
       } else if (num >= 400 && num <= 599) {
           percent3++;
       } else if (num >= 600 && num <= 799) {
           percent4++;
       } else if (num >= 800) {
           percent5++
       }
    }

    let p1 = percent1 / n * 100;
    let p2 = percent2 / n * 100;
    let p3 = percent3 / n * 100;
    let p4 = percent4 / n * 100;
    let p5 = percent5 / n * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])
