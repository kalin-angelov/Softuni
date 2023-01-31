function constructionCrew(workerInfo) {
      
    if (workerInfo.dizziness === true) {
        
        let neededWater = 0.1 * workerInfo.weight * workerInfo.experience;
        workerInfo.levelOfHydrated = workerInfo.levelOfHydrated + neededWater;
        workerInfo.dizziness = false;
    }

    return (workerInfo);

}
console.log(constructionCrew({ 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
