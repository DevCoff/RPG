import { Inimigo } from "../mecanica/npcs/inimigo.js";
import { batalha } from "../mecanica/batalha/batalha.js";
import chalk from "chalk";
import { digitarTexto } from "../mecanica/batalha/digitartext.js";
import { historia3 } from './historia_03.js'
import { prompt } from "./historia_03.js";
import { clearWithDelay } from '../mecanica/batalha/consoleclear.js'
// aqui vamos colocar a historia da TORRE DE BATALHA


// aqui criamos a historia da torre, essa é a Parte 1
// o funcionamento das batalhas são iguais da historia 1
// const prompt = promptSync()

export async function torre(heroi) { // recebe como parametro o Heroi, pois os dados precisam ser carregados em cada historia
    // optei por usar dialogos com o nome e a fala do personagem abaixo
    await digitarTexto(chalk.bold('Narrador:\n'));
    await digitarTexto(chalk.bold(`\nA Torre tinha um sistema que ao entrar nela sua luta já era marcada de forma automática, o seu nome apareceu em um telão junto ao nome do seu adversário!`));

    // Primeiro adversário
    let adversario1 = new Inimigo('Balgolor Foggift', 60, 60, 3, 25, 10, 20, 10);
    adversario1.adicionarHabilidade('Chute do Gavião', 20, 'Ataque');
    adversario1.adicionarHabilidade('Chute Relâmpago', 30, 'Ataque');
    adversario1.adicionarHabilidade('Defesa de Ferro', 1.5, 'Defesa');
    await digitarTexto(chalk.red(`\n${heroi.nome} X ${adversario1.nome}`));
    await digitarTexto(chalk.bold(`${heroi.nome}:\nCerto vamos lá!`));
    await batalha(heroi, adversario1);

    // Subir para o próximo andar
    await digitarTexto(chalk.bold('Narrador:\n'));
    await digitarTexto(chalk.bold(`${heroi.nome} sobe para o próximo andar.`));
    await digitarTexto(chalk.bold('Novamente aparece seu nome e seu próximo adversário.'));

    // Segundo adversário
    let adversario2 = new Inimigo('Satoru Endo', 70, 70, 3, 30, 5, 5, 15);
    adversario2.adicionarHabilidade('Impacto do Trovão', 25, 'Ataque');
    adversario2.adicionarHabilidade('Escudo Flamejante', 1.6, 'Defesa');
    adversario2.adicionarHabilidade('Vôo do Dragão', 15, 'Especial');
    await digitarTexto(chalk.red(`\n${heroi.nome} X ${adversario2.nome}`));
    await batalha(heroi, adversario2);

    // Diálogo antes do terceiro adversário
    await digitarTexto(chalk.bold('Narrador:\n'));
    await digitarTexto(chalk.bold(`Após uma dura batalha, ${heroi.nome} olha para a tela e vê um garoto que tinha pelo menos 12 anos em pé no ringue e pensa.`));
    await digitarTexto(chalk.bgCyan(`${heroi.nome}:\n`))
    await digitarTexto(chalk.underline(`Aquele garoto está subindo a torre, vencendo seus adversários com somente um golpe...`));
    await digitarTexto(chalk.bold('Narrador:\n'));
    await digitarTexto(chalk.bold(`De repente o telão brilha!`));

    // Terceiro adversário
    let adversario3 = new Inimigo("D'uzan", 85, 80, 5, 60, 30, 5, 300);
    adversario3.adicionarHabilidade('Leigan', 35, 'Ataque');
    adversario3.adicionarHabilidade('Dragon Drive', 30, 'Ataque')
    adversario3.adicionarHabilidade('Aura Eletrostática', 1.5, 'Defesa');
    adversario3.adicionarHabilidade('Leikoudan', 25, 'Especial');
    await digitarTexto(chalk.red(`\n${heroi.nome} X ${adversario3.nome}`));
    await digitarTexto(chalk.bgCyan(`${heroi.nome}:`))
    await digitarTexto(chalk.bold(`\nNão irei perder, para um pivete!\n`));
    await digitarTexto(chalk.bold('Narrador:'));
    await digitarTexto(chalk.bold(`\nUma batalha se inicia, por algum motivo desconhecido ${heroi.nome} conta seu sonho para o adversário, seja por admiração ou por capricho.\n`));
    await digitarTexto(chalk.bgRed(`${adversario3.nome}:`))
    await digitarTexto(chalk.bold(`\nQue interessante, se você me vencer eu tenho informações sobre o tesouro!\n`));
    await digitarTexto(chalk.bgCyan(`${heroi.nome}:`))
    await digitarTexto(chalk.bold(`\nChega de conversa, vamos lutar!\n`));
    await batalha(heroi, adversario3);
    await digitarTexto(chalk.bgRed(`${adversario3.nome}: `))
    await digitarTexto(chalk.bold(`\nEu irei te contar a história que ouvi.\n`))
    await digitarTexto(chalk.bold('Narrador:'));
    await digitarTexto(chalk.bold(`\n${adversario3.nome} e ${heroi.nome} foram até a lanchonete da torre e conversaram sobre o tesouro deixado pelo lendário Matador de Dragões\n`))
    await digitarTexto(chalk.bold(`Depois de uma longa conversa.\n. . .\n`))
    await digitarTexto(chalk.bgRed(`${adversario3.nome}:`))
    await digitarTexto(chalk.bold((`\nEu encontrei uma garota, que parece ter a minha idade, ela diz saber onde fica o tesouro, mas parece ser perigoso, se ainda quiser posso te dar a localizão.\n`)))

    await digitarTexto(chalk.bgCyan(`${heroi.nome}:`))
    await digitarTexto(chalk.bold(`\nClaro que eu quero a localização, irei encontrar ela agora!\n`))

    await digitarTexto(chalk.bgRed(`${adversario3.nome}:`))
    await digitarTexto(chalk.bold((`\nA garota está localizada em um vilarejo chamado Nova Aldeia, parece que ela estava perdida e apareceu nessa aldeia pedindo ajuda,\n`)))
    await digitarTexto(chalk.bgCyan(`${heroi.nome}:`))
    await digitarTexto(chalk.bold(`\nMuito obrigado ${adversario3.nome}, lembrarei do favor em meu coração.\n`))
    await digitarTexto(chalk.bgRed(`${adversario3.nome}:`))
    await digitarTexto(chalk.bold(`\nFoi o minimo que eu poderia fazer, sei que você poderá ajudar ela, até mais.\n`))
    prompt(chalk.green('\n\nAPERTE ENTER PARA CONTINUAR...'))
    await clearWithDelay(1000) // funcao para limpar o terminal
    await historia3(heroi); // chama a historia 3
}
