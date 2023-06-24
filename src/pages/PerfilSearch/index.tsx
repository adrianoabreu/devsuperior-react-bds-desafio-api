import axios from 'axios';
import './styles.css';
import React from 'react';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';

type FormData = {
  perfil: string;
};

type Perfil = {
  imagem: string;
  url: string;
  seguidores: string;
  localizacao: string;
  nome: string;
};

const PerfilSearch = () => {

  const [perfil, setPerfil] = useState<Perfil>();

  const [formData, setFormData] = useState<FormData>({
    perfil: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`${formData.perfil}`)
      .then((response) => {
        setPerfil(response.data);
      })
      .catch((error) => {
        setPerfil(undefined);
        console.log(error);
      });
  };


  return (
    <div className="perfil-search-container">      
      <div className="container search-container">
      <h1 className="">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              name="perfil"
              value={formData.perfil}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>        
      </div>
      {perfil &&
      <>
          <ResultCard title="Imagem" description={perfil} /> 
      </>
      }   
    </div>
  );
};

export default PerfilSearch;
