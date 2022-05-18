import React from 'react';
import CardItem from '../CardItem';
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
        <div className="banco-container" id="banco-scroll">
            {example.map((item) => {
                return (
                    <CardItem
                        text={[<BancoItens item={item} />, <SangueItens item={item.sangue} />]}
                        label={item.banco}
                        path='/bancos'
                    />
                )
            })}
        </div>

    );

}

const BancoItens = ({ item }) => {
    return (
        <div className="banco-itens">
            <h4>{item.estado}</h4>
            <h4>{item.cidade}</h4>
            <h5>{item.endereco}</h5>
            <h6>Sangue extraído em: {item.data_extracao}</h6>
            {console.log(item)}
        </div>
    )
}


const SangueItens = ({ item }) => {
    return (
        <div>
            <table className="sangue-table">
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
            </table>
            {console.log(item)}
        </div >

    )
}


const scrollContainer = document.getElementById("banco-scroll");

if(scrollContainer){

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}

export default Bancos;