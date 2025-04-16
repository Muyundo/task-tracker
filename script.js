const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

//let tasks = JSON.parse(localStorage.getItem("tasks")) || []
//renderTasks()

addTaskBtn.addEventListener("click", () =>{
    const taskName = taskInput.value.trim()

    if (taskName !== "") {
        fetch("add_task.php", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: taskName })
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                const li = document.createElement("li")
                li.textContent = taskName
                taskList.appendChild(li)
                taskInput.value = ""

            }else{
                alert("Error: "+ data.message)
            }
        })
        .catch(err => {
            console.error("Fetch error:", err)
        })

   
    } 
})