// class do personagem padrao, nela temos o nome, vida, vidaMaxima, lvl etc
// os dados que queremos manipular nos metodos do peronagem principal sao os dados com MAXIM, eles serao referencias nas manipulacoes, pois usaremos como referencia.
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
    }

    receberDano(dano) {
        this.vida -= dano;
        if (this.vida < 0) this.vida = 0;
    }
}
