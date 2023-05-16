
/*
const api = "https://randomuser.me/api/";

const IMG_path= "https://randomuser.me/image/";

const Search_api= "https://randomuser.me/search/";

const main= document.getElementById('main');
const form= document.getElementById('form');
const search= document.getElementById('search');


getMovies(api);

*/

const API_URl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1';

const IMG_Path = 'https://image.tmdb.org/t/p/w1280';

const Search_Url = 'https://api.themoviedb.org/3/search/movie?api_key=15005c48f2625def09dacd3d0fc01762&query="';


const form= document.getElementById('form');
const search= document.getElementById('search');
const main= document.getElementById('main');




getMovies(API_URl);
async function getMovies(url){
    
   /* let api = "https://randomuser.me/api/";*/
    const res= await fetch (url);
    const data  = await res.json();
   
   /* let veri = data.results[0];
    console.log(veri);
    */

    showMovies(data.results)
}
/*    
document.getElementById("img").innerHTML="<img src="+veri.picture.large+">";
    document.getElementById("name").innerHTML="<p> Film Adı : "+veri.name.title+" "+veri.name.first;
*/


    



    
    function showMovies(movies){
    
        main.innerHTML= '';
        movies.forEach((movie)=>{
    const {title,poster_path, vote_average,overview}=movie;
    const movieE1 = document.createElement('div');
    movieE1.classList.add('movie');
    movieE1.innerHTML=
     <div class="movie">
    
     <img src="$(IMG_path + poster_path)" alt="${title}"></img>
    <div class="movie-info">
    
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    
    <div class="owerview">
    ${overview}
    
    </div>
    </div>

    
    main.appendChild(movieE1);
    
        });
    }
    



function getClassByRate(vote){
    if(vote>=8){
        return 'green'}

        else if(vote>=5)
       {return 'orange'} 
        else
        {return 'red'}
       
    }



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm= search.value;

    if(searchTerm && searchTerm !==''){
getMovies(Search_Url+searchTerm)
search.value='';
    }
    else{
        window.location.reload()
    }

});





