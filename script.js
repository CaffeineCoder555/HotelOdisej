// function loco(){
//     gsap.registerPlugin(ScrollTrigger);
  
//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//   });
  
  
  
//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
  
//   }
//   loco()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type:"fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

var tl = gsap.timeline();

tl.from("#page1 svg",{
    opacity: 0,
    top: "-20%",
    scale: 0.1,
    duration: 0.3,
    // delay: 0.2
})

tl.from("#page1 img",{
    scale: 0.5,
    duration: 0.5,
    borderRadius: "20px"
})

tl.from("#nav",{
    top: "-10%",
    opacity:0
    // stagger: 0.3
})

tl.from("#navpart2 button",{
    y:"-100px",
    opacity:0,
    stagger:0.3,
    // duration:0.3
})


var h2data = document.querySelectorAll("#page2 h2")
h2data.forEach(function(elem){
    var textdata = elem.textContent;
    var splitedtext = textdata.split("");
    var clutter = "";
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`
    }) ;
    elem.innerHTML = clutter;
})

gsap.to("#page2 h2 span",{
    color: "#E3E3C4",
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#text-container",
        scroller:"body",
        // markers: true,
        start: "top 75%",
        end: "top 5%",
        scrub:1,
    }
})

gsap.to("#page2 #svg2, #page2 #svg3 ",{
    left: "-50vw",
    scrollTrigger:{
        trigger: "#page2 #svg2",
        scroller: "body",
        scrub:true,
        // markers:true
    }
})

var h2dataa = document.querySelectorAll("#page3 #text-container3 h2")
h2dataa.forEach(function(elemm){
    var textdataa = elemm.textContent;
    var splitedtextt = textdataa.split("");
    var clutterr = "";
    splitedtextt.forEach(function(ee){
        clutterr += `<span>${ee}</span>`
    }) ;
    elemm.innerHTML = clutterr;
})

gsap.to("#page3 h2 span",{
    color: "#434B34",
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#text-container3",
        scroller:"body",
        // markers: true,
        start: "top 55%",
        end: "top -5%",
        scrub:1,
    }
})

var tll = gsap.timeline();

tll.from("#text, #text-container3, #img2r,#img1r,#imgl",{
    bottom: "-3%",
    opacity:0,
    stagger:0.4,
    y:50,
    scrollTrigger:{
        trigger: "#images-container3",
        scroll:"body",
        // markers:true,
        start: "top 85%",
        end:"top 0%",
        scrub:1
    }
})


gsap.to("#page6 #svgg, #page6 #svggg ",{
    left: "-50vw",
    scrollTrigger:{
        trigger: "#page6 #svgg",
        scroller: "body",
        scrub:true,
        // markers:true
    }
})

gsap.to("#page6 #svg1, #page6 #svg2",{
    left: "-100vw",
    scrollTrigger:{
        trigger: "#page6 #svg1",
        scroller: "body",
        scrub:true,
        // markers:true
    }
})


var page6h2data = document.querySelectorAll("#page6 h2")
page6h2data.forEach(function(hi){
    var text = hi.textContent;
    var splitedtext = text.split("");
    var page6clutter = "";
    splitedtext.forEach(function(s){
        page6clutter += `<span>${s}</span>`
    }) ;
    hi.innerHTML = page6clutter;
})

gsap.to("#page6 h2 span",{
    color: "#E3E3C4",
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#container6-text",
        scroller:"body",
        // markers: true,
        start: "top 75%",
        end: "top 5%",
        scrub:1,
    }
})


gsap.from("#page6 h6, #card61, #page6 a",{
    bottom: "-3%",
    opacity:0,
    stagger:0.4,
    y:50,
    scrollTrigger:{
        trigger: "#option-page6",
        scroll:"body",
        // markers:true,
        start: "top 85%",
        end:"top 0%",
        scrub:1
    }
})


var page7h2data = document.querySelectorAll("#page7 h2")
page7h2data.forEach(function(hi7){
    var text7 = hi7.textContent;
    var splitedtext = text7.split("");
    var page7clutter = "";
    splitedtext.forEach(function(s7){
        page7clutter += `<span>${s7}</span>`
    }) ;
    hi7.innerHTML = page7clutter;
})

gsap.to("#page7 h2 span",{
    color: "#434B34",
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#container7-text",
        scroller:"body",
        // markers: true,
        start: "top 75%",
        end: "top 5%",
        scrub:1,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page8-left",
        scroller:"body",
        start:"top 55%",
        end:"top 35%",
        scrub:3,
        // markers:true
    }
});

tl2.to("#page8-left",{
    transform:"translateX(-30%)",
    duration:1,
},"hanuman")

tl2.to("#page8-right",{
    transform:"translateX(30%)",
    duration:1,
},"hanuman")

tl2.from("#page8-center",{
    transform:"translateY(20%)",
    duration:1,
    opacity:0
},"hanuman")

var p10h2data = document.querySelectorAll("#page10 h2")
p10h2data.forEach(function(sa){
    var p10textdata = sa.textContent;
    var splitedtext = p10textdata.split("");
    var devide = "";
    splitedtext.forEach(function(f){
        devide += `<span>${f}</span>`
    }) ;
    sa.innerHTML = devide;
})

gsap.to("#page10 h2 span",{
    color: "#E3E3C4",
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#text-container-page10",
        scroller:"body",
        // markers: true,
        start: "top 75%",
        end: "top 5%",
        scrub:1,
    }
})

var tl_page10 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page10 ",
        scroller:"body",
        start:"top 100%",
        end:"top -5%",
        scrub:1,
        // markers:true
    }
})

tl_page10.from("#page10 #svgg",{
    left: "-50vh",  
},"page10")

tl_page10.from("#page10 #svggg",{
    left: "-30vh",  
},"page10")

var tl_page102 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page10 ",
        scroller:"body",
        start:"top 40%",
        end:"top -120%",
        scrub:1,
        // markers:true
    }
})

tl_page102.from("#text-container-page10 p",{
    opacity: 0,
    transform:"translateY(20vh)",
    duration:1
})

tl_page102.from("#img_101",{
    opacity: 0,
    transform:"translateY(20vh)",
    duration:1
},"10img")

tl_page102.from("#img_102",{
    opacity: 0,
    transform:"translateY(20vh)",
    duration:1
},"10img")

tl_page102.from("#img_103",{
    opacity: 0,
    transform:"translateY(90%)",
    duration:1
},"10img")

tl_page102.from("#page10-explore",{
    opacity:0,
    transform:"translateY(90%)",
    duration:1
})

tl_page11 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page11",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:1,
        // markers:true
    }
})

tl_page11.from("#p11-para",{
    opacity:0,
   transform:"translateY(90%)",
    duration:1
})

tl_page11.from("#page11_img_text img",{
    opacity:0,  
    transform:'translateY(50%)',
    duration:2
},'page11imgtext')

tl_page11.from("#page11_img_text_container",{
    opacity:0, transform:"translateY(50%)", duration:2 
},'page11imgtext')


tl_page11.from("#page11_img_text2 img",{
    opacity:0,  
    transform:'translateY(50%)',
    duration:1
},'page11imgtext2')

tl_page11.from("#page11_img_text_container2",{
    opacity:0, transform:"translateY(50%)", duration:1 
},'page11imgtext2')

var page12 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page12",
        scroller:"body",
        start:"top 20%",
        end:"top -5%",
        scrub:1,
        // markers:true
    }
})

page12.from("#book_now",{
    transform:"translateY(90%)",
    opacity:0,
    duration:2
})

page12.from("#page12 h1",{
    transform:"translateY(90%)",
    opacity:0,
    duration:1
},"page12")

page12.from("#page12-explore ",{
    transform:"translateY(90%)",
    opacity:0,
    duration:1
},"page12")