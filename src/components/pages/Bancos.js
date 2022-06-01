import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import './Bancos.css';
import * as api from '../../api/api';


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

let allBanks;
api.banksRequest().then(response=>{
    allBanks = response
})

const Bancos = () => {

    // let selectedUf = { "id": 12, "sigla": "AC", "nome": "Acre", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } };
    // let listaBancos = example;  
    // const [selectedUf, setSelectedUf] = React.useState({ "id": 12, "sigla": "AC", "nome": "Acre", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } });


    const [uf, setUf] = React.useState('AC');
    const [listUf, setListUf] = React.useState([]);
    // const [listaBancosUf, setlistaBancosUf] = React.useState(banksList);
    const [listaBancosUf, setlistaBancosUf] = React.useState([]);
    const [banksUf, setbanksUf] = React.useState([]);


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


    function getEstado(id) {
        let url = 'https://servicodados.ibge.gov.br/';
        url = url + 'api/v1/localidades/estados/' + id;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateListaBancos(data);
            });
    }

    function updateListaBancos(selectedState) {
        let novaLista = [];
        
        if(typeof allBanks !== 'undefined' && allBanks.length > 0) novaLista = allBanks.filter(item => item.estado === selectedState.sigla);
        else novaLista = example.filter(item => item.estado === selectedState.sigla);
        
        // const novaLista = banksList.filter(item => item.estado === selectedState.sigla);
        setlistaBancosUf([...novaLista]);
        console.log("O novo estado é: " + selectedState.sigla);
        console.log("A nova lista é: " + novaLista);
    }

    function updateListaUF() {
        let novaLista = [];

        if(allBanks){
            allBanks.map((item, index) => {
                novaLista.push(item.estado)
            });
        } else {
            example.map((item, index) => {
                novaLista.push(item.estado)
            });
        }

        novaLista = Array.from(new Set(novaLista));
    
        setbanksUf(novaLista);

        novaLista = [];

        listUf.map((item, index) => {
            banksUf.map((state, i) => {
                if(item.sigla === state) novaLista.push(item);
            });
        });

        setListUf(novaLista);
    }

    React.useEffect(() => {
        loadUf()
    }, []);

    // React.useEffect(() => {
    //     updateListaUF();
    // }, [banksUf]);

    function updateUF(a) {
        setUf(a);
        getEstado(a);
        console.log("uf é: " + uf);
    }

    return (
        <div>
            <div class="dropdownBox" include="form-input-select()">
                <select value={uf} onChange={e => updateUF(e.target.value)}>
                    {listUf.map((a, b) => (
                        <option value={a.id}>{a.sigla} - {a.nome}</option>
                    ))}
                </select>
            </div>
            <div id="banco-container" onWheel={onWheel}>
                {listaBancosUf.map((item, index) => {
                    return (
                        <CardItem
                            key={index}
                            text={[<BancoItens item={item} />, <SangueItens item={item.sangue} />]}
                            label={item.banco}
                            path={''}
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
    const bancoContainer = document.getElementById("banco-container");
    const containerScrollPosition = document.getElementById("banco-container").scrollLeft;
    bancoContainer.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY + 20,
        behaviour: "smooth"
    });
};

export default Bancos;