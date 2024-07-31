import { escolherMissao } from "../menu/dialogos.js";
import chalk from "chalk";
import { clearWithDelay } from "../mecanica/batalha/consoleclear.js";
import { creditos, MostrarCreditos } from "./creditos.js";
import promptSync from "prompt-sync";
import { digitarTexto } from "../mecanica/batalha/digitartext.js";

export const prompt = promptSync();

// Essa história irá englobar a vila onde Serena está! A garota de 8 anos que deseja retornar para sua casa!
// Ela tem o poder de localizar itens raros via telecinese, mesmo ela não sabe ao certo como faz, mas ela pode...

export async function historia3(heroi) {
  let serena = "Serena"; // Define o personagem que vamos escoltar na missão
  await digitarTexto(chalk.bold(`\n...\n`));
  // Início
  const introducao = ` Narrador:\n
    Em um vilarejo distante chamado Nova Aldeia, vivia uma jovem chamada Serena. 
    Ela possuía um poder misterioso capaz de localizar qualquer coisa que desejasse, mas isso não bastava; 
    era preciso força para obter o que se buscava. Serena ansiava por retornar à sua família e, 
    em busca de ajuda, pediu aos aldeões que a acompanhassem na perigosa jornada.
    
    Os aldeões, temerosos, não se sentiam encorajados a enfrentar os perigos do caminho. 
    Foi então que decidiram realizar uma votação para escolher quem deveria levar Serena de volta para casa. 
    No meio da multidão, ${chalk.cyan(heroi.nome)} chegou à aldeia. De repente, uma garotinha apontou para ele e gritou: "Eu escolho você!"
    
    ${chalk.cyan(heroi.nome)}, surpreso, viu os olhares de todos voltados para ele. A decisão estava tomada. 
    Serena e ${chalk.cyan(heroi.nome)} agora se preparavam para uma aventura que traria esperança ou desespero. 
    Juntos, enfrentariam os desafios que o destino reservava, cada passo imerso em urgência e perigo.
    \n`;

  const meio = `
    Narrador:\n
    ${serena} e ${heroi.nome} viajaram por um longo caminho. Eles conheceram locais incríveis, aldeias abandonadas e enfrentaram muitos inimigos. 
    A viagem já estava próxima do fim, e ${chalk.cyan(heroi.nome)} se apegou a ${serena} como a uma irmã mais nova. 
    Muitas vezes, ele se distraía encantado com as histórias da menina, que se separou dos seus pais quando atacaram sua vila para capturá-la e usar seus poderes.
     ${chalk.cyan(heroi.nome)} não queria mais saber onde estava o tesouro, mas sim ajudar ela a encontrar sua família.
    \n`;

  await digitarTexto(chalk.bold(introducao.trim() + "\n"), 30);

  await digitarTexto(
    chalk.bold(
      `. . .\nDepois de um longo tempo caminhando, ${serena} pergunta.\n`,
    ),
  );
  const message = `${serena}:\nVocê já esteve na Torre de Batalha?`;

  const missoes = [
    "1 - Claro eu conheço a torre!",
    "2 - Não, mas dizem que é a maior construção já feita!",
    "3 - ...",
  ];
  // Aqui eu chamo as funções do menu interativo criando diálogos opcionais. Claro que poderíamos aprofundar, mas está fora dos meus conhecimentos atuais.

  const missaoEscolhida = await escolherMissao(message, missoes);
  console.log(`${missaoEscolhida}`);
  await digitarTexto(chalk.bgCyan(`${serena}:`));
  await digitarTexto(
    chalk.bold(
      `\nEu irei para a Torre de Batalha, quando crescer, quero me tornar a maior maga que esse mundo já viu.\n`,
    ),
  );
  await digitarTexto(chalk.bgCyan(`${serena}:`));
  await digitarTexto(
    chalk.bold(
      `\nNão parece, mas meus poderes são muito úteis, eu não irei ser um fardo para você.\n`,
    ),
  );

  const message1 = `...`;
  const missoes1 = [
    "1 - Você não será um fardo, eu sou bem forte sabia?",
    "2 - Já está sendo um fardo pirralha.",
    "3 - ...",
  ];
  const missaoEscolhida1 = await escolherMissao(message1, missoes1);
  console.log(`${missaoEscolhida1}`);
  await clearWithDelay(100);
  await digitarTexto(chalk.bold("Narrador:\n"));
  await digitarTexto(
    chalk.bold(
      `\n${serena} ignora totalmente a resposta de ${chalk.cyan(heroi.nome)}.`,
    ),
  );
  await digitarTexto(chalk.bold("Após uma longa viagem.\n"));
  await digitarTexto(chalk.bgCyan(`${serena}:\n`));
  await digitarTexto(
    chalk.bold(
      "\nAh, estou com tanta saudades dos meus pais, espero encontrar eles logo, vamos o caminho é por aqui!\n",
    ),
  );

  await digitarTexto(chalk.bold(meio.trim() + "\n\n"), 30);

  prompt(chalk.green("\n\nAPERTE ENTER PARA CONTINUAR..."));
  // A história irá mudar de acordo com o seu progresso. Se você sobreviveu e venceu, vai ter um final muito interessante ou não.
  if (heroi.lvl <= 3) {
    await digitarTexto(chalk.bold("Narrador:"));
    await digitarTexto(
      chalk.red("\nUm estrondo semelhante a um trovão foi ouvido."),
    );
    await digitarTexto(
      chalk.red(
        `Foi rápido, não durou um piscar de olhos, o grito de ${heroi.nome} ecoava por toda a floresta.`,
      ),
    );
    await digitarTexto(
      chalk.red(
        `${serena} foi atingida por uma rajada de energia, um dragão sobrevoou o local, era um ser imenso, com olhos que atingem a alma de qualquer um que olhar diretamente em seus olhos.\n`,
      ),
    );
    await digitarTexto(chalk.bgBlackBright(`${heroi.nome}:\n`));
    await digitarTexto(chalk.bold("Serena, responda por favor...\n"));
    await digitarTexto(chalk.bold("Narrador:\n"));
    await digitarTexto(chalk.red("A garota diz suas últimas palavras.\n"));
    await digitarTexto(chalk.bgCyan(`${serena}:\n`));
    await digitarTexto(chalk.bold("No fim, fui um far...\n"));
    await digitarTexto(chalk.bold("Narrador:\n"));
    await digitarTexto(
      chalk.bold(
        `${chalk.cyan(heroi.nome)} escuta um riso, o Dragão estava rindo de toda a situação.`,
      ),
    );
    await digitarTexto(
      chalk.bold(`Ele avança em direção ao Dragão, sem medo do inimigo.`),
    );
    await digitarTexto(
      chalk.bold(
        `Bastou um balançar de asas e ${chalk.cyan(heroi.nome)} caiu em desespero.\n`,
      ),
    );
    await digitarTexto(chalk.bgRed("Dragão Acnologia:\n"));
    await digitarTexto(
      chalk.bold("Que patético, os humanos são tão frágeis.\n"),
    );
    await digitarTexto(chalk.bold("Narrador:\n"));
    await digitarTexto(
      chalk.bold("O dragão bateu suas asas e foi embora, deixando sua marca."),
    );
    await digitarTexto(
      chalk.bold(
        `Naquele momento ${chalk.cyan(heroi.nome)} jurou se vingar, e um dia eles iriam se reencontrar.\n`,
      ),
    );
    prompt(chalk.green("\n\nAPERTE ENTER PARA CONTINUAR..."));
  } else if (heroi.lvl > 3) {
    await digitarTexto(chalk.bold("Narrador:"));
    await digitarTexto(
      chalk.bold(
        `\n${chalk.cyan(heroi.nome)} estava em sua melhor forma, capaz de localizar o inimigo a quilômetros de distância.`,
      ),
    );
    await digitarTexto(
      chalk.bold(
        `Mais rápido que um piscar de olhos, mais veloz que o estrondo do trovão, ${chalk.cyan(heroi.nome)} se lançou à frente de ${serena}, desviando-a da rajada de energia que a atingiria.`,
      ),
    );
    await digitarTexto(
      chalk.bold(
        `${chalk.cyan(heroi.nome)} estava gravemente ferido, mas ainda de pé, ele encarou o dragão e bradou...\n`,
      ),
    );
    await digitarTexto(chalk.bgBlackBright(`${heroi.nome}:\n`));
    await digitarTexto(
      chalk.bold(`Venha, enfrente-me! Poupe a garota; esta batalha é minha!\n`),
    );
    await digitarTexto(chalk.bold("Narrador:\n"));
    await digitarTexto(
      chalk.bold(`O dragão olhou para o humano com surpresa e pensou...\n`),
    );
    await digitarTexto(chalk.bgRed("Dragão Acnologia:\n"));
    await digitarTexto(
      chalk.underline(`Os humanos são, de fato, fascinantes.`),
    );
    // await digitarTexto(chalk.bgRed('Dragão Acnologia:\n'));
    await digitarTexto(chalk.bold(`Humano, qual é o seu nome?\n`));
    await digitarTexto(chalk.bgBlackBright(`${heroi.nome}:\n`));
    await digitarTexto(chalk.bold(`Meu nome é ${chalk.cyan(heroi.nome)}.\n`));
    await digitarTexto(chalk.bgRed("Dragão Acnologia:\n"));
    await digitarTexto(
      chalk.bold(
        `Lembrarei de você ${chalk.cyan(heroi.nome)}. Estarei esperando na Ilha das Chamas pelo seu desafio. Prepare-se, torne-se mais forte e venha me enfrentar.\n`,
      ),
    );
    await digitarTexto(chalk.bold("Narrador:\n"));
    await digitarTexto(
      chalk.bold(
        `O dragão bateu suas asas e se foi.\nO reencontro dos dois estava selado pelo destino. Seria esse o desfecho de uma sina ou apenas o início de um grande confronto?\n. . .`,
      ),
    );
    await digitarTexto(
      chalk.bold(
        `Um tempo depois, ${chalk.cyan(heroi.nome)} já havia se recuperado.\n`,
      ),
    );
    await digitarTexto(chalk.bgCyan(`${serena}:\n`));
    await digitarTexto(
      chalk.bold(
        `${chalk.cyan(heroi.nome)}, estamos quase lá. Olhe, quero te apresentar à minha família.\n`,
      ),
    );
    await digitarTexto(chalk.bold("Narrador:\n"));
    await digitarTexto(
      chalk.bold(`Esta história ainda não chegou ao fim...\n`),
    );
    await digitarTexto(chalk.blue("\n\nRECADO:\n"));
    await digitarTexto(
      chalk.bold(
        `OBRIGADO POR JOGAR! ESPERO QUE A AVENTURA TENHA SIDO DIVERTIDA!`,
      ),
    );
    prompt(chalk.green("\n\nAPERTE ENTER PARA CONTINUAR..."));
  }
  // Mostrar os créditos
  await MostrarCreditos(creditos, 4000);
}
