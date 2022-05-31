import React, { useState } from "react";
import { Button } from "../../components/Button";
import * as C from "./signUpStyled";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import ptBR from 'date-fns/locale/pt-BR';

import useAuth from "../../hooks/useAuth";

registerLocale('ptBR', ptBR);

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [dataNasc, setDataNasc] = useState(new Date('01/01/2021'));
  const [tipo_sanguineo, setTipo_sanguineo] = useState("A+");
  const [genero, setGenero] = useState("Masculino");
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

    const userData = { 'nome': nome, 'email': email, 'cidade': cidade, 'estado': estado, 'tipo_sanguineo': tipo_sanguineo, 'genero': genero, 'senha': password };

    //createUser(userData);

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  async function createUser(userData) {
    try {
      const response = await fetch('http://localhost:8000/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      let data = response.json();
      alert("Usuário cadatrado com sucesso!");
      navigate("/");
      return data;
    }
    catch (error) {
      alert("Ocorreu um problema com o cadastro de Usuário!");
    }
  }


  const listSangue = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const [uf, setUf] = useState('AC');
  const [listUf, setListUf] = useState([]);
  const [listCity, setListCity] = useState([]);

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

  function updateCidade(a) {
    setCidade(a);
    console.log(cidade);
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
                <select value={cidade} onChange={e => updateCidade(e.target.value)}>
                  {listCity.map((a, b) => (
                    <option value={a.sigla}>{a.nome}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <h4 className="date-header">Data de Nascimento</h4>
              <DatePicker className="date-picker"
                selected={dataNasc}
                onChange={date => setDataNasc(date)}
                placeholderText='Data de Nascimento:'
                dateFormat={'dd/MM/yyyy'}
                dateFormatCalendar="MMMM"
                locale={'ptBR'}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={90}
                dropdownMode="scroll"
                popperClassName="date-popper"
                popperPlacement="auto"
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: '5px, 10px'
                  },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                    boundariesElement: 'viewport'
                  }
                }}
              />
            </div>
            <div class="sanguine-container">
              <h4 className="tipo-sanguineo-header">Tipo Sanguíneo</h4>
              <select class="sanguine-dropdown" value={tipo_sanguineo} onChange={e => setTipo_sanguineo(e.target.value)}>
                {listSangue.map((x, y) => (
                  <option key={y} value={x}>{x}</option>
                ))}
              </select>
            </div>
            <h4 className="gender-header">Gênero</h4>
            <div class="genderRadio" value={genero} onChange={e => setGenero(e.target.value)}>
              <input type="radio" value="Masculino" name="gender" checked={true} /> Masculino
              <input type="radio" value="Feminino" name="gender" /> Feminino
            </div>

            <C.labelError>{error && alert(error)}</C.labelError>
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
