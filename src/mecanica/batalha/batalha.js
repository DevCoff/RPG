import chalk from "chalk";
import { digitarTexto } from "./digitartext.js";
import { chooseHabilidade } from "./escolherhab.js"; // aqui importamos a funcao criada para escolher habilidades
import { ataque } from "./ataque.js"; // importamos a funcao de ataque pois nessa aqui vamos explorar o modo de batalha do jogo
import { clearWithDelay } from "./consoleclear.js"; // eu peguei uma funcao de limpeza de terminal para usar no jogo, pois ficaria muito poluido conforme o jogo passa

// Função para escolher uma habilidade aleatória
function escolherHabilidadeAleatoria(habilidades) {
  if (habilidades.length === 0) {
    return null; // Retorna null se não houver habilidades disponíveis
  }
  const indiceAleatorio = Math.floor(Math.random() * habilidades.length);
  return habilidades[indiceAleatorio];
}

// Função para encerrar o jogo
export function encerrarJogo(codigoSaida) {
  console.log("O jogo está encerrando...");
  process.exit(codigoSaida);
}

// Função para formatar status lado a lado
function formatarStatusLadoALado(heroi, npc) {
  const nomeHeroi = `${heroi.nome}:`.padEnd(20);
  const vidaHeroi = `Vida: ${heroi.vida.toFixed()}`.padEnd(20);
  const nomeNpc = `${npc.nome}:`.padEnd(20);
  const vidaNpc = `Vida: ${npc.vida.toFixed()}`.padEnd(20);

  const linha1 = `${chalk.blue(nomeHeroi)} ${chalk.red(nomeNpc)}`;
  const linha2 = `${chalk.blue(vidaHeroi)} ${chalk.red(vidaNpc)}`;

  return `\n${linha1}\n${linha2}\n`;
}

// Função de batalha
export async function batalha(heroi, npc) {
  console.log(chalk.red(`Inimigo: ${npc.nome}`));
  console.log("");
  console.log(chalk.red(`Vida: ${npc.vida}`));

  let turno = 1;

  while (heroi.vida > 0 && npc.vida > 0) {
    await digitarTexto(chalk.bgGreen(`\n--- Turno ${turno} ---\n`));

    // Turno do herói
    try {
      await digitarTexto(chalk.cyan("Escolha uma habilidade para usar:"));
      const habilidadeEscolhida = await chooseHabilidade(heroi);
      if (habilidadeEscolhida) {
        await ataque(heroi, npc, habilidadeEscolhida);
      } else {
        await digitarTexto(
          chalk.red("\nEscolha inválida, você perdeu seu turno.\n"),
        );
      }
    } catch (error) {
      console.error("Erro ao processar o turno do herói:", error);
      continue;
    }

    if (npc.vida <= 0) {
      await digitarTexto(chalk.bold(`\n${npc.nome} foi derrotado!\n`));
      heroi.restaurarPersonagem();
      heroi.addExp(npc);
      await digitarTexto(chalk.cyan(`\nVida restaurada: ${heroi.vida}\n`));
      heroi.exibirPersonagem();
      await clearWithDelay(7000);
      break;
    }

    // Turno do NPC
    const habilidadesNpc = npc.listarHabilidades();
    const habilidadeNpc = escolherHabilidadeAleatoria(habilidadesNpc);
    if (habilidadeNpc) {
      try {
        await ataque(npc, heroi, habilidadeNpc.nome);
      } catch (error) {
        console.error("Erro ao processar o turno do NPC:", error);
        continue;
      }
    }

    if (heroi.vida <= 0) {
      if (npc.nome != "D'uzan") {
        await digitarTexto(chalk.magenta(`\n${heroi.nome} foi derrotado!\n`));
        await digitarTexto(chalk.bgRed(`YOU DIED`));
        await encerrarJogo(1);
      } else {
        await digitarTexto(chalk.magenta(`\n${heroi.nome} foi derrotado!\n`));
        await digitarTexto(chalk.red("Mesmo que eu tenha vencido."));
      }
      break;
    }

    // Mostra status do herói e do NPC
    const statusLadoALado = formatarStatusLadoALado(heroi, npc);
    await digitarTexto(statusLadoALado);
    turno++;

    const TURNOS_LIMPAR_TERMINAL = [3, 6, 9];
    if (TURNOS_LIMPAR_TERMINAL.includes(turno)) {
      await digitarTexto(chalk.bgGreen("\nCarregando....\n"));
      await clearWithDelay(1000);
    }
  }
}
