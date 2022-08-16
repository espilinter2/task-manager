document.querySelector('form').addEventListener('submit', function (event) {
    // let taskCounter = -1;
    // event.preventDefault()
    const task = {}
    task.title = document.querySelector('input').value;
    task.date = document.querySelector('.date').value;
    task.time = document.querySelector('.time').value;
    let radio_f = document.getElementsByName('radio');
    for (let i of radio_f) {
        if (i.checked) {
            task.category = i.value;
        }
    }
    task.description = document.querySelector('.text-box').value;
    let arrey = JSON.parse(localStorage.getItem('task')) || []
    arrey.push(task)
    localStorage.setItem('task', JSON.stringify(arrey));
})

// JSON.parse(localStorage.getItem)[5].date
