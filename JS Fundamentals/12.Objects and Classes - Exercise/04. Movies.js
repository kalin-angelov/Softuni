function movies(arrayMovies) {

    let movieList = [];
    for (let el of arrayMovies) {
        if (el.includes('addMovie ')) {
            let element = el.replace('addMovie ', '');
            movieList.push({name:element});
        }
        if (el.includes('directedBy')) {
            let element = el.split(' directedBy ');
            for (let el of movieList) {
                if (el.name === element[0]) {
                    el.director = element[1]
                }
            }
        }
        if (el.includes('onDate')) {
            let element = el.split(' onDate ');
            for (let el of movieList) {
                if (el.name === (element[0])) {
                    el.date = element[1]
                }
            }
        }

    }
    for (let movieInfo of movieList) {
        if (movieInfo.name && movieInfo.director && movieInfo.date) {
            console.log(JSON.stringify(movieInfo));
        }
    }
}
movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen'])
