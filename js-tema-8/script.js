const valideForm = () => {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const errorUsername = document.getElementById('errorUsername');
    const errorEmail = document.getElementById('errorEmail');
    const errorFname = document.getElementById('errorFname');
    const errorLname = document.getElementById('errorLname');
    const errorPhone = document.getElementById('errorPhone');

    if (username.value.length < 4) {
        errorUsername.style.padding = '10px 0px';
        errorUsername.style.width = '402px';
        errorUsername.style.border = '1px solid red';
        errorUsername.style.backgroundColor = 'pink';
        errorUsername.innerHTML = 'Please enter a username.';
        
    } 

    if (email.value.length == 0) {
        errorEmail.style.padding = '10px 0px';
        errorEmail.style.width = '402px';
        errorEmail.style.border = '1px solid red';
        errorEmail.style.backgroundColor = 'pink';
        errorEmail.innerHTML = 'Please enter an Email.';
    } 
    
    if (firstName.value.length == 0) {
        errorFname.style.padding = '10px 0px';
        errorFname.style.width = '402px';
        errorFname.style.border = '1px solid red';
        errorFname.style.backgroundColor = 'pink';
        errorFname.innerHTML = 'Please enter a First Name.';  
    }
    
    if (lastName.value.length == 0) {
        errorLname.style.padding = '10px 0px';
        errorLname.style.width = '402px';
        errorLname.style.border = '1px solid red';
        errorLname.style.backgroundColor = 'pink';
        errorLname.innerHTML = 'Please enter a Last Name.';
    }
    
    if (phone.value.length < 10) {
        errorPhone.style.padding = '10px 0px';
        errorPhone.style.width = '402px';
        errorPhone.style.border = '1px solid red';
        errorPhone.style.backgroundColor = 'pink';
        errorPhone.innerHTML = 'Please enter a Phone.';
    }
}
