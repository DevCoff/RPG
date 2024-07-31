import inquirer from "inquirer";

export async function escolherMissao(message, missoes) {
  try {
    // Define o prompt que será exibido para o usuário
    const missaoPrompt = {
      type: "list", // Tipo de prompt onde o usuário escolhe uma opção de uma lista
      name: "missao", // Nome da propriedade onde a escolha será armazenada
      message: message, // Mensagem que será exibida no prompt
      choices: missoes, // Lista de opções que o usuário pode escolher
    };

    // Exibe o prompt e aguarda a resposta do usuário
    const answers = await inquirer.prompt(missaoPrompt);

    // Retorna a missão escolhida pelo usuário
    return answers.missao;
  } catch (error) {
    // Verificamos se é devido ao encerramento do programa pelo usuário
    if (error.message.includes("force closed")) {
      console.log("Programa encerrado pelo usuário.");
    } else {
      console.log("Ocorreu um erro: ", error);
    }
  }
}
