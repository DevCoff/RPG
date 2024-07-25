import player from 'play-sound';

const audio = player();
let musicProcess; // Variável para armazenar o processo de música

export const playMusic = (file) => {
    if (musicProcess) {
        musicProcess.kill(); // Encerra o processo de música se já estiver tocando
    }

    musicProcess = audio.play(file, (err) => {
        if (err) {
            console.error(`\n\n\nErro ao tocar áudio: ${err}`);
        }
    });

    // Reinicia a música quando o processo atual terminar
    musicProcess.on('close', () => {
        playMusic(file);
    });
};

export const stopMusic = () => {
    if (musicProcess) {
        musicProcess.kill(); // Encerra o processo de música
        console.log('\n\n\n\nMúsica finalizada.');
    }
};