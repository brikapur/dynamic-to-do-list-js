document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    //add new task
    function addTask() {
        //get and trim input text
        const taskText = taskInput.value.trim();


    //alert if input is empty
    if (taskText === "") {
    alert("Please enter a task.");
    return;
    }
    //create a list item
    const li = document.createElement("li");
    li.textContent = taskText;
    //creating a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    //remove task on button click
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };
    //add remove button to li
    li.appendChild(removeButton);
    //add li to the task list
    taskList.appendChild(li);
    //clear input field
    taskInput.value = "";
}
//add task when clicking the add task button
    addButton.addEventListener("click", addTask);
    // Add task when pressing Enter key in input
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke addTask when DOM loads (as required)
    addTask();
});
