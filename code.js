const task = document.getElementById("task")
const priority = document.getElementById("priority")
const importance = document.getElementById("importance")
const subBut = document.getElementById("submit")
const taskmanager = document.getElementById("taskmanager")
const result = document.getElementById("result")



subBut.onclick = function(){
    result.innerHTML = "help"
    let tasks = {
        "id": 1, 
        "name": "",
        "priority": "",
        "isImportant": false,
        "isCompleted": false,
        "date": today
    }

    console.log(JSON.stringify(tasks));
    if (tasks.isImportant === true ){
        task.style.backgroundColor = "red"
    }
}