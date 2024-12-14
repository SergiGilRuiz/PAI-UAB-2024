function validarNom() {
  const nom = document.getElementById("nom").value.trim();
  const errorElement = document.getElementById("error-nom");
  let errorMessage = "";

  if (nom === "") {
    errorMessage = "El camp no pot estar buit.";
  } else {
    // Separar les paraules
    const paraules = nom.split(" ");
    for (let paraula of paraules) {
      // Comprovar que no hi hagi números
      if (/\d/.test(paraula)) {
        errorMessage = "El nom no pot contenir números.";
        break;
      }

      // Comprovar que la primera lletra sigui majúscula
      const primeraLletra = paraula.charAt(0);
      const restaParaula = paraula.slice(1);

      if (primeraLletra !== primeraLletra.toUpperCase() || 
          restaParaula !== restaParaula.toLowerCase()) {
        errorMessage = "Cada paraula ha de començar amb majúscula.";
        break;
      }
    }
  }

  // Mostrar el missatge d'error si cal
  if (errorMessage) {
    errorElement.textContent = errorMessage;
  } else {
    errorElement.textContent = ""; // Netejar errors si tot és correcte
  }
}
