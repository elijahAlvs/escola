// Número aleatório gerado pelo computador
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Função para verificar a tentativa do usuário
function verificarTentativa() {
  const input = document.getElementById('iguess');
  const tentativa = parseInt(input.value);

  // Verificar se a tentativa está correta
  if (tentativa === numeroAleatorio) {
    adicionarAoHistorico(`Número ${tentativa} | Acertou!`);
    alert('Parabéns! Você acertou o número.');
  } else {
    adicionarAoHistorico(`Número: ${tentativa} | Errou!`);
    alert('Tente novamente.');
  }

  // Limpar o campo de tentativa
  input.value = '';
}

// Função para adicionar uma entrada ao histórico
function adicionarAoHistorico(texto) {
  const historico = document.getElementById('dirHistorico');
  const novaEntrada = document.createElement('p');
  novaEntrada.textContent = texto;
  historico.appendChild(novaEntrada);
}
