var human_years = 26;

// The first 2 dog years = 10.5 human years
// The rest are 4 human years per dog year
var dog_years = Math.round((human_years-10.5)/4+2);

console.log("Hola, soy Steven, tengo",
    human_years,
    "lo cual es igual a",
    dog_years,
    "años Perro.");