"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.querySelector("#addBtnMain");
  const modalWindow = document.querySelector(".wrapper_modal");
  const listToDo = document.querySelector(".list_toDo");
  const listInProgress = document.querySelector(".list_inProgress");
  const listDone = document.querySelector(".list_done");
  const setLists = ["tasksToDo", "tasksInProgress", "tasksDone"];

  addTaskButton.addEventListener("click", () => {
    modalWindow.classList.add("wrapper_modal_active");
    const closeModalButton = document.querySelector("#modal__close");
    const modelForm = document.querySelector(".modal__form");

    modelForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        title: e.target[1].value,
        description: e.target[2].value,
        deadline: e.target[3].value,
      };
      addNewTask(data);
    });

    closeModalButton.addEventListener("click", () => {
      modalWindow.classList.remove("wrapper_modal_active");
    });
  });

  listDone.addEventListener("click", (e) => {
    const element = e.target;
    const ID_del = element.parentElement.querySelector("#taskID").textContent;
    if (element.className === "delete_icon") {
      element.parentElement.remove();
      deleteTask(ID_del);
    }
  });

  async function addNewTask(params) {
    const lenghtArray = await fetch(`http://localhost:3000/tasksToDo`)
      .then((response) => response.json())
      .then((data) => data);
    return await fetch(`http://localhost:3000/tasksToDo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: String(lenghtArray.length + 1),
        title: params.title,
        description: params.description,
        date: params.deadline,
      }),
    })
      .then((response) => response.json())
      .then((data) => data);
  }

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
                ${
                  nameAddList === listDone
                    ? "<span class=delete_icon></span>"
                    : ""
                } <span id='taskID' style='display:none !important'>${
          task.id
        }</span>
                  <h3 class="task_title">${task.title}</h3>
                  <p class="task_text">${task.description}</p>
                  <p class="task_deadline">
                    Due: <span class="date">${task.date}</span>
                  </p>
                </li>`;
      }
    }
  }

  async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasksDone/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("Ошибка удаления записи: ", err);
      });
  }

  getAndShowTasks();
});
