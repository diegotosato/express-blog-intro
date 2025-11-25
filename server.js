// importo express
const express = require('express')

// creo una variabile per stanziare l'app express
const app = express()

// definisco la porta dove apro il server
//buona pratica tenere il nome in maiuscolo per quelle costanti che ratano TALI
const PORT = 3000

//importo il ruuting per la rotta "posts"
const postsRouter = require('./routers/posts')


//vado a dire che la cartella public deve essere un asset statico
app.use(express.static('public'));


// metto il server in ascolto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

// definisco la prima rotta
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})





app.use('/api/posts', postsRouter)