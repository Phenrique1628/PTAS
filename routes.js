const express = require('express');
const app = express();
const port = 3000
const controller = require('./itemsControllers')
const router = express.Router()
app.use(express.json());


router.get('/', controller.HomePage)

router.get('/items', controller.listarItens)

router.post('/items', controller.criarItem);

router.put('/items/:id', controller.AtualizarItem);

router.delete('/items/:id', controller.ExcluirItem);


app.use('/', router);

app.listen(port, () => {
    console.log("Servidor Rodando")
  })

module.express = router
  
