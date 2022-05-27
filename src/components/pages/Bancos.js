import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import './Bancos.css';

const example = [
    {
        "banco": "HEMOPE",
        "cidade": "Recife",
        "data_extracao": "Sat, 01 Jan 2022 02:51:56 GMT",
        "endereco": "RUA JOAQUIM NABUCO, 171 - CEP 52.011-900 - GRA\u00c7AS, RECIFE",
        "estado": "PE",
        "sangue": {
            "A+": "critica",
            "A-": "critica",
            "AB+": "critica",
            "AB-": "estavel",
            "B+": "critica",
            "B-": "alerta",
            "O+": "critica",
            "O-": "critica"
        },
        "unidade": null,
        "url": "http://www.hemope.pe.gov.br/"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    },
    {
        "banco": "HEMATO",
        "cidade": "S\u00e3o Paulo",
        "data_extracao": "Sat, 01 Jan 2022 02:51:57 GMT",
        "endereco": "Rua Tom\u00e1s Carvalhal, 711  - Para\u00edso",
        "estado": "SP",
        "sangue": {
            "A+": "estavel",
            "A-": "alerta",
            "AB+": "estavel",
            "AB-": "estavel",
            "B+": "estavel",
            "B-": "alerta",
            "O+": "estavel",
            "O-": "alerta"
        },
        "unidade": null,
        "url": "https://www.doesanguedoevida.com.br/banco-de-sangue-sao-paulo-jd-paulista"
    }
]

const Bancos = () => {
    return (
        <div>
            <div class="dropdownBox" include="form-input-select()">
                <select>
                    <option value='' hidden selected>Selecione o seu estado:</option>
                    <option value='AC'>Acre</option>
                    <option value='AL'>Alagoas</option>
                    <option value='AP'>Amapá</option>
                    <option value='AM'>Amazonas</option>
                    <option value='BA'>Bahia</option>
                    <option value='CE'>Ceará</option>
                    <option value='ES'>Espirito Santo</option>
                    <option value='GO'>Goiás</option>
                    <option value='MA'>Maranhão</option>
                    <option value='MT'>Mato Grosso</option>
                    <option value='MS'>Mato Grosso do Sul</option>
                    <option value='MG'>Minas Gerais</option>
                    <option value='PA'>Pará</option>
                    <option value='PB'>Paraíba</option>
                    <option value='PR'>Paraná</option>
                    <option value='PE'>Pernambuco</option>
                    <option value='PI'>Piauí</option>
                    <option value='RJ'>Rio de Janeiro</option>
                    <option value='RN'>Rio Grande do Norte</option>
                    <option value='RS'>Rio Grande do Sul</option>
                    <option value='RO'>Rondônia</option>
                    <option value='RR'>Roraima</option>
                    <option value='SC'>Santa Catarina</option>
                    <option value='SP'>São Paulo</option>
                    <option value='SE'>Sergipe</option>
                    <option value='TO'>Tocantins</option>
                    <option value='DF'>Distrito Federal</option>
                </select>
            </div>
            <div id="banco-container" onWheel={onWheel}>
                {example.map((item, index) => {
                    return (
                        <CardItem
                            key={index}
                            text={[<BancoItens item={item} />, <SangueItens item={item.sangue} />]}
                            label={item.banco}
                            path='/bancos'
                        />
                    )
                })}
            </div>
        </div >

    );

}

const BancoItens = ({ item }) => {
    return (
        <div className="banco-itens">
            <h5>{item.estado}</h5>
            <h5>{item.cidade}</h5>
            <h5>{item.endereco}</h5>
            <h6>Sangue extraído em: {item.data_extracao}</h6>
        </div>
    )
}


const SangueItens = ({ item }) => {
    return (
        <div>
            <table className="sangue-table">
                <tbody>
                    <tr>
                        <td className='sangue-item'>A+:{item['A+']}</td>
                        <td className='sangue-item'>A-:{item['A-']}</td>
                    </tr>
                    <tr>
                        <td className='sangue-item'>AB+:{item['AB+']}</td>
                        <td className='sangue-item'>AB-:{item['AB-']}</td>
                    </tr>
                    <tr>
                        <td className='sangue-item'>B+:{item['B+']}</td>
                        <td className='sangue-item'>B-:{item['B-']}</td>
                    </tr>
                    <tr>
                        <td className='sangue-item'>O+:{item['O+']}</td>
                        <td className='sangue-item'>O-:{item['O-']}</td>
                    </tr>

                </tbody>

            </table>
        </div >

    )
}

const onWheel = e => {
    e.preventDefault();
    const bancoContainer = document.getElementById("banco-container");
    const containerScrollPosition = document.getElementById("banco-container").scrollLeft;
    bancoContainer.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY + 20,
        behaviour: "smooth"
    });
};

export default Bancos;