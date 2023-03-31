'use strict';

const inputTask = document.querySelector('.input__task');
const containerApp = document.getElementById('application');
const btnAddTask = document.querySelector('.btn__add-task');
const btnClear = document.querySelector('.btn__clear');
const form = document.querySelector('#input__form');

class App {
  #task = [];
  constructor() {
    //Get Location For No Resone 😁
    navigator.geolocation.getCurrentPosition(this._showApp, function () {
      alert('Allow the location');
    });

    // Add User div
    btnAddTask.addEventListener('click', this._addTask);

    // Cleat All User Task List

    // Add User Task with KeyEnter
    form.addEventListener('submit', this._addTask);
  }

  _showApp() {
    containerApp.classList.remove('hidden');
  }

  _addTask(e) {
    e.preventDefault();
    const now = new Date();
    let div;

    if (inputTask.value) {
      //Add A div
      div = document.createElement('div');
      div.style.backgroundColor = '#191825';
      div.classList.add('list');
      div.innerHTML = `<div class="alert d-flex justify-content-between task" role="alert">
      <p class="fs-5">${Intl.DateTimeFormat('en-IN',{year:"2-digit",month:"short",day:"numeric"}).format(now)}</p> 
      <p class="fs-5">${Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
      }).format(now)}</p>
      <p class ="fs-5">${inputTask.value}
      </p>
      <button type="button" class="btn-close fs-6" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;

      containerApp.append(div);
      inputTask.value = '';

      btnClear.addEventListener('click', function () {

        div.remove();
      });
    } else {
      const messageAlert = document.createElement('div');
      messageAlert.innerHTML = `<div class="alert alert-danger text-center" role="alert">
       Please enter your task first!
        <button type="button" class="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </div>`;

      containerApp.prepend(messageAlert);
    }
  }
}

const app = new App();
