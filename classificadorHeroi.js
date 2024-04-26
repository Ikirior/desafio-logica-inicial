function calcularRanking(experiencia){

    if (experienciaHeroi < 1000){
        rankingHeroi = "Ferro"
    }
    else if ((experienciaHeroi > 1001) && (experienciaHeroi <= 2000)){
        rankingHeroi = "Bronze"
    }
    else if ((experienciaHeroi > 2001) && (experienciaHeroi <= 5000)){
        rankingHeroi = "Prata"
    }
    else if ((experienciaHeroi > 5001) && (experienciaHeroi <= 7000)){
        rankingHeroi = "Ouro"
    }
    else if ((experienciaHeroi > 7001) && (experienciaHeroi <= 8000)){
        rankingHeroi = "Platina"
    }
    else if ((experienciaHeroi > 8001) && (experienciaHeroi <= 9000)){
        rankingHeroi = "Ascendente"
    }
    else if ((experienciaHeroi > 9001) && (experienciaHeroi <= 10000)){
        rankingHeroi = "Imortal"
    }
    else{
        rankingHeroi = "Radiante"
    }

    return rankingHeroi
}

let nomeHeroi = "Joziscleison Espada Divina"
let experienciaHeroi = "11000"
let rankingHeroi = ""

rankingHeroi = calcularRanking(experienciaHeroi)
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${rankingHeroi}`)