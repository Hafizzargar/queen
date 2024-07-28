


let loginContainer=document.querySelector('.login-container');
let toggleButton=document.getElementById("toggleButton");
let left=document.getElementById("left");
let initbu=document.querySelector("#init>button");
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

