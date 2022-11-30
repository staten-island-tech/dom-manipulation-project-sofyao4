const DOMSelectors = {
  result: document.getElementById("result"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  erasebtn: document.getElementById("erasebtn"),
};
// an extra function that erases everything
function eraseAll() {
  DOMSelectors.erasebtn.addEventListener("click", function () {
    DOMSelectors.box.innerHTML = "";
  });
}

function getResult() {
  let name = DOMSelectors.name.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>Hi! My name is ${name}. 
        <button class = "remove-btn">Remove</button></p>`
  );
  const remove = Array.from(document.getElementsByClassName("remove-btn"));
  remove.forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.remove();
    });
  });
}

function clearInput() {
  DOMSelectors.name.value = "";
}

DOMSelectors.result.addEventListener("click", function (event) {
  event.preventDefault();
  getResult();
  clearInput();
  eraseAll();
});
