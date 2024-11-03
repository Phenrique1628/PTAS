const items = []

exports.HomePage = (req, res) => {
    res.send("Boas Vindas")
  }


 exports.listarItens = (req, res) => {
    res.json(items)
 } 

 exports.criarItem = (req, res) => {
   const novoItem = req.body;
   items.push(novoItem);
   res.status(201).json(novoItem);s
 }

 exports.AtualizarItem = (req, res) => {
    const {id} = req.params
    const atualizar = req.body;

    function conferirId(item) {
        return item.id === parseInt(id);
    };

    const i = items.findIndex(conferirId)

    if (i !== -1) {
        items[i] = atualizar;
        res.json(atualizar)
    } 
    
    else{
        res.status(404).send("Esse item não foi encontrado")
    }
 }

 exports.ExcluirItem = (req, res) => {
    const {id} = req.params;

    function conferirId2(item) {
        return item.id === parseInt(id);
    };

    const i2 = items.findIndex(conferirId2)

    if (i2 !== -1) {
        items.splice(i2, 1);
        res.status(204).send();
    } 

    else{
        res.status(404).send("Esse item não foi encontrado")
    }
 }


