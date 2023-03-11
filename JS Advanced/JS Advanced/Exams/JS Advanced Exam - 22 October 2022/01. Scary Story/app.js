window.addEventListener("load", solve);

function solve() {
  
  let publishButton = document.getElementById("form-btn");
  publishButton.addEventListener("click", publishMe);

  function publishMe (e) {

    e.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let genre = document.getElementById("genre").value;
    let storyTitle = document.getElementById("story-title").value;
    let storyText = document.getElementById("story").value;

    if (firstName === '' || lastName === '' || age === '' || storyTitle === '' || storyText === '') {
      return;
    }

    let li = document.createElement("li");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let saveButton = document.createElement("button");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    li.setAttribute("class", "story-info");
    h4.textContent = `Name: ${firstName} ${lastName}`;
    p1.textContent = `Age: ${age}`;
    p2.textContent = `Title: ${storyTitle}`;
    p3.textContent = `Genre: ${genre}`;
    p4.textContent = storyText;
    saveButton.setAttribute("class", "save-btn");
    editButton.setAttribute("class", "edit-btn");
    deleteButton.setAttribute("class", "delete-btn");
    saveButton.textContent = "Save Story";
    editButton.textContent = "Edit Story";
    deleteButton.textContent = "Delete Story";
    saveButton.addEventListener("click", saveMe);
    editButton.addEventListener("click", editMe);
    deleteButton.addEventListener("click", deleteMe);

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    li.appendChild(article);
    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.getElementById("preview-list").appendChild(li);

    document.getElementById("first-name").value = '';
    document.getElementById("last-name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("genre").value = '';
    document.getElementById("story-title").value = '';
    document.getElementById("story").value = '';

    publishButton.setAttribute("disabled", "");

    function saveMe (e) {

      e.preventDefault();

      document.getElementById("main").children[0].remove();
      document.getElementById("main").children[0].remove();
      let h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      document.getElementById("main").appendChild(h1);

    }

    function editMe (e) {

      e.preventDefault();

      let name = e.target.parentNode.children[0].children[0].textContent.slice(6).split(' ');
      document.getElementById("first-name").value = name[0];
      document.getElementById("last-name").value = name[1];
      document.getElementById("age").value = e.target.parentNode.children[0].children[1].textContent.slice(5);
      document.getElementById("genre").value = e.target.parentNode.children[0].children[3].textContent.slice(7);
      document.getElementById("story-title").value = e.target.parentNode.children[0].children[2].textContent.slice(7);
      document.getElementById("story").value = e.target.parentNode.children[0].children[4].textContent;

      publishButton.disabled = false;
      e.target.parentNode.parentNode.children[1].remove();

    }

    function deleteMe (e) {

      e.preventDefault();

      e.target.parentNode.parentNode.children[1].remove();
      publishButton.disabled = false;

    }
  }
}
