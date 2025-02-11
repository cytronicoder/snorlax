const newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const tasksUl = document.getElementById('tasks');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function renderTasks() {
    tasksUl.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });
        li.appendChild(delBtn);
        tasksUl.appendChild(li);
    });
}
addTask.addEventListener('click', () => {
    if (newTask.value.trim() !== '') {
        tasks.push(newTask.value.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
        newTask.value = '';
        renderTasks();
    }
});
renderTasks();
