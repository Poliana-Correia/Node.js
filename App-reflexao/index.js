    
    /* Um APP para reflitir ao final de cada dia sobre sua jornada ! */ 


const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()   /*ou usando o process.exit()*/ 
    }                                   
})

process.on('exit', () => {
    console.log(`
        Bacana Poliana!
        
        O que vc aprendeu hoje foi :
        ${answers[0]}

        O que te aborreceu e vc poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Vc ajudou ${answers[3]} pessoa(s) hoje!!

        Volte amanhã para novas reflexões!
    `)
})