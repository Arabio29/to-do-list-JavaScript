/*By Eliasib Cantor*/

const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", () => {
    const newTaskText = newTaskInput.value;
    if (newTaskText) {
        addTask(newTaskText);
        newTaskInput.value = "";
    }
});

function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-button">Eliminar</button>
    `;
    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    const checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskItem.classList.add("completed");
        } else {
            taskItem.classList.remove("completed");
        }
    });
}
