// Classe genérica Herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar
    atacar() {
      let ataque = '';
  
      // Define o ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque desconhecido';
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Heroi('Gandalf', 1000, 'mago');
  mago.atacar(); // Saída: O mago atacou usando magia
  
  const guerreiro = new Heroi('Arthur', 35, 'guerreiro');
  guerreiro.atacar(); // Saída: O guerreiro atacou usando espada
  
  const monge = new Heroi('Shaolin', 25, 'monge');
  monge.atacar(); // Saída: O monge atacou usando artes marciais
  
  const ninja = new Heroi('Naruto', 18, 'ninja');
  ninja.atacar(); // Saída: O ninja atacou usando shuriken
  