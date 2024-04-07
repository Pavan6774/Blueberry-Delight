function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}

locomotiveAnimation();

var centerImg= document.querySelector("#center-img");
var tl = gsap.timeline();

centerImg.addEventListener("mouseenter",function(){
    centerImg.addEventListener("mousemove",function(dets){
        gsap.to("#center-img>img",{
            right:-20,
            rotate:-4,
            duration:1,
            
           })
    })
    centerImg.addEventListener("mouseleave",function(dets){
        gsap.to("#center-img>img",{
            right:0,
            rotate:0,
            duration:1,
           })
    })
})

tl.to("#page1>img",{
    y:-100,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page1>img",
        scroller:"#main",
        start: "top 40%",
        end: "top 0%",
        scrub:2,
        // markers:true
    }
})

tl.to("#blur-img2-container>img",{
    y:-200,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#blur-img2-container>img",
        scroller:"#main",
        start: "top 90%",
        end: "top 40%",
        scrub:2,
        // markers:true
    }
})

tl.to("#carasole",{

  transform: "translateX(-250%)",
  stagger:0.1,
  duration:5,
  scrollTrigger:{
    trigger:"#carasole",
    scroller:"#main",
    // markers:true,
    start:"top 24%",
    end:"top 15%",
    scrub:2,
   
  }

})


tl.to("#carasole>h1",{
  transform: "translateX(-150%)",
  stagger:0.1,
  duration:5,
  scrollTrigger:{
    trigger:"#carasole",
    scroller:"#main",
    // markers:true,
    start:"top 24%",
    end:"top 22%",
    scrub:2,
   
  }

})





tl.to("#page3>.bowl",{
  scale:1.5,
  duration:4,
  delay:1,
  scrollTrigger:{
 trigger:"#page3>.bowl",
 scroller:"#main",
//  markers:true,
 start:"top 60%",
 end:"top 50%",
 scrub:2,
//  pin:true
  }
})
tl.to("#page3>.bowl-blur1",{
  x:150,
  
  scrollTrigger:{
    trigger:"#page3>.bowl-blur1",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top 30%",
    scrub:2
  }
})
gsap.to("#page3>.bowl-blur2",{
  x:-350,
  duration:4,
  delay:2,
  scrollTrigger:{
    trigger:"#page3>.bowl-blur2",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 60%",
    scrub:2,
    
  }
})

var hamburger = document.querySelector("#nav>h4");

hamburger.addEventListener("click", function()
{
  gsap.to("#nav-2",{
    left:"50vw"
  })


});


var closeBtn = document.querySelector("#nav-2>h4");
closeBtn.addEventListener("click",function(){
  gsap.to("#nav-2",{
    left:"100vw"
  })
})

Shery.makeMagnet("#nav>h3,#nav>img" /* Element to target.*/, {
  
});

