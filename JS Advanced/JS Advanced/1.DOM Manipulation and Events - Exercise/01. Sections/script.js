function create(words) {

   let content = document.getElementById("content")

   for (let word of words) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(word);

      p.style.display = 'none';
      p.appendChild(text);
      div.appendChild(p);
      content.appendChild(div);
      div.addEventListener('click', clickMe);
   }

   function clickMe(e) {
      
      if (e.target.children[0].style.display === 'none') {
         e.target.children[0].style.display = 'block';
      } else {
         e.target.children[0].style.display = 'none';
      }

   }
   // console.log('TODO:...');
}