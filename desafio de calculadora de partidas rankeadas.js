// Função que calcula o saldo de partidas e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Não classificado";
    }

    // Retorna o saldo de vitórias e o nível do jogador
    return { saldoVitorias, nivel };
}

// Função principal para solicitar as vitórias e derrotas
function main() {
    // Solicita a quantidade de vitórias e derrotas (exemplo simples sem entrada dinâmica)
    let vitorias = parseInt(prompt("Digite o número de vitórias: 45"));
    let derrotas = parseInt(prompt("Digite o número de derrotas: 15"));

    // Chama a função para calcular o saldo e o nível
    let resultado = calcularNivel(vitorias, derrotas);

    // Exibe a mensagem final com saldo e nível
    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`);
}


main();
