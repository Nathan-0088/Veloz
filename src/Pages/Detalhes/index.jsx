import "./detalhes.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../services/Api";
import api_key from "../../services/Api/index_key";
import { toast } from "react-toastify";
import Loading from "../Loading";

export default function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function acharDetalhes() {
      const response = await Api.get(`movie/${id}`, {
        params: {
          api_key: `${api_key}`,
          language: "pt-br",
          page: 1,
        },
      });
      setLoad(false);
      setFilme(response.data);
      console.log(response.data);
    }

    acharDetalhes();
  }, [id]);

  function salvar() {
    const minhaLista = localStorage.getItem("@Veloz"); //pegando os item do local storage em json
    let filmesSalvos = JSON.parse(minhaLista) || [];

    let temFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if (temFilme) {
      toast.warn("esse filme já está na lista");
      return false;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@Veloz", JSON.stringify(filmesSalvos));
    toast.success("filme salvo com sucesso");
  }

  if (load) {
    return <Loading />;
  }

  return (
    <div className="detalhes-container">
      <h1>{filme.title}</h1>
      <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
      <strong>Sinopse</strong>
      <p id="p">{filme.overview}</p>
      <p>
        <strong>{filme.vote_average?.toFixed(2)} / 10</strong>
      </p>

      <div className="buttons">
        <a
          href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
          target="blank"
        >
          <button>Trailer</button>
        </a>
        <button onClick={salvar}>Salvar</button>
      </div>
    </div>
  );
}
