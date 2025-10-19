document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", addTask);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.classList.add("action-btns");

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "✔";
    doneBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "✖";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    input.value = "";
  }
});
