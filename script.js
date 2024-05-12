// const prompt = require('prompt-sync')();
let voto = '';
let candidato1 = '';
let candidato2 = '';
let candidato3 = '';
let candidato4 = '';
let votosEmBranco = '';
sair = '';
  
  while (true) {
    voto = prompt('Em quem você gostaria de votar? \n 1-Candidato1 \n 2-Candidato2 \n 3-Candidato3 \n 4-Candidato4 \n 5-Votar em Branco \n')

  switch (voto) {
    case '1':
      candidato1++
      alert(`Você votou no candidato 1. Ele possui ${candidato1} votos`);
      break;
    case '2':
      candidato2++
      alert(`Você votou no candidato 2. Ele possui ${candidato2} votos`);
      break
    case '3':
      candidato3++;
      alert(`Você votou no candidato 3. Ele possui ${candidato3} votos`);
      break;
    case '4':
      candidato4++;
      alert(`Você votou no candidato 4. Ele possui ${candidato4} votos`);
      break;
    case '5':
      votosEmBranco++
      alert(`Você votou em branco`);
      break;
    default:
      break;
    }

    sair = prompt('Deseja sair? (s/n) ')
      if (sair == 's') {
        break;
      }
}




