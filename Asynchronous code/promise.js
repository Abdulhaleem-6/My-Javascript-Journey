// const willGetYouACat = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if(rand < 0.5){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })

// willGetYouACat.then(() => {
//     console.log('Yay we got a cat!')
// })
// willGetYouACat.catch(() => {
//     console.log(':( No cat.')
// })

// const makeCatPromise = (() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//         const rand = Math.random();
//         if(rand < 0.5){
//             resolve();
//         }
//         else{
//             reject();
//         }
//         }, 5000)
        
//     })
// })

// makeCatPromise()
//     .then(() => {
//         console.log('Yay we got a cat!')
//     })
//     .catch(() => {
//         console.log(':( No cat.')
//     });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users' : [
                        {id : 1, username : 'Bilbo'},
                        {id : 5, username : 'Esmeralda'}
                ],

                '/users/1' : {
                    id : 1,
                    username : 'Bilbo',
                    upvotes : 360,
                    city : 'Lisbon',
                    topPostId : 454321
                },

                '/users/5' : {
                    id : 5,
                    username : 'Esmerelda',
                    upvotes : 571,
                    city : 'Honolulu'
                },

                '/posts/454321' : {
                    id : 454321,
                    title : 'Ladies & Gentlemen, may I introduce my pig, Hamlet'
                },

                '/about' : 'This is the about page!'

            };
            const data = pages[url]
            if(data) {
                resolve({ status : 200, data });
            }else{
                reject({status : 404})
            }

            
            
        }, 2000);
    })
}


// fakeRequest('/cats')
// .then((res) => {
//     console.log('Status Code', res.status)
//     console.log('Data', res.data)
//     console.log('Request worked')
// })
// .catch((res) => {
//     console.log(res.status)
//     console.log('Request failed.')
// })

// fakeRequest('/users').then((res) => {
//    const id = res.data[0].id;
//    fakeRequest(`/users/${id}`).then((res) => {
//     const postId = res.data.topPostId;
//     fakeRequest(`/posts/${postId}`).then((res) => {
//         console.log(res)
//     });
//    });
// })
// .catch((err) => {
//     console.log('Oh no!', err);
// })

fakeRequest('/users')
    .then((res) => {
       const id = res.data[0].id;
       return fakeRequest(`/users/${id}`);
    })
    .then((res) => {
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('OH NO!', err)
    })