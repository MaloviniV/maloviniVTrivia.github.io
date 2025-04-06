import express from "express";  //importo express

const app = express();    //creo el objeto app

app.get("/", (req,res) => {   //req requisito del navegador, res respuesta del servidor
  res.send("<p>Hola Mundo</p>");
});

app.listen("maloviniv.github.io/3000",()=>{    //Levanto el servidor
  console.log("El servidor se lavanto en el puerto 3000")
});