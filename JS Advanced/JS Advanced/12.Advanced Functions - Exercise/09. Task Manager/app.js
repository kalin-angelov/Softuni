function solve() {

    let orangeDiv = document.getElementsByTagName("div")[4];
    let yellowDiv = document.getElementsByTagName("div")[6];
    let greenDiv = document.getElementsByTagName("div")[8];

    let buttonAdd = document.getElementById("add");
    buttonAdd.addEventListener('click', addInformation);

    function addInformation(e) {

        e.preventDefault()

        let taskInput = document.getElementById("task").value;
        let descriptionInput = document.getElementById("description").value;
        let dateInput = document.getElementById("date").value;

        if (taskInput === '' || descriptionInput === '' || dateInput === '') {
            return;
        }

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let div = document.createElement("div");
        let buttonStart = document.createElement("button");
        let buttonDelete = document.createElement("button");

        h3.textContent = taskInput;
        p1.textContent = "Description: " + descriptionInput;
        p2.textContent = "Due Date: " + dateInput;
        div.setAttribute("class", "flex"),
        buttonStart.setAttribute("class", "green");
        buttonStart.innerText = "Start";
        buttonStart.addEventListener("click", letsStartTheTask);
        buttonDelete.setAttribute("class", "red");
        buttonDelete.innerText = "Delete";
        buttonDelete.addEventListener("click", deleteTheTask);

        div.appendChild(buttonStart);
        div.appendChild(buttonDelete);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);
        orangeDiv.appendChild(article);
        
        document.getElementById("task").value = '';
        document.getElementById("description").value = '';
        document.getElementById("date").value = '';

        function letsStartTheTask () {

            let buttonFinish = document.createElement("button");
            buttonFinish.setAttribute("class", "orange");
            buttonFinish.innerText = "Finish";
            buttonFinish.addEventListener("click", finishHim);
            yellowDiv.appendChild(article);
            div.removeChild(buttonStart);
            div.appendChild(buttonFinish);

            function finishHim () {
                greenDiv.appendChild(article);
                div.remove();
            }

        }
        
        function deleteTheTask (e) {

            let deleteTask = e.target.parentNode.parentNode;
            deleteTask.remove();
        }
    }
    // console.log("//TODO")
}
