function calcular() {
    let res = document.getElementById('caixaRes')
    let valor = document.getElementById('caixaValor')
    let valorUsuario = Number(valor.value)
    const formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    if (valorUsuario < 1) {
        res.innerHTML = 'Valor Insuficiente'
        res.style.color = 'red'
    } else {
        if (valorUsuario < 1.75) {
            res.style.color = '#063B4B'
            res.innerHTML = `⏱ Tempo: 30 min <br> R$ Troco: ${formatador.format(valorUsuario - 1)}`
        } else {
            if (valorUsuario < 3) {
                res.innerHTML = `⏱ Tempo: 60 min <br> R$ Troco: ${formatador.format(valorUsuario - 1.75)}`
            } else {
                res.innerHTML = `⏱ Tempo: 120 min <br> R$ Troco: ${formatador.format(valorUsuario - 3)}`
            }
        }
    }

    valor.value=''
    valor.focus()
}
