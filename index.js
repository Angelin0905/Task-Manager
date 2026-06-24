const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMsg = document.getElementById("emptyMsg");

function updateCount() {
    taskCount.textContent = "🌷 Total Tasks: " + taskList.children.length;

    if (taskList.children.length === 0) {
        emptyMsg.style.display = "block";
    } else {
        emptyMsg.style.display = "none";
    }
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = function () {
        taskName.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {
        li.remove();
        updateCount();
    };

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(taskName);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCount();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateCount();