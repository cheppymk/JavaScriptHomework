document.addEventListener("DOMContentLoaded", () => {
  const showPlanetsButton = document.querySelector("#show-planets-button");

  showPlanetsButton.addEventListener("click", async () => {
    const url = "https://swapi.dev/api/planets/?page=1";
    const data = await getPlanets(url);
    const planets = data.results;
    printPlanetsToTable(planets);
  });
});

async function getPlanets(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function printPlanetsToTable(planets) {
  const table = document.querySelector("#planet-table");

  for (const planet of planets) {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const populationCell = row.insertCell(1);
    const climateCell = row.insertCell(2);
    const gravityCell = row.insertCell(3);

    nameCell.innerHTML = planet.name;
    populationCell.innerHTML = planet.population;
    climateCell.innerHTML = planet.climate;
    gravityCell.innerHTML = planet.gravity;
  }
}

async function getPlanets(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function printPlanetsToTable(planets) {
  const table = document.querySelector("#planet-table");

  table.innerHTML = `
    <tr>
      <th>Planet Name</th>
      <th>Population</th>
      <th>Climate</th>
      <th>Gravity</th>
    </tr>
  `;

  for (const planet of planets) {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const populationCell = row.insertCell(1);
    const climateCell = row.insertCell(2);
    const gravityCell = row.insertCell(3);

    nameCell.innerHTML = planet.name;
    populationCell.innerHTML = planet.population;
    climateCell.innerHTML = planet.climate;
    gravityCell.innerHTML = planet.gravity;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 1;
  let currentPlanets = [];

  const showPlanetsButton = document.querySelector("#show-planets-button");
  const nextButton = document.querySelector("#next-button");
  const prevButton = document.querySelector("#prev-button");

  showPlanetsButton.addEventListener("click", async () => {
    const url = `https://swapi.dev/api/planets/?page=${currentPage}`;
    const data = await getPlanets(url);
    currentPlanets = data.results;
    printPlanetsToTable(currentPlanets);
    nextButton.style.display = "inline-block";
  });

  nextButton.addEventListener("click", async () => {
    currentPage++;
    const url = `https://swapi.dev/api/planets/?page=${currentPage}`;
    const data = await getPlanets(url);
    currentPlanets = data.results;
    printPlanetsToTable(currentPlanets);
    nextButton.style.display = "none";
    prevButton.style.display = "inline-block";
  });

  prevButton.addEventListener("click", async () => {
    currentPage--;
    const url = `https://swapi.dev/api/planets/?page=${currentPage}`;
    const data = await getPlanets(url);
    currentPlanets = data.results;
    printPlanetsToTable(currentPlanets);
    nextButton.style.display = "inline-block";
    prevButton.style.display = "none";
  });
});
