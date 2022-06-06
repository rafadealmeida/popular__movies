const listaFilme = async () =>{
    const resposta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6c103da2d312053157cc9821206d6474&language=pt-BR&page=1')
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error("Não foi possível listar os filmes")    
  
}

const favoritarFilme = async (tokenID) => {
    const results = await fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=6c103da2d312053157cc9821206d6474&session_id=${tokenID}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "media_type": "movie",
                "media_id": 550,
                "favorite": true
              
        })
    })
    
    if (results.ok){
        return results.json()
    }
    throw new Error("Não foi possível favoritar o filme")
}

const pesquisaFilme = async (filme) =>{
    const resposta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6c103da2d312053157cc9821206d6474&language=pt-BR&query=${filme}&page=1&include_adult=false`)
    if (resposta.ok) {
        return resposta.json()


    }
    throw new Error("Não foi possível pesquisar o filme")

    
}

const pesquisaFilmeID = async (id) =>{
    const resposta = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6c103da2d312053157cc9821206d6474&language=pt-BR`)
    if (resposta.ok) {
        return resposta.json()


    }
    throw new Error("Não foi possível pesquisar o filme")
    .then(data => {
        console.log(data.results)
    })
    
}

    export const filmesServices = {
        listaFilme,
        favoritarFilme,
        pesquisaFilme,
        pesquisaFilmeID
    }

