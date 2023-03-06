function playingCards(face, suit) {

    let cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSuits = ['S', 'H', 'D', 'C'];

    if (!cardFace.includes(face)) {
        throw new Error('Error')
    }
    if (!cardSuits.includes(suit)) {
        throw new Error('Error')
    }

    switch(suit) {
        case 'S': suit = '\u2660'; break; 
        case 'H': suit = '\u2665'; break;
        case 'D': suit = '\u2666'; break;
        case 'C': suit = '\u2663'; break;
    }

    return `${face}${suit} `
}
console.log(playingCards('10', 'H'))
