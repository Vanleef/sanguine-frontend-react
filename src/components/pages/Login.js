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

    const handleLogin = (e) => {
        e.preventDefault();
      if (!email | !password) {
        setError("Preencha todos os campos");
        return;
      }

      const userData = {"email": email, "senha": password};
  
      const res = signin(userData);
  
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
                        <C.labelError>{error}</C.labelError>

                        <div className="container-login-form-btn">
                            <Button
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                onClick={e=> handleLogin(e)}
                            >
                                Entrar
                            </Button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <span className="txt2" >
                            <Link to="/sign-up">Criar conta </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
