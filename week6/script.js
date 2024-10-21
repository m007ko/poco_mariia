
const fromCity = document.getElementById("fromCity").value;
  const toCity = document.getElementById("toCity").value;
  const apiUrl = `https://transport.opendata.ch/v1/connections?from=${fromCity}&to=${toCity}`;