// Fonctions pour le premier popup
function showPopup() {
  document.getElementById("popup").style.display = "flex";
  document.body.classList.add("popup-active");
  document.querySelector(".situation-content").style.zIndex = "0";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("popup-active");
  document.querySelector(".situation-content").style.zIndex = "1";
}

// Fonctions pour le deuxième popup
function showPopup1() {
  document.getElementById("popup1").style.display = "flex";
  document.body.classList.add("popup-active");
  document.querySelector(".situation-content").style.zIndex = "0";
}

function closePopup1() {
  document.getElementById("popup1").style.display = "none";
  document.body.classList.remove("popup-active");
  document.querySelector(".situation-content").style.zIndex = "1";
}

// Fonctions pour le troixieme popup
function showPopup2() {
  document.getElementById("popup2").style.display = "flex";
  document.body.classList.add("popup-active");
  document.querySelector(".situation-content").style.zIndex = "0";
}

function closePopup2() {
  document.getElementById("popup2").style.display = "none";
  document.body.classList.remove("popup-active");
  document.querySelector(".situation-content").style.zIndex = "1";
}

// Fonctions pour le troixieme popup
function showPopup3() {
  document.getElementById("popup3").style.display = "flex";
  document.body.classList.add("popup-active");
  document.querySelector(".situation-content").style.zIndex = "0";
}

function closePopup3() {
  document.getElementById("popup3").style.display = "none";
  document.body.classList.remove("popup-active");
  document.querySelector(".situation-content").style.zIndex = "1";
}
