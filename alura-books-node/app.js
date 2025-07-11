const express = require('express');
const cors = require('cors');

const rotaLivro = require('./rotas/livro');
const rotaFavorito = require('./rotas/favorito');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

const port = 8000;

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});