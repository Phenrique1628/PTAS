const express = require('express');
const app = express();
const port = 3000
const listar = require('./itemsControllers');

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();

})


app.use(express.json());


app.get('/', (req, res) =>{
  res.send("Boas Vindas!")
})

app.get('/items', listar)





app.listen(port, () => {
    console.log(`Servidor Rodando http://localhost:${port}`)
  })


  
