// ====================================================== main logo text ======================================================
const logo_div = document.querySelector(".logo");
const anchor_tag = document.createElement("a");
let textnode = document.createTextNode("</> anmol dhanda");
anchor_tag.setAttribute("href", "#");
anchor_tag.className = "logotext";
anchor_tag.appendChild(textnode);
logo_div.appendChild(anchor_tag);

// ====================================================== navigation menu ======================================================
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

// ================================================ work experience jobs modal ================================================
let alphapopupcard = document.querySelector(".alphapopupcard");
let zealpopupcard = document.querySelector(".zealpopupcard");
let alphaopenpopupbtn = document.getElementById("alphaopenpopupbtn");
let zealopenpopupbtn = document.getElementById("zealopenpopupbtn");
let alphaclosepopupbtn = document.getElementById("alphaclosepopupbtn");
let zealclosepopupbtn = document.getElementById("zealclosepopupbtn");
let overlay = document.getElementById("overlay");
alphaopenpopupbtn.addEventListener("click", () => {
  alphapopupcard.classList.add("active");
  document.body.classList.add("active");
  overlay.style.display = "block";
});
alphaclosepopupbtn.addEventListener("click", () => {
  alphapopupcard.classList.remove("active");
  document.body.classList.remove("active");
  overlay.style.display = "none";
});

zealopenpopupbtn.addEventListener("click", () => {
  zealpopupcard.classList.add("active");
  document.body.classList.add("active");
  overlay.style.display = "block";
});

zealclosepopupbtn.addEventListener("click", () => {
  zealpopupcard.classList.remove("active");
  document.body.classList.remove("active");
  overlay.style.display = "none";
});

// ================================================ workspace projects slider  ================================================
// let swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   grabCursor: true,
//   loop: true,
//   breakpoints: {
//     50: {
//       slidesPerView: 1,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//     481: {
//       slidesPerView: 1,
//     },
//     769: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 3,
//     },
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// ================================================ dark light theme  ================================================
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

// ============================================== contact form modal  ==============================================
let contactformpopupcontainer = document.querySelector(
  ".contactformpopupcontainer"
);
let opencontactpopup = document.getElementById("opencontactpopup");
let closecontactpopup = document.getElementById("closecontactpopup");
let contactformoverlay = document.getElementById("contactformoverlay");
opencontactpopup.addEventListener("click", () => {
  contactformpopupcontainer.classList.add("active");
  contactformoverlay.style.display = "block";
  document.body.classList.add("active");
});

closecontactpopup.addEventListener("click", () => {
  contactformpopupcontainer.classList.remove("active");
  contactformoverlay.style.display = "none";
  document.body.classList.remove("active");
});

// ============================================== contact form modal validation  ==============================================
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
  let regex = /^([a-zA-Z]\s*){3,25}$/;
  let name = inputname.value;
  if (regex.test(name)) {
    // console.log("valid name");
    validname = true;
    errorname.innerHTML = ``;
  } else {
    // console.log("invalid name");
    validname = false;
    errorname.innerHTML = `Please enter your valid Name`;
  }
});
inputemail.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){1,25}$/;
  let email = inputemail.value;
  if (regex.test(email)) {
    // console.log("valid email id");
    erroremail.innerHTML = ``;
    validemail = true;
  } else {
    // console.log("invalid email id");
    validemail = false;
    erroremail.innerHTML = `Please enter your valid Email ID`;
  }
});
inputsubject.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9]\s*){1,16}$/;
  let subject = inputsubject.value;
  if (regex.test(subject)) {
    // console.log("valid subject");
    validsubject = true;
    errorsubject.innerHTML = ``;
  } else {
    // console.log("invalid subject");
    validsubject = false;
    errorsubject.innerHTML = `Please enter your valid subject`;
  }
});
inputmessage.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9]\s*){1,25}$/;
  let message = inputmessage.value;
  if (regex.test(message)) {
    // console.log("valid message");
    validmessage = true;
    errormessage.innerHTML = ``;
  } else {
    // console.log("invalid message");
    validmessage = false;
    errormessage.innerHTML = `Please enter your valid message`;
  }
});

const form = document.querySelector("#contactform");
const formsuccessmessage = document.getElementById("formsuccessmessage");
const formerrormessage = document.getElementById("formerrormessage");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbybeLsALN8gqqf61luaVcCC-pvBsl49Fk1BGIw3s9vw_MFQrTjTsFZh6nL5Th941XPu/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validname && validemail && validsubject && validmessage) {
    let requestBody = new FormData(form);
    fetch(scriptURL, { method: "POST", body: requestBody })
      .then((response) => {
        // console.log(response);
        formsuccessmessage.style.display = "block";
        formerrormessage.style.display = "none";
        form.submit();
        form.reset();
        setTimeout(() => {
          formsuccessmessage.style.display = "none";
        }, 3000);
      })
      .catch((error) => {
        // console.log(error.message);
        formsuccessmessage.style.display = "none";
        formerrormessage.style.display = "block";
        form.reset();
        setTimeout(() => {
          formerrormessage.style.display = "none";
        }, 3000);
      });
  } else {
    formerrormessage.style.display = "block";
    formsuccessmessage.style.display = "none";
    form.reset();
  }
});