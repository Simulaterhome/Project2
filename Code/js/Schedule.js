window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const task = input.value
        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const task_content_el = document.createElement('div')
        
        task_content_el.classList.add('content')

        task_el.appendChild(task_content_el)
        
        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_input_el.type = 'text'
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')

        task_content_el.appendChild(task_input_el)

        const task_action_el = document.createElement('div')
        task_action_el.classList.add('actions')

        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('Edit')
        task_edit_el.innerText = "Edit"

        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('Delete')
        task_delete_el.innerText = "Delete"

        task_action_el.appendChild(task_edit_el)
        task_action_el.appendChild(task_delete_el)
        
        task_el.appendChild(task_action_el)
        list_el.appendChild(task_el)

        input.value = ''

        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save"
                task_input_el.removeAttribute("readonly")
                task_input_el.focus()
            }
            else {
                task_edit_el.innerText = "Edit"
                task_input_el.setAttribute('readonly', 'readonly')
            }
        })
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el)
        })
    })
})

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function setDate () {
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond/60)*360;
    const minuteDegree = (getMinute/60)*360;
    const hourDegree = (getHour/12)*360;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000)