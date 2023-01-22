function shoppingList(arr) {

    let shoppingList = arr.shift();
    let item = '';
    let list = [];
    for (let el of shoppingList) {
        if (el !== '!') {
            item += el;
        } else {
            list.push(item);
            item = '';
        }
    }
    list.push(item);
    for (let el of arr) {
        if (el === 'Go Shopping!') {
            console.log(list.join(', '));
            break;
        }
        el = el.split(' ')
        let command = el[0];
        let grocery = el[1];
        let newGrocery = el[2];
        if (command === 'Urgent') { 
            let isUrgent  = true;
            for (let item of list) {
                if (item === grocery) {
                    isUrgent = false;
                    break;
                }
            }
            if (isUrgent) {
                list.unshift(grocery);
            }

        } else if (command === 'Unnecessary') {
            for (let item of list) {
                if (item === grocery) {
                    let groceryIndex = list.indexOf(grocery);
                    list.splice(groceryIndex, 1);
                } 
            }
        } else if (command === 'Correct') {
            for (let item of list) {
                if (item === grocery) {
                    let groceryIndex = list.indexOf(grocery);
                    list.splice(groceryIndex, 1, newGrocery);
                } 
            }
        } else if (command === 'Rearrange') {
            for (let item of list) {
                if (item === grocery) {
                    let groceryIndex = list.indexOf(grocery);
                    let rearrangeItem = list.splice(groceryIndex, 1);
                    list.push(rearrangeItem);
                }
            }
        } 
    }
}
shoppingList([
    "Milk!Pepper!Water!Banana",
    "Urgent Salt",
    "Urgent Grapes",
    "Unnecessary Salt",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);
