// typed.js
"use strict";

const typed = document.querySelector('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// Aos

AOS.init({
  offset: 100,
  duration: 600,
  once: false,
});

// tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

ScrollOut({
  targets: '.card2 .txt-box, .card2 .info, .card2 .connection:first-child, .card2 .connection:last-child, .card2 .connection:nth-child(2)'
});

// menu-btn

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    setTimeout(function () {
      $("nav ul").toggleClass("flex-column d-block");
      $(".navbar").toggleClass("d-block");
    }, 50);
  });
});

$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $("nav ul").removeClass("flex-column d-block");
    $(".navbar").removeClass("d-block");
  });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});