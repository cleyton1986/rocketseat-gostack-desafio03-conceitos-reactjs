import React, { useState, useEffect } from "react";

import "./styles.css";

import api from "./services/api";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("/repositories").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post("/repositories", {
      title: `Repository ${Date.now()}`,
    });

    const data = response.data;

    setRepositories([...repositories, data]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);
    setRepositories(repositories.filter((repository) => repository.id !== id));
  }

  return (
    <div>
      <div>
        <h1> Desafio React.js - GoStack - 11</h1>
      </div>

      <div>
        <ul data-testid="repository-list">
          {repositories.map((repositorie) => (
            <li key={repositorie.id}>
              {repositorie.title}
              <button onClick={() => handleRemoveRepository(repositorie.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleAddRepository}>Adicionar</button>
      </div>
    </div>
  );
}
