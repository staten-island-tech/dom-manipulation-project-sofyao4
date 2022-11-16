const DOMSelectors = {
  result: document.getElementById("result"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  removebtn: document.getElementById("removebtn"),
  text: document.getElementById("hiMyNameIs"),
};
function getResult() {
  DOMSelectors.result.addEventListener("click", function (event) {
    let name = DOMSelectors.name.value;
    event.preventDefault();
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="hiMyNameIs">Hi! My name is ${name}. </p>`
    );
    DOMSelectors.name.value = "";

    DOMSelectors.removebtn.addEventListener("click", function () {
      const hiMyNameIs = DOMSelectors.text;
      hiMyNameIs.parentNode.removeChild(hiMyNameIs);
    });
  });
}
getResult();
