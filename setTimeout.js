// setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('Done!')

setTimeout(finished, timeOut)
console.log('Mostrar')          //a aplicação é assincrona ela não para