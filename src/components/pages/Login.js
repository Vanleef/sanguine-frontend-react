import { useState } from "react";

import { Button } from '../Button';

import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <Button
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                            >
                                Login
                            </Button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="#">
                                Criar conta
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
