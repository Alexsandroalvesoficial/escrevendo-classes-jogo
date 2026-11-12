// Desafio DIO: Escrevendo as Classes de um Jogo
// Autor: Alexsandro Alves

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Define o ataque de acordo com o tipo do herói.
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criação dos objetos (instâncias da classe Heroi).
const herois = [
    new Heroi("Merlin", 100, "mago"),
    new Heroi("Arthas", 35, "guerreiro"),
    new Heroi("Liang", 28, "monge"),
    new Heroi("Hanzo", 25, "ninja")
];

// Função que percorre a lista e executa o ataque de cada herói.
function iniciarBatalha(listaHerois) {
    console.log("=== INÍCIO DA BATALHA ===");

    for (let i = 0; i < listaHerois.length; i++) {
        const heroi = listaHerois[i];

        console.log(`Herói: ${heroi.nome} | Idade: ${heroi.idade}`);
        heroi.atacar();
    }

    console.log("=== FIM DA BATALHA ===");
}

// Executa o desafio.
iniciarBatalha(herois);
