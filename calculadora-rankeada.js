function calculoRankeadas(quantidadeVitorias, quantidadeDerrotas){

    let saldoVitorias;

    saldoVitorias = quantidadeVitorias - quantidadeDerrotas;

    return saldoVitorias
}

function verificarRanking(saldoVitorias){

    if (saldoVitorias < 10){
        ranking = "Ferro";
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        ranking = "Bronze";
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        ranking = "Prata";
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        ranking = "Ouro";
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        ranking = "Diamante";
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        ranking = "Lendário";
    }
    else {
        ranking = "Imortal";
    }

    return ranking;
}

let quantidadeVitorias = 100;
let quantidadeDerrotas = 20;

saldoVitorias = calculoRankeadas(quantidadeVitorias, quantidadeDerrotas);
nivelRankeada = verificarRanking(saldoVitorias)

console.log(`O Herói tem o saldo de ${saldoVitorias} vitórias e está no nível ${nivelRankeada}`);