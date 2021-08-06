// validasi nama
const nameRef = document.getElementById("name");
const nameErrorRef=document.getElementById("nameerror");
function validateName()
{
    const name=nameRef.value;
    if(name.length == 0)
    {
        nameErrorRef.innerHTML = "Name cannot be empty!";
        nameRef.classList.add("error-message");
        return false;
    }

    nameErrorRef.innerHTML="";
    nameRef.classList.remove("error-message");
    return true;
}
nameRef.addEventListener("change", ()=>
{
    validateName();
});


// validasi email
const emailRef=document.getElementById("email");
const emailErrorRef=document.getElementById("emailerror");

function validateEmail()
{
    const email=emailRef.value;
    if(!email.includes("@") )
    {
        emailErrorRef.innerHTML= "Email must contain @ and .!"; 
        emailRef.classList.add("error-message");
        return false;
    }else if(!email.toLowerCase().includes(".")){
        emailErrorRef.innerHTML= "Email must contain @ and .!";
        emailRef.classList.add("error-message");
        return false;
    }
    emailErrorRef.innerHTML="";
    emailRef.classList.remove("error-message");
    return true;
}
emailRef.addEventListener("change", ()=>
{
    validateEmail();
});

//validasi age
const ageRef=document.getElementById("age");
const ageErrorRef=document.getElementById("ageerror");
function validateAge(){
    const age = ageRef.value;
    if(age<5){
        ageErrorRef.innerHTML = "Age must be between 5-100!";
        ageRef.classList.add("error-message");
        return false;
    }else if(age>100){
        ageErrorRef.innerHTML = "Age must be between 5-100!";
        ageRef.classList.add("error-message");
        return false;
    }
    ageErrorRef.innerHTML="";
    ageRef.classList.remove("error-message");
    return true;
}
ageRef.addEventListener("change", ()=>
{
    validateAge();
});

//validasi gender
const maleRef=document.getElementById("male");
const femaleRef=document.getElementById("female");
const genderErrorRef=document.getElementById("gendererror");

function validateGender(){
    const male=maleRef.checked;
    const female=femaleRef.checked;
    if(!male && !female)
    {
        genderErrorRef.innerHTML="You must choose a gender!";
        return false;
    }
    genderErrorRef.innerHTML="";
    return true;
}
maleRef.addEventListener("change", ()=>
{
    validateGender();
});
femaleRef.addEventListener("change", ()=>
{
    validateGender();
});


//validasi message
const messageRef=document.getElementById("messages");
const messageErrorRef=document.getElementById("messageserror")
function validateMessage()
{
    const message=messageRef.value;
    if(message.length < 20)
    {
        messageErrorRef.innerHTML = "Message must be at least 20 characters!";
        messageRef.classList.add("error-message");
        return false;
    }
    messageErrorRef.innerHTML="";
    messageRef.classList.remove("error-message");
    return true;
}
messageRef.addEventListener("change", ()=>
{
    validateMessage();
});

//validasi tos
const termsRef = document.getElementById("terms")
const termsErrorRef = document.getElementById("termserror")
function validateTerms(){
    if(termsRef.checked){
        termsErrorRef.innerHTML="";
        return true;
    }
    termsErrorRef.innerHTML="You must agree to Terms & condition";
    return false;
}
termsRef.addEventListener("change", ()=>
{
    validateTerms();
});

//validasi branch
const branchRef=document.getElementById("branch")
const branchErrorRef=document.getElementById("brancherror")
function validateBranch()
{
    if(!branchRef.value)
    {
        branchErrorRef.innerHTML="You must select one of our branch";
        return false;
    }
    branchErrorRef.innerHTML="";
    return true;
}
branchRef.addEventListener("change", ()=>
{
    validateBranch();
});

/////////////////submit form///////////////

const formRef=document.getElementById("contact-form");
formRef.addEventListener("submit", (event)=>
{
    validateName();
    validateEmail();
    validateAge();
    validateGender();
    validateMessage();
    validateTerms();
    validateBranch();
    if(validateName() && validateEmail() && validateAge() && validateMessage() && validateTerms() && validateBranch() && validateGender())
    {
        return;
    }
    
  
    

    event.preventDefault();
});

