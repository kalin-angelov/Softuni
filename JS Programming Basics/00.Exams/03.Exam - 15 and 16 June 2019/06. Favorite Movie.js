function favoriteMovie (input) {

    let bestScore = 0;
    let bestMovie;
    let limit = true;

    for (let i = 0; i <= 6; i++) {
        let movie = input[i];
        if (movie === 'STOP') {
            console.log(`The best movie for you is ${bestMovie} with ${bestScore} ASCII sum.`);
            limit = false;
            break;
        } else {
            let points = 0;
            for (let k = 0; k <= movie.length - 1; k++) {
                let letter = movie[k];
                if (letter === ' ' || letter == Number(letter)) {
                    let notLetterPoints = letter.charCodeAt();
                    points += notLetterPoints;
                } else if (letter.toUpperCase() === letter) {
                    let upperCasePoints = letter.charCodeAt() - movie.length;
                    points += upperCasePoints;
                } else {
                    let lowerCasePoints = letter.charCodeAt() - (movie.length * 2);
                    points += lowerCasePoints;
                }
            }
            if (bestScore < points) {
                bestScore = points;
                bestMovie = movie;
            }
        }

    }
    if (limit) {
        console.log("The limit is reached.");
        console.log(`The best movie for you is ${bestMovie} with ${bestScore} ASCII sum.`);
    }

}
favoriteMovie(['Matrix', 'Breaking bad', 'Legend', 'STOP']);
favoriteMovie(['Wrong turn', 'The maze', 'Area 51', 'Night Club', 'Ice age', 'Harry Potter','Wizards']);
favoriteMovie(['The maze', 'School story 2', 'Shrek 2', 'Ice age', 'STOP']);
