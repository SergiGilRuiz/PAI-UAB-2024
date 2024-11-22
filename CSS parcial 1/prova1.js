// Demanar a l'usuari si vol un conus o una terrina
let tipus = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();

// Demanar a l'usuari quin sabor vol
let sabor = prompt("Quin sabor vols? (Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles)").toLowerCase();

// Inicialitzar el preu
let preuFinal = 0;

// Comprovar si el tipus de gelat és correcte
if (tipus === "c") {
  preuFinal = 3.45;
} else if (tipus === "t") {
    preuFinal = 3.95;
} else {
  console.log("Error: dades mal introduïdes");
}

// Comprovar el sabor i afegir el cost addicional
if (sabor === "vainilla" || sabor === "xocolata") {
  // No cal afegir res al preu
} else if (sabor === "turró" || sabor === "menta" || sabor === "oreo") {
  preuFinal += 0.5;
} else if (sabor === "crema" || sabor === "gerds" || sabor === "ametlles") {
  preuFinal += 1;
} else {
  console.log("Error: dades mal introduïdes");
}

// Si no hi ha cap error, mostrar el preu final
if (preuFinal > 0) {
  console.log("El preu final del gelat és: " + preuFinal.toFixed(2) + "€.");
}
