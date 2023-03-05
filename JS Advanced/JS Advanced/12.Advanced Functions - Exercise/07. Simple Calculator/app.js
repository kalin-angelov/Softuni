function calculator() {

    let firstSelector;
    let secondSelector;
    let result;

    let processing = {
        init: (selector1, selector2, resultSelector) => {
            firstSelector = document.querySelector(selector1);
            secondSelector = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            let firstSelectedNum = Number(firstSelector.value);
            let secondSelectedNum = Number(secondSelector.value);
            let sum = firstSelectedNum + secondSelectedNum;
            result.value = sum;
        },
        subtract: () => {
            let firstSelectedNum = Number(firstSelector.value);
            let secondSelectedNum = Number(secondSelector.value);
            let subtract = firstSelectedNum - secondSelectedNum;
            result.value = subtract;
        }
    }
    return processing
}



const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result');
