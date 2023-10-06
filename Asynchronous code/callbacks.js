const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)';
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)'
//         setTimeout(() => {
//             btn.style.transform = 'translateX(300px)'    
//             setTimeout(() => {
//                 btn.style.transform = 'translateX(400px)'
//                 setTimeout(() => {
//                     btn.style.transform = 'translateX(500px)'
//                 }, 5000)
//             }, 4000)
//         }, 3000)
//     }, 2000)
// }, 1000)

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout( () => {
//         const bodyBoundary = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;
    
//         if(elRight + amount > bodyBoundary){
//             onFailure();
//         }
//         else{
//             element.style.transform = `translateX(${amount + currLeft}px)`;
//             onSuccess();
//         }
        
//     }, delay)
// }


// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000 ,() =>{
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 100, 1000);
//             });
//         });
//     });
// });

// moveX(btn, 100, 1000, () => {
//     //success
//     moveX(btn, 400, 1000, () => {
//         // success
//         moveX(btn, 700, 1000, () => {
//             //success
//             console.log('Really, we still have screen left?');
//         }, () => {
//             // fail
//             alert('FFS, CANNOT MOVE ANY FURTHER!')
//         })
//     }, () => {
//         //fail
//         alert('CANNOT MOVE ANY FURTHER!')
//     })
// }, () => {
//     //fail
//     alert ('CANNOT MOVE ANY FURTHER!')
// })


const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
        
            if(elRight + amount > bodyBoundary){
                reject({bodyBoundary, elRight, amount});
            }
            else{
                element.style.transform = `translateX(${amount + currLeft}px)`;
                resolve();
            }
            
        }, delay)
    })
}

async function animateRight(el, amt){
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
}
animateRight(btn, 100).catch((err) => {
    console.log('ALL DONE');
    animateRight(btn, -100);
});


// moveX(btn, 300, 1000)
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .catch(({bodyBoundary, elRight, amount}) => {
//         console.log(`Body is ${bodyBoundary}px wide`)
//         console.log(`element is at ${elRight}, ${amount}px is too large!`)
//     });
    
    