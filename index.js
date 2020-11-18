// Write your code here!

// remove ID Main (without knowing parent)
let node = document.getElementById("main");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

// add header
let newHeader = document.createElement('h1');
// set attribute to victory
newHeader.setAttribute("id", "victory");
// set inner html
newHeader.innerHTML = "Samantha is the champion";
// append newHeader to body
document.body.appendChild(newHeader)