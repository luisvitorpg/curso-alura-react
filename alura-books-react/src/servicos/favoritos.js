import axios from 'axios';

const favoritosAPI = axios.create({ baseURL: 'http://127.0.0.1:8000/favoritos' });

async function getFavoritos() {
    const response = await favoritosAPI.get('/');
    return response.data;
}

async function postFavorito(id, nome) {
    await favoritosAPI.post(`/${id}`, {'nome': nome});
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`);
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}