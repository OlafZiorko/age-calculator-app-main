const form = document.querySelector(".form");
// select user input
const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const allInputs = document.querySelectorAll(".inputs");

// select output data
const day = document.querySelector(".data-days");
const month = document.querySelector(".data-months");
const year = document.querySelector(".data-years");

//alerts
const alertMsg = document.querySelectorAll(".alert-msg");
const inptLabel = document.querySelectorAll(".inputs__wrapper label");

//message
const required = `This field is required`;
const validNumber = `Eenter valid numer`;
// current data
let currData = new Date();
let currDay = currData.getDay();
let currMonth = currData.getMonth();
let currYear = currData.getFullYear();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // check conditions
  if (!dayInput.value && !monthInput.value) {
    checkIsEmpty(required);
  } else if (
    dayInput.value > 31 ||
    !monthInput.value ||
    yearInput.value > currYear
  ) {
    checkIsEmpty(validNumber);
  }
  // if conditions are mets
  else if (dayInput.value && monthInput.value && yearInput.value) {
    removeClass();
    user = {
      day: countDays(currDay, dayInput.value),
      month: countMonths(currMonth, monthInput.value),
      year: countYears(currYear, yearInput.value),
    };

    day.textContent = user.day;
    if (user.month < 0) {
      user.year++;
      user.month = 0;
    }
    month.textContent = user.month;
    year.textContent = user.year;
  }
});

//function

function countDays(userDay, currDay) {
  return currDay - userDay;
}
function countMonths(userMonth, currMonth) {
  return currMonth - userMonth;
}
function countYears(currYear, userYear) {
  return currYear - userYear;
}

function checkIsEmpty(validNumber) {
  allInputs.forEach((input) => {
    input.classList.add("alert");
  });
  inptLabel.forEach((label) => {
    label.classList.add("alert");
  });
  alertMsg.forEach((msg) => {
    msg.classList.add("alert");
    msg.textContent = `${validNumber}`;
  });
}
function removeClass() {
  allInputs.forEach((input) => {
    input.classList.remove("alert");
  });
  inptLabel.forEach((label) => {
    label.classList.remove("alert");
  });
  alertMsg.forEach((msg) => {
    msg.classList.remove("alert");
    msg.textContent = "This field is reqiured";
  });
}
