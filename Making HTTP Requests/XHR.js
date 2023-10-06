// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function(){
//     console.log('FIRST Request worked');
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0]
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function(){
//         console.log('Second request worked')
//         const filmData = JSON.parse(this.responseText);
//         console.log(filmData)
//     })
//     filmReq.addEventListener('error', function(e){
//         console.log('ERROR!', e);
//     })
//     filmReq.open('GET', filmURL)
//     filmReq.send()
//     // for(let planet of data.results){
//     //     console.log(planet.name)
//     // }  
// });

// firstReq.addEventListener('error', (e) => {
//     console.log('ERROR!')
// });

// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();

// console.log('Request Sent.');
// const checkStatusAndParse = (response) => {
//     if(!response.ok){
//         throw new Error(`Status Code Error: ${response.status}`)
//     }
//     return response.json()
// };


// const printPlanets = (data) => {
//     console.log('Loaded 10 more planets.')
//     for(let planets of data.results){
//         console.log(planets.name)
//     }
//     return Promise.resolve(data.next);
// }

// const fetchNextPlanets = (url) => {
//     return fetch(url)
// }

// fetch('https://swapi.dev/api/planets/')
// .then(checkStatusAndParse) 
// .then(printPlanets)
// .then(fetchNextPlanets)

// .then(checkStatusAndParse)
// .then(printPlanets)

// .catch((err) => {
//     console.log('Shit went wrong.')
//     console.log(err)
// })

const fetchNextPlanets = ((url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url)
} )

const printPlanets =({data}) => {
    console.log(data)
    for(let planet of data.results){
        console.log(planet.name)
    }
    return Promise.resolve(data.next)
}

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err) => {
    console.log(err)
})