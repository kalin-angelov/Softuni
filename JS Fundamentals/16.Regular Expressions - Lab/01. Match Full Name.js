function matchFullName(input) {

    let regexp = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let match = input.match(regexp);
    console.log(match.join(' ')); 
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
