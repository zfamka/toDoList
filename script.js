const input = document.querySelector('.input');
const addTask = document.querySelector('.button');
const out = document.querySelector('.out');
const sortButton = document.querySelector('.select');

// event listeners
addTask.addEventListener('click', addToDo);
sortButton.addEventListener('change', sortBtn)

function addToDo() {

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
    sortBtn()
  })

  //clear input
  input.value = '';
}

function sortBtn() {
  const newElems = document.querySelectorAll('.newElems');

  // sort "in progress" button
  if (sortButton.value == 'inProgress') {
    input.disabled = false;

    // for (let i = 0; i < newElems.length; i++) {
    //   if (newElems[i].classList.contains('toggleColor')) {
    //     newElems[i].style.display = 'none';
    //   } else {
    //     newElems[i].style.display = 'flex';
    //   }
    // }
    newElems.forEach(elem => {
      if (elem.classList.contains('toggleColor')) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'flex';
      }
    })

    // sort "all" button
  } else if (sortButton.value == 'all') {
    input.disabled = false;
    // for (let i = 0; i < newElems.length; i++) {
    //   newElems[i].style.display = 'flex';
    // }
    newElems.forEach(elem => {
      elem.style.display = 'flex';
    })

    // sort "done" button
  } else if (sortButton.value == 'done') {
    input.disabled = true;

    // for (let i = 0; i < newElems.length; i++) {
    //   if (newElems[i].classList.contains('toggleColor') == false) {
    //     newElems[i].style.display = 'none';
    //   } else {
    //     newElems[i].style.display = 'flex';
    //   }
    // }
    newElems.forEach(elem => {
      if (elem.classList.contains('toggleColor') == false) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'flex';
      }
    })

  }
}




