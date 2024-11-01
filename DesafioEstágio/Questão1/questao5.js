function inverterPalavra(palavra) {
    let palavraInvertida = " " ;
  
    for (let i = 0; i < palavra.length; i++) {
      palavraInvertida = palavra[i] + palavraInvertida;
    }
  
    return palavraInvertida;
  }
  
  const palavraEscolhida = "Aprovada";
  console.log("Palavra invertida;", inverterPalavra(palavraEscolhida));
  console.log("Palavra Escolhida:", palavraEscolhida);
  