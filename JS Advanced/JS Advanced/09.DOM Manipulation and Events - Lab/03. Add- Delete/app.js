function addItem() {
    
    let input = document.getElementById('newItemText').value;
    let newContent = document.getElementById("items");
    let li = document.createElement('li');
    li.textContent = input;
    
    let a = document.createElement("a");
    let removeItemText = document.createTextNode("[Delete]");
    a.appendChild(removeItemText);
    a.href = "#";
    a.addEventListener("click", clickMe);

    li.appendChild(a);
    newContent.appendChild(li);

    document.getElementById('newItemText').value = '';

    function clickMe() {
        li.remove();
    }
    
}
