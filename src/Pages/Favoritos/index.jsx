import { useState } from "react";
import "./favoritos.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState(() => {
    const lista = localStorage.getItem("@Veloz");
    return lista ? JSON.parse(lista) : [];
  });

  function excluir(id) {
    let filtro = filmes.filter((filmes) => {
      return filmes.id !== id;
    });
    setFilmes(filtro);
    localStorage.setItem("@Veloz", JSON.stringify(filtro));
    toast.error("Filme removido");
  }

  return (
    <div className="favoritos-container">
      <h1>Pagina favoritos</h1>
      {filmes.map((item) => (
        <div key={item.id} className="card-favoritos">
          <h1>{item.title}</h1>
          <div className="favoritos-buttons">
            <a href={`/detalhes/${item.id}`}>
              <button id="detalhes-bnt">Ver detalhes</button>
            </a>
            <button onClick={() => excluir(item.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
