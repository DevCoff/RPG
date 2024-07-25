// Aqui vamos criar o menu interativo para iniciar o jogo!

// vamos importar o inquirer
import { iniciarJogo } from '../historia/tutorial.js'
import inquirer from 'inquirer';

// CASO ESTEJA USANDO O MACOS, DESCOMENTE A IMPORTACAO ABAIXO E TAMBEM O CHAMADO DA FUNCAO NO MENU.

// import { playMusic, stopMusic } from '../music/tocar.js'

export async function menu() {
    const menuInicial = {
        type: 'list',
        name: 'menu',
        message: ' Aperte ENTER:  \n',
        choices: ['Iniciar o Jogo', 'Sair']
    };


    // DESCOMENTE O CODIGO ABAIXO PARA ATIVAR A MUSICA

    // const musicFilePath = './src/music/bonfire.mp3';

    // // Inicia a reprodução da música
    // playMusic(musicFilePath);

    // ACIMA ˆˆ

    try {
        const answers = await inquirer.prompt(menuInicial);

        if (answers.menu === 'Iniciar o Jogo') {
            console.log('Iniciando o jogo...');
            iniciarJogo();
        } else if (answers.menu == 'Sair') {
            console.log('Saindo do jogo...');

            // stopMusic();     // DESCOMENTE O STOPMUSIC CASO ESTEJA USANDO O MACOS

            // Para a música antes de sair
            process.exit(1); // Encerra o processo Node.js
        }
    } catch (error) {
        // Verificamos se o erro é devido ao encerramento do programa pelo usuário
        if (error.message.includes('force closed')) {
            console.log('Programa encerrado pelo usuário. Até a próxima!');
        } else {
            console.log('Ocorreu um erro: ', error);
        }
    }
}
