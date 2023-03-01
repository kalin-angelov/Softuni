function addItem() {

    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;
    let select = document.getElementById("menu");
    let option = document.createElement("option");
    
    option.value = value;
    option.innerText = text;
    select.appendChild(option);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
    // console.log('TODO:...');
}
