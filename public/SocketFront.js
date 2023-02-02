const server = io()

const SendMessage = (ValorMensagem, BotaoEnviar) => {
    BotaoEnviar.addEventListener("click", function(e) {
        e.preventDefault()
        server.emit("SendMessage", (ValorMensagem))
        console.log(MessageValue)
    })

}