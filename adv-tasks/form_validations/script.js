// form validations

const validateForm = () => {
    console.log("helo")
    let uErr = "!Please added a Username";
    let a = document.frm.uname.value ;
    if( a != null){
        document.getElementById('userHelp').innerHTML = uErr;
    }
}

validateForm();