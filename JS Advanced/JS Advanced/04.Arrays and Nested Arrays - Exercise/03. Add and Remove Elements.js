function addAndRemoveElements(commands) {

    let res = [];
    let num = 1;
    commands.map((command) => {
        command === 'add' ? res.push(num) : res.pop();
        num++
    })
    res.length === 0 ? console.log('Empty') : res.forEach(el => console.log(el));

}
addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);
