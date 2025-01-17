const { getTodosFavoritos, insereFavorito, deletaLivroFavoritoPorId } = require("../servicos/favorito");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;
        const nome = req.body.nome;

        if (nome) {
            const livroNovo = { id: Number(id), nome: nome };
            insereFavorito(livroNovo);
            res.status(201).send('Livro inserido com sucesso');
        } else {
            res.status(422).send('O campo de nome é obrigatório.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deletaLivroFavoritoPorId(id);
            res.send("Item deletado com sucesso!");
        } else {
            res.status(422);
            res.send("ID Inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}