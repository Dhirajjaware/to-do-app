'use strict';

const inputTask = document.querySelector('.input__task');
const btnAddTask = document.querySelector('.btn__add-task');
const app = document.getElementById('application');
const btnClear = document.querySelector('.btn__clear');

btnAddTask.addEventListener('click', function (e) {
  e.preventDefault();

  const now = new Date();
  if (inputTask.value) {
    //Create div
    const div = document.createElement('div');
    div.innerHTML = `<div class="container text-center" id="user__task-list">
    <p>${Intl.DateTimeFormat('en-IN').format(now)}</p>
      <h5>${inputTask.value}</h5>
    <i class="fa-solid fa-square-xmark icon__close"></i>
  </div>`;

  // Add task 
    app.append(div);


      //clear all task
      btnClear.addEventListener('click',function(){
        div.remove();
      })
      
        inputTask.value = '';
  }else{
    const alertMessage = document.createElement('p').textContent = `Please enter task`
    app.prepend(alertMessage)
  }
});
