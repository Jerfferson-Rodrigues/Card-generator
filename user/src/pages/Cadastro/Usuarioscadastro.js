import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCaretLeftSquare } from "react-icons/bs";

import "../../styles/pages.scss";
import "./style.scss";

export default function Usuarios() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleSubmit() {
    const data = {
      first_name: nome,
      last_name: sobrenome,
      cellphone: telefone,
      email: email,
      company: empresa,
      title: cargo,
      street: rua,
      city: cidade,
      state: estado,
    };
  }

  return (
    <div id="page-auth">
      <aside>
        <div id="card">
          <h1>vCard</h1>
        </div>
        <div id="generator">
          <h1>generator</h1>
        </div>
        <Link className="back" to="/">
          <BsCaretLeftSquare />
        </Link>
      </aside>

      <form>
        <div className="form-wraper w50">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-wraper w50">
          <span>Sobrenome</span>
          <input
            type="text"
            name="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>

        <div className="form-wraper w30">
          <span>Celular</span>
          <input
            type="text"
            name="telefone"
            value={telefone}
            placeholder="(   )"
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="form-wraper w70">
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-wraper w50">
          <span>Cargo</span>
          <input
            type="text"
            name="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>

        <div className="form-wraper w50">
          <span>Estado</span>
          <input
            type="text"
            name="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </div>

        <div className="form-wraper w40">
          <span>Cidade</span>
          <input
            type="text"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>

        <div className="form-wraper w60">
          <span>Rua</span>
          <input
            type="text"
            name="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>

        <button
          className="btn"
          type="submit"
          value="Enviar"
          onClick={handleSubmit}
        >
          gerar vCard
        </button>
      </form>
    </div>
  );
}
