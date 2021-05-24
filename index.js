const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

function initAcc(elem, option) {
  document.addEventListener("click", function (e) {
    if (!e.target.matches(elem + " .a-btn")) return;
    else {
      if (!e.target.parentElement.classList.contains("active")) {
        if (option == true) {
          var elementList = document.querySelectorAll(elem + " .a-container");
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove("active");
          });
        }
        e.target.parentElement.classList.add("active");
        console.log("open");
      } else {
        e.target.parentElement.classList.remove("active");
      }
    }
  });
}

initAcc(".accordion.v1", true);
initAcc(".accordion.v2", false);
