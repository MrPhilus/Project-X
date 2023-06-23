//side nav active state and toggle function
const logo = document.querySelector(".logo"),
  sideBar = document.querySelector(".sideBar");
//creates the active state
const toggleNav = () => {
  sideBar.classList.toggle("active");
};
//controls toggle of active state
function handleClickOutside(event) {
  if (!sideBar.contains(event.target) && event.target !== logo) {
    sideBar.classList.remove("active");
  }
}
logo.addEventListener("click", toggleNav);
window.addEventListener("click", handleClickOutside);

// //positioning the nav
// let sideNav = document.getElementsByClassName("sideBar")[0],
//   sideNavContent = document.getElementsByClassName("sideContent")[0];
// //getting nav position
// window.onscroll = () => {
//   let scrollTop = window.scrollY, // current scroll position
//     viewportHeight = window.innerHeight, // viewport height
//     contentHeight = sideNavContent.getBoundingClientRect().height, // current content height
//     sidebarTop = sideNav.getBoundingClientRect().top; // distance from top to sidebar

//   //checks the sidenav and fixes the position
//   if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
//     sideNav.style.position = "fixed";
//     sideNav.style.top = `${viewportHeight - sideNav.offsetHeight}px`;
//   } else {
//     sideNav.style.position = "";
//     sideNav.style.top = "";
//   }
// };

//Timer
//Deadline date
var countdownDate = new Date("June 25, 2023 00:00:00").getTime();

var countdownTimer = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var timeDiff = countdownDate - now;

  // Check if the countdown is finished
  if (timeDiff <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerText = `PRE-ORDER CLOSED!`;
    return;
  }

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeDiff / (1000 * 3600 * 24));
  var hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
  var minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");
}, 1000);

// Pre-order function
let orderPlacedElement = document.getElementById("orderplaced"),
  stockLeft = 2;
//counts and updates to window
function updateStockCount() {
  if (stockLeft > 0) {
    stockLeft--;
    orderPlacedElement.textContent = `${stockLeft} Left in stock`;
    if (stockLeft === 0) {
      preorderButton.textContent = `OUT OF STOCK`;
      preorderButton.disabled = true;
      preorderButton.style.color = "red";
      orderPlacedElement.textContent = "";
    }
  }
}
let preorderButton = document.getElementById("preorder");
preorderButton.addEventListener("click", updateStockCount);

//form functions
let form = document.getElementById("signUpSection");
let notifySpan = document.getElementById("notify");

// Function to reset form
function resetForm() {
  let emailInput = form.querySelector('input[type="email"]'),
    usernameInput = form.querySelector('input[type="text"]'),
    passwordInput = form.querySelector('input[type="password"]');

  emailInput.value = "";
  usernameInput.value = "";
  passwordInput.value = "";
}
// Function to update text area beneath form
function updateNotifyText() {
  let emailInput = form.querySelector('input[type="email"]'),
    usernameInput = form.querySelector('input[type="text"]'),
    passwordInput = form.querySelector('input[type="password"]');

  if (emailInput.value && usernameInput.value && passwordInput.value) {
    notifySpan.textContent = `A DISCOUNT VOUCHER HAS BEEN MAILED AND WILL BE USEABLE ONCE SALES ARE LIVE!`;
  } else {
    notifySpan.textContent = `Please fill out all fields, so you don't miss amazing discounts!`;
  }

  resetForm();
}
let submitNoticeButton = document.getElementById("submitNotice");
submitNoticeButton.addEventListener("click", updateNotifyText);
