module.exports = {
  prompt: jest.fn(() => Promise.resolve({
    classe: 'Guerreiro' // ou outra classe para testar
  })),
};