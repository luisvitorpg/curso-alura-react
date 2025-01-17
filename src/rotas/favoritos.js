import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

  li {
      list-style: none;
  }
`

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 100%;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`

const Título = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  margin: 35px;
`

function Favoritos() {

  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id ${id} deletado!`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []); 

  return (
    <AppContainer>
      <div>
        <Título>Aqui estão seus lívros favoritos:</Título>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map((favorito) => (
              <Resultado onClick={() => deletarFavorito(favorito.id)}>
                <img src={livroImg}></img>
                <p>{favorito.nome}</p>
              </Resultado>
            )):null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
