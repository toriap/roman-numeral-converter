function convertToRoman(num) {
  let decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5,  4, 1];
  let romanNumber = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result= ""
  for (let i = 0; i < decimalNumber.length; i++){
    while (decimalNumber[i] <= num){
      result+= romanNumber[i]
      num-= decimalNumber[i]
    }
  }
 return result;
}

console.log(convertToRoman(36));
///////////////////////////////////////////////////////////
// Comenzamos creando dos matrices con conversión predeterminada con índices coincidentes. Estos se llaman decimalValuey romanNumeral. También creamos una variable de cadena vacía romanized, que albergará el número romano final.
// Usando un bucle for, recorremos las indicaciones de la decimalValuematriz. Continuamos haciendo un ciclo hasta que el valor en la corriente indexse ajuste num.
// A continuación, agregamos el número romano y disminuimos numpor el equivalente decimal.
// Finalmente, devolvemos el valor de romanized.
