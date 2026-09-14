let minicircle = document.querySelector(".minicircle");
let main = document.querySelector("#main")


main.addEventListener("mousemove",(dets)=>{
  console.log(dets.x);
      gsap.to(minicircle,{
           x:dets.x,
           y:dets.y,
           ease: "back.out(3)",
      })
})

gsap.from("#nav",{
  opacity:0,
   y:-30,
   duration:1,
   delay:0.3,
})
let tl = gsap.timeline();

tl.from("#heading",{
    opacity:0,
    x:100,
    duration:1,
    delay:0.5
})
tl.from(".blocktext",{
    opacity:0,
    x:100,
    duration:1,
})
tl.from(".leftsmalltxt",{
    x:-50,
    opacity:0
})
tl.from(".span1",{
    opacity:0,
    y:100,
    duration:0.3,
    color:"blue"
})

tl.from(".span2",{
    opacity:0,
    y:100,
    duration:0.3,
    color:"blue"
})
tl.from(".span3",{
    opacity:0,
    y:100,
    duration:0.3,
    color:"blue"
})

tl.from(".box1",{
    x:-50,
    opacity:0
})
tl.from(".box2",{
    x:-50,
    opacity:0
})
tl.from(".box3",{
    x:-50,
    opacity:0
})

//SECOND PAGE

gsap.from(".elem-1 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".elem-1 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        scrub:true
    }
})
gsap.from(".elem-1 h5",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".elem-1 h5",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        scrub:true
    }
})
gsap.from(".elem-2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".elem-1 h1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        scrub:true
    }
})
gsap.from(".elem-2 h5",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".elem-1 h5",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        scrub:true
    }
})
gsap.from(".elem-3 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".elem-1 h1",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        scrub:true
    }
})
gsap.from(".elem-3 h5",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".elem-1 h5",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        scrub:true
    }
})
gsap.from(".elem-4 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".elem-1 h1",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        scrub:true
        
    }
})
gsap.from(".elem-4 h5",{
    opacity:0,
    duration:2,
   
    scrollTrigger:{
        trigger:".elem-1 h5",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        scrub:true
    }
})



// profile  About section

gsap.from(".about img",{
    scale:0.1,
    scrollTrigger:{
        trigger:".about img",
        scroller: "body",
        // markers:true,
        scrub:true,
        start: "top 110%",
        end:"top 80"
    }
})

gsap.from(".about .about_text",{
    y:100,
    opacity:0,
    duration:0.5  ,
    scrollTrigger:{
        trigger:".about .about_text",
        scroller:"body",
        start:"top 120%",
        end: "top 80",
        scrub:true,
    }
})
