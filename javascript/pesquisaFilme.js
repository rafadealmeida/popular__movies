import{ filmesServices } from '../javascript/filmes__controller.js'
import { criaCard} from '../javascript/criaCard.js'
import {render} from '../javascript/criaCard.js'
import { getFavoritaFilme } from '../javascript/criaCard.js'
import { esperaRender } from './favoritarFilme.js'


const sessaoFilmes = document.querySelector(".cards__filmes--todos")
const botaoPesquisar = document.querySelector(".cabecalho__pesquisa--botao")
const input = document.querySelector(".cabecalho__pesquisa--barra")

input.addEventListener("keyup",(event)=>{
    
   if(input.value.length === 0){
        sessaoFilmes.innerHTML = ""
        render()
    } else if(event.keyCode === 13){

        let movie = input.value
        pesquisarFilme(movie)
       
    }
})

botaoPesquisar.onclick = () =>{
    let movie = input.value

    pesquisarFilme(movie)
}
const pesquisarFilme = async (filme) =>{
    try {
        
        const dados = await filmesServices.pesquisaFilme(filme)

        const filmes = dados.results

        if(input.value.length>0){

            
            sessaoFilmes.innerHTML = ""
            
            filmes.forEach(filme =>{
               
                    if(filme.poster_path == "" || filme.overview == ""){
                        return
                    }
                    else{
                        
                        sessaoFilmes.appendChild(criaCard(filme.poster_path,filme.title,filme.vote_average,filme.overview,filme.id))
                        filme.id
                        
                        let coracaoFav = document.querySelectorAll(".card__filme--favorito")
                        console.log(coracaoFav)
                        
                        for (let i = 0; i < coracaoFav.length; i++) {
                            const fav = coracaoFav[i];
                            let id = fav.id
                            const movies = getFavoritaFilme() || []
                            
                            if(movies.find(filme=>filme.id == id)){
                                fav.style.backgroundImage = favoritoEstado.favoritado 
                                
                            }
                            else{
                                fav.style.backgroundImage = favoritoEstado.nãofavoritado
                            }
                        }   
                        esperaRender()
                        
                    }
                   

            })
        }

    } catch (error) {
        console.log(error)
    }
}

const favoritoEstado = {
    favoritado :  "url('../src/vetores/HeartFav.svg')",
    naoFavoritado :  "url('../src/vetores/Heart.svg')"
}

