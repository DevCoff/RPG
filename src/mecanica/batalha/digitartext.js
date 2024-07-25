// funcao que exibe um texto no terminal como se estivesse sendo digitado.
// a velocidade pode ser ajustada com o parametro delay, mude se achar que está lento ou rápido
export async function digitarTexto(texto, delay = 20) {
    // Itera sobre cada caractere do texto
    for (let i = 0; i < texto.length; i++) {
        // Exibe o caractere atual no terminal
        process.stdout.write(texto[i]);

        // Aguarda o tempo de atraso definido antes de exibir o próximo caractere
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Adiciona uma nova linha no final do texto para que o próximo prompt comece em uma nova linha
    process.stdout.write('\n');
}