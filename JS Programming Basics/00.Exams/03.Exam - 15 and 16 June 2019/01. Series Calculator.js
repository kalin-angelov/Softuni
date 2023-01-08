function seriesCalculator(input) {

    let nameOfMovie = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let epTime = Number(input[3]);

    let epTimeWithCommercials = epTime * 1.20;
    let oneSeasonInMin = (epTimeWithCommercials * episodes) + 10;
    let allSeasonsInMin = oneSeasonInMin * seasons;

    console.log(`Total time needed to watch the ${nameOfMovie} series is ${Math.floor(allSeasonsInMin)} minutes.`)
}
seriesCalculator(["Lucifer","3","18","55"])
