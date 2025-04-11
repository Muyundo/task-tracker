const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
renderTasks()

addTaskBtn.addEventListener("click", () =>{
    const taskName = taskInput.value.trim()

    if (taskName !== "") {
        const task = {
          name: taskName,
          done: false
        };
        tasks.push(task);
        saveAndRender()

        taskInput.value = ""
    } 
})

function saveAndRender(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
    renderTasks()
}

function renderTasks() {
    taskList.innerHTML = ""
    tasks.forEach((task, index) => {
        const li = document.createElement("li")
        li.textContent = task.name
        if(task.done) li.classList.add("done")

            li.addEventListener("click", () =>{
                tasks[index].done = !tasks[index].done
                saveAndRender()
            })
            taskList.appendChild(li)
    })
        
}