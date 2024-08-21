let ev =document.querySelector("button");
// ev.onclick =()=>{
//     console.log("button was clicked");
    
// }
let current="light";
ev.addEventListener("click",()=>{
    if(current ==="light"){
        current="dark";
        document.querySelector("body").style.backgroundColor ="black";
    }
    else{
        current ="light";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(current);

})