const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.onclick = function () {
    removeActiveClasses();
    panel.classList.add("active");
  };
});

const removeActiveClasses = (panel) => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
