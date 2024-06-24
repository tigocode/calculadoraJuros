import entradaDados from 'readline-sync';

console.log("Calculadora de juros!\n");

let resultado = "";
let valorDivida = entradaDados.question("Informe o valor da divida: R$ ");
let diasEmAtraso = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto:  ");

if (Number(diasEmAtraso) > 0 && Number(diasEmAtraso) < 15) {

  resultado = Number(valorDivida) + (Number(valorDivida) * 0.05);

  console.log("\nValor original da dívida: R$ " + valorDivida);
  console.log("Dias em atraso: " + diasEmAtraso);
  console.log("Taxa de juros: 5%");
  console.log("Valor total com juros: R$ " + resultado);

} else if (Number(diasEmAtraso) >= 15) {

  resultado = Number(valorDivida) + (Number(valorDivida) * 0.10);

  console.log("\nValor original da dívida: R$ " + valorDivida);
  console.log("Dias em atraso: " + diasEmAtraso);
  console.log("Taxa de juros: 10%");
  console.log("Valor total com juros: R$ " + resultado);

} else {
  
  console.log("\nPagamento em dia, valor do débito: R$ " + valorDivida);

}
