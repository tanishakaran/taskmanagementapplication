function addTask() {
  const taskInput = document.getElementById("taskInput");
  const priorityInput = document.getElementById("priorityInput");

  const taskText = taskInput.value.trim();
  const priority = priorityInput.value;

  if (!taskText) return;

  const li = document.createElement("li");
  const timestamp = new Date().toLocaleString();

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.className = "task-text";

  const priorityBadge = document.createElement("span");
  priorityBadge.textContent = " " + priority + " Priority";
  priorityBadge.className = "priority " + priority.toLowerCase();

  const time = document.createElement("div");
  time.className = "timestamp";
  time.textContent = "⏰ " + timestamp;

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "task-buttons";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.className = "done";
  doneBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Rename your task:", taskContent.textContent);
    if (newTask) taskContent.textContent = newTask;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  buttonGroup.append(doneBtn, editBtn, deleteBtn);

  li.append(taskContent, priorityBadge, buttonGroup, time);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  priorityInput.value = "Low";
}
