const listaFilme = async () =>{
    const resposta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6c103da2d312053157cc9821206d6474&language=pt-BR&page=1')
    if (resposta.ok) {
        return resposta.json()


    }
    throw new Error("Não foi possível listar os produtos")
    
    
    .then(data => {
        console.log(data.results)
    })

    
}

    export const filmesServices = {
        listaFilme
    }

