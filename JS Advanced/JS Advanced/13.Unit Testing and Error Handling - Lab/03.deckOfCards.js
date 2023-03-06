function printDeckOfCards(cards) {

    function createCard (){
        
        let result = [];

        for (let card of cards) {

            let face;
            let suit;
            if (card.includes('10')) {
                [first, second, suit] = card.split('');
                face = first + second;
            } else {
                [face, suit] = card.split('');
            }
            let cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            let cardSuits = ['S', 'H', 'D', 'C'];
        
            if (!cardFace.includes(face)) {
                return result = `Invalid card: ${card}`
            }
            if (!cardSuits.includes(suit)) {
                return result = `Invalid card: ${card}`
            }            
            switch(suit) {
                case 'S': suit = '\u2660'; break; 
                case 'H': suit = '\u2665'; break;
                case 'D': suit = '\u2666'; break;
                case 'C': suit = '\u2663'; break;
            }
            result.push(`${face}${suit}`)
        }
        return result.join(' ');
    }

    console.log(createCard())
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
