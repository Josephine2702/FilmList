

const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre')
const poster = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('form.add');
let inputFilm = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type="checkbox"]');
const btn = document.querySelector('.add button');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteAdv = (arr) => {
    arr.forEach(item => {
    item.remove();
});
}


const makesChanges = () => {
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    genre.textContent = 'Драма';
};


const sortArr = (arr) =>{
    arr.sort();
}


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    let newFilm = inputFilm.value;
    const favorite = checkbox.checked;
    
    
    if(newFilm && newFilm.length !== 0 && newFilm !== ''){
        
        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if(favorite){
            console.log('Вы добавили фильм в спимок любимых!');
        }
        
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
        e.target.reset();
    }
    
    
});


function createMovieList(films, parent){
    parent.innerHTML = '';
    sortArr(films);
    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
        </li>`
    });
    
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, movieList)
        })
    } )
    
}

createMovieList(movieDB.movies, movieList)
deleteAdv(adv);
makesChanges();