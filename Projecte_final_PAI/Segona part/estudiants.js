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
    //Creem un objecte per contar els districtes.
    const accidentsPerDistricte = {
        "-1": 0, //Districte desconegut
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0
    };
    
    //Contem els accidents per districte
    obj.forEach(function(accident) {
        //Representa el nombre de districte de l'accident. 
        //És un valor numèric entre 1 i 10,  -1 (per als districtes desconeguts).
        if (accident.nDist >= 1 && accident.nDist <= 10) {
            //incrementem el districte corresponent
            accidentsPerDistricte[accident.nDist] += 1;
        } else {
            //si el valor del districte no és de 1 a 10, incrementem el districte desconegut
            accidentsPerDistricte["-1"] += 1;
        }
    });
    
    //Generem la llista de resultats
    let resultats = document.getElementById("resultats");
    resultats.innerHTML = ""; //Netegem el camp de text
    
    //Fem una llista ordenada (ul)
    let ul = document.createElement("ul");
    
    // Añadimos cada distrito y su número de accidentes a la lista
    for (let i = 1; i <= 10; i++) {
        //Creem un element de llista (i) per a cada districte
        let i = document.createElement("i");
        i.textContent = `Districte ${i}: ${accidentsPerDistricte[i]} accidents`;
        ul.appendChild(i); //appendChild() afegeix un element a la llista
    }
    
    //Districte desconegut (-1)
    let iDesconegut = document.createElement("i");
    iDesconegut.textContent = `Districte desconegut: ${accidentsPerDistricte["-1"]} accidents`;
    ul.appendChild(iDesconegut); 
    
    //Afegim resultats a la llista
    resultats.appendChild(ul);
}





function exercici04() {
    creaFormulari();
    const selectDistricte = document.getElementById("districtes");

    //Escoltar l'esdeveniment change a l'element selectDistricte.
    //L'esdeveniment change s'activa quan l'usuari selecciona una opció diferent al menú desplegable.
    selectDistricte.addEventListener("change", function () {
        const districteSeleccionat = selectDistricte.value.trim(); //Districte seleccionat
        console.log("Districte seleccionat:", districteSeleccionat);
        calcularAccidentsPerDistricte(districteSeleccionat);
    });
}

function calcularAccidentsPerDistricte(districte) {
    let contadorAccidentes = 0; //Inicialitzem el comptador d'accidents a 0

    //Iterem sobre l'objecte obj per comptar els accidents en el districte seleccionat
    obj.forEach(function (accident) {
        if (accident.districte === districte) {
            contadorAccidentes++;
        }
    });
    //Mostrem els resultats
    const resultats = document.getElementById("resultats");
    resultats.innerHTML = ""; //Netegem el camp de text
    const missatge = document.createElement("p");
    if (districte === "Altres") {
        missatge.textContent = `Accidents en districte desconegut: ${contadorAccidentes} accidents.`;
    } else {
        missatge.textContent = `Accidents al districte ${districte}: ${contadorAccidentes} accidents.`;
    }
    resultats.appendChild(missatge); //Afegim el missatge als resultats
}



