function deleteByEmail() {

   let input = document.getElementsByName("email")[0].value;
   let emails = document.querySelectorAll("tbody tr td");
   let result = document.getElementById("result");

   for (let i = 1; i < emails.length; i += 2) {
    if (emails[i].textContent === input) {
        let row = emails[i].parentNode;
        row.parentNode.removeChild(row);
        result.textContent = 'Deleted.';
        document.getElementsByName("email")[0].value = '';
        return;
    } 
   }

   result.textContent = 'Not found.';
   document.getElementsByName("email")[0].value = '';

    //console.log('TODO:...');
}
