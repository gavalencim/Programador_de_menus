// Ingreso de variables:
/*let estilo = document.getElementById("Evida").value;
let alergias = document.getElementById("allergies").value;
let edad = parseInt(document.getElementById("age").value);
let actividadFisica = document.getElementById("fitness-level").value;
let estatura = parseInt(document.getElementById("height").value);
let sexo = document.getElementById("sexo").value;
let peso = parseInt(document.getElementById("weight").value);*/

// FUNCIÓN QUE CALCULA EL ÍNDICE DE MASA CORPORAL (IMC)
function imc(){
  return imc = peso / (estatura * estatura);
}// Fin función imc

// FUNCIÓN QUE CALCULA EL REQUERIMIENTO CALÓRICO DIARIO
function requerimientoCalorico(){
  // Ingreso de varuables por la página html:
  let calorias;
  let edad = parseInt(document.getElementById("age").value);
  let actividadFisica = document.getElementById("fitness-level").value;
  let estatura = parseInt(document.getElementById("height").value);
  let sexo = document.getElementById("sexo").value;
  let peso = parseInt(document.getElementById("weight").value);
  let tmb;
  // Condicional para el cálculo de la tasa metabólica basal con la ecuación de Harris-Benedict:
  if (sexo == "woman") {
    tmb = (10 * peso)+(6.25 * estatura)-(5 * edad)-161; 
  }
  else if (sexo == "man") {
    tmb = (10 * peso)+(6.25 * estatura)-(5 * edad)+5;
  }
  else {
    tmb = (((10 * peso)+(6.25 * estatura)-(5 * edad)-161)+((10 * peso)+(6.25 * estatura)-(5 * edad)+5))/2;
  }
   // Condicional para el cálculo de la cantidad de calorías requeridas en función de la actividad física el usuario:
  if (actividadFisica == "none"){return calorias = tmb*1.2;}
  else if (actividadFisica == "beginner"){return calorias = tmb*1.4;}
  else if (actividadFisica == "intermediate"){return calorias = tmb*1.6;}
  else {return calorias = tmb*1.8;} 
}// Fin función requerimientoCalorico

// FUNCIÓN QUE CALCULA LA CANTIDAD DE CALORÍAS DE PROTEÍNAS NECESARIAS
function caloriasProteina(reqCalorico){
  let porcProteina = parseFloat((reqCalorico*0.2).toFixed(2));
  return porcProteina;
}// Fin función porcentajeCaloriasProteina

// FUNCIÓN QUE CALCULA LA CANTIDAD DE CALORÍAS DE GRASAS NECESARIAS
function caloriasGrasa(reqCalorico){
  let porcGrasa = parseFloat((reqCalorico*0.3).toFixed(2));
  return porcGrasa;
}// Fin función porcentajeCaloriasGrasa

// FUNCIÓN QUE CALCULA LA CANTIDAD DE CALORÍAS DE CARBOHIDRATOS NECESARIAS
function caloriasCarbohidrato(reqCalorico){
  let porcCarbohidratos = parseFloat((reqCalorico*0.5).toFixed(2));
  return porcCarbohidratos;
}// Fin función porcentajeCaloriasCarbohidrato

// FUNCIÓN QUE CALCULA LA CANTIDAD DE GRAMOS DE PROTÉINAS NECESARIOS
function gramosProteina(porcProteina){
  let gProteina = parseFloat((porcProteina/4).toFixed(2));
  return gProteina
}// Fin función gramosProteina

// FUNCIÓN QUE CALCULA LA CANTIDAD DE GRAMOS DE GRASAS NECESARIOS
function gramosGrasa(porcGrasa){
  let gGrasa = parseFloat((porcGrasa/9).toFixed(2));
  return gGrasa;
}// Fin función gramosGrasa

// FUNCIÓN QUE CALCULA LA CANTIDAD DE GRAMOS DE CARBOHIDRATOS NECESARIOS
function gramosCarbohidrato(porcCarbohidrato){
  let gCarbohidrato = parseFloat((porcCarbohidrato/4).toFixed(2));
  return gCarbohidrato;
}

// FUNCIÓN QUE IMPRIMIRÁ EN PANTALLA TODA LA INFORMACIÓN
function imprimirInfo(){
  document.getElementById("totalCalorias").innerHTML = "Tu requerimiento calórico diario es de: " + requerimientoCalorico() + " calorías.";
  
  document.getElementById("caloriasProteinas").innerHTML = "Tu requerimiento calórico diario de proteínas es de: " + caloriasProteina(requerimientoCalorico())+ " calorías, un 20% de tu requerimiento calórico diario";
  document.getElementById("gramosProteinas").innerHTML = "Debes consumir " + gramosProteina(caloriasProteina(requerimientoCalorico())) + " gramos de proteínas al día";
  
  document.getElementById("caloriasGrasas").innerHTML = "Tu requerimiento calórico diario de grasas es de: " + caloriasGrasa(requerimientoCalorico())+ " calorías, un 30% de tu requerimiento calórico diario";
  document.getElementById("gramosGrasas").innerHTML = "Debes consumir " + gramosGrasa(caloriasGrasa(requerimientoCalorico())) + " gramos de grasas al día";
  
  document.getElementById("caloriasCarbohidratos").innerHTML = "Tu requerimiento calórico diario de carbohidratos es de: " + caloriasCarbohidrato(requerimientoCalorico())+ " calorías, un 50% de tu requerimiento calórico diario";
  document.getElementById( "gramosCarbohidratos").innerHTML = "Debes consumir " + gramosCarbohidrato(caloriasCarbohidrato(requerimientoCalorico())) + " gramos de carbohidratos al día";
}// Fin función imprimirInfo 

console.log(requerimientoCalorico());
console.log(caloriasProteina(requerimientoCalorico()));
console.log(caloriasGrasa(requerimientoCalorico()));
console.log(caloriasCarbohidrato(requerimientoCalorico()));
console.log(" ");
console.log(gramosProteina(caloriasProteina(requerimientoCalorico())));
console.log(gramosGrasa(caloriasGrasa(requerimientoCalorico())));
console.log(gramosCarbohidrato(caloriasCarbohidrato(requerimientoCalorico())));


