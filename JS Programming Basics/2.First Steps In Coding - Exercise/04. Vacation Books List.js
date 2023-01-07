function vacationBooksList(input){
  
    let bookPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);
    
    let allPagesForHour = bookPages / pages;
    let timeToRead = allPagesForHour / days;
    
    console.log(timeToRead)

}
vacationBooksList(["212","20","2"])
