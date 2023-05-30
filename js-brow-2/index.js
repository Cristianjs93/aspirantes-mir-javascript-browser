const taskUL = document.querySelector('ul');
const clearTask = document.querySelector('.taskName');
const form = document.querySelector('form');
const deleteButton = document.querySelector('#delete');

let taskList = [];

form.addEventListener('submit', handleSubmit);
deleteButton.addEventListener('click', handleDelete);
clearTask.setAttribute("autocomplete", "off");

function handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const taskName = data.get('taskName')
    
    taskList.push ({
        id: taskList.length,
        name: taskName,
        completed: false
    })
    clearTask.value = "";
    renderTasks();
}

function createTaskElements () {
    const newTaskElements = [];

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];

        const id = task.id;
        const name =  task.name;
        const completed = task.completed;

        const liElement = document.createElement('li');
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.id = id;
        checkboxElement.name = id;
        checkboxElement.addEventListener('click', handleCheckTask);

        const labelElement = document.createElement('label');
        labelElement.htmlFor = id;
        labelElement.textContent = name;

        if (completed) {
            checkboxElement.checked = true;
            labelElement.classList.value = 'selected';
        }
        
        liElement.appendChild(checkboxElement);
        liElement.appendChild(labelElement);

        newTaskElements.push(liElement)
    }
    return newTaskElements;
}

function renderTasks () {
    const taskElements = createTaskElements();

    taskUL.innerHTML = '';

    for (let i = 0; i < taskElements.length; i++) {
        const element = taskElements[i];
        taskUL.appendChild(element);
    }
}

function handleCheckTask (event) {
    const element = event.target
    const isChecked = element.checked
    
    const label = element.labels[0]

    if (isChecked) {
        label.classList.value = 'selected';

        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i]

            if (task.id === parseInt(element.id)) {
                const newTask = {
                    id: task.id,
                    name: task.name,
                    completed: true
                }
                taskList.splice(i, 1, newTask)
                break;
            }
        }
    } else {
        label.classList.value = '';
        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i]

            if (task.id === parseInt(element.id)) {
                const newTask = {
                    id: task.id,
                    name: task.name,
                    completed: false
                }
                taskList.splice(i, 1, newTask)
                break;
            }
        }
    }
}

function handleDelete () {
    let newTasks = [];

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i]
        if (!task.completed) {
            newTasks.push(task)
        }
    }
    taskList = newTasks;
    renderTasks();
}
