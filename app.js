const express =  require("express");

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'))


/*ROTAS*/
app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/biografia',(req,res)=>{
    res.render("biografia")
})
app.get('/campanhas',(req,res)=>{
    res.render("campanhas");
});

app.get('/contato', (req,res)=>{
    res.render("contato");
})

/*PORTA SERVIDOR*/
app.listen(3000, ()=>{
    console.log("Servidor online");
})