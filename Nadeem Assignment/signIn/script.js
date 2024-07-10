
let formField=document.querySelectorAll("form input");
// console.log(formField);      //formField array ki surat ma mil ma print ho raha hy to is ko hum destructure kar skta hy


const [loginEmail,loginPassword]=formField;

const data=JSON.parse(localStorage.getItem('userData'))  // pehly ye string ma hum ny svae krya tha ab is ko wapis obj ma conrt kiya jab obj mil gya to desture kr skty hy userData wo obj hy jo signup kkrty hoye store kiya tha 

    
let login=()=>{
    event.preventDefault();
    const{signupUserEmail,signupUserPassword}=data   //ye obj ko destructure kra diya 

    if(signupUserEmail===loginEmail.value&&
        signupUserPassword===loginPassword.value){
        alert("You are Succesfully Login")
        window.location.href='../dashbord/index.html'
    }
    else{
        alert("Invalid Credentials")
    }
    // console.log(signupUserEmail,signupUserPassword); // ye wo data hy jo hum ny localstorage sy liya hy signup krty time
    // console.log(loginEmail.value ,loginPassword.value);  //ye wo data hy jo hum ny login krty wqt input kiya hy
    
    // console.log(data);
}
