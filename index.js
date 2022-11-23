const DOMSelectors = {
  result: document.getElementById("result"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  erasebtn: document.getElementById("erasebtn"),
  text: document.getElementById("para"),
};
function getResult() {
  DOMSelectors.result.addEventListener("click", function (event) {
    let name = DOMSelectors.name.value;
    event.preventDefault();
    DOMSelectors.name.value = "";
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p>Hi! My name is ${name}. 
      <button class = "remove-btn">Remove</button></p>`
    );
    const remove = Array.from(document.getElementsByClassName("remove-btn"));
    remove.forEach((button) => {
      button.addEventListener("click", function () {
        this.parentElement.remove();
      });
    });
  });
}
DOMSelectors.erasebtn.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
});
getResult();
