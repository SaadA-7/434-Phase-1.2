function switchTab(tabId, btnElement) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => tab.classList.remove('active'));

  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => button.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  btnElement.classList.add('active');
}

// Tab 5: Reads input and displays results
document.getElementById('choices-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const meal = document.querySelector('input[name="meal-type"]:checked').value;
  const ingredient = document.getElementById('main-ingredient').value;
  document.getElementById('choices-result').textContent = `You chose ${meal} with ${ingredient}.`;
});

// Tab 6: add, delete, mark, and view tasks 
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoStatus = document.getElementById('todo-status');

function updateTodoStatus() {
  const total = todoList.children.length;
  const completed = todoList.querySelectorAll('.completed').length;
  todoStatus.textContent = total === 0
    ? 'No tasks yet. Add one above to get started.'
    : `${completed} of ${total} tasks completed. Check a task to cross it off.`;
}

todoInput.addEventListener('input', () => todoInput.setCustomValidity(''));

document.getElementById('todo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const task = todoInput.value.trim();
  if (!task) {
    todoInput.setCustomValidity('Please enter a task, not just spaces.');
    todoInput.reportValidity();
    return;
  }

  const item = document.createElement('li');
  item.className = 'todo-item';
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const text = document.createElement('span');

  text.textContent = task;
  label.append(checkbox, text);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', `Delete task: ${task}`);

  checkbox.addEventListener('change', () => {
    item.classList.toggle('completed', checkbox.checked);
    updateTodoStatus();
  });
  deleteButton.addEventListener('click', () => {
    item.remove();
    updateTodoStatus();
    todoInput.focus();
  });

  item.append(label, deleteButton);
  todoList.append(item);
  updateTodoStatus();
  todoInput.value = '';
  todoInput.focus();
});
