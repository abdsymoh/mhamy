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
  let index = 0;
  for (let task of tasks) {
    document.getElementById("tasks").innerHTML += `
    <!-- end confirmDeleteTask -->
      <!-- task -->
      <div class="task" id="task">
        <div class="taskContent">
          <h1 class="taskTitle">${task.title}</h1>
          <span class="date"><i class="fa-solid fa-calendar-days"></i> ${task.date}</span>
        </div>
        <div class="taskActions">
          <button class="btn deleteBtn" id="deleteBtn" onclick = "deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></button>
          <button class="btn editBtn" id="editBtn"><i class="fa-solid fa-pencil"></i></button>
          <button class="btn checkBtn" id="checkBtn"><i class="fa-solid fa-check"></i></button>
        </div>
      </div>
      <!-- end task -->
    `;
    index++;
  }
}

fillTasksOnThePage();

// Add New Task
document.getElementById("addBtn").addEventListener("click", function () {
  document.getElementById("addTaskBox").style.display = "flex";
});

document.getElementById("addTask").addEventListener("click", function () {
  let taskTitle = document.getElementById("taskInput").value;
  let now = new Date();
  let date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
  document.getElementById("taskInput").value = "";
  let taskObject = {
    title: taskTitle,
    date: date,
    isDone: false,
  };
  tasks.push(taskObject);
  fillTasksOnThePage();
  document.getElementById("addTaskBox").style.display = "none";
});

// Delete Task

function deleteTask(index) {
  let task = tasks[index];
  document.getElementById("confirmDeleteTask").style.display = "flex";
  document.getElementById("confirmDeleteTask").innerHTML = `
  <p>هل ترغب في حذف: ${task.title}</p>
  <button id="yesBtn" class="btn yesBtn"><i class="fa-solid fa-trash-can"></i></button>
  <button id="noBtn" class="btn noBtn"><i class="fa-solid fa-xmark"></i></button>
  `;
  document.getElementById("yesBtn").addEventListener("click", function () {
    tasks.splice(index, 1);
    document.getElementById("confirmDeleteTask").style.display = "none";
    fillTasksOnThePage();
  });
  document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("confirmDeleteTask").style.display = "none";
  });
  // confirm("هل أنت متأكد من حذف: " + task.title);
}
// console.log(index);
