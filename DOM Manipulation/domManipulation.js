console.log('The DOM.');

const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// for(let i = 0; i< allLis.length; i++){
//     allLis[i].innerText = 'WE ARE THE VICTORS!';
// }

// for(let li of allLis){
//     li.innerHTML = 'WE ARE <b> THE CHAMPIONS </b>'
// // 

// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })

// const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
newImg.style.width = '300px';

document.body.appendChild(newImg);


// const newLink = document.createElement('a');
// newLink.innerText = 'Google Link.'
// newLink.href = 'https://www.google.com'

// const firstP = document.querySelector('p');
// firstP.appendChild(newLink);