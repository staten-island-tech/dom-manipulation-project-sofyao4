const DOMSelectors = {
  result: document.getElementById("result"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  removebtn: document.getElementById("removebtn"),
  text: document.getElementById("para"),
};
function getResult() {
  DOMSelectors.result.addEventListener("click", function (event) {
    let name = DOMSelectors.name.value;
    event.preventDefault();
    DOMSelectors.name.value = "";
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p>Hi! My name is ${name}. </p>`
    );
    const remove = document.querySelectorAll("removebtn");
    remove.forEach((remove) => {
      remove.addEventListener("click", function () {
        this.parentElement.remove();
      });
    });
  });
}
DOMSelectors.removebtn.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
});
getResult();
