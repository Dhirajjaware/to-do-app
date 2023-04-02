'use strict';

const inputTask = document.querySelector('.input__task');
const containerApp = document.getElementById('application');
const btnAddTask = document.querySelector('.btn__add-task');
const btnClear = document.querySelector('.btn__clear');
const form = document.querySelector('#input__form');
const taskContainer = document.getElementById('task__list');

class Task {
  constructor(task) {
    this.task = task;
  }
}

class App {
  #task = [];
  constructor() {
    //Get Location For No Resone 😁
    navigator.geolocation.getCurrentPosition(this._showApp, function () {
      alert('Allow the location');
    });

    // Add User div
    btnAddTask.addEventListener('click', this._addTask.bind(this));

    // Add User Task with KeyEnter
    form.addEventListener('submit', this._addTask.bind(this));

    // Get data form local storage
    this._getLocalStorage();

    //clear all tasks
    btnClear.addEventListener('click', this._clearAllTask);

    //Remove single task
    this._removeSingleTask();
  }

  _showApp() {
    containerApp.classList.remove('hidden');
  }

  _clearAllTask() {
    taskContainer.classList.add('hidden');
    localStorage.clear();
  }
  _addTask(e) {
    e.preventDefault();
    const task = inputTask.value;
    let list;

    if (task) {
      //Add A div
      const html = `<div class="list">
		  <div class="alert d-flex justify-content-between task" role="alert">
      <p class ="fs-5">${task}
      </p>
      <button type="button" class="btn-close fs-4" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    	</div>`;

      taskContainer.insertAdjacentHTML('afterbegin', html);

      inputTask.value = '';

      // create object with Task class
      list = new Task(task);

      // push list object in task array
      this.#task.push(list);

      // Store data in local storage
      this._setLocalStorage();
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

  _setLocalStorage() {
    localStorage.setItem('task', JSON.stringify(this.#task));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('task'));

    if (!data) return;

    this.#task = data;

    this.#task.forEach(task => this._renderTask(task));

    // this.#task.forEach(sTast => this._removeSingleTask(sTast));
  }

  _renderTask(task) {
    const html = `<div class="list">
		  <div class="alert d-flex justify-content-between task" role="alert">
      <p class ="fs-5">${task.task}
      </p>
      <button type="button" class="btn-close fs-4" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    	</div>`;

    taskContainer.insertAdjacentHTML('afterbegin', html);
  }
  // _removeSingleTask(task) {
  //   taskContainer.addEventListener('click', function (e) {
  //     const singleTask = e.target;

  //     console.log(task);
  //   });
  // }
}

const app = new App();
