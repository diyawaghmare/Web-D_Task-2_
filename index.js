let b=document.querySelector('.menubtn');
let a=document.querySelector('.nav2');
// if(){
    a.style.display="none";
    b.addEventListener("click",function(){
        if(a.style.display=="none"){
            a.style.display="block";
        }
        else{
            a.style.display="none";
        }
    });
// }
