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
  const listSangue = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const [uf, setUf] = useState('AC');
  const [listUf, setListUf] = useState([]);
  const [listCity, setListCity] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [dataNasc, setDataNasc] = useState(new Date('01/01/2003'));
  const [dataUltimaDoacao, setDataUltimaDoacao] = useState(new Date('01/06/2022'));
  const [tipo_sanguineo, setTipo_sanguineo] = useState("A+");
  const [genero, setGenero] = useState("Masculino");
  const [password, setPassword] = useState("");


  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email | !emailConf | !password) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    
    const userData = { 'nome': nome, 'email': email, 'cidade': cidade, 'estado': estado,
     'data_nascimento': dataNasc.toISOString().substring(0, 10), 'data_ultima_doacao': dataUltimaDoacao.toISOString().substring(0, 10), 
     'tipo_sanguineo': tipo_sanguineo, 'genero': genero, 'senha': password };

    const res = signup(userData);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  function loadUf() {
    let url = 'https://servicodados.ibge.gov.br/';
    url = url + 'api/v1/localidades/estados';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
        setUf(listUf[0]);
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
        setCidade(listUf[0]);
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
                <select value={cidade} defaultOption={listUf[0]} onChange={e => updateCidade(e.target.value)}>
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
                dateFormat={'dd/MM/yyyy'}
                dateFormatCalendar="MMMM"
                maxDate= {new Date()}
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
            <div>
              <h4 className="date-header">Data da sua última doação</h4>
              <DatePicker className="date-picker"
                selected={dataUltimaDoacao}
                onChange={date => setDataUltimaDoacao(date)}
                dateFormat={'dd/MM/yyyy'}
                dateFormatCalendar="MMMM"
                maxDate= {new Date()}
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
            <div>
            <C.labelErrorSignUp>{error}</C.labelErrorSignUp>
            </div>
            <div className="container-login-form-btn">
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={e=> handleSignup(e)}
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
