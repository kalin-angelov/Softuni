function lockedProfile() {

    let firstProfileCondition = document.getElementsByName("user1Locked");
    let secondProfileCondition = document.getElementsByName("user2Locked");
    let thirdProfileCondition = document.getElementsByName("user3Locked");
    let firstProfile = document.getElementById("user1HiddenFields");
    let secondProfile = document.getElementById("user2HiddenFields");
    let thirdProfile = document.getElementById("user3HiddenFields");
    let firstProfileButton = document.getElementsByTagName("button")[0];
    let secondProfileButton = document.getElementsByTagName("button")[1];
    let thirdProfileButton = document.getElementsByTagName("button")[2];
    firstProfileButton.addEventListener('click', showMeFirstProfileInfo);
    secondProfileButton.addEventListener('click', showMeSecondProfileInfo);
    thirdProfileButton.addEventListener('click', showMeThirdProfileInfo);
   
    function showMeFirstProfileInfo() {

        
        if (firstProfileCondition[0].checked){
            return
        } 

        if(firstProfile.style.display === 'none' || firstProfile.style.display === '') {
            firstProfile.style.display = 'block';
            firstProfileButton.innerText = 'Hide it';
        } else {
            firstProfile.style.display = 'none';
            firstProfileButton.innerText = 'Show more';
        }
    }

    function showMeSecondProfileInfo() {

        if (secondProfileCondition[0].checked){
            return
        } 

        if(secondProfile.style.display === 'none' || secondProfile.style.display === '') {
            secondProfile.style.display = 'block';
            secondProfileButton.innerText = 'Hide it';
        } else {
            secondProfile.style.display = 'none';
            secondProfileButton.innerText = 'Show more';
        }
    }

    function showMeThirdProfileInfo() {

        if (thirdProfileCondition[0].checked){
            return
        } 

        if(thirdProfile.style.display === 'none' || thirdProfile.style.display === '') {
            thirdProfile.style.display = 'block';
            thirdProfileButton.innerText = 'Hide it';
        } else {
            thirdProfile.style.display = 'none';
            thirdProfileButton.innerText = 'Show more';
        }
    }
    
    // console.log('TODO...')
}
