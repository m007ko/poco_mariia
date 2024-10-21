function onSubmit(event) {
  event.preventDefault();

  const fromCity = document.getElementById("fromCity").value;
  const toCity = document.getElementById("toCity").value;
  const apiUrl = `https://transport.opendata.ch/v1/connections?from=${fromCity}&to=${toCity}`;

  // Fetch transport connections
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const connection = data.connections[0]; // Get the first connection
      showData(connection, fromCity, toCity);
      return;
    })
    .catch((error) => {
      document.getElementById(
        "connectionResult"
      ).innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    });
}

function showData(connection, fromCity, toCity) {
  const h2Tag = document.createElement("h2");
  h2Tag.textContent = `Connection from ${fromCity} to ${toCity}`;

  document.getElementById("connectionResult").appendChild(h2Tag);

  const result = `
               <p>Departure: ${formatDate(connection.from.departure)}</p>
               <p>Arrival: ${formatDate(connection.to.arrival)}</p>
               <p>Duration: ${connection.duration}</p>
           `;

  document.getElementById("connectionResult").innerHTML = result;
}

function formatDate(stringDate) {
  const date = new Date(stringDate);
  return `Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
                           Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
