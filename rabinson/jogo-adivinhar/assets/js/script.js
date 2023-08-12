var numeroGerado = 0;
    var attempts = 0;

    function refresh(){
        var element = document.getElementById('iguess');

        numeroGerado = parseInt(Math.random() * 100);
        attempts = 0;

        console.log('The number to find: '+ numeroGerado);
    }
    refresh();

    function verifyNumber(){
      var element = document.getElementById('iguess');
      var bet = element.value;

        if(bet > 100 || bet < 0)
        {
            alert('Aposta é inválida');
            element.value = "";
            return;
        }

        if(bet > numeroGerado)
        {
            attempts++;
            adicionarAoHistorico(`${attempts}: Número: ${bet} | Errou! 🚨`);
            alert('🚨MENOR🚨');
            element.value = "";
        }
        else if(bet < numeroGerado)
        {
            attempts++;
            adicionarAoHistorico(`${attempts}: Número: ${bet} | Errou! 🚨`);
            alert('🚨MAIOR🚨');
            element.value = "";
        }
        else
        {
          
          attempts++;
          adicionarAoHistorico(`${attempts}: Número ${bet} | Acertou! ✅`);
            alert('✅ Parabéns você acertou! ✅');
            refresh();
            element.value = "";
        }
    }

function adicionarAoHistorico(texto) {
  const historico = document.getElementById('dirHistorico');
  const novaEntrada = document.createElement('p');
  novaEntrada.textContent = texto;
  historico.appendChild(novaEntrada);
}
