//#1 importo express
const express = require('express')

//#2 creo una variabile per stanziare l'app express
const app = express()

//#3 definisco la porta dove apro il server
//buona pratica tenere il nome in maiuscolo per quelle costanti che ratano TALI
const PORT = 3000




//array per i post del blog
const posts = [
    {
        id: 1,
        title: '',
        content: '',
        image: '',
        tags: ['']
    },
    {
        id: 2,
        title: '',
        content: '',
        image: '',
        tags: ['']
    },
    {
        id: 3,
        title: '',
        content: '',
        image: '',
        tags: ['']
    },
    {
        id: 4,
        title: '',
        content: '',
        image: '',
        tags: ['']
    },
    {
        id: 5,
        title: '',
        content: '',
        image: '',
        tags: ['']
    }
]



// metto il server in ascolto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

// definisco la prima rotta
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

//definisco la rotta bacheca
app.get('/bacheca', (req, res) => {
    res.json(posts)
})