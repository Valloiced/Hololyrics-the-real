$(document).ready(function(){
    let backtotop = gsap.timeline({
        scrollTrigger: {
            trigger: "html",
            start: "10%",
            end: "15%",
            scrub: true,
        }
    })
    
    backtotop.fromTo("#back-to-top", 3, {x: 300}, {x: 0})

    gsap.fromTo("#container", 2, {y: 300}, {y: 0})
})
