import { expect } from "chai";
import { PersPrincipal } from "../src/mecanica/personagem/pers_principal.js";
import { Habilidade } from "../src/mecanica/habilidade/habilidade.js";

// aqui vamos testar os metodos de aumento de atributo junto com o aumento das habilidades
// testamos classe a class para saber se está ocorrendo como o esperado.

describe("Teste de aumento de atributos e restauração", function () {
  it("deve aumentar os atributos corretamente para Assassino", function () {
    const heroi = new PersPrincipal(
      "Assassino",
      100,
      100,
      1,
      20,
      20,
      10,
      0,
      "Assassino",
    );
    heroi.habilidades = [
      new Habilidade("Golpe Sombrio", 50, "Ataque"),
      new Habilidade("Ataque Rápido", 30, "Ataque"),
    ];
    heroi.aumentarAtributos();

    expect(heroi.ataque).to.equal(30);
    expect(heroi.defesa).to.equal(28);
    expect(heroi.vida).to.equal(110);
    expect(heroi.vidaMaxima).to.equal(110);
    expect(heroi.atqMaximo).to.equal(30);
    expect(heroi.defMaxima).to.equal(28);
    expect(heroi.velocidade).to.equal(30);
    expect(heroi.habilidades[0].poder).to.equal(60); // Primeiro habilidade aumentada em 10
    expect(heroi.habilidades[1].poder).to.equal(45); // Segunda habilidade multiplicada por 1.5
  });

  it("deve aumentar os atributos corretamente para Mago", function () {
    const heroi = new PersPrincipal("Mago", 100, 100, 1, 20, 20, 10, 0, "Mago");
    heroi.habilidades = [
      new Habilidade("Bola de Fogo", 40, "Especial"),
      new Habilidade("Escudo Mágico", 30, "Defesa"),
    ];
    heroi.aumentarAtributos();

    expect(heroi.ataque).to.equal(40);
    expect(heroi.defesa).to.equal(30);
    expect(heroi.vida).to.equal(110);
    expect(heroi.vidaMaxima).to.equal(110);
    expect(heroi.atqMaximo).to.equal(40); // Corrigido para refletir a lógica do código
    expect(heroi.defMaxima).to.equal(30);
    expect(heroi.velocidade).to.equal(20);
    expect(heroi.habilidades[0].poder).to.equal(50); // Primeiro habilidade aumentada em 12
    expect(heroi.habilidades[1].poder).to.equal(45); // Segunda habilidade multiplicada por 1.5
  });

  it("deve aumentar os atributos corretamente para classe padrão", function () {
    const heroi = new PersPrincipal(
      "Guerreiro",
      100,
      100,
      1,
      20,
      20,
      10,
      0,
      "Guerreiro",
    );
    heroi.habilidades = [
      new Habilidade("Corte Duplo", 30, "Ataque"),
      new Habilidade("Escudo de Ferro", 20, "Defesa"),
    ];
    heroi.aumentarAtributos();

    expect(heroi.ataque).to.equal(28);
    expect(heroi.defesa).to.equal(40);
    expect(heroi.vida).to.equal(120);
    expect(heroi.vidaMaxima).to.equal(120);
    expect(heroi.atqMaximo).to.equal(28);
    expect(heroi.defMaxima).to.equal(40);
    expect(heroi.velocidade).to.equal(20);
    expect(heroi.habilidades[0].poder).to.equal(40); // Primeiro habilidade aumentada em 10
    expect(heroi.habilidades[1].poder).to.equal(30); // Segunda habilidade multiplicada por 1.5
  });
});
