function validate() {

    let input = document.getElementById("email");
    input.addEventListener("change", changeMe);

    function changeMe() {

        let regExp = /^([a-z]+)\@([a-z]+)\.([a-z]+)$/gm;
        let text = input.value;

        !regExp.test(text) ? input.classList.add('error') : input.classList.remove('error');
    }
    // TODO
}
