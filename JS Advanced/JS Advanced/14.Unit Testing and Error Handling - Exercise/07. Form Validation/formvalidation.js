function validate() {

    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", submitMyInfo);
    let companyCheckbox = document.querySelector("#company");
    companyCheckbox.addEventListener("change", checkboxOnOrOff);

    function checkboxOnOrOff(e) {
        if (e.target.checked) {
            document.getElementById("companyInfo").style.display = "block";
        } else {
            document.getElementById("companyInfo").style.display = "none";
        }
    }
    
    function submitMyInfo(e) {

        e.preventDefault()

        let isValid = [];
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
        let company = document.getElementById("company");
        let regExpUsername = /^[A-Za-z0-9]{3,20}$/gm;
        let regExpPass = /^[\w]{5,15}$/gm;
        let regExpConfirmPassword = /^[\w]{5,15}$/gm;
        let regExpEmail = /^[^@.]+@[^@]*\.[^@]*$/gm;

        if (!regExpUsername.test(username.value)) {
            username.style.borderColor = "red";
            isValid.push(false);
        } else {
            username.style.borderColor = '';
            isValid.push(true);
        } 
        if(!regExpEmail.test(email.value)) {
            email.style.borderColor = 'red';
            isValid.push(false);
        } else {
            email.style.borderColor = '';
            isValid.push(true);
        }
        if (password.value === confirmPassword.value && regExpPass.test(password.value) === true && regExpConfirmPassword.test(confirmPassword.value) === true) {
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
            isValid.push(true);
        } else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid.push(false);
        }
        if (company.checked) {
            let companyNumber = document.getElementById("companyNumber");
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
                isValid.push(false);
            } else {
                companyNumber.style.borderColor = '';
                isValid.push(true);
            }
        }

        if (isValid.includes(false)) {
            document.getElementById("valid").style.display = "none";
        } else {
            document.getElementById("valid").style.display = "block";
        }
       
    }
    // TODO
}
