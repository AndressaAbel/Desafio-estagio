function questao2(numero) {
    let numero1 = 0;
    let numero2 = 1;

    while (numero1 <= numero) {
        if (numero1 === numero) {
            console.log(`Questão 2 - O número ${numero} pertence à sequência de Fibonacci.`);
            return;
        }
        [numero1, numero2] = [numero2, numero1 + numero2];
    }

    console.log(`Questão 2 - O número ${numero} não pertence à sequência de Fibonacci.`);
}
questao2(8); // Pertence
questao2(6); // Não pertence