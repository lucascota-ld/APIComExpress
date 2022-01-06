const fs = require('fs')

//LENDO A IMAGEM
fs.createReadStream('./assets/salsicha.jpg')
    //ESCREVENDO A IMAGEM QUE FOI LIDA
    .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg'))
    //ESCUTANDO  O EVENTO
    .on('finish', () => console.log('A imagem foi escrita com sucesso'))