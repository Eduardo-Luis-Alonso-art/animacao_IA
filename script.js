let webhook = "https://eduardoluisalonso.app.n8n.cloud/webhook/animacao-css"

async function cliqueiNoBotao(){
    //cria uma variavel que é igual a uma classe no HTML chamada input-animacao ae ele guarda apenas o valor,ou seja, o conteudo desse input
    let textoInput = document.querySelector(".input-animacao").value
    let codigo = document.querySelector(".area-codigo")
    let areaResultado = document.querySelector(".area-resultado")

    let resposta = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta: textoInput })
    })

    let resultado = await resposta.json()

    let info = JSON.parse(resultado.resposta)

    codigo.innerHTML = info.code
    areaResultado.innerHTML = info.preview

    document.head.insertAdjacentHTML('beforeend', "<style>"+ info.style +"</style>")
    //pega agora um botao
    //let button = document.querySelector(".botao-animacao")
    //desabilita o botao
    //button.disabled = true;

    //enviar para a IA

}