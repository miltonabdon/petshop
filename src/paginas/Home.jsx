import React from "react";
import ListaCategoria from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategoria/>
      <ListaPost url={"/posts"} />
    </main>
  );
};

export default Home;
