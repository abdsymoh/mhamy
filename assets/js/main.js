// Tasks
let tasks = [
  {
    title: "تجربة المهمة",
    date: "10/02/2023",
    isDone: false,
  },
];

function fillTasksOnThePage() {
  document.getElementById("tasks").innerHTML = "";
  for (let task of tasks) {
    document.getElementById("tasks").innerHTML += `
      <!-- task -->
      <div class="task">
        <div class="taskContent">
          <h1 class="taskTitle">${task.title}</h1>
          <span class="date"><i class="fa-solid fa-calendar-days"></i> ${task.date}</span>
        </div>
        <div class="taskActions">
          <button class="btn deleteBtn" id="deleteBtn"><i class="fa-solid fa-trash-can"></i></button>
          <button class="btn editBtn" id="editBtn"><i class="fa-solid fa-pencil"></i></button>
          <button class="btn checkBtn" id="checkBtn"><i class="fa-solid fa-check"></i></button>
        </div>
      </div>
      <!-- end task -->
    `;
  }
}

fillTasksOnThePage();

// Add New Task
document.getElementById("addBtn").addEventListener("click", function () {
  document.getElementById("addTaskBox").style.display = "flex";
});

document.getElementById("addTask").addEventListener("click", function () {
  let taskTitle = document.getElementById("taskInput").value;
  document.getElementById("taskInput").value = "";
  let taskObject = {
    title: taskTitle,
    date: "10/02/2023",
    isDone: false,
  };
  tasks.push(taskObject);
  fillTasksOnThePage();
  document.getElementById("addTaskBox").style.display = "none";
});
