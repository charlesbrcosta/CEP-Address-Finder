const rua = document.getElementById('rua');
const complemento = document.getElementById('complemento');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const btnLimparCampos = document.getElementById('btnLimpar');
const btnPesquisarCEP = document.getElementById('btnPesquisar');
const inputCEP = document.getElementById('cep');


async function endPointAPI() {
    try {
        const valueCEP = inputCEP.value;
        
        if(!valueCEP) {
            alert('CEP não localizado');
            return;
        }

        if(valueCEP.length !== 8) {
            alert('CEP invalido');
            return;
        }
                   
        const url = `https://viacep.com.br/ws/${valueCEP}/json/`;
        const response = await fetch(url);
        const data = await response.json();
        
        atribuirCampos(data);
       
    } catch(error) {
        console.log('Erro ao buscar o CEP: ', error);
        alert('Erro ao buscar o cep');
    }
}

function atribuirCampos(data) {
    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

function limpar() {
    inputCEP.value = '';
    rua.value = '';
    complemento.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
}

btnPesquisarCEP.addEventListener('click', event => {
    event.preventDefault();
    endPointAPI();
});

btnLimparCampos.addEventListener('click', event => {
    event.preventDefault();
    limpar();
});









































/* const rua = document.getElementById('rua');
const complemento = document.getElementById('complemento');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const btnLimparCampos = document.getElementById('btnLimpar');
const btnPesquisarCEP = document.getElementById('btnPesquisar');
const inputCEP = document.getElementById('cep');

function atribuirCampos(data) {
    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

function limparCampos() {
    inputCEP.value = '';
    rua.value = '';
    complemento.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
}

function endPointAPI() {
    const valorDoCEP = inputCEP.value; 

    if(!valorDoCEP){
        alert('CEP não digitado');
        return;
    }

    const url = `https://viacep.com.br/ws/${valorDoCEP}/json/`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                alert('Cep inválido');
                return;
            }
            atribuirCampos(data);
        })
        .catch(err => {
            console.error('Erro ao buscar CEP:', err);
            alert('Erro ao buscar CEP. Por favor, tente novamente.');
        });
}

btnLimparCampos.addEventListener('click', limparCampos);

btnPesquisarCEP.addEventListener('click', event => {
    event.preventDefault();
    endPointAPI();   
});
 */