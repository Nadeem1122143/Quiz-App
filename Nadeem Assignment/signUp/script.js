

let formField=document.querySelectorAll("form input");
// console.log(formField);      //formField array ki surat ma mil ma print ho raha hy to is ko hum destructure kar skta hy


const [userName,userEmail,userPassword,userPic]=formField; 
let imgUrl='';
// console.log(userName,userEmail,userPassword); // input mil gai to .value sy value mil jati hy
let userArrayData=[];
let signup=()=>{

    event.preventDefault();
    if(userName.value!==''&&userEmail.value!==''&&userPassword.value!==''){
        let obj={
            signupUserName:userName.value,
            signupUserEmail:userEmail.value,
            signupUserPassword:userPassword.value,
            userProfile:imgUrl,
        }    
        userArrayData.push(obj)
        localStorage.setItem("userData",JSON.stringify(obj))
        window.location.href='../signIn/index.html'

        // console.log(userArrayData);
    // console.log(userName.value,userEmail.value,userPassword.value); //i
}else{
    alert("Please Enter Values")
}

}



const uploadImage=()=>{
    let img=userPic.files[0]; 
    console.log(userPic,img);
    let fileRead=new FileReader();   
    fileRead.readAsDataURL(img)  
    fileRead.onload=()=>{  
        imgUrl=fileRead.result
    //   console.log(fileRead.result); 
    }

}
