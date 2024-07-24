import { tutorial } from "./tutorial.js";
import inquirer from 'inquirer'; // inquirer faz um menu interativo
import { Inimigo } from "../mecanica/npcs/inimigo.js";
import { batalha } from "../mecanica/batalha/batalha.js";
import chalk from "chalk";
import { digitarTexto } from "../mecanica/batalha/digitartext.js";

// as historias elas basicamentes irão utilizar a mecanica do jogo, eu criei a historia, coloqueo os personagens para dialogarem entre eles
//Vamos  criar Inimigos, usaremos as importações para desenvolver a historia.


// essa funcao é para separar cada pedaco da historia, ela recebe os dados do heroi
// nela vamos moldar a historia.
export async function historia1(heroi) {
    console.log(chalk.green(`PARTE 1:\n\n`))
    const balconista = 'Shayenne';

    // Mensagens iniciais
    await digitarTexto(chalk.bold(`\n${heroi.nome} ao chegar na Taverna da Guilda dos Caçadores, se depara com a balconista ${balconista}.`));
    await digitarTexto(chalk.bgRed(`${balconista}:`))
    await digitarTexto(chalk.bold(`\n Olá, no que posso te ajudar?`));
    await digitarTexto(chalk.bgCyan(`${heroi.nome}:`))
    await digitarTexto(chalk.bold(`\n Vim me cadastrar para ser um Caçador. Meu maior sonho é encontrar o tesouro deixado pelo Lendário Guerreiro Matador de Dragões!`));
    await digitarTexto(chalk.bgRed(`${balconista}:`))
    await digitarTexto(chalk.bold(`\n Você é mais um dos esquisitões com sonhos estranhos, tanto faz. Para conseguir a licença de Caçador, você precisa passar algumas missões!`));
    await digitarTexto(chalk.bgCyan(`${heroi.nome}:`))
    await digitarTexto(chalk.bold(`Isso é moleza!`))
    const MISSÕES = ['Caçar 3 Goblins', 'Caçar 3 Slimes', 'Caçar 3 Escorpiões do Deserto'];
    // aqui usamos o inquirer, ele cria um menu interativo, ainda nao dominei, mas vi muitos videos e achei que seria interessante usar isso
    while (MISSÕES.length > 0) { // aqui so iremos sair do loop após concluir toda a missão
        const missao1 = {
            type: 'list',
            name: 'missao',
            message: `${balconista}:\n Escolha sua missão:\n`,
            choices: MISSÕES
        };

        const answers = await inquirer.prompt(missao1);
        const index = MISSÕES.indexOf(answers.missao);

        // Lógica de missões
        switch (answers.missao) { // usamos o switch case para seguir com as escolhes conforme escolhida pelo jogador
            case 'Caçar 3 Goblins':
                // criamos o inimigo goblin1
                let goblin1 = new Inimigo('Goblin', 30, 30, 1, 2, 5, 5, 10);
                // adiciona a habilidade do goblin, recebe nome, poder e tipo
                // o codigo inteiro vai seguir esse padrão na historia1
                goblin1.adicionarHabilidade('Smash', 10, 'Ataque');
                goblin1.adicionarHabilidade('Shield', 1, 'Defesa');

                let goblinLanceiro = new Inimigo('Goblin Lanceiro', 40, 40, 2, 10, 3, 1, 20);
                goblinLanceiro.adicionarHabilidade('Lança Perfurante', 10, 'Ataque');
                goblinLanceiro.adicionarHabilidade('Escudo', 1.5, 'Defesa');

                let goblin3 = new Inimigo('Goblin', 45, 45, 3, 15, 5, 5, 30);
                goblin3.adicionarHabilidade('Smash', 10, 'Ataque');
                goblin3.adicionarHabilidade('Shield', 1.5, 'Defesa');

                await batalha(heroi, goblin1); // para cada inimigo, usamos a funcao batalha para iniciar a batalha
                await digitarTexto(chalk.bold(`${heroi.nome}:\nDroga, mais inimigos vieram!`));
                await batalha(heroi, goblinLanceiro);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nAinda não acabou!`));
                await batalha(heroi, goblin3);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nFinalmente, terminei!`));

                break;

            case 'Caçar 3 Slimes':
                let slime1 = new Inimigo('Slime Verde', 30, 30, 1, 3, 2, 4, 5);
                slime1.adicionarHabilidade('Pulo', 5, 'Ataque');
                slime1.adicionarHabilidade('Gelatina', 1, 'Defesa');

                let slime2 = new Inimigo('Slime Azul', 35, 35, 1, 4, 2, 3, 6);
                slime2.adicionarHabilidade('Mordida', 6, 'Ataque');
                slime2.adicionarHabilidade('Gelatina', 1.2, 'Defesa');

                let slime3 = new Inimigo('Slime Vermelho', 40, 40, 1, 5, 3, 2, 7);
                slime3.adicionarHabilidade('Golpe de Ácido', 7, 'Ataque');
                slime3.adicionarHabilidade('Gelatina', 1.5, 'Defesa');

                await digitarTexto(chalk.bold(`${heroi.nome}:\nVou começar a caçada aos Slimes!`));
                await batalha(heroi, slime1);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nAinda não acabou!`));
                await batalha(heroi, slime2);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nMais um para terminar!`));
                await batalha(heroi, slime3);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nTodos os Slimes foram derrotados!`));
                break;

            case 'Caçar 3 Escorpiões do Deserto':
                let escorpiao1 = new Inimigo('Escorpião do Deserto', 35, 35, 1, 15, 7, 6, 20);
                escorpiao1.adicionarHabilidade('Picada Venenosa', 12, 'Ataque');
                escorpiao1.adicionarHabilidade('Armadura de Quitina', 2, 'Defesa');

                let escorpiao2 = new Inimigo('Escorpião Venenoso', 40, 40, 1, 15, 8, 7, 25);
                escorpiao2.adicionarHabilidade('Cauda Venenosa', 14, 'Ataque');
                escorpiao2.adicionarHabilidade('Armadura de Quitina', 2.2, 'Defesa');

                let escorpiao3 = new Inimigo('Escorpião Gigante', 50, 50, 1, 25, 15, 5, 30);
                escorpiao3.adicionarHabilidade('Garra Esmagadora', 20, 'Ataque');
                escorpiao3.adicionarHabilidade('Ferrão Flamejante', 20, 'Especial');

                await digitarTexto(chalk.bold(`${heroi.nome}:\nVou começar a caçada aos Escorpiões do Deserto!`));
                await batalha(heroi, escorpiao1);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nAinda não acabou!`));
                await batalha(heroi, escorpiao2);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nMais um para terminar!`));
                await batalha(heroi, escorpiao3);
                await digitarTexto(chalk.bold(`${heroi.nome}:\nTodos os Escorpiões foram derrotados!`));
                break;

            default:
                console.log(chalk.red('Missão inválida'));
                await tutorial();
                return null;
        }

        // Remove a missão concluída da lista
        if (index > -1) {
            MISSÕES.splice(index, 1);
        }
    }

    // Mensagem final após todas as missões serem completadas
    await digitarTexto(chalk.bold(`${balconista}:\nParabéns ${heroi.nome}, você completou todas as missões e agora é um Caçador Profissional!`));
}