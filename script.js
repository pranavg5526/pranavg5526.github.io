/* Pranav Ghorpade — site interactions. No dependencies.
   Theme + reveal state are set synchronously in the <head>; this file
   handles the toggle button, the news expander, scrollspy, and reveals. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- Colour theme toggle ---------------------------------------- */
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---- News expander ---------------------------------------------- */
  var newsToggle = document.getElementById("news-toggle");
  var newsMore = document.getElementById("news-more");
  if (newsToggle && newsMore) {
    newsToggle.addEventListener("click", function () {
      var willOpen = newsMore.hasAttribute("hidden");
      if (willOpen) {
        newsMore.removeAttribute("hidden");
        newsToggle.setAttribute("aria-expanded", "true");
        newsToggle.textContent = "Show less";
      } else {
        newsMore.setAttribute("hidden", "");
        newsToggle.setAttribute("aria-expanded", "false");
        newsToggle.textContent = "Show earlier news";
      }
    });
  }

  /* ---- Scrollspy: highlight the section currently in view ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var map = {};
  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (document.getElementById(id)) map[id] = link;
  });
  var sections = Object.keys(map).map(function (id) { return document.getElementById(id); });

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          if (map[entry.target.id]) map[entry.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Subtle reveal on first view (only if .js and not .no-reveal) */
  if (root.classList.contains("js") && !root.classList.contains("no-reveal")) {
    var targets = Array.prototype.slice.call(
      document.querySelectorAll(".block, .about-photo")
    );
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
