function validaMaioridade(anoNascimento) {
    if (anoNascimento < 2003){
        return "Liberação autorizada";
    } else if (anoNascimento == 2003){
        return "Validar documento de identidade";
    } else {
        return "ATENÇÃO: Liberação NÃO autorizada";
    }
}

resultado = validaMaioridade(2002);
console.log(resultado);

resultado = validaMaioridade(2003);
console.log(resultado);

resultado = validaMaioridade(2004);
console.log(resultado);