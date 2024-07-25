import inquirer from 'inquirer';
import { verificaTipo } from './verificartipo.js';


// Função para escolher uma habilidade
export async function chooseHabilidade(heroi) {
    // Obtemos a lista de habilidades com seus detalhes
    const habilidades = heroi.listarHabilidades();

    // Verificamos se há habilidades disponíveis para escolher
    if (habilidades.length === 0) {
        console.error('Nenhuma habilidade disponível.');
        return null;
    }

    // Mapeamos as habilidades para obter apenas os nomes
    const habilidadesNomes = habilidades.map(hab => hab.nome);

    // Pergunta ao usuário qual habilidade escolher
    const question = {
        type: 'list',
        name: 'selectedHabilidade',
        message: '',
        choices: habilidadesNomes
    };

    try {
        const answers = await inquirer.prompt(question);
        const habilidadeEscolhida = habilidades.find(hab => hab.nome === answers.selectedHabilidade);

        // Verificamos se a habilidade foi encontrada e está disponível para uso
        if (habilidadeEscolhida) {
            const tipoHabilidade = verificaTipo(habilidades, habilidadeEscolhida.nome);
            console.log(`Tipo da habilidade escolhida: ${tipoHabilidade}`);
            return habilidadeEscolhida.nome; // Retorna o nome da habilidade escolhida
        } else {
            console.error('Habilidade escolhida não está disponível.');
            return null;
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