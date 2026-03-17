class Parquimetro {
    constructor(valorInserido) {
        this.valorInserido = valorInserido
    }

    calcular() {
        if (this.valorInserido < 1) {
            return {
                erro: true,
                mensagem: 'Valor insuficiente'
            }
        }

        if (this.valorInserido < 1.75) {
            return {
                tempo: 30,
                troco: this.valorInserido - 1
            }
        }

        if (this.valorInserido < 3) {
            return {
                tempo: 60,
                troco: this.valorInserido - 1.75
            }
        }

        return {
            tempo: 120,
            troco: this.valorInserido - 3
        }
    }

}

function calcular() {
    let res = document.getElementById('caixaRes')
    let valor = document.getElementById('caixaValor')
    let valorUsuario = Number(valor.value)

    const formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    const parquimetro = new Parquimetro(valorUsuario)

    const resultado = parquimetro.calcular()

    if(resultado.erro){
        res.style.color = 'red'
        res.innerHTML = resultado.mensagem
        return
    }

    res.style.color ='#063B4B'

    res.innerHTML = `⏱ Tempo: ${resultado.tempo}Min <br> R$ Troco: ${formatador.format(resultado.troco)} `
    valor.value = ''
    valor.focus()
}