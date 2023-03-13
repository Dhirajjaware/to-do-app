'use strict';

const inputTask = document.querySelector('.input__task');
const btnAddTask = document.querySelector('.btn__add-task');
const app = document.getElementById('application');
const btnClear = document.querySelector('.btn__clear');

btnAddTask.addEventListener('click', function (e) {
  e.preventDefault();

  const now = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  if (inputTask.value) {
    //Create div
    const taskDiv = document.createElement('div');
    taskDiv.style.backgroundColor = '#C04A82'
    taskDiv.innerHTML = `<div class="alert  d-flex justify-content-between task" role="alert">
    <p class="fs-5">${Intl.DateTimeFormat('en-IN').format(now)}</p> 
    <p class="fs-5">${Intl.DateTimeFormat('en-IN', options).format(now)}</p>
    <p class ="fs-5">${inputTask.value}
    </p>
    <button type="button" class="btn-close fs-6" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    // Add task
    app.append(taskDiv);

    //clear all task
    btnClear.addEventListener('click', function () {
      taskDiv.remove();
    });

    inputTask.value = '';
  } else {
    const messageAlert = document.createElement('div');
    messageAlert.innerHTML = `<div class="alert alert-danger text-center" role="alert">
   Please enter your task first!
    <button type="button" class="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </div>`;

    app.prepend(messageAlert);
  }
});
