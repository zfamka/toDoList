const input = document.querySelector('.input');
const button = document.querySelector('.button');
const out = document.querySelector('.out');

button.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('newElems');

  const newTask = document.createElement('div');
  newTask.classList.add('newTask')
  newTask.innerHTML = `${input.value}`;
  if (input.value == '') {
    return
  }


  const cancelTask = document.createElement('div');
  cancelTask.classList.add('cancelTask')
  cancelTask.innerHTML = 'X';

  const newImportant = document.createElement('div');
  newImportant.classList.add('newImportant')
  newImportant.innerHTML = 'V';

  out.appendChild(newDiv);
  newDiv.appendChild(newTask)
  newDiv.appendChild(cancelTask)
  cancelTask.before(newImportant)

  cancelTask.addEventListener('click', (elem) => {
    const item = elem.target;
    if (item.classList[0] === 'cancelTask') {
      const toDo = item.parentElement;
      toDo.remove();
    }
  })

  newImportant.addEventListener('click', (elem) => {
    const item = elem.target;
    const toDo = item.parentElement;
    toDo.classList.toggle('toggleColor')
  })

  input.value = '';
})




