import './styles.css';

type Perfil = {
    avatar_url: string;
    url: string;
    followers_url: string;
    name: string;
    location: string;
};

type Props = {
    title: string;
    description: string;
}


const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <div className="perfil-image-container">
              <img src={description} alt="perfil-img" />
            </div>
            <div className="perfil-info-container">
            <input
              type="text"
              className="perfil-input"
              placeholder="Perfil:"
              value={description}
            />
             </div>
        </div>
    );
}

export default ResultCard;