//#1 importo express
const express = require('express')

//#2 creo una variabile per stanziare l'app express
const app = express()

//#3 definisco la porta dove apro il server
//buona pratica tenere il nome in maiuscolo per quelle costanti che ratano TALI
const PORT = 3000

//#4 metto il server in ascolto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

//#5 definisco la prima rotta
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})