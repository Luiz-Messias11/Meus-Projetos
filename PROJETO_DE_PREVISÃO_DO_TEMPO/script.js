const key = "74fdfee549065ee1185a328b773e94a4";

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".nublado-text").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade-text").innerHTM = dados.main.humidity;
  document.querySelector(
    "nuvem-zinha"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png;`
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input").value;

  buscarCidade(cidade);
}