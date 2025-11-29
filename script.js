document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false = do not save again
        });
    }

    // Add new task
    function addTask(taskText, save = true) {

        // If taskText came from input
        if (save === true) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create li
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task on click + update Local Storage
        removeButton.onclick = function () {
            taskList.removeChild(li);

            // Update Local Storage after removal
            const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = savedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (save) {
            const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            savedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            taskInput.value = "";
        }
    }

    // When clicking the button
    addButton.addEventListener("click", function () {
        addTask();
    });

    // Press Enter to add task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load saved tasks when page opens
    loadTasks();

});

