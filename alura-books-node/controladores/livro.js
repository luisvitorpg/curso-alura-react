const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const livro = getLivroPorId(id);
            res.send(livro);
        } else {
            res.status(422);
            res.send("ID Inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        if(req.body.nome) {
            insereLivro(livroNovo);
            res.status(201);
            res.send('Livro inserido com sucesso')
        } else {
            res.status(422).send('O campo de nome é obrigatório.')
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

function postLivro(req, res) {
    try {
        if (req.body.nome) {
            const livroNovo = req.body;
            insereLivro(livroNovo);
            res.status(201).send('Livro inserido com sucesso');
        } else {
            res.status(422).send('O campo de nome é obrigatório.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (id && Number(id)) {
            modificaLivro(body, id);
            res.send("Item modificado com sucesso!")
        } else {
            res.status(422);
            res.send("ID Inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        deletarLivroPorId(id);
        res.send("Livro deletado com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}