const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletaLivroFavoritoPorId(id) {
    try {
        const livros = JSON.parse(fs.readFileSync('favoritos.json'));
        const livrosFiltrados = livros.filter(livro => livro.id !== Number(id));
        fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados, null, 2));
        console.log('Favorito deletado com sucesso:', id);
    } catch (error) {
        console.error('Erro ao deletar favorito:', error);
        throw error;
    }
}

function insereFavorito(livroNovo) {
    try {
        const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));
        console.log('Favoritos atuais:', favoritos);

        const novaListaDeFavoritos = [...favoritos, livroNovo];
        fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeFavoritos));
        console.log('Favorito inserido com sucesso:', livroNovo);
    } catch (error) {
        console.error('Erro ao inserir favorito:', error);
        throw error;
    }
}

module.exports = {
    getTodosFavoritos,
    deletaLivroFavoritoPorId,
    insereFavorito
}