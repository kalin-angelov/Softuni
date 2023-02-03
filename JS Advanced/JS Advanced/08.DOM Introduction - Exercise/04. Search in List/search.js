function search() {
   
    let towns = Array.from(document.querySelectorAll('#towns li'));
    let searchText = document.getElementById('searchText').value;
    let matches = 0;

    for (let item of towns) {
        let town = item.textContent;
        item.style.textDecoration = 'none';
        item.style.fontWeight = 'normal';

        if (town.includes(searchText)) {
            item.style.textDecoration = 'underline';
            item.style.fontWeight = 'bold';
            matches++;
        }
    }
   
    document.getElementById('result').textContent = `${matches} matches found`;
}
