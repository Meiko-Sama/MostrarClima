// FLUXO:
// - Evento de submit no formulario disparado pelo botão
// - Captura do evento pelo registroTempo.addEventListener("submit", processar);
// - O evento captura o valor do input e coloca ele na url de requisição

// h1
const nomeCidade = document.getElementById("titulo");

// img
const img = document.getElementById("img");

// texto temperatura e tempo
const temp_atual = document.getElementById("temp_atual");
const temp_desc = document.getElementById("temp_desc");

// temp min, temp max, umidade, ventos
const temp_max = document.getElementById("temp_max");
const temp_min = document.getElementById("temp_min");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const registroTempo = document.getElementById("registroTempo");
const cityInput = document.getElementById("searchbar");

const processar = async (event) => {
  event.preventDefault();

  const cityName = cityInput.value;
  const key = "f0ac7f2b0a549178184aeda50ab5daf9";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${key}&units=metric&lang=pt_br`
    );

    const data = await response.json();

    nomeCidade.textContent = data.name;

    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    temp_atual.innerHTML = `${data.main.temp} <sup>C°</sup>`;
    console.log(data.main.temp, "Temperatura atual");

    temp_desc.textContent = data.weather[0].description;
    console.log(data.weather[0].description, "Clima atual");

    temp_max.innerHTML = `${data.main.temp_max}<sup>C°</sup>`;
    console.log(data.main.temp_max, "Temperatura Maxima");

    temp_min.innerHTML = `${data.main.temp_min}<sup>C°</sup>`;
    console.log(data.main.temp_min, "Temperatura Minima");

    humidity.textContent = `${data.main.humidity}%`;
    console.log(data.main.humidity, "Umidade Atual");

    wind.textContent = `${data.wind.speed}m/s`;
    console.log(data.wind.speed, "Velocidade do Vento Atual");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

registroTempo.addEventListener("submit", processar);
