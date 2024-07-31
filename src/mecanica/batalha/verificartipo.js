// Função para verificar o tipo de habilidade usada recebe 2 parametros
export function verificaTipo(habilidades, nomeHabilidade) {
  const habilidade = habilidades.find((hab) => hab.nome === nomeHabilidade);
  if (habilidade) {
    return habilidade.tipo;
  } else {
    return "Habilidade não encontrada.";
  }
}
