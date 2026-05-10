const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('47b. deve lançar erro para medianaArray vazio', () => { expect(() => medianaArray([])).toThrow('Array vazio'); });
  test('47c. deve calcular a mediana de um array par', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });
  test('47c. deve calcular a mediana de um array par não ordenado', () => { expect(medianaArray([4, 1, 3, 2])).toBe(2.5); });
  test('47d. deve calcular a mediana de um array par com negativos', () => { expect(medianaArray([-4, -2, 0, 2])).toBe(-1); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('48b. deve calcular o dobro de zero', () => { expect(dobro(0)).toBe(0); });
  test('48c. deve calcular o dobro de número negativo', () => { expect(dobro(-3)).toBe(-6); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('49b. deve calcular o triplo de número negativo', () => { expect(triplo(-2)).toBe(-6); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
  test('50b. deve calcular a metade de número ímpar', () => { expect(metade(7)).toBe(3.5); });

  // === Testes de fronteira para comparações ===
  test('44b. deve retornar false quando valores são iguais (isMaiorQue)', () => { expect(isMaiorQue(5, 5)).toBe(false); });
  test('44c. deve retornar false quando a < b (isMaiorQue)', () => { expect(isMaiorQue(3, 7)).toBe(false); });
  test('45b. deve retornar false quando valores são iguais (isMenorQue)', () => { expect(isMenorQue(5, 5)).toBe(false); });
  test('45c. deve retornar false quando a > b (isMenorQue)', () => { expect(isMenorQue(7, 3)).toBe(false); });
  test('46b. deve retornar false para valores diferentes (isEqual)', () => { expect(isEqual(5, 7)).toBe(false); });

  // === Testes de fronteira para clamp ===
  test('36b. deve retornar min quando valor está abaixo do mínimo', () => { expect(clamp(-5, 0, 10)).toBe(0); });
  test('36c. deve retornar max quando valor está acima do máximo', () => { expect(clamp(15, 0, 10)).toBe(10); });
  test('36d. deve retornar min quando valor é exatamente o mínimo', () => { expect(clamp(0, 0, 10)).toBe(0); });
  test('36e. deve retornar max quando valor é exatamente o máximo', () => { expect(clamp(10, 0, 10)).toBe(10); });

  // === Testes adicionais para isPrimo ===
  test('33b. deve retornar false para n=1', () => { expect(isPrimo(1)).toBe(false); });
  test('33c. deve retornar false para n=0', () => { expect(isPrimo(0)).toBe(false); });
  test('33d. deve retornar true para n=2', () => { expect(isPrimo(2)).toBe(true); });
  test('33e. deve retornar false para número composto', () => { expect(isPrimo(4)).toBe(false); });
  test('33f. deve retornar false para número negativo', () => { expect(isPrimo(-3)).toBe(false); });

  // === Testes adicionais para fatorial ===
  test('8b. deve retornar 1 para fatorial de 0', () => { expect(fatorial(0)).toBe(1); });
  test('8c. deve retornar 1 para fatorial de 1', () => { expect(fatorial(1)).toBe(1); });
  test('8d. deve lançar erro para fatorial negativo', () => { expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); });

  // === Testes adicionais para fibonacci ===
  test('34b. deve retornar 0 para fibonacci(0)', () => { expect(fibonacci(0)).toBe(0); });
  test('34c. deve retornar 1 para fibonacci(1)', () => { expect(fibonacci(1)).toBe(1); });
  test('34d. deve retornar 1 para fibonacci(2)', () => { expect(fibonacci(2)).toBe(1); });

  // === Testes com valores não-zero para conversões ===
  test('38b. deve converter 100°C para 212°F', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
  test('38c. deve converter -40°C para -40°F', () => { expect(celsiusParaFahrenheit(-40)).toBe(-40); });
  test('39b. deve converter 212°F para 100°C', () => { expect(fahrenheitParaCelsius(212)).toBeCloseTo(100); });
  test('39c. deve converter -40°F para -40°C', () => { expect(fahrenheitParaCelsius(-40)).toBeCloseTo(-40); });

  // === Testes adicionais para conversões angulares ===
  test('29b. deve converter 90 graus para PI/2 radianos', () => { expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2); });
  test('29c. deve converter 0 graus para 0 radianos', () => { expect(grausParaRadianos(0)).toBe(0); });
  test('30b. deve converter PI/2 radianos para 90 graus', () => { expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90); });

  // === Testes adicionais para isDivisivel ===
  test('37b. deve retornar false quando não é divisível', () => { expect(isDivisivel(10, 3)).toBe(false); });

  // === Testes adicionais para isPar e isImpar ===
  test('15b. deve retornar false para número ímpar (isPar)', () => { expect(isPar(7)).toBe(false); });
  test('16b. deve retornar false para número par (isImpar)', () => { expect(isImpar(4)).toBe(false); });

  // === Testes adicionais para soma, subtração, multiplicação ===
  test('1b. deve somar número positivo com negativo', () => { expect(soma(5, -3)).toBe(2); });
  test('1c. deve retornar o próprio número ao somar zero', () => { expect(soma(7, 0)).toBe(7); });
  test('2b. deve subtrair resultando em negativo', () => { expect(subtracao(2, 5)).toBe(-3); });
  test('2c. deve retornar zero ao subtrair valor igual', () => { expect(subtracao(5, 5)).toBe(0); });
  test('3b. deve multiplicar por zero resultando em zero', () => { expect(multiplicacao(5, 0)).toBe(0); });
  test('3c. deve multiplicar por número negativo', () => { expect(multiplicacao(3, -4)).toBe(-12); });

  // === Testes adicionais para MDC e MMC ===
  test('31b. deve calcular o MDC de 12 e 8', () => { expect(mdc(12, 8)).toBe(4); });
  test('32b. deve calcular o MMC de 4 e 6', () => { expect(mmc(4, 6)).toBe(12); });

  // === Testes adicionais para raizQuadrada e potencia ===
  test('6b. deve lançar erro para raiz quadrada de número negativo', () => { expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); });
  test('6c. deve retornar 0 para raizQuadrada(0)', () => { expect(raizQuadrada(0)).toBe(0); });
  test('5b. deve calcular potência com expoente zero', () => { expect(potencia(5, 0)).toBe(1); });
  test('5c. deve calcular potência de base negativa', () => { expect(potencia(-2, 3)).toBe(-8); });

  // === Testes adicionais para perimetroRetangulo e areaRetangulo ===
  test('43b. deve calcular perímetro com valores diferentes', () => { expect(perimetroRetangulo(3, 7)).toBe(20); });
  test('42b. deve calcular área com valores diferentes', () => { expect(areaRetangulo(6, 7)).toBe(42); });

  // === Testes adicionais para mediaArray e somaArray ===
  test('9b. deve retornar 0 para mediaArray vazio', () => { expect(mediaArray([])).toBe(0); });
  test('9c. deve calcular média com números negativos', () => { expect(mediaArray([-10, 0, 10])).toBe(0); });
  test('10b. deve somar array com número negativo', () => { expect(somaArray([-1, -2, -3])).toBe(-6); });

  // === Testes adicionais para maximoArray e minimoArray ===
  test('11b. deve lançar erro para maximoArray vazio', () => { expect(() => maximoArray([])).toThrow('Array vazio'); });
  test('12b. deve lançar erro para minimoArray vazio', () => { expect(() => minimoArray([])).toThrow('Array vazio'); });
  test('11c. deve retornar máximo com negativos', () => { expect(maximoArray([-5, -1, -3])).toBe(-1); });
  test('12c. deve retornar mínimo com negativos', () => { expect(minimoArray([-5, -1, -3])).toBe(-5); });

  // === Testes adicionais para produtoArray ===
  test('35b. deve retornar 1 para produtoArray vazio', () => { expect(produtoArray([])).toBe(1); });
  test('35c. deve calcular produto com negativo', () => { expect(produtoArray([2, -3, 4])).toBe(-24); });

  // === Testes adicionais para inverso e inverterSinal ===
  test('40b. deve lançar erro para inverso de zero', () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); });
  test('40c. deve calcular inverso de número negativo', () => { expect(inverso(-2)).toBe(-0.5); });
  test('20b. deve inverter sinal de número negativo', () => { expect(inverterSinal(-42)).toBe(42); });

  // === Testes adicionais para hipotenusa e areaCirculo ===
  test('28b. deve calcular hipotenusa 5-12-13', () => { expect(hipotenusa(5, 12)).toBe(13); });
  test('41b. deve calcular área de círculo com raio 1', () => { expect(areaCirculo(1)).toBeCloseTo(Math.PI); });

  // === Testes adicionais para calcularPorcentagem ===
  test('17b. deve retornar zero para porcentagem de zero', () => { expect(calcularPorcentagem(0, 200)).toBe(0); });
  test('17c. deve calcular 10% de 50', () => { expect(calcularPorcentagem(10, 50)).toBe(5); });

  // === Testes adicionais para aumentarPorcentagem e diminuirPorcentagem ===
  test('18b. deve aumentar 50% de 200', () => { expect(aumentarPorcentagem(200, 50)).toBeCloseTo(300); });
  test('19b. deve diminuir 50% de 200', () => { expect(diminuirPorcentagem(200, 50)).toBeCloseTo(100); });
});