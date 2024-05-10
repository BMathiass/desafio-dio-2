let vitorias = 45
let derrotas = 12
let nivelDeVitorias = " "

function calcularSaldoVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}

let saldoDeVitorias = calcularSaldoVitorias(vitorias, derrotas)
console.log("O saldo de vitórias é de " + saldoDeVitorias)

if(saldoDeVitorias < 10){
    nivelDeVitorias = "Ferro"
}
else if(saldoDeVitorias >= 11 && saldoDeVitorias <= 20){
    nivelDeVitorias = "Bronze"
}
else if(saldoDeVitorias >= 21 && saldoDeVitorias <= 40){
    nivelDeVitorias = "Prata"
}
else if(saldoDeVitorias >= 41 && saldoDeVitorias <= 60){
    nivelDeVitorias = "Ouro"
}
else if(saldoDeVitorias >= 61 && saldoDeVitorias <= 80){
    nivelDeVitorias = "Platina"
}
else if(saldoDeVitorias >= 81 && saldoDeVitorias <= 100){
    nivelDeVitorias = "Lendário"
}
else if(saldoDeVitorias >= 101){
    nivelDeVitorias = "Imortal"
}

//Saída
console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias e está no nível de " + nivelDeVitorias)