import { createMarkupTask, createMarkupTasks } from './markup-tasks.js';
import { renderTask, renderTasks } from './render-tasks.js';
import { addLS, deleteLS } from './local-storage-api.js';
import { nanoid } from 'nanoid';

const form = document.querySelector('.header-form');
const list = document.querySelector('#task-list');
const themeToggle = document.querySelector('.theme-toggle-button');

if (!JSON.parse(localStorage.getItem('tasks'))) {
  localStorage.setItem('tasks', JSON.stringify([]));
}

renderTasks(createMarkupTasks(JSON.parse(localStorage.getItem('tasks'))));

themeToggle.addEventListener('click', e => {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: e.target.elements.taskName.value.trim(),
    description: e.target.elements.taskDescription.value.trim(),
    id: nanoid(),
  };

  addLS(data);

  const task = createMarkupTask(data);
  renderTask(task);

  e.target.elements.taskName.value = '';
  e.target.elements.taskDescription.value = '';
});

list.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    const id = e.target.closest('li').dataset.id;
    deleteLS(id);
    e.target.closest('li').remove();
  }
});
