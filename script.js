var inputCep = document.getElementById('cep');

async function buscarEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    if(!cep.trim()){
        mensagemErro.innerHTML = '<p>Informe um CEP válido.</p>'
        return;
    }

    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var data = await consultaCEP.json();            
        
        if(data.erro){
            throw Error('CEP não encontrado.');
        }

        atribuirValoresCampos(data);
        return data;
    } catch(error) {
        mensagemErro.innerHTML = '<p>CEP incorreto. Tente novamente</p>';
        console.log('Erro ao buscar CEP', error);
    }
}

function atribuirValoresCampos(data) {
    var endereco = document.getElementById('endereco');
    var complemento = document.getElementById('complemento');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    endereco.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}
inputCep.addEventListener('focusout', () => buscarEndereco(inputCep.value));


/* let ceps = ['57020510', '57025570', '01001001'];
let conjuntoCeps = ceps.map(valores => buscarEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(resposta => console.table(resposta));
 */
