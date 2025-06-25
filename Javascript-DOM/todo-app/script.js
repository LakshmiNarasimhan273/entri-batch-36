function addTask(){
    const taskValue = document.getElementById("taskInput").value;

    if(taskValue.trim() === ""){
        alert("Please enter a task!");
    }
    // new task creation
    const newTask = document.createElement("div");
    newTask.innerText = taskValue

    document.getElementById("taskList").appendChild(newTask);

    document.getElementById("taskInput").value = "";
}