//swapping functions

function SwapElement(a, b) {
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


//remove function

const removeAudio = function () {
  const aud = document.getElementById("mp3");
  const parent = aud.parentNode;
  parent.removeChild(aud);
}



// Add element functoin
const addElement = function () {
  const add = document.createElement("p");
  add.appendChild(document.createTextNode("this button you just clicked helped me add the element in the html."));
  add.setAttribute("id", "addp");
  const parent = document.getElementById("buttons");
  parent.appendChild(add);
}
