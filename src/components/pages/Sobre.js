import React from 'react';
import './Sobre.css';

const Sobre = () => {
    return (
        <html>
            <body className="sobre">

                <section class="faq-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">

                                <div class="faq-title text-center pb-3">
                                    <h2>Perguntas Frequentes</h2>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-3">
                                <div class="faq" id="accordion">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="mb-0">
                                                <h5 class="faq-title">
                                                    <span class="badge">1</span>Quem pode doar?
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="collapse">
                                            <div class="card-body">
                                                <p>Qualquer pessoa com idade entre 18 e 69 anos que pese mais de 50 quilos. Jovens de 16 ou 17 anos também estão aptos, desde que tenham o consentimento dos pais ou dos responsáveis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="mb-0">
                                                <h5 class="faq-title">
                                                    <span class="badge">2</span> Quanto tempo demora?
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="collapse">
                                            <div class="card-body">
                                                <p>A coleta do sangue é bem rápida: leva de 8 a 12 minutos. Antes, o doador faz uma triagem e passa algumas informações de saúde para os funcionários do local.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="mb-0">
                                                <h5 class="faq-title">
                                                    <span class="badge">3</span>O procedimento oferece algum perigo?
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="collapse">
                                            <div class="card-body">
                                                <p>Não. A doação é totalmente segura e não apresenta nenhum risco. Os materiais utilizados, como a agulha e os cateteres, são descartáveis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="mb-0">
                                                <h5 class="faq-title">
                                                    <span class="badge">4</span> Quanto sangue é retirado?
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="collapse">
                                            <div class="card-body">
                                                <p>São 450 mililitros. Esse volume pode salvar a vida de até quatro pessoas.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="mb-0">
                                                <h5 class="faq-title">
                                                    <span class="badge">5</span> Mas meu corpo não vai sentir falta desse sangue?
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="collapse">
                                            <div class="card-body">
                                                <p> Não. Nós possuímos cerca de 5 litros do líquido vermelho circulando pelos vasos. A retirada não prejudica em nada: o organismo repõe e alcança os níveis normais em até 72 horas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about-section">

                    <div class="developers">
                        <div class="cardImage">
                            <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1>Nome aqui</h1>
                        </div>
                        <div class="cardImage">
                            <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1>Nome aqui</h1>
                        </div>
                        <div class="cardImage">
                            <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1>Nome aqui</h1>
                        </div>
                        <div class="cardImage">
                            <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1>Nome aqui</h1>
                        </div>
                    </div>

                </section>

            </body>
            <footer>
                <h1>Footer</h1>
            </footer>
        </html >
    );
}


export default Sobre;