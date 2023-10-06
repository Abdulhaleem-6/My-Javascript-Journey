const autocompleteConfig = {
    renderOption(movie){
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.poster;
        return `
        <img src='${imgSrc}' >
        <h3>${movie.Title}              ${movie.Year}</h3>
        <br>
    `;
    },
    inputValue(movie){
        return movie.Title;
    },
    async fetchData(searchTerm){
        const response = await axios.get('http://www.omdbapi.com/', {
            params : {
                apikey:  '6e23ecd5',
                s: searchTerm
            }
        });
    
        if(response.data.Error){
            return [];
        }
        return response.data.Search;
    }
} 

createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#left-autocomplete'),
    onOptionSelect(movie){
        const tutorial = document.querySelector('.tutorial');
        tutorial.classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
    }
});
createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    onOptionSelect(movie){
        const tutorial = document.querySelector('.tutorial');
        tutorial.classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
    }
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey:  '6e23ecd5',
            i: movie.imdbID
        }
    });
    summaryElement.innerHTML = movieTemplate(response.data);
    
    if(side.toLowerCase() === 'left'){
        leftMovie = response.data;
    }else{
        rightMovie = response.data;
    }

    if(leftMovie && rightMovie){
        runComparison();
    }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');

    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];

        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);

        if(rightSideValue > leftSideValue) {
            leftStat.classList.remove('is-primary');
            leftStat.classList.add('is-warning');
        }else{
            rightStat.classList.remove('is-primary');
            rightStat.classList.add('is-warning');
        }

    });
};

const movieTemplate = (movieDetail) => {
    const boxOffice = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    const metaScore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
        
    const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);

        if(isNaN(value)) {
            return prev;
        } else{
            return prev + value
            }
    }, 0);

    return `
        <article class='media'>
            <figure class='media-left'>
                <p class='image'>
                    <img src='${movieDetail.Poster}'>
                </p>
            </figure>
            <div class='media-content is-flex'>
                <div class='content'>
                    <h1> ${movieDetail.Title} </h1>
                    <h4> ${movieDetail.Genre} </h4>
                    <p> ${movieDetail.Plot} </p>
                </div>
            </div>
        </article>
        
        <article data-value=${awards} class='notification is-primary'>
            <p class='title is-flex'> ${movieDetail.Awards} </p>
            <p class='subtitle is-flex'> Awards </p>
        </article>
        <article data-value=${boxOffice} class='notification is-primary'>
            <p class='title is-flex'> ${movieDetail.BoxOffice} </p>
            <p class='subtitle is-flex'> Box Office </p>
        </article>
        <article data-value=${metaScore} class='notification is-primary'>
            <p class='title is-flex'> ${movieDetail.Metascore} </p>
            <p class='subtitle is-flex'> Metascore </p>
        </article>
        <article data-value=${imdbRating} class='notification is-primary'>
            <p class='title is-flex'> ${movieDetail.imdbRating} </p>
            <p class='subtitle is-flex'> IMDB Rating </p>
        </article>
        <article data-value=${imdbVotes} class='notification is-primary'>
            <p class='title is-flex'> ${movieDetail.imdbVotes} </p>
            <p class='subtitle is-flex'> IMDB Votes </p>
        </article>
    `;
};
