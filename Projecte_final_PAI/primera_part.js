//Nom i cognoms
function validarNom() {
  const nom = document.getElementById("nom").value.trim();
  //trim és per eliminar els espais en blanc al principi i al final de valor obtingut (nom)

  const errorElement = document.getElementById("error-nom");
  let errorMissatge = "";

  if (nom === "") {
    errorMissatge = "El camp no pot estar buit.";
  } else {
      // Dividieix el text introduït per l'usuari (nom) en un array de paraules, usant els espais (" ") com a separadors.
      const paraules = nom.split(" ");
      // Cada paraula
      for (let paraula of paraules) {
          // Cada caràcter de la paraula
          for (let i = 0; i < paraula.length; i++) {
              //Guardem cada caràcter a la variable caràcter
              const caracter = paraula[i];
              if (caracter >= '0' && caracter <= '9') {
                  errorMissatge = "El nom no pot contenir números.";
                  break;
              }
          }
          // Si s'ha avisat de l'error, parem el bucle
          if (errorMissatge) {
              break;
          }
  
      // Comprovar que la primera lletra sigui majúscula
      //.charAt serveix per accedir a un caràcter individual
      const primeraLletra = paraula.charAt(0);
      //.slice serveix per agafar una part d'una cadena de caràcters, si nomes poses 1 número, agafa a partir d'aquell fins al final
      const restaParaula = paraula.slice(1);

      if (primeraLletra !== primeraLletra.toUpperCase() || 
          restaParaula !== restaParaula.toLowerCase()) {
          errorMissatge = "El nom i el cognom ha de começar per amb majúscula.";
        break;
      }
    }
  }

  // Mostrar el missatge d'error si cal
  if (errorMissatge) {
    errorElement.textContent = errorMissatge;   // Assigna el missatge d'error a l'element
  } else {
    errorElement.textContent = ""; // Netejar errors si tot és correcte
  }
}



//Rang d'edats
// Validació del camp 'Rang d'edats'
function validateEdat() {
  const selectEdat = document.getElementById('edat');
  const errorElement = document.getElementById('error-edat');
  
  // Comproveu si heu seleccionat una opció vàlida
  if (selectEdat.value === "") {    //És el valor que te l'opció "Selecciona una opció"
      errorElement.textContent = "Per favor, selecciona una opció vàlida.";
  } else {
      errorElement.textContent = ""; // Netejar missatge derror
  }
}






