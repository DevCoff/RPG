import { PersPadrao } from "./pers_padrao.js";
import chalk from "chalk";

// Classe do personagem principal, que herda de PersPadrao e adiciona funcionalidades específicas
export class PersPrincipal extends PersPadrao {
  constructor(
    nome,
    vida,
    vidaMaxima,
    lvl,
    ataque,
    defesa,
    velocidade,
    exp,
    classes,
  ) {
    super(nome, vida, vidaMaxima, lvl, ataque, defesa, velocidade);
    // this.habilidades = []; // Lista de habilidades do personagem
    this.exp = exp; // Experiência atual do personagem
    this.maxExp = 50; // Experiência necessária para o próximo nível
    this.classes = classes; // Classe do personagem (ex: Assassino, Mago)
  }
  // Exibe as habilidades do personagem em um formato legível
  exibirHabilidade() {
    if (this.habilidades.length === 0) {
      return "Nenhuma habilidade disponível.";
    }
    return this.habilidades
      .map(
        (habilidade) =>
          `Nome: ${habilidade.nome}, Poder: ${habilidade.poder}, Tipo: ${habilidade.tipo}`,
      )
      .join("\n");
  }

  // Restaura o personagem para os atributos máximos
  restaurarPersonagem() {
    this.vida = this.vidaMaxima;
    this.ataque = this.atqMaximo;
    this.defesa = this.defMaxima;
  }

  // Aumenta os atributos do personagem ao subir de nível, com base na classe
  aumentarAtributos() {
    if (this.classes === "Assassino") {
      this.ataque += 10;
      this.defesa += 8;
      this.vida += 10;
      this.vidaMaxima += 10;
      this.atqMaximo += 10;
      this.defMaxima += 8;
      this.velocidade += 20;
      if (this.habilidades.length > 0) {
        this.habilidades[0].poder += 10;
      }

      for (let i = 1; i < this.habilidades.length && i < 3; i++) {
        this.habilidades[i].poder *= 1.5;
      }

      if (this.habilidades.length > 3) {
        this.habilidades[3].poder += 5;
      }
    } else if (this.classes === "Mago") {
      this.vida += 10;
      this.atqMaximo += 20;
      this.defMaxima += 10;
      this.vidaMaxima += 10;
      this.ataque += 20;
      this.defesa += 10;
      this.velocidade += 10;
      if (this.habilidades.length > 0) {
        this.habilidades[0].poder += 10;
      }

      for (let i = 1; i < this.habilidades.length && i < 3; i++) {
        this.habilidades[i].poder *= 1.5;
      }

      if (this.habilidades.length > 3) {
        this.habilidades[3].poder += 5;
      }
    } else {
      this.vida += 20;
      this.atqMaximo += 8;
      this.defMaxima += 20;
      this.vidaMaxima += 20;
      this.ataque += 8;
      this.defesa += 20;
      this.velocidade += 10;
      if (this.habilidades.length > 0) {
        this.habilidades[0].poder += 10;
      }

      for (let i = 1; i < this.habilidades.length && i < 3; i++) {
        this.habilidades[i].poder *= 1.5;
      }

      if (this.habilidades.length > 3) {
        this.habilidades[3].poder += 5;
      }
    }
  }

  // Adiciona experiência ao personagem e atualiza o nível se necessário
  addExp(npc) {
    if (typeof npc !== 'object' || npc.exp === undefined || typeof npc.exp !== 'number' || npc.exp < 0) {
      throw new Error("Exp inválida");
    }

    this.exp += npc.exp;
    if (this.exp >= this.maxExp) {
      this.lvl += 1;
      this.exp -= this.maxExp; // Atualiza exp restante após o aumento de nível
      this.maxExp = Math.round(this.maxExp * 1.8); // Aumenta o requisito de exp para o próximo nível
      this.aumentarAtributos(); // Aumenta os atributos
      console.log(
        chalk.blue(
          `\nVocê subiu para o lvl ${this.lvl}:\n  Atributos aumentados! Vida Máxima: ${this.vidaMaxima}, Ataque: ${this.ataque.toFixed(2)}, Defesa: ${this.defesa.toFixed(2)}, Velocidade: ${this.velocidade}`,
        ),
      );
    } else {
      console.log(
        chalk.green(
          `Faltam ${this.maxExp - this.exp} de Experiência para o próximo nível`,
        ),
      );
    }
  }

  // Exibe os dados do personagem no console
  exibirPersonagem() {
    console.log(`   Nome: ${chalk.blue(this.nome)}
Vida: ${chalk.green(this.vida)}/${chalk.green(this.vidaMaxima)}
lvl: ${chalk.green(this.lvl)}
Ataque: ${chalk.green(this.ataque.toFixed())}
Defesa: ${chalk.green(this.defesa.toFixed())}
Velocidade: ${chalk.green(this.velocidade)}
Exp: ${chalk.green(this.exp)}/${chalk.green(this.maxExp)}`);
  }
}
