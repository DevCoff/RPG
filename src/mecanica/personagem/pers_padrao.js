// class do personagem padrao, nela temos o nome, vida, vidaMaxima, lvl etc
// os dados que queremos manipular nos metodos do peronagem principal sao os dados com MAXIM, eles serao referencias nas manipulacoes, pois usaremos como referencia.
// Eu resolvi deixar os metodos de habilidades e halidades comentados no codigo, pois inicialmente eu nao prestei atencao e criei eles em todas as subclasses
// lendo sobre refatoramento, descobri que se existem metodos iguais, colocamos eles no PAI

import { Habilidade } from "../habilidade/habilidade.js";

export class PersPadrao {
  constructor(nome, vida, vidaMaxima, lvl, ataque, defesa, velocidade) {
    this.nome = nome;
    this.vida = vida;
    this.vidaMaxima = vidaMaxima;
    this.lvl = lvl;
    this.ataque = ataque;
    this.atqMaximo = ataque;
    this.defesa = defesa;
    this.defMaxima = defesa;
    this.velocidade = velocidade;
    this.habilidades = [];
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida < 0) this.vida = 0;
  }
  adicionarHabilidade(nome, poder, tipo) {
    const habilidade = new Habilidade(nome, poder, tipo);
    this.habilidades.push(habilidade);
  }

  // Lista todas as habilidades do personagem
  listarHabilidades() {
    return this.habilidades;
  }
}
