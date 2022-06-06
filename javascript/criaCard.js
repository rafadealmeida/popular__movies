import{ filmesServices } from '../javascript/filmes__controller.js'



export const criaCard = (imagem,nome,nota,descricao,id)=>{
   
    const section = document.createElement('section');
    const conteudo = `
    
    <img src="https://image.tmdb.org/t/p/w500/${imagem}" alt="" class="card__filme--imagem">
    <div class="card__filme--informacao">
        <h2 class="card__filme--titulo">${nome}</h2>
        <div class="filme__informacao--extra">
            <p class="card__filme--nota">${nota}</p>
            <p class="card__filme--favorito" id = ${id}>Favoritar</p>
        </div>
    </div>
    <p class="card__filme--descricao">${descricao}</p>
    

`

section.classList.add('card__filme');
section.innerHTML = conteudo;
return section;

}

const sessaoFilmes = document.querySelector(".cards__filmes--todos")


let id


export const render = async () => {
    try{
         const dados = await filmesServices.listaFilme()
         console.log(dados.results)
        const filmes = dados.results

            filmes.forEach(filme =>{
                
                sessaoFilmes.appendChild(criaCard(filme.poster_path,filme.title,filme.vote_average,filme.overview,filme.id))
                id = filme.id
                // console.log(filme.id)
                
                // console.log(coracaoFav)
                // coracaoFav.forEach(favorito =>{
                //     chegarFavorito(id) ? favorito.style.backgroundImage = favoritoEstado.favoritado : favorito.style.backgroundImage = favoritoEstado.nãofavoritado
                //     chegarFavorito(id) ? console.log("Tem favorito") : console.log("Não tem favorito")
            })      

                // })

                
                // let coracaoFav = document.querySelectorAll(".card__filme--favorito")
                // for (let i = 0; i < coracaoFav.length; i++) {
                //     const fav = coracaoFav[i];
                //     console.log(fav)
                //     chegarFavorito(id) ? fav.style.backgroundImage = favoritoEstado.favoritado : fav.style.backgroundImage = favoritoEstado.nãofavoritado
                //     chegarFavorito(id) ? console.log("Tem favorito") : console.log("Não tem favorito")
                    
                //     if(chegarFavorito(id)){
                //         fav.style.backgroundImage = favoritoEstado.favoritado 

                //     }
                //     else{
                //         fav.style.backgroundImage = favoritoEstado.nãofavoritado
                //     }
                // }
            
          
    }
    catch(erro){
        console.log(erro)
    }
}

    render()

function getFavoritaFilme(){
    return JSON.parse(localStorage.getItem('FilmesFavoritos'))
    }
export function chegarFavorito(id){
    const filmes =  getFavoritaFilme() || []
    return filmes.find(filme=>filme.id == id)
    }

const favoritoEstado = {
        favoritado :  "url('../src/vetores/HeartFav.svg')",
        naoFavoritado :  "url('../src/vetores/Heart.svg')"
    }