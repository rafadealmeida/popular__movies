import{ filmesServices } from '../javascript/filmes__controller.js'
import { render } from '../javascript/criaCard.js'

let filmeFavorito 

const favoritoEstado = {
    favoritado :  "url('../src/vetores/HeartFav.svg')",
    naoFavoritado :  "url('../src/vetores/Heart.svg')"
}

const esperaRender = async () => {
    await render()
    
    const fav = document.querySelectorAll('.card__filme--favorito')
    
   

    fav.forEach(favorito => {

        favorito.addEventListener('click', (event) =>{
            let coracaoFav = event.target.style.backgroundImage
            let id = event.target.id
            let filme
                                         
            if(coracaoFav == "" || filmeFavorito == false){
                favorito.style.backgroundImage = favoritoEstado.favoritado
                filmeFavorito = true

                procurarFilme(id).then(data=>{
                    filme = data
                    saveToLocalStorage(filme)
                })      
                
            }else if (filmeFavorito){
                favorito.style.backgroundImage = favoritoEstado.naoFavoritado
               
                coracaoFav=""
                filmeFavorito = false
                removeFromLocalStorage(id)   
            }
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

// function chegarFavorito(id){
//     const filmes =  getFavoritaFilme() || []
//     return filmes.find(filme=>filme.id == id)
// }

function removeFromLocalStorage(id){
    const filmes = getFavoritaFilme() || []
    const acharFilme = filmes.find(filme=>filme.id == id)
    const novosFilmes = filmes.filter(filme=>filme.id != acharFilme.id)
    localStorage.setItem('FilmesFavoritos', JSON.stringify(novosFilmes))
}

const procurarFilme = async (id) => {

    try {
               
        const dados = await filmesServices.pesquisaFilmeID(id)

        const filme = dados

        return filme
    } catch (error) {
        console.log(error)
    }
   
}

export const favService = {
    getFavoritaFilme,
    saveToLocalStorage,
    // chegarFavorito,
    removeFromLocalStorage,
}