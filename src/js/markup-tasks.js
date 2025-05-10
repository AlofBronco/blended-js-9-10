export function createMarkupTask(obj) {
  return `
    <li class="task-list-item" data-id="${obj.id}">
    <button class="task-list-item-btn">Delete</button>
    <h3>${obj.name}</h3>
    <p>${obj.description}</p>
</li>
    `;
}

export function createMarkupTasks(arr) {
  return arr.map(createMarkupTask).join('');
}
