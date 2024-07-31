// Função para limpar o console após um delay
export function clearWithDelay(delay) {
  // usamos o parametro para colocar o tempo da limpeza em milisegundos
  return new Promise((resolve) => {
    setTimeout(() => {
      console.clear();
      resolve();
    }, delay);
  });
}
