function foreignLanguages (language) {

    if (language === 'USA' || language === 'England') {
        console.log ('English');
    } else if (language === 'Spain' || language === 'Argentina' || language === 'Mexico') {
        console.log ('Spanish');
    } else {
        console.log('unknown')
    }
}
foreignLanguages('USA')
