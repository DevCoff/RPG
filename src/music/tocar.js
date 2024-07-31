// // PARA ATIVAR O PLAY SOUND USE NPM INSTALL PLAY-SOUND e descomente o código abaixo

// import player from 'play-sound';

// const audio = player();
// let musicProcess; // Variável para armazenar o processo de música
// let stopTimeout;  // Variável para armazenar o timeout de parada

// export const playMusic = (file) => {
//     // Se já houver um processo de música em execução, encerre-o
//     if (musicProcess) {
//         musicProcess.kill();
//         clearTimeout(stopTimeout); // Limpa o timeout de parada anterior
//     }

//     // Inicia a música
//     musicProcess = audio.play(file, (err) => {
//         if (err) {
//             console.error(`Erro ao tocar áudio: ${err}`);
//         }
//     });

//     // Define um timeout para parar a música após 80 segundos (1:20)
//     stopTimeout = setTimeout(() => {
//         stopMusic();
//     }, 84 * 1000); // 80 segundos em milissegundos

//     // Observa o evento 'close' para saber quando a música terminou
//     musicProcess.on('close', () => {
//         // Reinicia a música após o término, com um atraso de 1 segundo
//         setTimeout(() => {
//             playMusic(file);
//         }, 84000); // 1 segundo de atraso
//     });
// };

// export const stopMusic = () => {
//     // Se houver um processo de música, encerre-o
//     if (musicProcess) {
//         musicProcess.kill();
//     }

//     // Limpa o timeout se a música for parada manualmente
//     if (stopTimeout) {
//         clearTimeout(stopTimeout);
//     }
// };
