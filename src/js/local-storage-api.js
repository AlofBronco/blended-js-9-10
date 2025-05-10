export function deleteLS(id) {
  const LSdata = JSON.parse(localStorage.getItem('tasks'));

  localStorage.setItem(
    'tasks',
    JSON.stringify(LSdata.filter(item => item.id !== id))
  );
}

export function addLS(data) {
  const LSdata = JSON.parse(localStorage.getItem('tasks'));
  LSdata.push(data);
  localStorage.setItem('tasks', JSON.stringify(LSdata));
}
