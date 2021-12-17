//lista de argumentos
console.log(process.argv)
//node process +termos que deseja adicionar, e sempre usalos ao chamar a execução 



// imprimindo os argumentos da lista adicionados com process:
console.log("Seu nome é ", process.argv[2] + ' ' + process.argv[3])



// usando interpolação:
const firstName = process.argv[2]
const lastName = process.argv[4]
console.log(`Seu nome é ${firstName} e sobrenome ${lastName}`)



//podemos passar flags como argumentos, ex:
//node process --name "Poliana Karen" --geeting "Tudo bem com vocês?"
