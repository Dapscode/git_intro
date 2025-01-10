console.log("Hello, World!");

//////////////////////////////////////////////////
// Set the current year in the footer copyright

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////
// Make mobile nav work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

//////////////////////////////////////////////
// Smooth scrolling animation especially for Safari

// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // scroll back to top
//     if (href == "#") window.scrollTo({ top: 0, behavior: "smooth" });

//     // scroll back to top
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile navigation

//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

////////////////////////////////////////////////
// Smooth scrolling animation for all links

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll to a section within the current page
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Scroll to sections or pages with relative paths
    if (href.includes(".html") || href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path && window.location.pathname.endsWith(path)) {
        // If the link is for the current page, handle the hash
        if (hash) {
          const targetEl = document.querySelector(`#${hash}`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (path) {
        // If the link is for a different page, navigate there
        window.location.href = href;
      }
    }

    // Close mobile navigation if the link has the class "main-nav-link"
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
