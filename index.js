// Write your code here!
const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
const myName = "Demitry";

function addName(name) {
  newHeader.textContent = `${name} is the champion`;
}

addName(myName);
