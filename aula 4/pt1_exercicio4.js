const meuCachorro = {
    "nome": "Rex",
    "patas": 4,
    "caudas": 1,
    "principalAmigo": "brinquedo"
};

meuCachorro.brinquedoFavorito = "bolinha";
console.log(meuCachorro.brinquedoFavorito);

//outra maneira
meuCachorro["brinquedoFavorito"] = "ossinho";
console.log(meuCachorro["brinquedoFavorito"]);