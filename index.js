const DOMSelectors = {
  result: document.getElementById("result"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  removebtn: document.getElementById("removebtn"),
};
function getResult() {
  DOMSelectors.result.addEventListener("click", function () {
    let name = DOMSelectors.name.value;
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p>Hi! My name is ${name}. </p>`
    );
    DOMSelectors.name.value = "";
  });
}
getResult();
DOMSelectors.removebtn.addEventListener("click", function () {
  delete Ad;
});
