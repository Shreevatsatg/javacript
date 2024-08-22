let ev =document.querySelector("button");
// ev.onclick =()=>{
//     console.log("button was clicked");
    
// }
let current="light";
ev.addEventListener("click",()=>{
    if(current ==="light"){
        current="dark";
        document.querySelector("body").style.backgroundColor ="black";
        document.querySelector("button").style.backgroundColor ="black";
        document.querySelector("button").style.color ="white";
    }
    else{
        current ="light";
        document.querySelector("body").style.backgroundColor ="white";
        document.querySelector("button").style.backgroundColor ="white";
        document.querySelector("button").style.colore ="black";
    }
    console.log(current);
})