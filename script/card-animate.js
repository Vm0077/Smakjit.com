const card = document.querySelectorAll(".grid-element");
const poster = document.querySelectorAll(".objective-information-card-element");
let Ypostion = 0;

for(var i = 0; i<card.length;i++)
{
    card[i].addEventListener("mouseover",function(){
      this.style.animation = "slide 300ms ease-in";
      this.style.transform = "scale(1.05)";
   });
   card[i].addEventListener("mouseout",function(){
    this.style.animation = "slideback 300ms ease-in";
    this.style.transform = "scale(1)";
    
 });

}

function hovering (element)
{
    Ypostion += 1;

    if(Ypostion == 120)
    {
        Ypostion  = 0;
    }
    
    element.forEach(e => {

        setInterval(()=>{ 
            e.style.transform = `translateY(${Ypostion}px)`;
        },500);
       
        
    });
    requestAnimationFrame(hovering(this));
}

hovering(poster);



