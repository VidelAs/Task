// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
let tbody = "";
let t_body = document.getElementById('tbody');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const des = event.target.description.value;
    const priority = event.target.color.value;
    //const sel = event.target.select.value;
    const select = document.getElementById('select');
    const sel = select.options[select.selectedIndex].text;
    if (!title) return;
    if (!des) return;
    if (!priority) return;
    if (!sel) return;
    tbody = tbody + '<tr><td>' + title + '</td><td>' + des + '</td><td>' + priority + '</td><td>' + sel + '</td></tr>';
    t_body.innerHTML = tbody;
    const task = document.createElement('form');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.tbody = tbody;
    tbody.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();
