// const btn = document.querySelector('#clicker')

// btn.onclick = function() {
//     console.log('Go AWAY!');
// }

// btn.ondblclick = function() {
//     console.log('Double Click!!');
// }

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     alert('CLICKED!!')
// })

// btn.addEventListener('mouseover', function(){
//     btn.innerText = 'Stop touching Me!';
// })

// btn.addEventListener('mouseout', function(){
//     btn.innerText = 'Click this.'
// })

// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function(){
//     console.log('Moused over me');
//     const h = Math.floor(Math.random() * window.innerHeight)
//     const w = Math.floor(Math.random() * window.innerWidth)
//     btn.style.left = `${w}px`;
//     btn.style.top = `${h}px`;
// });

// btn.addEventListener('click', function(){
//     btn.innerText = 'Motherfucker, you got me !';
//     document.body.style.backgroundColor = 'green';
// });

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const changeColor = function(){
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor
// }
// const container = document.querySelector('#boxes')

// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild(box);

//     box.addEventListener('click', changeColor)
// }

const input = document.querySelector('#username');

input.addEventListener('keydown',function(e){
    console.log('Key Down.')
} )

input.addEventListener('keyup',function(e){
    console.log('Key UP.')
} )

input.addEventListener('keypress',function(e){
    console.log('Key PRESS.')
} )

const addItemInput = document.querySelector('#addItem')
const itemUl = document.querySelector('#items')

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemUl.appendChild(newItem);
        this.value = ''
    }
})