const input = document.querySelector('.input');
const button = document.querySelector('.button');
const out = document.querySelector('.out');

button.addEventListener('click', () => {

  const newDiv = document.createElement('div');
  newDiv.classList.add('newElems');

  // add new task 
  const newTask = document.createElement('div');
  newTask.classList.add('newTask')
  newTask.innerHTML = `${input.value}`;
  if (input.value == '') {
    return
  }

  // add new cancel button
  const cancelTask = document.createElement('div');
  cancelTask.classList.add('cancelTask')
  cancelTask.innerHTML = 'X';

  // add new important button
  const newImportant = document.createElement('div');
  newImportant.classList.add('newImportant')
  newImportant.innerHTML = 'V';

  out.appendChild(newDiv);
  newDiv.appendChild(newTask)
  newDiv.appendChild(cancelTask)
  cancelTask.before(newImportant)

  //delete some task
  cancelTask.addEventListener('click', (elem) => {
    const item = elem.target;
    if (item.classList[0] === 'cancelTask') {
      const toDo = item.parentElement;
      toDo.remove();
    }
  })

  //add green color if important
  newImportant.addEventListener('click', (elem) => {
    const item = elem.target;
    const toDo = item.parentElement;
    toDo.classList.toggle('toggleColor')
  })

  //clear input
  input.value = '';
})

const sel = document.querySelector('.select');
sel.addEventListener('change', () => {
  const newElems = document.querySelectorAll('.newElems');

  // sort "in progress" button
  if (sel.value == 'inProgress') {
    input.disabled = false;

    for (let i = 0; i < newElems.length; i++) {
      if (newElems[i].classList.contains('toggleColor')) {
        newElems[i].classList.add('none');

      } else if (newElems[i].classList.contains('none')) {
        newElems[i].classList.remove('none');
      }
    }

    // sort "all" button
  } else if (sel.value == 'all') {
    input.disabled = false;
    for (let i = 0; i < newElems.length; i++) {
      newElems[i].classList.remove('none');
    }

    // sort "done" button
  } else if (sel.value == 'done') {
    input.disabled = true;

    for (let i = 0; i < newElems.length; i++) {
      if (newElems[i].classList.contains('toggleColor') == false) {
        newElems[i].classList.add('none');

      } else if (newElems[i].classList.contains('none')) {
        newElems[i].classList.remove('none');
      }
    }

  }
})




