import inquirer from 'inquirer';
import { batalha } from '../mecanica/batalha/batalha.js';
import { PersPrincipal } from '../mecanica/personagem/pers_principal.js';
import { digitarTexto } from '../mecanica/batalha/digitartext.js';
import { Inimigo } from '../mecanica/npcs/inimigo.js';
import chalk from 'chalk';
import { historia1 } from './historia_01.js';
import { novaMissao } from './historia_02.js'

// Função para iniciar o tutorial é a funcao mais importante
// vamos criar o personagem, definir a classe e as regras do jogo
export async function tutorial() {
    try {
        const textoTutorial = `
============================
          TUTORIAL DE BATALHA
============================

Bem-vindo ao tutorial de batalha! Aqui está uma visão geral de como jogar:

🔹 **Jogo de Turnos:**
O jogo segue o estilo clássico de RPGs de turno. A cada rodada, escolha uma habilidade para usar contra seu adversário.

🔹 **Habilidades de Ataque:**
- **[1] Ataque Normal:** Um golpe básico contra o inimigo.
- **[4] Ataque Especial:** Um golpe poderoso, mas tenha cuidado! Ele tem 1/4 de chance de falhar.

🔹 **Habilidades de Buff:**
- **[2] Aumento de Ataque:** Potencialize sua força para causar mais dano.
- **[3] Aumento de Defesa:** Fortaleça sua defesa para absorver mais danos.

🔹 **Dicas para Iniciantes:**
- Se prefere uma experiência mais simples, escolha a classe **GUERREIRO**.

🔹 **Navegação no Jogo:**
- Use as setas para cima e para baixo para explorar menus e diálogos.
- Pressione **Enter** para confirmar sua escolha.

⚠️ **Atenção:**
Por favor, aguarde o menu de interação ser carregado antes de clicar em qualquer coisa.

Agora, vamos escolher a classe do seu personagem e começar a aventura!

============================
`;

        await digitarTexto(chalk.bold(textoTutorial));
        // aqui usamos o inquirer para criar um menu interativo, com switch case para as escolhas que o usuario irá fazer
        const classesPrompt = {
            type: 'list',
            name: 'classe',
            message: 'Escolha uma das opções:\n',
            choices: ['Assassino', 'Mago', 'Guerreiro']
        };

        const answers = await inquirer.prompt(classesPrompt);
        let heroi;

        switch (answers.classe) {
            case 'Assassino':
                heroi = new PersPrincipal('Astarion', 45, 45, 1, 15, 10, 20, 0, 'Assassino');
                heroi.adicionarHabilidade('Ataque Furtivo', 22, 'Ataque');
                heroi.adicionarHabilidade('Defesa das Sombras', 1.05, 'Defesa');
                heroi.adicionarHabilidade('Dança das Espadas', 1.05, 'Aumento Ataque');
                heroi.adicionarHabilidade('Ataque Mortal', 25, 'Especial');
                break;
            case 'Mago':
                heroi = new PersPrincipal('Magi', 45, 45, 1, 20, 5, 15, 0, 'Mago');
                heroi.adicionarHabilidade('Fúria do Trovão', 25, 'Ataque');
                heroi.adicionarHabilidade('Aura Eletrostática', 1.05, 'Defesa');
                heroi.adicionarHabilidade('Bênção das Tempestades', 1.05, 'Aumento Ataque');
                heroi.adicionarHabilidade('Ira dos Deuses do Raio', 30, 'Especial');
                break;
            case 'Guerreiro':
                heroi = new PersPrincipal('Garen Paladino', 70, 70, 1, 14, 20, 10, 0, 'Guerreiro');
                heroi.adicionarHabilidade('Fúria do Trovão', 25, 'Ataque');
                heroi.adicionarHabilidade('Conquistador de Aço', 1.1, 'Defesa');
                heroi.adicionarHabilidade('Ira', 1.05, 'Aumento Ataque');
                heroi.adicionarHabilidade('Bararaq Saiqa', 32, 'Especial');
                break;
            default:
                console.log(chalk.red('Classe inválida. Escolha novamente.'));
                await tutorial();
                return null;
        }

        return heroi;

    } catch (error) {
        console.error(chalk.red('Erro ao escolher a classe:'), error);
        return null;
    }
}

// inicia o jogo
export async function iniciarJogo() {
    const heroi = await tutorial();
    if (heroi) {
        console.log(chalk.bold('Herói criado:'));
        console.log(chalk.bold(`Você escolheu a classe: ${heroi.classes}`));
        await digitarTexto(chalk.bold(`\n${heroi.nome} estava indo fazer seu registro na Guilda dos Caçadores, quando de repente se deparou com Goblins famintos por sangue. Goblins são criaturas agressivas`));
        await digitarTexto(chalk.bold('\nCombate iniciado!'));
        const npc = new Inimigo('Goblin', 40, 40, 1, 2, 5, 5, 10); // Recebe 8 parâmetros
        npc.adicionarHabilidade('Smash', 10, 'Ataque');
        npc.adicionarHabilidade('Shield', 1.5, 'Defesa');
        await batalha(heroi, npc); // Inicia a batalha
        await digitarTexto(chalk.bold(`Parabéns, você derrotou o inimigo.`));
        await historia1(heroi); // Passa o herói para a função historia1
        await novaMissao(heroi)// Passa o herói para a função novaMissao
    }
}
