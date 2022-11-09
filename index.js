// select elements by id or class
const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<P> ${input}</P>`);
  DOMSelectors = "";
});
