import { PersPrincipal } from "../src/mecanica/personagem/pers_principal.js";
test("Testando propriedades adicionais do personagem", () => {
  const heroi = new PersPrincipal(
    "Astarion",
    50,
    50,
    1,
    15,
    10,
    20,
    0,
    "Assassino",
  );

  expect(heroi).toBeDefined();
  expect(heroi.nome).toBe("Astarion");
  expect(heroi.vida).toBe(50);
  expect(heroi.ataque).toBe(15);
  expect(heroi.defesa).toBe(10);
  expect(heroi.lvl).toBe(1);
  expect(heroi.exp).toBe(0);
  expect(heroi.maxExp).toBe(50);
  expect(heroi.classes).toBe("Assassino");
});

test("Verifica o aumento de atributos", () => {
  const heroi = new PersPrincipal(
    "Astarion",
    50,
    50,
    1,
    15,
    10,
    20,
    0,
    "Assassino",
  );
  heroi.aumentarAtributos();
  expect(heroi.ataque).toBe(25);
  expect(heroi.defesa).toBe(18);
});

test("Verificar se o personagem está ganhando EXP", () => {
  const heroi = new PersPrincipal(
    "Astarion",
    50,
    50,
    1,
    15,
    10,
    20,
    0,
    "Assassino",
  );
  // const expInicial = ;

  const expParaAdicionar = 100
  heroi.addExp({ exp: expParaAdicionar });

  if (heroi.exp >= heroi.maxExp) {
    heroi.lvl += 1;
    heroi.exp -= heroi.maxExp;
  }
  const lvlaAtual = heroi.lvl

  const resultExp = heroi.exp

  expect(heroi.lvl).toBe(lvlaAtual);

  expect(heroi.exp).toBe(resultExp);

  expect(heroi.ataque).toBe(heroi.ataque)

});

test("Verificar erro ao aumentar lvl", () => {
  const heroi = new PersPrincipal(
    "Astarion",
    50,
    50,
    1,
    15,
    10,
    20,
    0,
    "Assassino",
  );
  expect(() => heroi.addExp(-10).toThrow("Exp inválida"));
  expect(() => heroi.addExp({})).toThrow("Exp inválida");
  expect(() => heroi.addExp({ exp: 'A' })).toThrow('Exp inválida')
});


// GABARITO PARA PREENCHER OS TESTES
//  {
//   if (this.classes === "Assassino") {
//     this.ataque += 10;
//     this.defesa += 8;
//     this.vida += 10;
//     this.vidaMaxima += 10;
//     this.atqMaximo += 10;
//     this.defMaxima += 8;
//     this.velocidade += 20;
//     if (this.habilidades.length > 0) {
//       this.habilidades[0].poder += 10;
//     }
