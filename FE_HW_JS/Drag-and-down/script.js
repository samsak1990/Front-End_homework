const box = document.querySelector(".box");

box.addEventListener("mousedown", (event) => {
  const element = event.target;
  element.style.position = "absolute";
  element.style.zIndex = 1000;
  document.body.append(element);
  let shiftX = event.clientX - box.getBoundingClientRect().left;
  let shiftY = event.clientY - box.getBoundingClientRect().top;
  let currentDroppable = null;

  moveAt(event.pageX, event.pageX);

  function moveAt(x, y) {
    box.style.left = x - shiftX + "px";
    box.style.top = y - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    element.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    box.hidden = false;
    if (!elemBelow) return;
    let droppableBelow = elemBelow.closest(".container");
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) {
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        enterDroppable(currentDroppable);
      }
    }
  }

  function leaveDroppable(elem) {
    elem.style.background = "";
  }

  function enterDroppable(elem) {
    elem.style.background = "pink";
  }

  document.addEventListener("mousemove", onMouseMove);
  box.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
    box.onmouseup = null;
  });

  box.ondragstart = () => {
    return false;
  };
});
