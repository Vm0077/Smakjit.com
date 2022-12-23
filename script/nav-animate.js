const bar = document.getElementById("bar");
const stack = document.getElementById("button");



bar.style.height = "0px";
stack.onclick = function(){
    openNav();
}





openNav = () => {
    if(bar.style.height == "0px")
    {
        bar.style.height = "50px";
    }
    else{
        bar.style.height = "0px";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let mainBar = document.getElementById("header");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
    bar.style.height = "0px";
    mainBar.style.backgroundColor = "rgb(10,10,10,1)";  
 
  
 
    
  }if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    //bar.style.height = "0px";
    //document.querySelector(".logo").style.height = "0px";
    mainBar.style.position = "fixed";   
    mainBar.style.backgroundColor = "rgb(10,10,10,0.8)";   
   
    mainBar.style.animation='pulldown 300ms ease-in';
  } else {
    mainBar.style.position = "relative";
    mainBar.style.animation='none';
   
  }
}

  
