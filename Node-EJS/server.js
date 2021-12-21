// configurando o express e o servidor

const express = require('express');
const app = express();                 // app ta carregando tudo que tem dentro do express

app.set("view engine", "ejs");         //falando pro express que a ferramente que vamos usar para renderizar tudo é o ejs, 
                                       //set é um metodo detro do express

app.get("/", function (req, res){      //criando uma rota ref. ao nome do nosso site , get metodo detro do express
    res.render("index"); //o que vamos dar de resposta ? renderizar o index
})

app.get("/sobre", function (req, res){       
    res.render("about");
})

app.listen(8080); //falando pro servidor que esta rodando na nossa maquina, 
                  //e quando chamarmos a porta 8080 vai rodar tudo o que foi feito aqui

console.log("Rodando")                