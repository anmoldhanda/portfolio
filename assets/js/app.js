const hamburger = document.querySelector(".hamburger");
const navmenuiconul = document.querySelector(".navmenuiconul");
const navmenuicon = document.querySelectorAll(".navmenuicon");
hamburger.addEventListener("click", () => {
  navmenuiconul.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navmenuicon.forEach((link) => {
  link.addEventListener("click", () => {
    navmenuiconul.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

let alphapopupcard = document.querySelector(".alphapopupcard");
let zealpopupcard = document.querySelector(".zealpopupcard");
let alphaopenpopupbtn = document.getElementById("alphaopenpopupbtn");
let zealopenpopupbtn = document.getElementById("zealopenpopupbtn");
let alphaclosepopupbtn = document.getElementById("alphaclosepopupbtn");
let zealclosepopupbtn = document.getElementById("zealclosepopupbtn");
alphaopenpopupbtn.addEventListener("click", () => {
  alphapopupcard.classList.add("active");
  document.body.classList.add("active");
});
alphaclosepopupbtn.addEventListener("click", () => {
  alphapopupcard.classList.remove("active");
  document.body.classList.remove("active");
});

zealopenpopupbtn.addEventListener("click", () => {
  zealpopupcard.classList.add("active");
  document.body.classList.add("active");
});

zealclosepopupbtn.addEventListener("click", () => {
  zealpopupcard.classList.remove("active");
  document.body.classList.remove("active");
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  breakpoints: {
    50: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let lightmode = document.getElementById("lightmode");
let darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", function darktheme() {
  document.body.classList.add("dark-theme-variables");
  darkmode.classList.add("current-theme");
  lightmode.classList.remove("current-theme");
});

lightmode.addEventListener("click", function lighttheme() {
  document.body.classList.remove("dark-theme-variables");
  darkmode.classList.remove("current-theme");
  lightmode.classList.add("current-theme");
});

let contactformpopupcontainer = document.querySelector(
  ".contactformpopupcontainer"
);
let opencontactpopup = document.getElementById("opencontactpopup");
let closecontactpopup = document.getElementById("closecontactpopup");
opencontactpopup.addEventListener("click", () => {
  contactformpopupcontainer.classList.add("active");
});

closecontactpopup.addEventListener("click", () => {
  contactformpopupcontainer.classList.remove("active");
});

const inputname = document.getElementById("inputname");
const inputemail = document.getElementById("inputemail");
const inputsubject = document.getElementById("inputsubject");
const inputmessage = document.getElementById("inputmessage");
const errorname = document.getElementById("errorname");
const erroremail = document.getElementById("erroremail");
const errorsubject = document.getElementById("errorsubject");
const errormessage = document.getElementById("errormessage");
let validname = false;
let validemail = false;
let validsubject = false;
let validmessage = false;
inputname.addEventListener("blur", () => {
  let regex = /^([a-zA-Z]){1,20}$/;
  let name = inputname.value;
  if (regex.test(name)) {
    validname = true;
    errorname.innerHTML = ``;
  } else {
    validname = false;
    errorname.innerHTML = `Please enter your valid Name`;
  }
});
inputemail.addEventListener("blur", () => {
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){1,25}$/;
  let email = inputemail.value;
  if (regex.test(email)) {
    validemail = true;
  } else {
    validemail = false;
    erroremail.innerHTML = `Please enter your valid Email ID`;
  }
});
inputsubject.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9]){1,16}$/;
  let subject = inputsubject.value;
  if (regex.test(subject)) {
    validsubject = true;
    errorsubject.innerHTML = ``;
  } else {
    validsubject = false;
    errorsubject.innerHTML = `Please enter your valid subject`;
  }
});
inputmessage.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9]){1,25}$/;
  let message = inputmessage.value;
  if (regex.test(message)) {
    validmessage = true;
    errormessage.innerHTML = ``;
  } else {
    validmessage = false;
    errormessage.innerHTML = `Please enter your valid message`;
  }
});

const form = document.querySelector("#contactform");
const submitButton = document.querySelector("#submitmessagebtn");
const formsuccessmessage = document.getElementById("formsuccessmessage");
const formerrormessage = document.getElementById("formerrormessage");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbybeLsALN8gqqf61luaVcCC-pvBsl49Fk1BGIw3s9vw_MFQrTjTsFZh6nL5Th941XPu/exec";

// if (validname && validemail && validsubject && validmessage) {
form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      // console.log(response);
      formsuccessmessage.style.display = "block";
      formerrormessage.style.display = "none";
      submitButton.disabled = false;
      form.reset();
    })
    .catch((error) => {
      // console.log(error.message);
      formsuccessmessage.style.display = "none";
      formerrormessage.style.display = "block";
      submitButton.disabled = false;
      form.reset();
    });
});
// }
