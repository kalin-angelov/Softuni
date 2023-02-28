function focused() {

    let targets = document.getElementsByTagName("input");

    for (let target of targets) {

        target.addEventListener('focus', focusTarget);
        target.addEventListener('blur', blurTarget);
    }

    function focusTarget(e) {
        e.target.parentElement.classList.add('focused');
    }

    function blurTarget(e) {
        e.target.parentElement.classList.remove('focused');
    }
    // console.log('TODO:...');
}
