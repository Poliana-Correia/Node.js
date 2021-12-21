// clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
//clearInterval(interval) // usamos pára cancelar o intervalo imediatamente

setTimeout( () => clearInterval (interval), 3000) //cancela depois de um certo tempo de repetição