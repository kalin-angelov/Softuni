function loadingBar(loading) {

    let percentLoad = '%'.repeat(loading / 10);
    if (loading === 100) {
        console.log(`100% Complete!`);
        console.log(`[${percentLoad}]`);
    } else {
        let percentNeededForFullLoad = (100 - loading) / 10;
        let percentNeeded = '.'.repeat(percentNeededForFullLoad);
        console.log(`${loading}% [${percentLoad}${percentNeeded}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100)
