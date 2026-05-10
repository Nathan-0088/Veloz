import { useEffect, useState } from "react";
import api from "../../services/Api";
import api_key from "../../services/Api/index_key";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscarFilme() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: `${api_key}`,
          language: "pt-br",
          page: 1,
        },
      });
      setFilmes(response.data.results);
      console.log(response.data.results);
    }

    buscarFilme();
  }, []);
  return (
    <div>
      {filmes.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
          <a href="#"><button>Acessar</button></a>
        </div>
      ))}
    </div>
  );
}
