'use strict';

const btnAddTask = document.querySelector('.btn__add-task');

const inputTask = document.querySelector('.input__task');

const taskList = document.querySelector('.user__task-list');

btnAddTask.addEventListener('click', function (e) {
  e.preventDefault();
  const tasks = document.createElement('ol');
  tasks.innerHTML = inputTask.value;
  taskList.append(tasks);
  inputTask.value = '';
});
