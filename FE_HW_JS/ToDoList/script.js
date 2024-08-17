"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.querySelector("#addBtnMain");
  const modalWindow = document.querySelector(".wrapper_modal");
  const listToDo = document.querySelector(".list_toDo");
  const listInProgress = document.querySelector(".list_inProgress");
  const listDone = document.querySelector(".list_done");
  const setLists = ["tasksToDo", "tasksInProgress", "tasksDone"];

  addTaskButton.addEventListener("click", () => {
    const closeModalButton = document.querySelector("#modal__close");
    modalWindow.classList.add("wrapper_modal_active");
    closeModalButton.addEventListener("click", () => {
      modalWindow.classList.remove("wrapper_modal_active");
    });
  });

  async function getAndShowTasks() {
    for (let list of setLists) {
      const tasks = await fetch(`http://localhost:3000/${list}`)
        .then((response) => response.json())
        .then((data) => data);
      let nameAddList = "";
      switch (list) {
        case "tasksToDo":
          nameAddList = listToDo;
          break;
        case "tasksInProgress":
          nameAddList = listInProgress;
          break;
        case "tasksDone":
          nameAddList = listDone;
          break;
      }
      for (let task of tasks) {
        nameAddList.innerHTML += `
                <li>
                  <h3 class="task_title">${task.title}</h3>
                  <p class="task_text">${task.description}</p>
                  <p class="task_deadline">
                    Due: <span class="date">${task.date}</span>
                  </p>
                </li>`;
      }
    }
  }

  getAndShowTasks();
});
