const listaFilme = async () =>{
    const resposta = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=6c103da2d312053157cc9821206d6474')
    if (resposta.success) {
        return resposta.json()
    }
    throw new Error("Não foi possível iniciar a Sessão")
    
}

