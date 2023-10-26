function myFunction() {
  const dropdownElements = document.querySelector(".dropdown");
  const isDropdownVisible = dropdownElements.style.visibility === "visible";
  const isDropdowntop = dropdownElements.style.top === "65px";
  // در اولین کلیک، dropdown را visible می‌کنیم.
  dropdownElements.style.visibility = isDropdownVisible ? "hidden" : "visible";
  dropdownElements.style.opacity = isDropdownVisible ? "0" : "1";
  dropdownElements.style.top = isDropdowntop ? "5px" : "65px";
}
