import { useState } from "react";
import "./global.css";
import "./sidebar.css";


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>

        <form action="">
          <div className="input-block">
            <label htmlFor="title">Titulo da Anotação</label>
            <input />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea></textarea>
          </div>
        </form>

        <button type="submit">Salvar</button>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
