function addTask(value) {
    const tasks = document.querySelectorAll('li');

    if (tasks.length == 3) return false;

    const ul = document.querySelector('ul');

    const task = document.createElement('li');
    const id = Math.random();

    task.id = "todo_"+id;

    const task_c = document.createElement('input');
    task_c.type = "checkbox";
    task_c.id = id;

    task_c.addEventListener("change", function (e) {
        const id = e.target.id;

        document.getElementById("todo_"+id).classList.toggle('done');
    });

    const task_t = document.createTextNode(value);

    const task_b = document.createElement('button');
    task_b.textContent = 'Delete';
    task_b.id = id;

    task_b.addEventListener('click', (e) => delTask(e.target.id));

    task.appendChild(task_c);
    task.appendChild(task_t);
    task.appendChild(task_b);

    ul.appendChild(task);
} 

function delTask(id) {
    const task = document.getElementById("todo_"+id);
    task.remove();
}

document.addEventListener("DOMContentLoaded", function(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const addInput = document.querySelector('.userInput input');
    const addButton = document.querySelector('.userInput button');

    addButton.addEventListener('click', function() {
        if (addInput.value.trim() === "" || addInput.value.trim().length < 3) return false;

        addTask(addInput.value);
        addInput.value = "";
    });
});