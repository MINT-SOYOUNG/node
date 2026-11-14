(function () {
  "use strict";

  /* ---------- sticky navigation ---------- */
  var nav = document.querySelector(".nav");
  var solidPoint = 40;

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > solidPoint) {
      nav.classList.add("is-solid");
    } else {
      nav.classList.remove("is-solid");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- full screen menu ---------- */
  var burger = document.querySelector(".nav-burger");
  var menu = document.querySelector(".menu");
  var menuClose = document.querySelector(".menu-close");

  function openMenu() {
    if (!menu) return;
    menu.classList.add("is-open");
    document.body.classList.add("menu-open", "is-locked");
    if (burger) burger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open", "is-locked");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }

  if (burger) burger.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  if (menu) {
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(function (other) {
        other.classList.remove("is-open");
        var b = other.querySelector(".faq-q");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- contact form (no backend: confirm locally) ---------- */
  var form = document.querySelector("form.form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) {
        note.textContent =
          "문의가 접수되었습니다. 남겨주신 이메일로 답변드리겠습니다. (stay@northporthotel.kr)";
        note.classList.add("is-shown");
      }
      form.reset();
    });
  }

  /* ---------- year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
