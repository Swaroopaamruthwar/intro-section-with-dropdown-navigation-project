const featureLi = document.getElementById("feature");
const featureDown = featureLi.querySelector("#down");
const companyLi = document.getElementById("company");
const companyDown = companyLi.querySelector("#down");
const featureBox = document.querySelector(".feature-box");
const companyBox = document.querySelector(".company-box");
const main = document.querySelector(".main");
const menu = document.querySelector("#menu");
const sidemenu = document.querySelector(".sidemenu");

console.log(featureLi);
featureLi.addEventListener("click", function () {
  featureDown.src = "./images/icon-arrow-up.svg";
  if (featureBox.classList.contains("display-none")) {
    featureBox.classList.remove("display-none");
  } else {
    featureBox.classList.add("display-none");
    featureDown.src = "./images/icon-arrow-down.svg";
  }
});
main.addEventListener("click", (e) => {
  featureBox.classList.add("display-none");
  companyBox.classList.add("display-none");
  featureDown.src = "./images/icon-arrow-down.svg";
  companyDown.src = "./images/icon-arrow-down.svg";
});

console.log(companyLi);
companyLi.addEventListener("click", function () {
  console.log("click");
  companyDown.src = "./images/icon-arrow-up.svg";
  if (companyBox.classList.contains("display-none")) {
    companyBox.classList.remove("display-none");
  } else {
    companyBox.classList.add("display-none");
    companyDown.src = "./images/icon-arrow-down.svg";
  }
});

menu.addEventListener("click", (e) => {
  if (menu.src.includes("icon-close-menu.svg")) {
    sidemenu.style.right = "-300px";
    menu.src = "./images/icon-menu.svg";
  } else {
    sidemenu.style.right = "0px";
    menu.src = "./images/icon-close-menu.svg";
  }
});
