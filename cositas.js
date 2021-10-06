
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
  }
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    return  document.getElementById("cont1").innerHTML=perimetro;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    return document.getElementById("cont2").innerHTML=area;
}