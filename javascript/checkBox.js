import { render } from "./criaCard.js"
import { getFavoritaFilme } from "./criaCard.js"
import{ criaCard } from './criaCard.js'
import {favService} from "./favoritarFilme.js"
import{esperaRender} from './favoritarFilme.js'

const checkbox = document.querySelector(".cabecalho__checkbox--input")
const sessaoFilmes = document.querySelector(".cards__filmes--todos")

checkbox.addEventListener("change",(event) => {
    event.currentTarget.checked  ? mostrarFavoritos() : voltarFilme()
})

window.addEventListener("load", () => {
    unchecked()
})

const mostrarFavoritos = () =>{
    const filmesFavoritos = getFavoritaFilme() || []
    sessaoFilmes.innerHTML = ""
    filmesFavoritos.forEach(filmeFav=>{

        sessaoFilmes.appendChild(criaCard(filmeFav.poster_path,filmeFav.title,filmeFav.vote_average,filmeFav.overview,filmeFav.id))
        const fav = document.querySelectorAll('.card__filme--favorito')
    
   

        fav.forEach(favorito => {
    
            favorito.style.backgroundImage = favoritoEstado.favoritado
            favorito.addEventListener('click', (event) =>{
                let coracaoFav = event.target.style.backgroundImage
                let id = event.target.id
                console.log("clicou")
                                             
                if(coracaoFav == ""){
                    favorito.style.backgroundImage = favoritoEstado.favoritado
                        
                    favService.procurarFilme(id).then(data=>{
                        filme = data
                        favService.saveToLocalStorage(filme)
                    })      
                    
                }else{
                    favorito.style.backgroundImage = favoritoEstado.naoFavoritado
                    coracaoFav=""
                    
                    favService.removeFromLocalStorage(id)   
                }
            })
        })
    })
}

const voltarFilme = ()=>{
    sessaoFilmes.innerHTML=""
    render()
    esperaRender()

}
const favoritoEstado = {
    favoritado :  "url('../src/vetores/HeartFav.svg')",
    naoFavoritado :  "url('../src/vetores/Heart.svg')"
}

function unchecked () {
    checkbox.checked = false
}