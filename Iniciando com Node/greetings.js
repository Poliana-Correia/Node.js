const getFlagValue = require('./flags')

console.log(`Oi ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`) 


//node greetings --name "João" --greeting "Tudo bem com vc?" (passando o valor assim no terminal)