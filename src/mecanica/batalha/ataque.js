import { digitarTexto } from "./digitartext.js"; // funcao criada para parecer que o texto no terminal está sendo digitado
import chalk from "chalk"; // biblioteca chalk para deixar o terminal colorido e bonitao

// Função para calcular o dano
function calcularDano(personagem, oponente, habilidade, tipoAtaque) {
  const min = tipoAtaque === "Especial" ? 0 : 1; // Define o intervalo de números aleatórios
  const max = tipoAtaque === "Especial" ? 4 : 2;
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // usamos mathrandom para randomizar

  const danoBase =
    ((2 * personagem.lvl + 10) / 250) *
      (personagem.ataque / oponente.defesa) *
      habilidade.poder +
    2; // Calculo do dano base
  const bonusVelocidade = personagem.velocidade * 0.1; // Bônus de velocidade

  return Math.ceil(danoBase + bonusVelocidade) * numeroAleatorio; // Calculo do dano total
}

// Aqui ficara a mecanica de ataque do jogo!

// Função de ataque
export async function ataque(personagem, oponente, habilidadeEscolhida) {
  // ela recebe 3 parametros, personagem, oponente e a habilidade escolhida, pois no jogo vc seleciona a habilidade
  const habilidade = personagem.habilidades.find(
    (hab) => hab.nome === habilidadeEscolhida,
  ); // essa variavel procura a habilidade pelo nome
  if (!habilidade) {
    // se a habilidade escolhida nao estiver nas habilidades, irá retornar a mensagem abaixo
    await digitarTexto(
      chalk.red(
        `${personagem.nome} não possui a habilidade ${habilidadeEscolhida}.`,
      ),
    );
    return;
  }

  let danoCalculado = 0; // aqui vai calcular o dano total do personagem
  let mensagem = "";

  switch (
    habilidade.tipo // aqui vai verificar o tipo da habilidade usada, cada uma tem o seu tipo.
  ) {
    case "Ataque":
      danoCalculado = calcularDano(personagem, oponente, habilidade, "Ataque"); // chama a função de cálculo de dano
      mensagem = `${personagem.nome} usa ${habilidade.nome} causando ${danoCalculado.toFixed(2)} de dano a ${oponente.nome}.`;
      break; // a mensagem que será exibida nas partidas, mostrando o valor do dano e as informacoes do oponente
    case "Defesa":
      personagem.defesa *= habilidade.poder; // Aumenta a defesa multiplicando com o poder da habilidade que está na class da habilidade
      mensagem = `${personagem.nome} usa ${habilidade.nome}, aumentando sua defesa em ${habilidade.poder.toFixed(2)} vezes.`;
      break; // Existem 2 habilidades de buf, uma aumenta a defesa e outra aumenta o ataque que funcionam da mesma forma.
    case "Aumento Ataque":
      personagem.ataque *= habilidade.poder; // Aumenta o ataque
      mensagem = `${personagem.nome} usa ${habilidade.nome}, aumentando seu ataque em ${habilidade.poder.toFixed(2)} vezes.`;
      break;
    case "Especial": // a habilidade Especial eu decidi por que aumentaria entre 0 ou 4, novamente usei o mesmo calculo do jogo Pokemon
      // como pode cair no 0 o jogador pode perder a vez e acabar morrendo, mas é um risco
      danoCalculado = calcularDano(
        personagem,
        oponente,
        habilidade,
        "Especial",
      ); // chama a função de cálculo de dano
      mensagem = `${personagem.nome} usa ${habilidade.nome} causando ${danoCalculado.toFixed(2)} de dano a ${oponente.nome}.`;
      break;
    default:
      mensagem = `Tipo de habilidade desconhecido.`;
  }

  if (danoCalculado > 0) {
    oponente.receberDano(danoCalculado);
  }

  await digitarTexto(chalk.cyan(mensagem)); // aqui usamos a funcao de digitar texto e tambem chalk para modificar a mensagem que será passada.
}
