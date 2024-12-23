function showMenuComponent() {
  const menuTrigger = document.querySelector(".alert-trigger");
  const menu = document.querySelector("#profile-menu-content");

  menuTrigger.addEventListener("click", function () {
    const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";

    menu.classList.toggle("menu-active");

    const allMenuItems = menu.querySelectorAll('[role="menuitem"]');

    if (isExpanded) {
      menuTrigger.ariaExpanded = "false";
      menuTrigger.focus();
    } else {
      menuTrigger.ariaExpanded = "true";
      allMenuItems.item(0).focus();
    }
  });
}

showMenuComponent();

function showDropdownMenu() {
  const menuTrigger = document.querySelector(".profile-trigger");
  const menu = document.querySelector("#profile-dropdown-content");

  menuTrigger.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
  });
}

showDropdownMenu();

function advertMenuComponent() {
  const advertTrigger = document.querySelector(".cancel_icon");
  const menu = document.querySelector(".advert");

  advertTrigger.addEventListener("click", function () {
    menu.style.display = "none";
  });
}

advertMenuComponent();

function showAccordion() {
  const accordion_content = document.querySelector(".accordion-content");
  const chevron = document.querySelector(".chevron");

  chevron.addEventListener("click", function () {
    if (accordion_content.style.display === "none") {
      accordion_content.style.display = "block";
    } else {
      accordion_content.style.display = "none";
    }
  });
}

showAccordion();

function displayAccordion() {
  const accordionTrigger = document.querySelectorAll(".loading-texts");
  // const menu = document.querySelector("#active");
  // console.log(menu);
  var i;

  for (i = 0; i < accordionTrigger.length; i++) {
    accordionTrigger[i].addEventListener("click", function () {
      var menu = this.nextElementSibling;
      if (menu.style.display === "none") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none";
      }
      // menu.style.display = "flex";
      // accordionTrigger.style.display = "none";
    });
  }
}

displayAccordion();

const spanElement = document.createElement("span");
const progressNumber = document.querySelector(".progress-number");

function updateProgressBar() {
  const payment = document.querySelector(".payment-button");

  let number = 0;
  spanElement.textContent = number;
  progressNumber.appendChild(spanElement);
  number = 1;

  payment.addEventListener("click", function () {
    document.getElementById("myprogress").value += 20;
    spanElement.textContent = number;
  });
}

updateProgressBar();

function updateProgressBar2() {
  const payment = document.querySelector(".payment-button2");
  let number = 0;
  spanElement.textContent = number;
  progressNumber.appendChild(spanElement);
  number = 2;

  payment.addEventListener("click", function () {
    document.getElementById("myprogress").value += 20;
    spanElement.textContent = number;
  });
}

updateProgressBar2();

function updateProgressBar3() {
  const payment = document.querySelector(".payment-button3");
  let number = 0;
  spanElement.textContent = number;
  progressNumber.appendChild(spanElement);
  number = 3;

  payment.addEventListener("click", function () {
    document.getElementById("myprogress").value += 20;
    spanElement.textContent = number;
  });
}

updateProgressBar3();

function updateProgressBar4() {
  const payment = document.querySelector(".payment-button4");
  let number = 0;
  spanElement.textContent = number;
  progressNumber.appendChild(spanElement);
  number = 4;

  payment.addEventListener("click", function () {
    document.getElementById("myprogress").value += 20;
    spanElement.textContent = number;
  });
}

updateProgressBar4();

function updateProgressBar5() {
  const payment = document.querySelector(".payment-button5");
  let number = 0;
  spanElement.textContent = number;
  progressNumber.appendChild(spanElement);
  number = 5;

  payment.addEventListener("click", function () {
    document.getElementById("myprogress").value += 20;
    spanElement.textContent = number;
  });
}

updateProgressBar5();
