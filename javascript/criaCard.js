import{filmesServices} from '../javascript/filmes__controller.js'

const criaCard = (imagem,nome,nota,descricao)=>{
   
    const section = document.createElement('section');
    const conteudo = `
    
    <img src="${imagem}" alt="" class="card__filme--imagem">
    <div class="card__filme--informacao">
        <h2 class="card__filme--titulo">${nome}</h2>
        <div class="filme__informacao--extra">
            <p class="card__filme--nota">${nota}</p>
            <p class="card__filme--favorito">Favoritar</p>
        </div>
    </div>
    <p class="card__filme--descricao">${descricao}</p>
    

`

section.classList.add('card__filme');
section.innerHTML = conteudo;
return section;

}

const sessaoFilmes = document.querySelector(".cards__filmes--todos")



sessaoFilmes.appendChild(criaCard('../src/imagens/image 3.jpg','Batman','9.5','RUmmmmmUmmm'))

