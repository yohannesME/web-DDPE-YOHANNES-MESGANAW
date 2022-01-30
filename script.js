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
