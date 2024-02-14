// Tasks
let tasks = [
  {
    title: "المهمة الأولى",
    date: "9/2/2023",
    isDone: false,
  },
  {
    title: "المهمة الثانية",
    date: "10/2/2023",
    isDone: false,
  },
  {
    title: "المهمة الثالثة",
    date: "10/2/2023",
    isDone: false,
  },
];

function getTasksFromStorage() {
  let retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = retrievedTasks ?? [];
}
getTasksFromStorage();

function fillTasksOnThePage() {
  document.getElementById("tasks").innerHTML = "";
  let index = 0;
  for (let task of tasks) {
    document.getElementById("tasks").innerHTML += `
    <!-- end confirmDeleteTask -->
      <!-- task -->
      <div class="task ${task.isDone ? "taskIsDone" : " "}" id="task">
        <div class="taskContent">
          <h1 class="taskTitle">${task.title}</h1>
          <span class="date"><i class="fa-solid fa-calendar-days"></i> ${task.date}</span>
        </div>
        <div class="taskActions">
          ${task.isDone ? `<button button class="btn unCheckBtn" id="unCheckBtn" onclick="toggleTaskCompletion(${index})"><i class="fa-solid fa-xmark"></i></button>` : `<button button class="btn checkBtn" id="checkBtn" onclick="toggleTaskCompletion(${index})"><i class="fa-solid fa-check"></i></button>`}
          <button class="btn editBtn" id="editBtn" onclick="editTask(${index})"><i class="fa-solid fa-pencil"></i></button>
          <button class="btn deleteBtn" id="deleteBtn" onclick = "deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></button>
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
  storeTask();
  fillTasksOnThePage();
  document.getElementById("addTaskBox").style.display = "none";
});

// Delete Task

function deleteTask(index) {
  let task = tasks[index];
  document.getElementById("confirmDeleteTask").style.display = "flex";
  document.getElementById("confirmDeleteTask").innerHTML = `
  <p>هل ترغب في حذف: ${task.title}</p>
  <span>
    <button id="deleteTaskBtn" class="btn yesBtn"><i class="fa-solid fa-trash-can"></i></button>
    <button id="cancelDeleteTaskBtn" class="btn noBtn"><i class="fa-solid fa-xmark"></i></button>
  </span>
  `;
  document.getElementById("deleteTaskBtn").addEventListener("click", function () {
    tasks.splice(index, 1);
    document.getElementById("confirmDeleteTask").style.display = "none";
    storeTask();
    fillTasksOnThePage();
  });
  document.getElementById("cancelDeleteTaskBtn").addEventListener("click", function () {
    document.getElementById("confirmDeleteTask").style.display = "none";
  });
}

// Edit Task

function editTask(index) {
  let task = tasks[index];
  document.getElementById("editTaskBox").style.display = "flex";
  document.getElementById("editTaskBox").innerHTML = `
      <p><i class="fa-solid fa-spell-check"></i> رجاء إدخال عنوان المهمة الجديد</p>
      <input type="text" id="NewTaskInput" />
      <span>
        <button id="editTaskBtn" class="btn yesBtn">تعديل</button>
        <button id="cancelEditTaskBtn" class="btn noBtn"><i class="fa-solid fa-xmark"></i></button>
      </span>
  `;
  document.getElementById("editTaskBtn").addEventListener("click", function () {
    let NewTaskInput = document.getElementById("NewTaskInput").value;
    task.title = NewTaskInput;
    document.getElementById("editTaskBox").style.display = "none";
    storeTask();
    fillTasksOnThePage();
  });
  document.getElementById("cancelEditTaskBtn").addEventListener("click", function () {
    document.getElementById("editTaskBox").style.display = "none";
  });
}

// Task Is Done ?
function toggleTaskCompletion(index) {
  let task = tasks[index];
  task.isDone = !task.isDone;
  storeTask();
  fillTasksOnThePage();
}

// store function
function storeTask() {
  let tasksString = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksString);
}
