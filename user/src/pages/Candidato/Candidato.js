import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCaretLeftSquare } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

import axios from "axios";

import "../../styles/pages.scss";
import "./candidato.scss";

export default function Candidato2() {
  const [userData, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3080/commcepters")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <>
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

        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          <span>Selecione um candidato da lista</span>

          <div className="dropdown-select">
            <span className="select">Candidato</span>
            <BsFillCaretDownFill className="icon" />
          </div>

          {isOpen && (
            <div className="options-container">
              {userData.map((user, index) => (
                <div className="color">
                  <>
                    <div className="option">
                      <input
                        key={index}
                        type="radio"
                        className="radio"
                        id="test3"
                      />
                      <label for="test3">
                        {user.first_name} {user.last_name}
                      </label>
                    </div>
                  </>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="btn" type="submit" value="Enviar">
          gerar vCard
        </button>
      </div>
    </>
  );
}
