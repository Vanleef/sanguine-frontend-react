export function carregarEstados() {
    let url = 'https://servicodados.ibge.gov.br/';
    url = url + 'api/v1/localidades/estados';

    let estados = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => a.nome.localeCompare(b.nome));
            estados = [...data];
        });
        return estados;
}


export function carregarEstadoPorID(id) {
    let url = 'https://servicodados.ibge.gov.br/';
    url = url + 'api/v1/localidades/estados/' + id;

    let estado = {};
    fetch(url)
        .then(response => response.json())
        .then(data => {
            estado = data;
        });
        return estado;
    }
