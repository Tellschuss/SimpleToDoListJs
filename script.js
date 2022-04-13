let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Important Task';
  } else {
    priority.textContent = 'Usual Task';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newTask = document.createElement('li');
  list.append(newTask)
  if (priority.classList.contains('is-important')) {
    newTask.classList.add('is-important');
  }
  newTask.textContent = input.value;
  input.value= '';
};

