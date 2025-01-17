import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: flex;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']


function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`}><Opcao className='opcao'><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader