import React from 'react';
import DeveloperInfo from '../DeveloperInfo';
import HideText from '../HideText';
import './Sobre.css';

const Faq1 = () => {
    return (
        <div class="collapse">
            <div class="card-body">
                <p></p>
            </div>
        </div>
    )
}

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
                                    {/* <div class="card">
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
                                    </div> */}
                                    <HideText 
                                        number="1"
                                        textButton="Quem pode doar?"
                                        textDisplay="Qualquer pessoa com idade entre 18 e 69 anos que pese mais de 50 quilos. 
                                        Jovens de 16 ou 17 anos também estão aptos, desde que tenham o consentimento dos pais 
                                        ou dos responsáveis."
                                    />
                                    <HideText
                                        number="2"
                                        textButton="Quanto tempo demora?"
                                        textDisplay="A coleta do sangue é bem rápida: leva de 8 a 12 minutos. Antes, o doador 
                                        faz uma triagem e passa algumas informações de saúde para os funcionários do local."
                                    />
                                    <HideText
                                        number="3"
                                        textButton="O procedimento oferece algum perigo?"
                                        textDisplay="Não. A doação é totalmente segura e não apresenta nenhum risco. Os materiais 
                                        utilizados, como a agulha e os cateteres, são descartáveis."
                                    />
                                    <HideText
                                        number="4"
                                        textButton="Quanto sangue é retirado?"
                                        textDisplay="São 450 mililitros. Esse volume pode salvar a vida de até quatro pessoas."
                                    />
                                    <HideText
                                        number="5"
                                        textButton="Mas meu corpo não vai sentir falta desse sangue?"
                                        textDisplay="Não. Nós possuímos cerca de 5 litros do líquido vermelho circulando pelos 
                                        vasos. A retirada não prejudica em nada: o organismo repõe e alcança os níveis normais 
                                        em até 72 horas."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about-section">
                    <div class="dev-title">
                        <h1>DESENVOLVEDORES</h1>
                    </div>
                    <div class="developers">
                        <DeveloperInfo 
                            name="Bruno Simões"
                            altImg="Devia ter uma imagem aqui"
                        />
                        <DeveloperInfo 
                            name="David Pierre"
                            altImg="Devia ter uma imagem aqui"
                        />
                        <DeveloperInfo 
                             name="Eduardo Roque"
                            altImg="Devia ter uma imagem aqui"
                        />
                        <DeveloperInfo 
                            name="Mateus Fittipaldi"
                            altImg="Devia ter uma imagem aqui"
                        />
                    </div>
                </section>

            </body>
            {/* <footer>
                <h1>Footer</h1>
            </footer> */}
        </html >
    );
}


export default Sobre;