// validations

const checkValidationForm = () => {
    let status = 0;
    // by default empty
    document.getElementById('emailErr').innerHTML = '';
    document.getElementById('passErr').innerHTML = '';
   
    let email = document.frm.email.value;
    let password = document.frm.password.value;
    // let status = 0;
    
    
        if(email == ''){
            document.getElementById('emailErr').innerHTML = 'Please enter email'
            status = 1;
        }
    
        if(password == ''){
            document.getElementById('passErr').innerHTML = 'Please enter password'
            status = 1;
        }

        if(status == 0 ){
            return true
        }else{
            return false
        }
}