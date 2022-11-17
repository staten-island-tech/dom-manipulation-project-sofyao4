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
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p>Hi! My name is ${name}. </p>`
    );
    DOMSelectors.name.value = "";

    DOMSelectors.removebtn.addEventListener("click", function () {
      //const html = DOMSelectors.box.html;
      //html.parentNode.removeChild(html);
      const text = DOMSelectors.box;
      text.parentNode.removeChild(text);
    });
  });
}
getResult();
