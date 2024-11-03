function gsapscroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

gsapscroll();

var cursor = document.querySelector(".cursor");
var main = document.querySelector("#main");

document.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x + 10,
    y: dets.y + 10,
    duration: 0.6,
    ease: "back.out",
    display: "flex",
  });
});

var video = document.querySelector(".homevideo video"); // Assuming the video element is inside .homevideo
var cursor = document.querySelector(".cursor"); // Assuming you have a cursor element

video.addEventListener("mouseenter", () => {
  cursor.textContent = "unmute";
  gsap.to(cursor, {
    height: "30px",
    width: "100px",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  });
});

video.addEventListener("mouseleave", () => {
  cursor.textContent = "";
  gsap.to(cursor, {
    height: "2rem",
    width: "2rem",
  });
});

video.addEventListener("click", () => {
  video.muted = !video.muted;
  cursor.textContent = video.muted ? "unmute" : "mute";
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "#main",
    start: "top 40%",
    end: "top 0%",
    scrub: 3,
  },
});
tl.to(
  "#page1 h1",
  {
    x: -100,
  },
  "a"
);
tl.to(
  "#page1 h2",
  {
    x: 100,
  },
  "a"
);
tl.to(
  "#page1 video",
  {
    width: "90%",
  },
  "a"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "#main",
    start: "top -100%",
    end: "top -115%",
    scrub: 3,
  },
});

tl2.to("#main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "#main",
    start: "top -580%",
    end: "top -600%",
    scrub: 3,
  },
});

tl3.to("#main", {
  backgroundColor: "#0f0d0d",
});

var boxes = document.querySelectorAll(".box");

boxes.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    var attr = elem.getAttribute("data-image");
    gsap.to(elem, {
      backgroundColor: "#8d99ae",
      duration: 1,
    });
    gsap.to(cursor, {
      height: "250px",
      width: "350px",
      backgroundImage: `url(${attr})`,
      mixBlendMode: "normal",
      borderRadius: "5px",
      duration: 0.4,
      delay: 0.2,
      backgroundSize: "cover",
      backgroundPosition: "center",
    });
  });
  elem.addEventListener("mouseleave", () => {
    gsap.to(elem, {
      backgroundColor: "transparent",
      duration: 1,
    });
    gsap.to(cursor, {
      height: "2rem", // Reset to original size (example)
      width: "2rem",
      duration: 0.2,
      borderRadius: "50%",
      backgroundImage: `url('')`,
    });
  });
});


