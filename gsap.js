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
    x:30,
    duration:1,
    delay:0.5
})
tl.from(".blocktext",{
    opacity:0,
    x:30,
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
    x:100,
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
    x:100,
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
    x:100,
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
    x:100,
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



//EFFECTS HOVER

const box = document.querySelector('#nav h3');
const twoLeaves = document.querySelector('.elem-4 a h1');

// Create a paused timeline for the hover state
const t3 = gsap.timeline({ paused: true, reversed: true });


// Define the animation properties
t3.to(box, {
  scale: 1.1,
  cursor:"pointer",
  color: " rgb(75, 187, 236)",
  duration: 0.3,
  ease: 'power1.out'
});

// Play animation on mouse enter
box.addEventListener('mouseenter', () => {
  t3.play();
});

// Reverse animation on mouse leave
box.addEventListener('mouseleave', () => {
  t3.reverse();
});

const t4 = gsap.timeline({ paused: true, reversed: true });
t4.to(twoLeaves, {
   scale: 1.1,
  cursor:"pointer",
  color: " rgb(23, 215, 138)",
  duration: 0.3,
  ease: 'power1.out'
})

twoLeaves.addEventListener("mouseenter",()=>{
    t4.play();
})

twoLeaves.addEventListener('mouseleave', () => {
  t4.reverse();
});


const t5 = gsap.timeline({paused:true, reverse:true});

const button = document.querySelector(".lets-talk");

t5.to(button,{
    borderColor:" rgb(18, 238, 238)",
    duration:0.5,
    scale:1.1,
})

button.addEventListener("mouseenter",()=>{
    t5.play();
})
button.addEventListener("mouseleave",()=>{
    t5.reverse();
})

