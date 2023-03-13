window.addEventListener("load", solve);

function solve() {

  let publishButton = document.getElementById("publish");
  publishButton.addEventListener("click", publishThis);
  let profit = 0;

  function publishThis(e) {
    
    e.preventDefault();

    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let productionYear = document.getElementById("year").value;
    let fuelType = document.getElementById("fuel").value;
    let originalPrice = document.getElementById("original-cost").value;
    let sellingPrice = document.getElementById("selling-price").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let editButton = document.createElement("button");
    let sellButton = document.createElement("button");

    tr.setAttribute("class", "row");
    editButton.setAttribute("class", "action-btn edit");
    editButton.textContent = "Edit";
    sellButton.setAttribute("class", "action-btn sell");
    sellButton.textContent = "Sell";

    if (sellingPrice > originalPrice) {

      td1.textContent = make;
      td2.textContent = model;
      td3.textContent = productionYear;
      td4.textContent = fuelType;
      td5.textContent = originalPrice;
      td6.textContent = sellingPrice;
      editButton.addEventListener("click", editMe);
      sellButton.addEventListener("click", sellMe);

      td7.appendChild(editButton);
      td7.appendChild(sellButton);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td7);
      document.getElementById("table-body").appendChild(tr);

      document.getElementById("make").value = '';
      document.getElementById("model").value = '';
      document.getElementById("year").value = '';
      document.getElementById("fuel").value = '';
      document.getElementById("original-cost").value = '';
      document.getElementById("selling-price").value = '';

      function editMe () {

        document.getElementById("make").value = td1.textContent;
        document.getElementById("model").value = td2.textContent;
        document.getElementById("year").value = td3.textContent;
        document.getElementById("fuel").value = td4.textContent;
        document.getElementById("original-cost").value = td5.textContent;
        document.getElementById("selling-price").value = td6.textContent;

        document.querySelector(".row").remove();
      }

      function sellMe () {

        let li = document.createElement("li");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");

        li.setAttribute("class", "each-list");
        span1.textContent = td1.textContent + " " + td2.textContent;
        span2.textContent = td3.textContent;
        span3.textContent = td6.textContent - td5.textContent;

        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);
        document.getElementById("cars-list").appendChild(li);

        document.querySelector(".row").remove();
        profit += Number(span3.textContent);
        document.getElementById("profit").textContent = profit.toFixed(2);

      }
    }
  }
}
