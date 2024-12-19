// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:

document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);

//Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
//que ompliu el codi necessari.

function exercici01() {
    const nombreTotalAccidents = obj.length;
    document.getElementById("resultats").textContent = "El número d'accidents totals és de: " + nombreTotalAccidents;
}


function exercici02() {
    const accidentsPerDia = {
        "Dilluns": 0,
        "Dimarts": 0,
        "Dimecres": 0,
        "Dijous": 0,
        "Divendres": 0,
        "Dissabte": 0,
        "Diumenge": 0
      };
    
//Contem els accidents que ocorren cada dia
    obj.forEach(function(accident) {
        const dia = accident.diaSet; // Dia de la setmana, mira la "columna" diaSet
        if (accidentsPerDia[dia] === undefined) {
            accidentsPerDia[dia] = 0;
    }
    accidentsPerDia[dia] += 1;
  });

      //Trobar el dia amb més accidents
      let maxAccidents = 0;
      let diaAmbMesAccidents = "";
    
      for (let dia in accidentsPerDia) {
        if (accidentsPerDia[dia] > maxAccidents) {
          maxAccidents = accidentsPerDia[dia];
          diaAmbMesAccidents = dia;
        }
      }
    
      //Mostrem els resultats
      const resultats = document.getElementById("resultats");
      resultats.textContent = `El dia amb més accidents va ser: ${diaAmbMesAccidents} amb ${maxAccidents} accidents`;
}


function exercici03() {

}


function exercici04() {
    creaFormulari();
}
