export const nicolasUtility = {
  imgToSVG() {
    document.querySelectorAll("img.sm_svg:not([data-svg-inlined])").forEach((el) => {
      el.setAttribute("data-svg-inlined", "");
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (!svg) return;

          if (imgID) {
            svg.setAttribute("id", imgID);
          }

          if (imgClass) {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          // Hide the <img> instead of replacing it: React owns that node, and
          // removing it breaks reconciliation on route changes (insertBefore errors)
          if (el.parentNode) {
            el.parentNode.insertBefore(svg, el);
            el.style.display = "none";
          }
        });
    });
  },
  dataImage() {
    let d = document.querySelectorAll("[data-bg-img");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-bg-img"
      )})`;
    }
  },
  animation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({ live: false }).init();
  },
  stickyNav() {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      const stickys = document.querySelectorAll(".nicolas_sm_header");
      stickys.forEach((sticky) => {
        if (sticky) {
          if (offset > 100) {
            sticky.classList.add("opened");
          } else {
            sticky.classList.remove("opened");
          }
        }
      });
    });
  },
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelectorAll(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }
              for (let i = 0; i < pointer.length; i++) {
                const element = pointer[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
  // interactiveImage() {
  //   if (document.querySelectorAll(".nicolas_sm_interactive_list").length) {
  //     var wrapper = document.querySelector(".nicolas_sm_interactive_list");
  //     var wrapperOffsetRight = wrapper.getBoundingClientRect().left;
  //     var inner = wrapper.querySelector(".interactive_list_inner");
  //     var box = document.querySelector(".movingbox");
  //     var list = wrapper.querySelectorAll("li");

  //     box.style.right = wrapperOffsetRight + "px";

  //     list.forEach(function (listItem) {
  //       listItem.addEventListener("mouseenter", function () {
  //         var element = this;
  //         var image = element
  //           .querySelector(".interactive_image")
  //           .getAttribute("src");
  //         box.style.backgroundImage = "url(" + image + ")";
  //       });
  //     });

  //     inner.addEventListener("mouseenter", function () {
  //       this.classList.add("active");
  //     });

  //     inner.addEventListener("mouseleave", function () {
  //       this.classList.remove("active");
  //     });

  //     document.onmousemove = function (event) {
  //       var cursor_y = event.clientY;
  //       box.style.top = cursor_y + "px";
  //     };
  //   }
  // },
  // activeMenuBySection() {
  //   window.addEventListener("scroll", () => {
  //     const sections = document.querySelectorAll(".nicolas_sm_section");
  //     const navLi = document.querySelectorAll(".anchor_nav li");
  //     let current = "";
  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;
  //       if (pageYOffset >= sectionTop - sectionHeight / 3) {
  //         current = section.getAttribute("id");
  //       }
  //     });

  //     navLi.forEach((li) => {
  //       if (current !== null) {
  //         li.classList.remove("current");
  //       }
  //       if (
  //         li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
  //       ) {
  //         li.classList.add("current");
  //       }
  //     });
  //   });
  // },
};
