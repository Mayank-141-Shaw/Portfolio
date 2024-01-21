function trail_light() {
  let trail_light = document.getElementById("trail-light");
  let light = trail_light.firstElementChild;
  let aboutSection = document.getElementById("about-section");

  // if trail light has reached 50% of the screen
  var windowHeight = window.innerHeight;
  var trail_top = trail_light.getBoundingClientRect().top;
  var sch = window.scrollY;

  if (trail_top < windowHeight / 2) {
    trail_light.style.position = "sticky";
    trail_light.style.top = "49vh";
    trail_light.style.opacity = 1;
    trail_light.classList.add("sine-wave");
  } else {
    trail_light.classList.remove("sine-wave");
    trail_light.style.opacity = 0;
  }
}

document
  .getElementsByClassName("wrapper")[0]
  .addEventListener("scroll", trail_light);
