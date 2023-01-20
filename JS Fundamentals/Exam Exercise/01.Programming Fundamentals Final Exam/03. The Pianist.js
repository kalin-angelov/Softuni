function thePianist(input) {

    let numberOfPieces = input.shift();
    let pieces = input.splice(0, numberOfPieces);
    let fullList = [];
    for (let info of pieces) {
        let [piece, composer, key] = info.split('|');
        let listWithPieces = {
            pieceName:piece,
            composerName:composer,
            key:key,
        };
        fullList.push(listWithPieces);
    }
    for (let pieceCode of input) {
        let [command, pieceInCode, nameInCode, keyInCode] = pieceCode.split('|');
        if (command === 'Stop') {
            break;
        }
        switch (command) {
            case 'Add':
                let piceIsInList = false;
                for (let el of fullList) {
                    let pieceInfo = el['pieceName'];
                    if (pieceInCode === pieceInfo) {
                        piceIsInList = true;
                    }
                }
                if (!piceIsInList) {
                    let addNewPieces = {
                        pieceName:pieceInCode,
                        composerName:nameInCode,
                        key:keyInCode,
                    };
                    fullList.push(addNewPieces);
                    console.log(`${pieceInCode} by ${nameInCode} in ${keyInCode} added to the collection!`);
                } else {
                    console.log(`${pieceInCode} is already in the collection!`);
                }
                break;
            case 'Remove':
                let pieceRemove = false;
                let index;
                for (let i = 0; i < fullList.length; i++) {
                    let pieceToRemove = fullList[i]['pieceName'];
                    if (pieceToRemove === pieceInCode) {
                        pieceRemove = true;
                        index = i;
                    }
                }
                if (pieceRemove) {
                    fullList.splice(index,1);
                    console.log(`Successfully removed ${pieceInCode}!`);
                } else {
                    console.log(`Invalid operation! ${pieceInCode} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let keyChange = false;
                for (let pieceInfo of fullList) {
                    let pieceName = pieceInfo['pieceName'];
                    if (pieceName === pieceInCode) {
                        pieceInfo['key'] = nameInCode;
                        keyChange = true;
                    }
                }
                if (keyChange) {
                    console.log(`Changed the key of ${pieceInCode} to ${nameInCode}!`);
                } else {
                    console.log(`Invalid operation! ${pieceInCode} does not exist in the collection.`);
                }
                break;
        }
    }
    for (let result of fullList) {
        console.log(`${result['pieceName']} -> Composer: ${result['composerName']}, Key: ${result['key']}`);
    }
}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Stop',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
