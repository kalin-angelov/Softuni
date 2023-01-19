function addAndRemove(array) {

    let newArray= [];
    let num = 0;
    for (let el of array) {
        
        if (el === 'add') {
            num++;
            newArray.push(num);
        } else {
            num++;
            newArray.pop();
        }
    }
    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
