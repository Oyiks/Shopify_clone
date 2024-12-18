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

// function showAccordion() {
//   const accordion_menu = document.querySelector(".accordion-menu");
//   const chevron = document.querySelector(".chevron");

//   chevron.addEventListener("click", function () {
//     accordion_menu.style.display = "block";
//   });
// }

// showAccordion();

function displayAccordion() {
  const accordionTrigger = document.querySelectorAll(".loading-texts");
  console.log(accordionTrigger);
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

function updateProgressBar() {
  const payment = document.querySelector(".payment-button");

  payment.addEventListener("click", function () {
    document.getElementById("myprogress").value = 20;
    document.querySelector(".progress-bar").innerText += 1;
  });
}

updateProgressBar();
