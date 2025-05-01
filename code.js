//assigning all html elements a variable
const taskName = document.getElementById("taskName")
const taskPriority = document.getElementById("priority")
const importance = document.getElementById("importance")
const subBut = document.getElementById("submit")
const taskmanager = document.getElementById("taskmanager")

//Assigning isImportant a boolean value instead of on and off
isImportant = importance.value
if (isImportant == "off"){
    isImportant = true
}
else{
    isImportant = false
}

//Assigning priority the value of the options so it shows high, meduim, or low
let priority = taskPriority.value 


//Creating a variable for the id number of each task 
let idnum = 0
subBut.addEventListener('click', function (){
    //adds to the id number each time it is clicked
    idnum += 1
    let name = taskName.value
    //creates a 
    let tasks = {
        id: idnum,
        name,
        priority,
        isImportant,
        isCompleted: false,
        date: "5/1/2025"
    }
    taskmanager.innerHTML += `<br>${taskName}_________Priority: ${priority}________${tasks.date}`
    console.log(JSON.stringify(tasks));
})