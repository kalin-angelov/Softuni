function oldBooks(input) {

    let index = 0;
    let book = input[index];
    index++
    let booksChecked = 0;

    while (true) {
        let books = input[index];
        index++;

        if (books === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksChecked} books.`);
            break;
        } else if (books === book) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }
        booksChecked++;
    }
}
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"])
