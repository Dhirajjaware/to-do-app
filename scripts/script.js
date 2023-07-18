'use strict';

const containerApp = document.querySelector('#app');
const inputTask = document.querySelector('.input__task');
const btnAddTask = document.querySelector('.btn__add-task');
const btnClear = document.querySelector('.btn__clear');
const form = document.querySelector('#input__form');
const taskContainer = document.getElementById('task__list');

class Task {
  constructor(task, date) {
    this.task = task;
    this.date = date;
  }
}

class App {
  #date;
  #task = [];
  #list;
  constructor() {
    //Render task
    form.addEventListener('submit', this.#addTask.bind(this));

    // load data form local storage
    this._getLocalStorage();

    //clear all tasks
    btnClear.addEventListener('click', this._clearAllTask);
  }

  _clearAllTask() {
    taskContainer.innerHTML = '';
    localStorage.clear();
  }

  #renderTask(task) {
    const markup = `
    <div class="alert alert-dismissible" id="list">
    <p>${task.date}</p>
    ${task.task}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    taskContainer.insertAdjacentHTML('afterbegin', markup);
  }

  #addTask(e) {
    e.preventDefault();
    const task = inputTask.value;
    if (!task) return;

    this.#createDate(new Date());

    // create object with Task class
    this.#list = new Task(task, this.#date);

    //render task
    this.#renderTask(this.#list);

    // push list object in task array
    this.#task.push(this.#list);

    //clear input field
    this.#clearInput();

    // Store data in local storage
    this._setLocalStorage();
  }

  _setLocalStorage() {
    localStorage.setItem('task', JSON.stringify(this.#task));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('task'));
    if (!data) return;
    this.#task = data;
    this.#task.forEach(task => this.#renderTask(task));
  }

  #clearInput() {
    inputTask.value = '';
  }

  #createDate(date) {
    this.#date = Intl.DateTimeFormat(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }
}

const app = new App();
