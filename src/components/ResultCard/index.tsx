import './styles.css';

type Perfil = {
    imagem: string;
    url: string;
    seguidores: string;
    localizacao: string;
    nome: string;
};

type Props = {
    title: string;
    description: Perfil;
}

/*type Props = {
    title: string;
    description: string;
}*/
const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <div className="perfil-image-container">
              <img src={description.imagem} alt="perfil-img" />
            </div>
            <div className="perfil-info-container">
            <p>Informações</p>
            <input
              type="text"
              className="perfil-input"
              placeholder="Perfil:"
              value={description.nome}
            />
            <input
              type="text"
              className="perfil-input"
              placeholder="Perfil:"
              value={description.seguidores}
            />
            <input
              type="text"
              className="perfil-input"
              placeholder="Perfil:"
              value={description.localizacao}
            />
            <input
              type="text"
              className="perfil-input"
              placeholder="Perfil:"
              value={description.nome}
            />
             </div>
        </div>
    );
}

export default ResultCard;