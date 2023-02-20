let nameError = document.getElementById('name_error')
let phoneError = document.getElementById('phone_error')
let webError = document.getElementById('web_error')
let passError = document.getElementById('pass_error')
let cnfPassError = document.getElementById('cnfPass_error')



function validateName() {
    let name = document.getElementById('name').value

    if (name.length == '' || name.length == null) {
        nameError.innerHTML = "Name is Required"
        return false;
    } else if (!name.match(/^[A-Za-z]*\s[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name"
        return false;
    } else {
        nameError.innerHTML = ""
        return true;
    }
}
function validatePhone() {
    let phone = document.getElementById('phone').value

    if (phone.length == '' || phone.length == null) {
        phoneError.innerHTML = "Phone Number is Required"
        return false;

    } else if (phone.length != 10) {
        phoneError.innerHTML = "Phone Should be 10 Characters"
        return false;

    } else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone Number is Required"
        return false;

    } else {
        phoneError.innerHTML = ""
        return true;
    }
}

function validateWeb() {
    let web = document.getElementById('web').value

    if (web.length == '' || web.length == null) {
        webError.innerHTML = "Website is Required"
        return false;
    } else if (!web.match(/^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)) {
        webError.innerHTML = "Website Link is Not Valid"
        return false;
    } else {
        webError.innerHTML = ""
        return true;
    }
}

function validatePass() {
    let pass = document.getElementById('pass').value
    if (pass.length == '' || pass.length == null) {
        passError.innerHTML = "Password is Required"
        return false;
    } else if (pass.length < 8) {
        passError.innerHTML = "Password Should be 8 Character long"
        return false;
    } else if (!pass.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)) {
        passError.innerHTML = "Password should be, 1 Capital Letter, 1 Number, 1 Special Character"
        return false;
    } else {
        passError.innerHTML = ""
        return true;
    }

}

function validateConfPass(){
    let pass = document.getElementById('pass').value
    let cnfPass = document.getElementById('cnfPass').value

    if(cnfPass.length =='' || cnfPass.length==null){
        cnfPassError.innerHTML = "Password is Required"
        return false;
    }else if(pass != cnfPass){
        cnfPassError.innerHTML = "Password does nat match"
        return false;
    }else{
        cnfPassError.innerHTML = ""
        return true;

    }

}


let submit = document.getElementById("submit")

submit.addEventListener("click",(e)=>{
    if(validateName() && validatePass() && validatePhone() && validateWeb() && validateConfPass()){
        console.log("Everthing is ok")
    }else{
    e.preventDefault();

    }
})



