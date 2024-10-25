// Entrada de dados usando gets() para capturar o nível do monstro e a dificuldade
let num1 = parseInt(gets());  // Nível do monstro
let num2 = parseInt(gets());  // Dificuldade da batalha

// Calcula o XP ganho com base na fórmula fornecida
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
