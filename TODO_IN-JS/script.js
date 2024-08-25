
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
       
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskText} <button class='but-on' onclick="removeTask(this)">Delete</button>`;

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}

function removeTask(buttonElement) {
    const taskItem = buttonElement.parentNode;
    const taskList = document.getElementById('taskList');

    // Remove the task from the task list
    taskList.removeChild(taskItem);
}




