//Added variable of html elements to use in JS
const taskName = document.getElementById("taskName")
const taskPriority = document.getElementById("priority")
const importance = document.getElementById("importance")
const subBut = document.getElementById("submit")
const taskmanager = document.getElementById("taskmanager")

//Created empty variables for 
let tasks = []
let idnum = 0

subBut.addEventListener('click', function () {
//add more variables to assign the form elements the correct values
  const name = taskName.value
  const priority = taskPriority.value
  const isImportant = importance.checked
  const date = new Date().toLocaleDateString()
  
  idnum += 1 //add a 1 to per task
  
  //creates the format of each task using the user form input
  const task = {
    id: idnum,
    name,
    priority,
    isImportant,
    isCompleted: false,
    date
  }
  
  tasks.push(task) //adds the nw task to the tasks array
  outputTasks() //calls the function to print the
  console.log(JSON.stringify(tasks))
  //resets the fields for the next task
  taskName.value = ''
  importance.checked = false
});
  

function outputTasks() {
  taskmanager.innerHTML = "";
  //created a div for each new task to output
  tasks.forEach(task => {
    const taskDiv = document.createElement("div")
    taskDiv.className = "task";
    if (task.isImportant) taskDiv.classList.add("important")
    if (task.isCompleted) taskDiv.classList.add("completed")
    //formatted the output including the new buttons
    taskDiv.innerHTML = `${task.name} <br> Priority: ${task.priority}<br> Date: ${task.date} <button class="completeButton">${task.isCompleted ? "Undo" : "Complete"}</button>
      <button class="deleteButton">Delete</button>`
        
    const completeBtn = taskDiv.querySelector(".completeButton")
    completeBtn.addEventListener("click", () => {
      task.isCompleted = !task.isCompleted
      outputTasks()
      console.log(JSON.stringify(tasks))
    })
  
    const delBtn = taskDiv.querySelector(".deleteButton")
    delBtn.addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id)
      outputTasks();
      console.log(JSON.stringify(tasks))
    })
  
    taskmanager.appendChild(taskDiv)
  })
}