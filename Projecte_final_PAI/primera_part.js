//Quan s'ha carregat la pàgina
window.onload = function () {
  //Deshabilitem els camps inicialment perquè no es pugui passar al següent sense completar l'anterior
  document.getElementById("edat").disabled = true;
  document.getElementById("codi-postal").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("contrasenya").disabled = true;
  document.getElementById("confirmar-contrasenya").disabled = true;
};



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
    document.getElementById("edat").disabled = true;
  } else {
    errorElement.textContent = ""; //Netejar errors si tot és correcte
    document.getElementById("edat").disabled = false;

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
      document.getElementById("codi-postal").disabled = true;
  } else {
      errorElement.textContent = ""; // Netejar missatge derror
      document.getElementById("codi-postal").disabled = false;
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
        document.getElementById("email").disabled = true;
    } else {
    //Mostra el missatge d'error si és necessari
    document.getElementById("email").disabled = false;
    }
    errorCodi.textContent = mensajeError;
}



// Correu electrònic
function validarCorreuElectronic() {
  //Obtenim el valor de l'input
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
          //Mostra el missatge d'error si és necessari
    errorCodi.textContent = mensajeError;
    document.getElementById("contrasenya").disabled = true;
    } 
    else {
      error.textContent = ""; //No hi ha error
      document.getElementById("contrasenya").disabled = false;
    }
  }
}



// Contrassenya
//Funció per validar la contrasenya
function validarContrasenya() {
  var contrasenya = document.getElementById('contrasenya').value;
  var errorMissatge = document.getElementById('error-contrasenya');

  //Variables per la validación
  var majuscula = false;
  var minuscula = false;
  var numeros = 0;
  var especials = false;
  var caracteresEspecials = "!@#$%^&*()_+[]={};:|,.<>?";

  //Comprovem que la contrasenya sigui correcta: 1 majúscula, 1 minúscula, caràcters (llista) i caràcters especials
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
      document.getElementById("confirmar-contrasenya").disabled = true;
      return false;
  }
  if (!majuscula) {
      errorMissatge.textContent = "La contrasenya ha de tenir almenys una lletra majúscula."
      document.getElementById("confirmar-contrasenya").disabled = true;
      return false;
  }
  if (!minuscula) {
      errorMissatge.textContent = "La contrasenya ha de tenir almenys una lletra minúscula.";
      document.getElementById("confirmar-contrasenya").disabled = true;
      return false;
  }
  if (numeros < 2) {
      errorMissatge.textContent = "La contrasenya ha de tenir al menys 2 números.";
      document.getElementById("confirmar-contrasenya").disabled = true;
      return false;
  }
  if (!especials) {
      errorMissatge.textContent = "La contrasenya ha de tenir al menys 1 caràcter especial (!@#$%^&*()_+[]={};:|,.<>?).";
      document.getElementById("confirmar-contrasenya").disabled = true;
      return false;
  }

  //Si la contrasenya és correcte, neteja el missatge d'error
  errorMissatge.textContent = "";
  document.getElementById("confirmar-contrasenya").disabled = false;
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



// Validar contrasenya
//Funció per comparar les contrasenyes
function compararContrasenyes() {
  const contrasenya = document.getElementById('contrasenya').value;
  const confirmarContrasenya = document.getElementById('confirmar-contrasenya').value;
  const errorConfirmar = document.getElementById('error-confirmar');

  //Verificar si son iguals
  if (contrasenya !== confirmarContrasenya) {
      errorConfirmar.textContent = "Les contrasenyes no coincideixen.";
      return false;
  }

  //Si coincideixen, treure el missatge d'error
  errorConfirmar.textContent = "";
  return true;
}

//Funció per mostrar/ocultar la confirmació de la contrasenya
document.getElementById('mostrar-confirmar').addEventListener('change', function () {
  const confirmarInput = document.getElementById('confirmar-contrasenya');
  const mostrarConfirmarCheckbox = document.getElementById('mostrar-confirmar');
//Si la casella està seleccionada, mostra el text sinó, no el mostris. .checked és per veure si está pitjat o no
//El ? és un if/else que actua amb text si és true (està pitjat) i password si és false (no ho està)
  confirmarInput.type = mostrarConfirmarCheckbox.checked ? 'text' : 'password';
});  

