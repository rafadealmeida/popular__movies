import{ filmesServices } from '../javascript/filmes__controller.js'
import { criaCard} from '../javascript/criaCard.js'
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