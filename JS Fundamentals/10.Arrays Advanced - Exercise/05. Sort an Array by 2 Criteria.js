function sortAnArrayBy2Criteria(arr) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join(' \n'));
}
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default'])
