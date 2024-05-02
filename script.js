const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const displayTask = document.getElementById("displayTask");
const toDoList = document.getElementById("toDoList");
const completedTasks = document.getElementById("displayCompletedTasks");
const tasksDone = document.getElementById("taskCompleted"); // Assuming this is supposed to be tasksDone

// Function to create a new list item
function createListItem(taskValue) {
  const listItem = document.createElement("li");
  listItem.classList.add("list_task");
  listItem.textContent = taskValue;

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon_container");

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-solid", "fa-check");
  iconContainer.appendChild(checkIcon);

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");
  iconContainer.appendChild(trashIcon);

  listItem.appendChild(iconContainer);

  return listItem;
}

// Event listener for adding a new task
addButton.addEventListener("click", () => {
  const taskValue = inputTask.value.trim();
  if (taskValue !== "") {
    const listItem = createListItem(taskValue);
    displayTask.appendChild(listItem);
    inputTask.value = "";
    toDoList.style.display = "block";
  }
});

// Function to move a list item to completed tasks
function moveToCompleted(listItem) {
  completedTasks.appendChild(listItem);
  listItem.querySelector(".icon_container .fa-check").remove();
}

// Event delegation for handling clicks on the trash and check icons
displayTask.addEventListener("click", (event) => {
  const target = event.target;
  if (target && target.tagName === "I") {
    const listItem = target.closest("li");
    if (!listItem) return;

    if (target.classList.contains("fa-trash")) {
      listItem.remove();
      // Check if there are no list items left, then hide the toDoList
      if (displayTask.querySelectorAll("li").length === 0) {
        toDoList.style.display = "none";
      }
    } else if (target.classList.contains("fa-check")) {
      // Handle checked icon click
      listItem.classList.add("completed");
      tasksDone.style.display = "block";
      moveToCompleted(listItem); // Move the completed task
    }
  }
});

// Event listener for clicks on completed tasks to move them back
completedTasks.addEventListener("click", (event) => {
  const target = event.target;
  if (target && target.tagName === "I") {
    const listItem = target.closest("li");
    if (!listItem) return;

    if (target.classList.contains("fa-trash")) {
      listItem.remove();
      tasksDone.style.display = "none";
      if (displayTask.querySelectorAll("li").length === 0) {
        toDoList.style.display = "none";
      }
    } else if (target.classList.contains("fa-check")) {
      // Move the completed task back to the to-do list
      listItem.classList.remove("completed");
      displayTask.appendChild(listItem);
    }
  }
});
