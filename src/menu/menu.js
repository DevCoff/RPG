// Aqui vamos criar o menu interativo para iniciar o jogo!

// vamos importar o inquirer
import { iniciarJogo } from '../historia/tutorial.js'
import inquirer from 'inquirer';
import { playMusic, stopMusic } from '../music/tocar.js'

export async function menu() {
    const menuInicial = {
        type: 'list',
        name: 'menu',
        message: ' Aperte ENTER:  \n',
        choices: ['Iniciar o Jogo', 'Sair']
    };

    // Especifique o caminho relativo ao arquivo de música
    const musicFilePath = './src/music/bonfire.mp3';

    // Inicia a reprodução da música
    playMusic(musicFilePath);

    try {
        const answers = await inquirer.prompt(menuInicial);

        if (answers.menu === 'Iniciar o Jogo') {
            console.log('Iniciando o jogo...');
            iniciarJogo();
        } else if (answers.menu == 'Sair') {
            console.log('Saindo do jogo...');
            stopMusic(); // Para a música antes de sair
            process.exit(1); // Encerra o processo Node.js
        }
    } catch (error) {
        console.error('Erro ao iniciar o jogo:', error);
    }
}
