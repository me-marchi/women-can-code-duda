var saldo = 50;
var saldoComBonus = saldo + 20;
var saldoComDesconto = saldoComBonus / 0.5;
var saldoFinal = saldoComDesconto;

console.log(saldo);
console.log(saldoComBonus);
console.log(saldoComDesconto);
console.log(saldoFinal);

// a var "saldo" da segunda linha estava como "saldoFinal", gerando resultados indefinidos, imaginei que fosse um erro e troquei por "saldo"