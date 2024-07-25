// inimigo.js
import { PersPadrao } from '../personagem/pers_padrao.js';


// aqui é a classe do inimigo ela herda o personagem padrao / funciona semelhante ao personagem principal
export class Inimigo extends PersPadrao {
    constructor(nome, vida, vidaMaxima, lvl, ataque, defesa, velocidade, exp) {
        super(nome, vida, vidaMaxima, lvl, ataque, defesa, velocidade);

        this.exp = exp; // Atributo de experiência
    }

    atacar(personagem) {
        if (this.habilidades.length > 0) {
            const habilidade = this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
            console.log(`${this.nome} usa ${habilidade.nome} com poder ${habilidade.poder} em ${personagem.nome}`);
        } else {
            console.log(`${this.nome} não tem habilidades.`);
        }
    }
}
