let xpHeroi = 0;
let inicioHeroi = 0;  // Defina um valor para testar o resultado

if (inicioHeroi >= 0 && inicioHeroi <= 1000) {
    xpHeroi = "ferro";
} else if (inicioHeroi >= 1001 && inicioHeroi <= 2000) {
    xpHeroi = "bronze";
} else if (inicioHeroi >= 2001 && inicioHeroi <= 5000) {
    xpHeroi = "prata";
} else if (inicioHeroi >= 5001 && inicioHeroi <= 7000) {
    xpHeroi = "ouro";
} else if (inicioHeroi >= 7001 && inicioHeroi <= 8000) {
    xpHeroi = "platina";
} else if (inicioHeroi >= 8001 && inicioHeroi <= 9000) {
    xpHeroi = "ascendente";
} else if (inicioHeroi >= 9001 && inicioHeroi <= 10000) {
    xpHeroi = "imortal";
} else {
    xpHeroi = "não classificado";
}

console.log("Classe do herói: " + xpHeroi + ", XP inicial: " + inicioHeroi);
