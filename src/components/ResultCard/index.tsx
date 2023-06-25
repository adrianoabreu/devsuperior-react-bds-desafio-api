import './styles.css';

type Perfil = {
  avatar_url: string;
  url: string;
  followers: string;
  name: string;
  location: string;
};

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="result-container">
      <div className="perfil-image-container">
        <img src={description} alt="perfil-img" />
      </div>
      <div className="perfil-info-container">
        <h3 className="result-title">{title}</h3>
        <p className="result-description">{description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
