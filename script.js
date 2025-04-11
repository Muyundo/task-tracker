const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

addTaskBtn.addEventListener("click", () =>{
    const taskName = taskInput.value.trim()

    if (taskName !== ""){
        const li = document.createElement("li")
        li.textContent = taskName
        taskList.appendChild(li)

        taskInput.value = ""
    } 
})