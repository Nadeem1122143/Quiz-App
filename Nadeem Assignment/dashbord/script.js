
const data=JSON.parse(localStorage.getItem('userData'))
let nameIcon=document.getElementById('name')
let image=document.getElementById('img')

const showData=()=>{
    // console.log(data);
    const{signupUserName,userProfile}=data;
    nameIcon.innerHTML=signupUserName;
    image.src=userProfile;
}
showData();



const logout=()=>{
    localStorage.clear();
    window.location.href='../signUp/index.html';
}
