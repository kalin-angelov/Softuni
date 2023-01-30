function townPopulation(data) {

    let townInfo = new Map();
    for (let info of data) {
        let [town, population] = info.split(' <-> ');
        if (!townInfo.has(town)) {
            townInfo.set(town, population);
        } else {
            let newPopulationInfo = Number(townInfo.get(town)) + Number(population);
            townInfo.set(town, newPopulationInfo);
        }
    }
    for (let info of townInfo) {
        console.log(`${info[0]} : ${info[1]}`);
    }

}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
