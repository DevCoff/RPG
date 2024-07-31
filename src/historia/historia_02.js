import { escolherMissao } from "../menu/dialogos.js";
import chalk from "chalk";
import { torre } from "./historia_02_01.js";
import { historia3 } from "./historia_03.js";
import { digitarTexto } from "../mecanica/batalha/digitartext.js";
import { prompt } from "./historia_03.js";

// Função para exibir missões e processar a escolha
export async function novaMissao(heroi) {
  const balconista = "Shayenne";
  const message = `Eu sei uma forma de melhorar as suas habilidades, o que acha de treinar na Torre de Batalha? Dizem que os grandes nomes desse mundo surgem de lá!\n`;
  const missoes = [
    "1 - Eu adoro um desafio, irei agora!",
    "2 - Talvez eu não esteja preparado.",
  ];
  const missaoEscolhida = await escolherMissao(message, missoes);

  // let missaoEscolhida;
  // do {
  //     missaoEscolhida = await escolherMissao(message, missoes);
  //     if (!missoes.includes(missaoEscolhida)) {
  //         console.log(chalk.red('Seleção inválida. Por favor, escolha uma opção válida.'));
  //     }
  // } while (!missoes.includes(missaoEscolhida));

  switch (missaoEscolhida) {
    case "1 - Eu adoro um desafio, irei agora!":
      const historia = `
PROLOGO:
Em meio à vastidão de um mundo antigo, erguia-se uma construção colossal, imponente e enigmática: a Torre de Batalha. Ninguém sabe ao certo quando surgiu ou quem a construiu, mas a lenda ecoa através das gerações: "Sempre esteve lá!" Seus 500 andares se erguem como um monólito de mistério e desafio, visível até mesmo nas mais sombrias tempestades.

Cada andar da Torre é uma arena de combate, um campo de batalha onde heróis são forjados e lendas são escritas. A regra para ascender aos primeiros andares é clara: vencer. Um inimigo derrotado é um degrau conquistado, uma vitória que abre o caminho para o próximo nível. Mas à medida que se sobe, as batalhas tornam-se mais intensas, os adversários mais formidáveis, e as estratégias mais complexas.

A promessa da Torre é tão tentadora quanto cruel: aquele que alcançar o último andar poderá realizar um desejo, qualquer desejo, desde os mais humildes até os mais grandiosos. No entanto, a jornada para o topo é um caminho de sofrimento e triunfo, uma prova de coragem e determinação. Até agora, nenhum guerreiro, seja ele mortal ou lendário, conseguiu alcançar o último andar. Todos falharam, mas cada tentativa só adiciona mais mistério à lenda.

E assim, a Torre de Batalha continua a desafiar os audaciosos, os corajosos e os impiedosos. Será que você terá a força, a astúcia e a resiliência necessárias para superar seus 500 andares e reivindicar o desejo prometido? A aventura começa agora, e a sua história está prestes a ser escrita nas páginas da Torre.
                \n`;
      await digitarTexto(chalk.bold(historia), 30);
      prompt(chalk.green("\n\nAPERTE ENTER PARA CONTINUAR..."));
      await torre(heroi);
      break;

    case "2 - Talvez eu não esteja preparado.":
      await digitarTexto(chalk.bgRed(`${balconista}:`));
      await digitarTexto(
        chalk.bold(
          `\nTudo bem, quando mudar de ideia estarei aqui para te auxiliar!`,
        ),
      );
      await digitarTexto(
        chalk.bold(
          `Temos uma missão urgente de escolta, na Nova Aldeia, gostaria de ir?`,
        ),
      );
      await digitarTexto(chalk.bgBlackBright(`${heroi.nome}:\n`));
      await digitarTexto(chalk.bold(`Claro, já estou indo!`));
      await historia3(heroi);
      break;

    default:
      console.log(chalk.red("Missão inválida"));
      await novaMissao(heroi); // Passar o heroi para manter o estado
      break;
  }
}
