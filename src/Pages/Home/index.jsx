import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";

import api_key from "../../services/Api/index_key";
import Api from "../../services/Api";
import Loading from "../Loading";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function buscarFilme() {
      const response = await Api.get("movie/popular", {
        params: {
          api_key: `${api_key}`,
          language: "pt-br",
          page: 1,
        },
      });
      setLoad(false);
      setFilmes(response.data.results);
      console.log(response.data.results);
    }

    buscarFilme();
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="home-container">
      {filmes.map((item) => (
        <div key={item.id} className="card">
          <h1>{item.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
          <a href="#">
            <Link to={`/detalhes/${item.id}`}>
              <button>Acessar</button>
            </Link>
          </a>
        </div>
      ))}
    </div>
  );
}
