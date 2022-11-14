const DOMSelectors = {
  result: document.getElementById("result"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  remove: document.getElementById(`#remove`),
};

DOMSelectors.result.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>Hi! My name is ${name}. 
    <button type="button" id="remove">Remove</button></p>`
  );
  DOMSelectors.name.value = "";
});

DOMSelectors.remove.addEventListener("click", function () {
  delete DOMSelectors.name;
});
