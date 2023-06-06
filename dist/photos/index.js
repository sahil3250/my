const gallery = document.querySelector('.container');
const rec = document.querySelectorAll('.rec');



gallery.onmousemove = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;
    
    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;
    
    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;
    
    const panX = maxX * xDecimal * -1,
          panY = maxY * yDecimal * -1;

    gallery.animate({
      transform: `translate(${panX}px, ${panY}px)`
    }, {
      duration: 2000,
      fill: "forwards",
      easing: "ease"
    })
   
  
  }
 
  const maxColor = 16777215;


  gallery.onmousedown = e =>
  {
   
    rec.forEach((rec) => {

        let color = "#" + Math.floor(Math.random() * maxColor).toString(16);
      
          rec.style.backgroundColor = color ;

        });

       
  }