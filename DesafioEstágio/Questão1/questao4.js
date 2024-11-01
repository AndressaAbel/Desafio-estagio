function questao4() {
    const faturamentoEstadualMensal = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };
  
  
    let faturamentoTotal = 0;
    for (let estado in faturamentoEstadualMensal) {
      faturamentoTotal += faturamentoEstadualMensal[estado];
    }
    
    console.log(faturamentoTotal);
    
    for (let estado in faturamentoEstadualMensal) {
      const percentual = (faturamentoEstadualMensal[estado] / faturamentoTotal) *100;
      console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
    }
      
  } questao4();