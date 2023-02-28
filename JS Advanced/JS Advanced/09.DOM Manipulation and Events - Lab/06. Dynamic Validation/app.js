function validate() {

    let input = document.getElementById("email");
    input.addEventListener('change', changeInput);

    function changeInput(e) {
        let email = e.target.value;
        let regExp = /^[a-z]+\@[a-z]+\.[a-z]+$/gm;
        if (!regExp.test(email)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    }
    // console.log('TODO:...');
}
