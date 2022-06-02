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





export const render = async () => {
    try{
         const dados = await filmesServices.listaFilme()
        //  console.log(dados.results)
        const filmes = dados.results

            filmes.forEach(filme =>{
                
                sessaoFilmes.appendChild(criaCard(filme.poster_path,filme.title,filme.vote_average,filme.overview,filme.id))
                let id = filme.id
                console.log(filme.id)
                
            })
        
    }
    catch(erro){
        console.log(erro)
    }
}

    render()
