import React, { useState } from "react";
import { Button } from "../../components/Button";
import * as C from "./signUpStyled";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
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

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Cadastro </span>

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
