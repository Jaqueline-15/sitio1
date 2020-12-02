const express=require('express');
const path=require('path');

const app=express();
app.set("view engine","ejs");
app.use("/public", express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render("index",{titulo:'Título del index'});
});

app.get('/about',(req,res)=>{
    res.render("about",{titulo:'Título del about'});
});


const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Servidor listo en el puerto '+port);
})