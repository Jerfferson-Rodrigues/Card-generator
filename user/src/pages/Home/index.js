import React from "react";
import { Link } from "react-router-dom";
import { ImHappy } from "react-icons/im";
import { BsFilePerson } from "react-icons/bs";
import "./home.scss";

export default function Home() {
  return (
    <div id="home">
      <aside>
        <div id="card">
          <h1>vCard</h1>
        </div>
        <div id="generator">
          <h1>generator</h1>
        </div>
      </aside>
      <main>
        <Link className="link" to="/candidato">
          <button className="btn">
            <ImHappy className="icon" />
            selecionar candidato
          </button>
        </Link>
        <Link className="link" to="/cadastro">
          <button className="btn">
            <BsFilePerson className="icon" />
            criar vCard do zero
          </button>
        </Link>
      </main>
    </div>
  );
}
