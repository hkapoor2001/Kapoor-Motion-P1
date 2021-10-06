import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#logo",{duration:1.3, alpha:1, y:"+=50", x:-"=0", scale:1, ease:"bounce"})

mainTL.from("#experienceart",{duration:.8, alpha:.5, y:"-=200", x:"=+5000", scale:3})

mainTL.from("#herologo",{duration:1.2, alpha:0, y:"+=100", x:"=+500", scale:1.5, ease:"bounce"})
