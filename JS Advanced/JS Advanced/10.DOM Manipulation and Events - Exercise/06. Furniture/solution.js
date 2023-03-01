function solve() {

  let generateButton = document.getElementsByTagName("button")[0];
  let buyButton = document.getElementsByTagName("button")[1];
  generateButton.addEventListener("click", addFurniture);
  buyButton.addEventListener("click", addAndBuy);

  function addFurniture() {

    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    for (let data of input) {

      let tbody = document.getElementsByTagName("tbody")[0];
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", data.img);
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      let p1 = document.createElement("p");
      p1.textContent = data.name;
      td2.appendChild(p1);
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = data.price;
      td3.appendChild(p2);
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = data.decFactor;
      td4.appendChild(p3);
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      td5.appendChild(input);
      tr.appendChild(td5);

      tbody.appendChild(tr);

    }
  }

  function addAndBuy() {
    let checkboxInfo = document.querySelectorAll("tbody tr input");
    let sum = 0;
    let decorationFactor = 0;
    let items = [];

    for (let i = 0; i < checkboxInfo.length; i++) {
      if (checkboxInfo[i].checked === true) {
        let trInfo = document.querySelectorAll("tbody tr")[i];
        sum += Number(trInfo.children[2].textContent);
        decorationFactor += Number(trInfo.children[3].textContent);
        items.push(trInfo.children[1].textContent)
      }
    }

    let avgDecorationFactor = decorationFactor / items.length;
    items
    document.getElementsByTagName("textarea")[1].value = `Bought furniture: ${items.join(", ")}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${avgDecorationFactor}`;
  }
}
