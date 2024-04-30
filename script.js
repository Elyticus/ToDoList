const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const displayTask = document.getElementById("displayTask");
const toDoList = document.getElementById("toDoList");

const listItem = document.createElement("li");
const iconsContainer = document.createElement("div");
const deleteIcon = document.createElement("i");
const checkedIcon = document.createElement("i");

addButton.addEventListener("click", () => {
  if (inputTask.value !== "") {
    deleteIcon.className = "fa-solid fa-trash";
    checkedIcon.className = "fa-solid fa-check";
    listItem.className = "list_task";
    iconsContainer.className = "icon_container";
    listItem.textContent = inputTask.value;
    toDoList.style.display = "block";

    iconsContainer.appendChild(checkedIcon);
    iconsContainer.appendChild(deleteIcon);

    listItem.appendChild(iconsContainer);
    displayTask.appendChild(listItem);

    inputTask.value = "";
  }
});

checkedIcon.addEventListener("click", () => {});
