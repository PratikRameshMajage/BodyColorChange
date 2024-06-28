function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function bodyColorChange(){
    document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);   
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);   
        },
    })
})
}

loco();
bodyColorChange();