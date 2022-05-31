import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from '../Button';
import { Link, useNavigate } from "react-router-dom";
import * as C from "./loginStyled";
import "./Login.css";

function Login() {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
      if (!email | !password) {
        setError("Preencha todos os campos");
        return;
      }
  
      const res = signin(email, password);
  
      if (res) {
        setError(res);
        return;
      }
      
      navigate("/");
  
    };


    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Bem vindo </span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={(e) => [setEmail(e.target.value), setError("")]}
                                />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={(e) => [setPassword(e.target.value), setError("")]}
                                />

                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <C.labelError>{error && alert(error)}</C.labelError>

                        <div className="container-login-form-btn">
                            <Button
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                onClick={handleLogin}
                            >
                                Entrar
                            </Button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="#">
                            <Link to="/sign-up">Criar conta </Link>
                            {console.log("Login Realizado com Sucesso!")}
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
