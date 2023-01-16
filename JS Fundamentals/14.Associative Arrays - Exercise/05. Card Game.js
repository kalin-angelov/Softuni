function cardGame(data) {

    let playersHand = new Map();
    let cardPower = {
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        '10':10,
        'J':11,
        'Q':12,
        'K':13,
        'A':14,
    }
    let cardType = {
        'S':4,
        'H':3,
        'D':2,
        'C':1,
    }
    for (let info of data) {
        let [name, cards] = info.split(': ');
        let cardsInHand = cards.split(', ');
        if (!playersHand.has(name)) {
            playersHand.set(name, new Set());
        } 
        for (let card of cardsInHand) {
            playersHand.get(name).add(card)
        }
    }
    for (let [key, value] of playersHand) {
        let sumOfCards = 0;
        for (let card of value) {
            let splitCard = card.split('');
            let type = splitCard.pop();
            let power = splitCard.join('');
            let powerNum = cardPower[power];
            let typeNum = cardType[type];
            sumOfCards += powerNum * typeNum;
        }
        console.log(`${key}: ${sumOfCards}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])
