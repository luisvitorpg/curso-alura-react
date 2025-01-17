import axios from 'axios';

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/livros' });

async function getLivros() {
    try {
        const response = await livrosAPI.get('/');
        return response.data;
    } catch (error) {
        console.error('Network error:', error);
        return [];
    }
}

export {
    getLivros
}