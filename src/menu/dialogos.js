import inquirer from "inquirer";

export async function escolherMissao(message, missoes) {
    try {
        // Define o prompt que será exibido para o usuário
        const missaoPrompt = {
            type: 'list', // Tipo de prompt onde o usuário escolhe uma opção de uma lista
            name: 'missao', // Nome da propriedade onde a escolha será armazenada
            message: message, // Mensagem que será exibida no prompt
            choices: missoes // Lista de opções que o usuário pode escolher
        };

        // Exibe o prompt e aguarda a resposta do usuário
        const answers = await inquirer.prompt(missaoPrompt);

        // Retorna a missão escolhida pelo usuário
        return answers.missao;
    } catch (erro) {
        // Trata erros que podem ocorrer ao exibir o prompt ou processar a escolha
        console.error('Houve um problema ao tentar processar sua escolha. Por favor, reinicie o programa e tente novamente.');
        return null; // Retorna null em caso de erro
    }
}