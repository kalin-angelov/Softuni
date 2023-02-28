function addItem() {

    let input = document.getElementById("newItemText").value;
    let items = document.getElementById("items");
    let li = document.createElement("li");
    li.textContent = input;
    items.appendChild(li);
    document.getElementById("newItemText").value = '';
    // console.log('TODO:...');
}
