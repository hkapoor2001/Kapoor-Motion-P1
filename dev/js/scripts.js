import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);


const mainTL = gsap.timeline();

function innerframedraw(){
    const tl = gsap.timeline();
    tl.from("#innerframe",{duration:0.5, alpha:0})
    .to("#innerframe",{duration:0.5, alpha:1})
    //gsap.from("#innerframe",{duration: 2.2, drawSVG: "0%", ease: "none"})
    return tl;
}



function drawpaintinglines(){
    const tl = gsap.timeline();
    tl.from(".painting1class",{duration:0.25, drawSVG: "0%", stagger:"-50%" , ease: "none"})
    .to("#painting1",{rotation: "90_short", ease: "none", transformOrigin: "50% 50%"})
    return tl;
}


function rotate(){
    const tl = gsap.timeline();
    tl.from(".painting1class",{duration:0.25, drawSVG: "0%", ease: "none"})
    .to("#painting1",{rotation: "90_short", ease: "none", transformOrigin: "50% 50%"})

    tl.to("#innerframe",{rotation: "90_short", ease: "none", transformOrigin: "50% 50%"})

    tl.to("#outerframe",{rotation: "90_short", ease: "none", transformOrigin: "50% 50%"})
    return tl;
}

// function drawpainting1line1(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line1",{duration:1, drawSVG: "0%", delay:2.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line2(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line2",{duration:1, drawSVG: "0%", delay:3.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line3(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line3",{duration:1, drawSVG: "0%", delay:4.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line4(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line4",{duration:1.5, drawSVG: "0%", delay:5.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line5(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line5",{duration:.6, drawSVG: "0%", delay:7, ease: "none"})
//     return tl;
// }

// function drawpainting1line6(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line6",{duration:.6, drawSVG: "0%", delay:5.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line7(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line7",{duration:.6, drawSVG: "0%", delay:6.1, ease: "none"})
//     return tl;
// }

// function drawpainting1line8(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line8",{duration:.6, drawSVG: "0%", delay:6.7, ease: "none"})
//     return tl;
// }


// function drawpainting1line9(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line9",{duration:.6, drawSVG: "0%", delay:7.3, ease: "none"})
//     return tl;
// }

// function drawpainting1line10(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line10",{duration:.6, drawSVG: "0%", delay:7.9, ease: "none"})
//     return tl;
// }

// function drawpainting1line11(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line11",{duration:.6, drawSVG: "0%", delay:8.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line12(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line12",{duration:.6, drawSVG: "0%", delay:9.1, ease: "none"})
//     return tl;
// }

// function drawpainting1line13(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line13",{duration:.6, drawSVG: "0%", delay:9.7, ease: "none"})
//     return tl;
// }

// function drawpainting1line14(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line14",{duration:.6, drawSVG: "0%", delay:10.3, ease: "none"})
//     return tl;
// }

// function drawpainting1line15(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line15",{duration:.6, drawSVG: "0%", delay:10.9, ease: "none"})
//     return tl;
// }

// function drawpainting1line16(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line16",{duration:.6, drawSVG: "0%", delay:11.5, ease: "none"})
//     return tl;
// }

// function drawpainting1line17(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line17",{duration:.6, drawSVG: "0%", delay:12.1, ease: "none"})
//     return tl;
// }

// function drawpainting1line18(){
//     const tl = gsap.timeline();
    
//     gsap.from("#line18",{duration:.6, drawSVG: "0%", delay:12.1, ease: "none"})
//     return tl;
// }

// function rotateinnerframe(){
//     const tl = gsap.timeline();
    
//     gsap.from("#innerframe",{rotate: "90, 50, 50", delay:12.1, ease: "none", transformOrigin:"50% 50%"})
//     return tl;
// }

// function rotateouterframe(){
//     const tl = gsap.timeline();
    
//     gsap.from("#outerframe",{rotate: "90, 50, 50", delay:12.1, ease: "none", transformOrigin:"50% 50%"})
//     return tl;
// }

// function rotatepainting1(){
//     const tl = gsap.timeline();
    
//     gsap.from("#painting1",{rotation: "90", delay:12.1, ease: "none", transformOrigin:"50% 50%",xPercent:-50, yPercent:-50})
//     return tl;
// }




mainTL.add(innerframedraw())
      .add(rotate())


GSDevTools.create();
