// Nom i cognoms
function validarNom() {
  const nom = document.getElementById("nom").value.trim();
  //trim és per eliminar els espais en blanc al principi i al final de valor obtingut (nom)

  const errorElement = document.getElementById("error-nom");
  let errorMissatge = "";

  if (nom === "") {
    errorMissatge = "El camp no pot estar buit.";
  } else {
      //Dividieix el text introduït per l'usuari (nom) en un array de paraules, usant els espais (" ") com a separadors.
      const paraules = nom.split(" ");
      //Cada paraula
      for (let paraula of paraules) {
          //Cada caràcter de la paraula
          for (let i = 0; i < paraula.length; i++) {
              //Guardem cada caràcter a la variable caràcter
              const caracter = paraula[i];
              if (caracter >= '0' && caracter <= '9') {
                  errorMissatge = "El nom no pot contenir números.";
                  break;
              }
          }
          //Si s'ha avisat de l'error, parem el bucle
          if (errorMissatge) {
              break;
          }
  
      //Comprovar que la primera lletra sigui majúscula
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

  //Mostra el missatge d'error si cal
  if (errorMissatge) {
    errorElement.textContent = errorMissatge;   //Assigna el missatge d'error a l'element
  } else {
    errorElement.textContent = ""; //Netejar errors si tot és correcte
  }
}



// Rang d'edats
//Validació del camp 'Rang d'edats'
function validateEdat() {
  const selectEdat = document.getElementById('edat');
  const errorElement = document.getElementById('error-edat');
  
  //Comprovem si s'ha seleccionat una opció vàlida
  if (selectEdat.value === "") {    //És el valor que te l'opció "Selecciona una opció"
      errorElement.textContent = "Per favor, selecciona una opció vàlida.";
  } else {
      errorElement.textContent = ""; // Netejar missatge derror
  }
}



// Codi postal
const inputCodiPostal = document.getElementById("codi-postal");
const errorCodi = document.getElementById("error-codi");

//Validem el codi postal
function validarCodiPostal() {
    const valor = inputCodiPostal.value;
    let mensajeError = "";

    //Comprovem que tots els caràcters son números
    for (let i = 0; i < valor.length; i++) {
      const car = valor[i];
      //En comptes de dir la situació on no salta l'error, diem que si el caràcter és més petit que 0 o més gran a 9, salta l'error
      //Això serveix també per les lletres, tot el que no sigui un número del 0 al 9, salta l'error
      if (car < '0' || car > '9') { 
          mensajeError = "El codi postal només pot contenir números del 0 al 9.";
          break;
      }
  }
    //Al html ja tenim un maxlength que no put superar els 5 caràcters però algú podria escriure menys de 5
    if (valor.length !== 5) {
        mensajeError = "El codi postal ha de tenir exactament 5 números.";
    }
    //Mostra el missatge d'error si és necessari
    errorCodi.textContent = mensajeError;
}



// Correu electrònic
function validarCorreuElectronic() {
  // Obtenim el valor de l'input
  var email = document.getElementById("email").value;
  var error = document.getElementById("error-email");

  //Comprovar que hi ha només una '@'
  var arroba = email.indexOf('@');  //indexOf busca els que li diguis y torna la posició
  var segona = email.indexOf('@', arroba + 1);  //Aquí inicia la recerca de la segona @ però a partir de la que hem trobat abans

  //Validem que només hi ha una '@' i que després d'aquesta hi hagi almenys 1 punt (.)
  if (arroba === -1 || segona !== -1) {     //-1 és el valor per defecte si no troba res
    error.textContent = "El correu ha de contenir només una '@'.";
  }
  //Si només troba una @
  else {
    var punt = email.indexOf('.', arroba);  //igual que abans, busquem un . a partir de la @
    if (punt === -1) {   //si no s'ha trobat el punt (-1) o 
      error.textContent = "Ha de contenir almenys un punt (.) després de la '@'.";
    } 
    else {
      error.textContent = ""; //No hi ha error
    }
  }
}



// Contrasenya
// Funció per validar la contrasenya
function validarContrasenya() {
  var contrasenya = document.getElementById('contrasenya').value;
  var errorMissatge = document.getElementById('error-contrasenya');

  // Variables per la validación
  var majuscula = false;
  var minuscula = false;
  var numeros = 0;
  var especials = false;
  var caracteresEspecials = "!@#$%^&*()_+[]={};:|,.<>?";

  // Comprovem que la contrasenya sigui correcta: 1 majúscula, 1 minúscula, caràcters (llista) i caràcters especials
  for (var i = 0; i < contrasenya.length; i++) {
      var car = contrasenya[i];
      
      if (car >= 'A' && car <= 'Z') {
          majuscula = true;
      } else if (car >= 'a' && car <= 'z') {
          minuscula = true;
      } else if (car >= '0' && car <= '9') {
          numeros++;    //+1 a la llista (necessitem 2)
      } else if (caracteresEspecials.includes(car)) {
          especials = true;
      }
  }

  //Comprovem que es compleixin tots els requisits
  if (contrasenya.length < 8) {
      errorMissatge.textContent = "La contrasenya ha de tenir almenys 8 caràcters.";
      return false;
  }
  if (!majuscula) {
      errorMissatge.textContent = "La contrasenya ha de tenir almenys una lletra majúscula.";
      return false;
  }
  if (!minuscula) {
      errorMissatge.textContent = "La contrasenya ha de tenir almenys una lletra minúscula.";
      return false;
  }
  if (numeros < 2) {
      errorMissatge.textContent = "La contrasenya ha de tenir al menys 2 números.";
      return false;
  }
  if (!especials) {
      errorMissatge.textContent = "La contrasenya ha de tenir al menys 1 caràcter especial (!@#$%^&*()_+[]={};:|,.<>?).";
      return false;
  }

  //Si la contrasenya és correcte, neteja el missatge d'error
  errorMissatge.textContent = "";
  return true;
}

//Funció per mostrar/ocultar la contrasenya
//Quan cliquem al requadre de mostrar contrasenya farà la següent funció:
var mostrarContrasenyaCheckbox = document.getElementById('mostrar-contrasenya');

mostrarContrasenyaCheckbox.addEventListener('change', function() {
  var contrasenyaInput = document.getElementById('contrasenya');
  if (mostrarContrasenyaCheckbox.checked) {
      contrasenyaInput.type = 'text';  //Mostra la contrasenya. Valor de type (text) predefinit per mostrar
  } else {
      contrasenyaInput.type = 'password';  //Oculta la contrasenya. Valor de type (password) predefinit per ocultar
  }
});









