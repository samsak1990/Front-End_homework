"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const doneBox = document.querySelectorAll(".box");

  doneBox.forEach((elem) => {
    elem.addEventListener("mousedown", (event) => {
      const element = event.target;
      let dragElem = undefined;
      if (element.tagName === "LI" && element.classList.contains("task")) {
        dragElem = element;
        dragElem.classList.add("dragElem");
      } else if (
        element.parentElement.tagName === "LI" &&
        element.parentElement.classList.contains("task")
      ) {
        dragElem = element.parentElement;
        dragElem.classList.add("dragElem");
      }
      document.body.append(dragElem);
      let shiftX = event.clientX;
      let shiftY = event.clientY;

      moveAt(shiftX, shiftY);

      function moveAt(x, y) {
        dragElem.style.left =
          x - dragElem.getBoundingClientRect().width / 2 + "px";
        dragElem.style.top =
          y - dragElem.getBoundingClientRect().height / 2 + "px";
      }

      document.addEventListener("mousemove", (e) => {
        moveAt(e.clientX, e.clientY);
      });

      elem.addEventListener("mouseup", (event) => {
        document.removeEventListener("mousemove", (event) =>
          moveAt(event.clientX, event.clientY)
        );
        dragElem.classList.remove("dragElem");
      });

      document.addEventListener("mousemove", (event) =>
        moveAt(event.clientX, event.clientY)
      );
    });
  });
});
