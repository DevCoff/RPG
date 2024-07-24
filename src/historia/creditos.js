import chalk from 'chalk';
import readline from 'readline';

// eu pesquisei como fazer para deixar texto como os créditos nos filmes.
// aqui é a variavel que vai receber uma lista do que vai aparecer na tela
export const creditos = [
    'Diretor: Stey Silva',
    'Produtor: Stey Silva',
    'Roteiro: Stey Silva',
    'Elenco Principal: Shayane, Gin Freecs, Serena',
    'Agradecimentos: Me da um emprego!',
    'Fim.'
];

// Função para mostrar os créditos, essa fucao irá percorrer a lista
// pegando o index, ele exibe na tela como se fosse os créditos e vai limpando o terminal conforme o valor indicado
export function MostrarCreditos(lines, interval = 500) {
    let index = 0;
    const totalLines = lines.length;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const MostrarProximaLinha = () => {
        if (index < totalLines) {
            // Limpa a tela antes de mostrar a próxima linha
            readline.cursorTo(process.stdout, 0, 0);
            readline.clearScreenDown(process.stdout);

            // Mostra a linha atual
            console.log(chalk.green(lines[index]));

            // Incrementa o índice
            index++;
            setTimeout(MostrarProximaLinha, interval);
        } else {
            rl.close();
        }
    };

    MostrarProximaLinha();
}
