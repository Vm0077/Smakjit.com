const bar = document.getElementById("bar");
const button = document.getElementsByClassName("stack");

window.onscroll = 
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
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
  
