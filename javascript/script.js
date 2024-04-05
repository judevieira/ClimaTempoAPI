document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nomeCidade = document.querySelector('#nome_cidade').value;

    if(!nomeCidade){
        return alerta('Digite uma cidade!');
    }

    const apiKey = '9be6031cd744061ff81e104cf3991b95'; /*chave ainda nao disponivel*/
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(nomeCidade)}&appid=${apiKey}&units=metric&lang=pt_br`; 

    const resutado = await fetch(api);
    const json = await resutado.json();


});

function alerta(mensagem){
    document.querySelector('#alerta').innerHTML = mensagem;
}


