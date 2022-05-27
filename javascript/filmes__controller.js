const listaFilme = () =>{
    return fetch ('https://api.themoviedb.org/3/movie/550?api_key=6c103da2d312053157cc9821206d6474') .then (resposta=>{
        if (resposta.ok){
            return resposta.json();
            
        }
        throw new Error ("Não foi possível listar os produtos")
    })

    
}

    export const filmesServices = {
        listaFilme
    }

    