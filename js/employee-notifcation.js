 const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("justify-start");
  toggle.classList.toggle("justify-end");

  toggle.classList.toggle("bg-gray-500");
  toggle.classList.toggle("bg-blue-600");
});




  const toggling = document.getElementById("toggling");

toggling.addEventListener("click", () => {
    toggling.classList.toggle("justify-end");
  toggling.classList.toggle("justify-start");

  toggling.classList.toggle("bg-blue-600");
  toggling.classList.toggle("bg-gray-500");
});