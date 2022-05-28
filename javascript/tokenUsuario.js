const loginSessaoConvidado = async () =>{
    const resposta = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=6c103da2d312053157cc9821206d6474')
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error("Não foi possível iniciar a Sessão")
    
}

const iniciarSessao = async () =>{
    const resposta = await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=6c103da2d312053157cc9821206d6474')
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error("Não foi possível iniciar a Sessão")
     
}

const botao = document.querySelector(".sessao__botao")


botao.addEventListener('click', function () {
    // sessaoConvidado()
    sessaoId()
})

const sessaoConvidado = async () =>{
    try{
        const token = await loginSessaoConvidado()
        
        const tokenID = token.guest_session_id
        console.log(tokenID)
    }
    catch(err){
        console.log(err)
    }
}

const sessaoId = async () =>{
    try {
        const id = await iniciarSessao()

        const sessionID = id.request_token

        console.log(sessionID)
    }
    catch(err){
        console.log(err)
    }
}