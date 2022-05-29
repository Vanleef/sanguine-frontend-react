import React, { useState } from "react";
import { Button } from "../../components/Button";
import * as C from "./signUpStyled";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !password) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };


  const [uf, setUf] = useState('AC');
  const [listUf, setListUf] = useState([]);
  const [city, setCity] = useState('');
  const [listCity, setListCity] = useState([]);
  const listSangue = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const [tipo_sanguineo, setTipo_sanguineo] = useState("A+");

  function loadUf() {
    let url = 'https://servicodados.ibge.gov.br/';
    url = url + 'api/v1/localidades/estados';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
      });
  }
  function loadCity(id) {
    let url = 'https://servicodados.ibge.gov.br/api/v1/';
    url = url + `localidades/estados/${id}/municipios`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity([...data]);
      });
  }


  function getState(id) {
    let url = 'https://servicodados.ibge.gov.br/';
    url = url + 'api/v1/localidades/estados/' + id;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEstado(data.sigla);
      });
  }

  function updateUF(a) {
    setUf(a);
    getState(a);
    console.log("uf é: " + uf);
  }


  React.useEffect(() => {
    loadUf();
  }, []);
  React.useEffect(() => {
    if (uf) {
      loadCity(uf);
    }
  }, [uf]);

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Cadastro </span>

            <div className="wrap-input">
              <input
                className={nome !== "" ? "has-val input" : "input"}
                type="nome"
                value={nome}
                onChange={(e) => [setNome(e.target.value), setError("")]}
              />
              <span className="focus-input" data-placeholder="Digite seu nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
              <span className="focus-input" data-placeholder="Digite seu e-mail"></span>
            </div>

            <div className="wrap-input">
              <input
                className={emailConf !== "" ? "has-val input" : "input"}
                type="email"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}

              />
              <span className="focus-input" data-placeholder="Confirme seu e-mail"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />

              <span className="focus-input" data-placeholder="Digite sua senha"></span>
            </div>
            <div>
              <select value={uf} onChange={e => updateUF(e.target.value)}>
                {listUf.map((a, b) => (
                  <option value={a.id}>{a.sigla} - {a.nome}</option>
                ))}
              </select>
              <div>
                <select value={city} onChange={e => setCity(e.target.value)}>
                  {listCity.map((a, b) => (
                    <option value={a.sigla}>{a.nome}</option>
                  ))}
                </select>
              </div>
            </div>



            <div>
              <select value={tipo_sanguineo} onChange={e => setTipo_sanguineo(e.target.value)}>
                {listSangue.map((x, y) => (
                  <option key={y} value={x}>{x}</option>
                ))}
              </select>
            </div>


            <div class="genderRadio" onChange={setGenero.bind(this)}>
              <input type="radio" value="Masculino" name="gender" /> Masculino
              <input type="radio" value="Feminino" name="gender" /> Feminino
            </div>

            <C.labelError>{error}</C.labelError>
            <div className="container-login-form-btn">
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={handleSignup}
              >
                Cadastre-se
              </Button>
            </div>
            <C.LabelSignin>
              Já tem uma conta?
              <C.Strong>
                <Link to="/login">&nbsp;Entre</Link>
              </C.Strong>
            </C.LabelSignin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
