import{ filmesServices } from '../javascript/filmes__controller.js'
import { render } from '../javascript/criaCard.js'



const esperaRender = async () => {
    await render()
    
    const fav = document.querySelectorAll('.card__filme--favorito')
    

    fav.forEach(favorito => {

        favorito.addEventListener('click', () =>{
            console.log('favoritou')
            favorito.style.backgroundImage = "url('../src/vetores/HeartFav.svg')"
            


        })
    })
    }
    
esperaRender()

function getFavoritaFilme(){
    return JSON.parse(localStorage.getItem('FilmesFavoritos'))
}

function saveToLocalStorage(filme) {
    const filmes = getFavoritaFilme() || []
    filmes.push(filme)
    const filmesJSON = JSON.stringify(filmes)
    localStorage.setItem('FilmesFavoritos', filmesJSON)
}