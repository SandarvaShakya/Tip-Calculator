//INPUT FIELDS
const billAmount = document.querySelector("#amount");
const numberOfPeople = document.querySelector("#number-of-people");
const tip = document.querySelector("#tip");

//FORM
const calculate = document.querySelector("#tip-form");

//HIDDEN CONTENT
const invoiceAmount = document.querySelector(".amt");
const tipAmount = document.querySelector(".tip-amt");
const personAmount = document.querySelector(".person-amt");
const hiddenContent = document.querySelector(".hidden-content");

//HIDDEN ALERT
const alertService = document.querySelector(".alert-service");
const alertAmount = document.querySelector(".alert-amount");
const alertNumber = document.querySelector(".alert-number");

calculate.addEventListener("submit", () => {
  if (billAmount.value == "" || billAmount.value <= 0) {
    alertAmount.textContent = "Bill amount cannot be empty!";
    setTimeout(() => {
      alertAmount.textContent = "";
    }, 4000);
  }
  if (numberOfPeople.value <= 0) {
    alertNumber.textContent = "Number of people cannot be empty!";
    setTimeout(() => {
      alertNumber.textContent = "";
    }, 4000);
  }
  let tips = calculateTip();
  let totalPrice = Number(billAmount.value) + tips;
  let perPerson = totalPrice / numberOfPeople.value;
  if (tips != 0) {
    invoiceAmount.textContent = `$ ${totalPrice.toFixed(2)}`;
    tipAmount.textContent = `$ ${tips.toFixed(2)}`;
    personAmount.textContent = `$ ${perPerson.toFixed(2)}`;

    hiddenContent.classList.add("show");
    setTimeout(() => {
      hiddenContent.classList.remove("show");
    }, 10000);
  }
});

function calculateTip() {
  let tipValue;
  if (tip.value == 1) {
    tipValue = billAmount.value * 0.2;
    return tipValue;
  } else if (tip.value == 2) {
    tipValue = billAmount.value * 0.1;
    return tipValue;
  } else if (tip.value == 3) {
    tipValue = billAmount.value * 0.02;
    return tipValue;
  } else {
    alertService.textContent = "Service cannot be empty!";
    setTimeout(() => {
      alertService.textContent = "";
    }, 4000);
    return 0;
  }
}
