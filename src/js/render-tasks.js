const list = document.querySelector('#task-list');

export function renderTask(markup) {
  list.insertAdjacentHTML('beforeend', markup);
}

export function renderTasks(markup) {
  list.insertAdjacentHTML('beforeend', markup);
}
