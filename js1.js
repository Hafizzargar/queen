


let loginContainer=document.querySelector('.login-container');
let toggleButton=document.getElementById("toggleButton");
let sho=document.getElementById("sho");
let s1=document.getElementById("s1");
let left=document.getElementById("left");
let initbu=document.querySelector("#init>button");
s1.addEventListener('click',()=>{
    if(sho.style.display==='none'){
        sho.style.display='block';

    }else{
        sho.style.display='none';

    }
    
})
function le(e){
    e.style.display="none";
    left.style.display='block';


}

function yes(){
    console.log("show");
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block'; // Show the container
        toggleButton.style.display="none"
    } 
    // else {
    //     loginContainer.style.display = 'none'; // Hide the container
    // }

    
}
function hide(){
    console.log("hide")
    loginContainer.style.display="none"
    toggleButton.style.display="block"
}

