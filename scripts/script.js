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
    second: 'numeric'
  }
  if (inputTask.value) {


    //Create div
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `<div class="alert alert-info d-flex justify-content-between" role="alert">
    <p class="fs-5">${Intl.DateTimeFormat('en-IN').format(now)}</p> 
    <p class="fs-5">${Intl.DateTimeFormat('en-IN',options).format(now)}</p>
    <h4 class ="text-primary">${inputTask.value}
    </h4>
    <button type="button" class="btn-close fs-5" data-bs-dismiss="alert" aria-label="Close"></button>
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
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `<div class="alert alert-danger" role="alert">
   Please enter your task first!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </div>`;

    app.prepend(alertDiv);
  }
});
