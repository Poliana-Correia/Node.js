// configurando o express e o servidor

const express = require('express');
const app = express();                 // app ta carregando tudo que tem dentro do express

app.set("view engine", "ejs");         //falando pro express que a ferramente que vamos usar para renderizar tudo é o ejs, 
                                       //set é um metodo detro do express

app.get("/", function (req, res){      //criando uma rota ref. ao nome do nosso site , get metodo detro do express
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar (kkkk)"
        },
        {
            title: "A",
            message: "prender o básico é nescessário"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
    
    res.render("pages/index", {
        qualitys: items, 
        subtitle: subtitle,
    }); 
})

app.get("/sobre", function (req, res){       
    res.render("pages/about");          //o que vamos dar de resposta ? renderizar o index
})

app.listen(8080); //falando pro servidor que esta rodando na nossa maquina, 
                  //e quando chamarmos a porta 8080 vai rodar tudo o que foi feito aqui

console.log("Servidor rodando...")                