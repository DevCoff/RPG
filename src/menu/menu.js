// Aqui vamos criar o menu interativo para iniciar o jogo!

// vamos importar o inquirer
import { iniciarJogo } from '../historia/tutorial.js'
import inquirer from 'inquirer';

export async function menu() {
    const menuInicial = {
        type: 'list',
        name: 'menu',
        message: ' Aperte ENTER:  \n',
        choices: ['Iniciar o Jogo', 'Sair']
    };

    try {
        const answers = await inquirer.prompt(menuInicial);

        if (answers.menu === 'Iniciar o Jogo') {
            console.log('Iniciando o jogo...');
            iniciarJogo()
        } else {
            console.log('Saindo do jogo...');
            process.exit(1)
        }
    } catch (error) {
        console.error('Erro ao iniciar o jogo:', error);
    }
}
