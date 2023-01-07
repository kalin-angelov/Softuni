function numbersDivisibleByNine(input) {
    
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sum = 0; 
    let result = "";

    for (let i = n1; i <= n2; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            result += `${i}\n`
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(result)
}
numbersDivisibleByNine(["100", "200"])
