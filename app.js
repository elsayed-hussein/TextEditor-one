let icons = document.querySelectorAll(".btn");
let text = document.querySelector(".textArea textarea");
let fams = document.getElementById("fontFam");
let sizes = document.getElementById("fontSize");
let cols = document.getElementById("fontCol");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (
      icon.getAttribute("id") === "left" ||
      icon.getAttribute("id") === "center" ||
      icon.getAttribute("id") === "right"
    ) {
      text.classList.remove("left", "center", "right");
    }
    text.classList.toggle(icon.getAttribute("id"));
  });
});
function changefam() {
  let selected = fams.options[fams.selectedIndex].getAttribute("id");
  text.classList.remove("sans-serif", "serif", "fantasy", "monospace", "arial");
  text.classList.add(selected);
}

function changesiz() {
  let selected = sizes.options[sizes.selectedIndex].getAttribute("id");
  text.classList.remove("f10", "f20", "f30", "f40", "f50", "f100");
  text.classList.add(selected);
}

function changecol() {
  let selected = cols.options[cols.selectedIndex].getAttribute("id");
  text.classList.remove("blue", "yellow", "green", "red", "black");
  text.classList.add(selected);
}
