function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let rows = document.querySelectorAll('tbody tr');
      let search = document.getElementById('searchField').value;
      
      for (let item of rows) {
         item.classList.remove('select');
         let info = item.textContent.split('\n');
         for (let el of info) {
            if (el.includes(search)) {
               item.className = 'select';
            }
         }
      }
      document.getElementById('searchField').value = '';
   }
}
