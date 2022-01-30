function myFunction() {
  alert("The media was paused");
}

let functionPlay = () => {
  alert("The media is Playing!");
};

//remove function

const removeNode = function () {
  const aud = document.getElementById("jack");
  const parent = aud.parentNode;
  parent.removeChild(aud);
};
// Add element functoin
const addNode = function () {
  const add = document.createElement("p");
  add.innerText = "this is the add paragraph";
  add.setAttribute("id", "addp");
  const parent = document.getElementById("btnp");
  parent.appendChild(add);
};

//swapping functions

function doSwap(a, b) {
  swapElements(document.getElementById(a), document.getElementById(b));
}

function swapElements(obj1, obj2) {
  var parent2 = obj2.parentNode;
  var next2 = obj2.nextSibling;

  if (next2 === obj1) {
    parent2.insertBefore(obj1, obj2);
  } else {
    obj1.parentNode.insertBefore(obj2, obj1);
    if (next2) {
      parent2.insertBefore(obj1, next2);
    } else {
      parent2.appendChild(obj1);
    }
  }
}
