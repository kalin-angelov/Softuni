function notify(message) {

  let div = document.getElementById("notification");
  div.innerText = message;
  if(div.style.display === 'none' || div.style.display === '') {
    div.style.display = 'block';
    div.style.visibility = 'visible';
  };

  div.addEventListener("click", hideMe);

  function hideMe() {
    div.style.display = 'none';
    div.style.visibility = 'hidden';
  };
  // console.log('todo')
  // TODO:
}
