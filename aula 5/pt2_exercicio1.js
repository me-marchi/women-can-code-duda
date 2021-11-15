//Exercícios pt.2: https://faithful-ptarmigan-b0c.notion.site/Exerc-cios-pt-2-Loops-e-M-todos-e-Array-6b0d9d04318748ae8c1c19d18db220cd

function criaPares(valoresNum){
    for(var i = 0; i < valoresNum.length; i++){
        if (valoresNum[i]%2 == 0){
            console.log(valoresNum[i]);
        }
    }
}

const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

criaPares(valoresNum);