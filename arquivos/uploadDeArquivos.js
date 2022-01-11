const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada, erro) => {

    const tiposValidos = ['jpg', 'jpeg', 'png']
    const tipo = path.extname(caminho) 
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido){
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
        fs.createReadStream(caminho)
                
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(erro, novoCaminho)) 
    }else {
        const erro = ('O tipo é inválido')
        console.log('Erro, esse tipo não é válido')
        callbackImagemCriada(erro)
    }
    
}
 