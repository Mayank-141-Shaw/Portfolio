function navToggler() {
  let navbar = document.getElementById("navbar");
  let signal = document.getElementById("nav-signal");
  let navVisibleMenu = document.getElementsByClassName("nav-visible-menu")[0];

  if (!navbar.classList.contains("toggle")) {
    // make it visible
    navbar.classList.add("toggle");
    navbar.style.transform = "translateX(0px)";
    signal.style.backgroundColor = "rgb(255, 0, 0)";
    signal.style.boxShadow = "0 0 10px 5px rgb(172, 52, 52)";
    navVisibleMenu.style.backgroundColor = "rgba(150, 249, 227, 0.6)";
  } else {
    // hide it
    navbar.classList.remove("toggle");
    navbar.style.transform = "translateX(150px)";
    signal.style.backgroundColor = "rgb(60, 255, 0)";
    signal.style.boxShadow = "0 0 10px 5px rgb(52, 172, 52)";
    navVisibleMenu.style.backgroundColor = "transparent";
  }
}

document.getElementById("nav-menu-btn").addEventListener("click", navToggler);
