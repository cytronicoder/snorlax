const newTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");
const tasksUl = document.getElementById("tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    tasksUl.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");
        const completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Undo" : "✔";
        completeBtn.classList.add("complete-btn");
        completeBtn.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => editTask(index));
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-btn");
        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(delBtn);
        li.draggable = true;
        li.addEventListener("dragstart", (e) => dragStart(e, index));
        li.addEventListener("dragover", dragOver);
        li.addEventListener("drop", (e) => dropTask(e, index));
        li.appendChild(buttonContainer);
        tasksUl.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskFunction() {
    if (newTask.value.trim() !== "") {
        tasks.push({ text: newTask.value.trim(), completed: false });
        saveTasks();
        newTask.value = "";
        renderTasks();
    }
}

addTask.addEventListener("click", addTaskFunction);
newTask.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addTaskFunction();
    }
});

function editTask(index) {
    const updatedText = prompt("Edit your task:", tasks[index].text);
    if (updatedText) {
        tasks[index].text = updatedText.trim();
        saveTasks();
        renderTasks();
    }
}

document.getElementById("clearTasks").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all tasks?")) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
});

let draggedIndex;

function dragStart(event, index) {
    draggedIndex = index;
}

function dragOver(event) {
    event.preventDefault();
}

function dropTask(event, targetIndex) {
    const draggedTask = tasks.splice(draggedIndex, 1)[0];
    tasks.splice(targetIndex, 0, draggedTask);
    saveTasks();
    renderTasks();
}

renderTasks();