//Associar la validació al "blur" en el camp de confirmar contrasenya
document.getElementById('confirmar-contrasenya').addEventListener('blur', compararContrasenyes);



// Botó esborrar
//Seleccionar el botó "Esborrar"
const btnEsborrar = document.getElementById("esborrar");

//Quan cliquem 
btnEsborrar.addEventListener("click", function () {
  //Esborrem els camps de text 
  document.getElementById("nom").value = "";
  document.getElementById("codi-postal").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contrasenya").value = "";
  document.getElementById("confirmar-contrasenya").value = "";

  //Tornem a deshabilitar els camps
  document.getElementById("edat").disabled = true;
  document.getElementById("codi-postal").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("contrasenya").disabled = true;
  document.getElementById("confirmar-contrasenya").disabled = true;

  //Selecciona la primera opció (Selecciona una opció)
  document.getElementById("edat").selectedIndex = 0;

  //Treiem totes les opcions de marcar
  document.getElementById("mostrar-contrasenya").checked = false;
  document.getElementById("mostrar-confirmar").checked = false;
  document.getElementById("privacitat").checked = false;

  //Esborrem els missatges d'error
  document.getElementById("error-nom").innerText = "";
  document.getElementById("error-edat").innerText = "";
  document.getElementById("error-codi").innerText = "";
  document.getElementById("error-email").innerText = "";
  document.getElementById("error-contrasenya").innerText = "";
  document.getElementById("error-confirmar").innerText = "";
  document.getElementById("error-privacitat").innerText = "";
});



// Botó enviar
//Funció per comprovar si hi ha algun error actiu
function ErrorsActius() {
  //Seleccionem cada element individualment
  const errorNom = document.getElementById("error-nom").textContent;
  const errorEdat = document.getElementById("error-edat").textContent;
  const errorCodi = document.getElementById("error-codi").textContent;
  const errorEmail = document.getElementById("error-email").textContent;
  const errorContrasenya = document.getElementById("error-contrasenya").textContent;
  const errorConfirmar = document.getElementById("error-confirmar").textContent;
  const errorPrivacitat = document.getElementById("error-privacitat").textContent;

  //Comprovem si algun text te errors
  if (
    errorNom !== "" || 
    errorEdat !== "" || 
    errorCodi !== "" || 
    errorEmail !== "" || 
    errorContrasenya !== "" || 
    errorConfirmar !== "" || 
    errorPrivacitat !== ""
  ) {
    return true; //Hi ha errors
  } else {
    return false; //No hi ha errors
  }
}

//Funció del botó enviar
document.getElementById("enviar").addEventListener("click", function(){
  //Verifiquem que s'ha marcat el textbox de privacitats
  const privacitatCheckbox = document.getElementById("privacitat");
  if (!privacitatCheckbox.checked) {
    document.getElementById("error-privacitat").textContent = "Has d'acceptar la política de privacitat.";
    return; //Acabem la funció
  } else {
    document.getElementById("error-privacitat").textContent = ""; //Treiem l'error
  }

  //Comprovem que no hi hagi errors actius
  if (ErrorsActius()) {
    alert("El formulari té errors actius. Revisa els camps.");
    return; //Sortim de la funció
  }

  //Si no hi ha errors mostrem el contingut del formulari
  const nom = document.getElementById("nom").value;
  const edat = document.getElementById("edat").value;
  const codiPostal = document.getElementById("codi-postal").value;
  const email = document.getElementById("email").value;

  const contingutFormulari = `
    <p>Nom i Cognoms: ${nom}</p>
    <p>Rang d'edats: ${edat}</p>
    <p>Codi Postal: ${codiPostal}</p>
    <p>Correu Electrònic: ${email}</p>
    <p>Contrassenya: ${contrasenya}</p>

  `;

  document.getElementById("contingut-formulari").innerHTML = contingutFormulari;
  alert("El formulari s'ha enviat correctament!");
});


