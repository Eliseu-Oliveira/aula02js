      // Questão a. Márcia ganhou 7 pacotes com 30 adesivos em cada pacote. 15 adesivos eram repetidos e não puderam ser colados no álbum. Quantos adesivos Márcia colou no álbum?
      let adesivosPacote = 30;
      let pacotes = 7;
      let adesivosRepetidos = 15;
      let adesivosColados = (adesivosPacote * pacotes) - adesivosRepetidos;
      console.log("a. Márcia colou " + adesivosColados + " adesivos no álbum.");
      
      // Questão b. Numa caixa de refrigerantes cabem duas dúzias de latas. Quantas latas poderão ser guardadas em 4 caixas?
      let latasPorDuzia = 12;
      let duzias = 2;
      let latasPorCaixa = duzias * latasPorDuzia;
      let caixas = 4;
      let totalLatas = latasPorCaixa * caixas;
      console.log("b. Poderão ser guardadas " + totalLatas + " latas.");
      
      // Questão c. Utilizando decremento escreva no console todos os números ímpar no intervalo de 10 até 0.
      console.log("c. Números ímpares entre 10 e 0:");
      for (let i = 10; i >= 0; i--) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }