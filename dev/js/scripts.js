import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const mainTL = gsap.timeline();

function drawinnerframe(){
    const tl = gsap.timeline();
    tl.from("#innerframe", {drawSVG:"100%"}, {duration: 1})
    return tl;
}

function drawouterframe(){
    const tl = gsap.timeline();
    tl.from("#outerframe", {drawSVG:"100%"}, {duration: 20})
    return tl;
}

function drawpainting(){
    const tl = gsap.timeline();
    tl.from("#painting1", {drawSVG:"100%"}, {duration: 5})
    return tl;
}

mainTL.add(drawinnerframe(),"same")
.add(drawouterframe, "same")
.add(drawpainting, "same");













//const mainTL = gsap.timeline();

//mainTL.from("#logo",{duration:1.3, alpha:1, y:"+=50", x:-"=0", scale:1, ease:"bounce"})

//mainTL.from("#experienceart",{duration:.8, alpha:.5, y:"-=200", x:"=+5000", scale:3})

//mainTL.from("#herologo",{duration:1.2, alpha:0, y:"+=100", x:"=+500", scale:1.5, ease:"bounce"})
