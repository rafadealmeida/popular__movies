import{ filmesServices } from '../javascript/filmes__controller.js'
import { criaCard} from '../javascript/criaCard.js'
import {render} from '../javascript/criaCard.js'


const sessaoFilmes = document.querySelector(".cards__filmes--todos")
const botaoPesquisar = document.querySelector(".cabecalho__pesquisa--botao")
const input = document.querySelector(".cabecalho__pesquisa--barra")

botaoPesquisar.onclick = () =>{
    let movie = input.value
    
    console.log(movie)
    pesquisarFilme(movie)
}
const pesquisarFilme = async (filme) =>{
    try {
        
        const dados = await filmesServices.pesquisaFilme(filme)

        const filmes = dados.results

        console.log(input.length)

        if(input.value.length>0){

            
            sessaoFilmes.innerHTML = ""
            
            filmes.forEach(filme =>{
                
                sessaoFilmes.appendChild(criaCard(filme.poster_path,filme.title,filme.vote_average,filme.overview))
                
            })
        }
        else{
            window.reload()
            render()
            console.log("nada digitado")
        }


    } catch (error) {
        console.log(error)
    }
}

