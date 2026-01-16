/**
 * @file test.js
 * @description Teste simples para demonstrar o uso da biblioteca
 * @version 1.0.0
 */

const { getCardInfo } = require('../src/index.js');

// ============================================================================
// CONFIGURAÇÃO - Altere o número do cartão aqui para testar
// ============================================================================

const CARD_TO_TEST = '4532015112830366';  // ← MUDE ESTE NÚMERO PARA TESTAR

// ============================================================================
// Execução do Teste
// ============================================================================

console.log('\n' + '='.repeat(70));
console.log('  🏦 TESTE DE IDENTIFICAÇÃO DE CARTÃO DE CRÉDITO');
console.log('='.repeat(70) + '\n');

// Obtém as informações do cartão
const cardInfo = getCardInfo(CARD_TO_TEST);

// Exibe o resultado
console.log('📊 RESULTADO:');
console.log('─'.repeat(70));
console.log(`  Número Digitado:    ${CARD_TO_TEST}`);
console.log(`  Número Formatado:   ${cardInfo.cardNumber}`);
console.log(`  Bandeira:           ${cardInfo.brand}`);
console.log(`  Status:             ${cardInfo.isValid ? '✅ VÁLIDO' : '❌ INVÁLIDO'}`);
console.log('─'.repeat(70) + '\n');

// ============================================================================
// Exemplos de Cartões para Testar
// ============================================================================

console.log('💳 CARTÕES DE EXEMPLO PARA TESTAR:\n');

const exampleCards = [
  { number: '4532015112830366', brand: 'Visa' },
  { number: '5425233010103442', brand: 'MasterCard' },
  { number: '378282246310005', brand: 'AmEx' },
  { number: '6011111111111117', brand: 'Discover' },
  { number: '30569309025904', brand: 'Diners Club' },
  { number: '3530111333300000', brand: 'JCB' },
  { number: '5078601721051171', brand: 'Aura' },
  { number: '36148906777300', brand: 'Voyager' },
  { number: '201412345678900', brand: 'enRoute' },
  { number: '6062820000000000', brand: 'HiperCard' },
];

exampleCards.forEach((card, index) => {
  console.log(`  ${String(index + 1).padStart(2, '0')}. ${card.number.padEnd(17)} → ${card.brand}`);
});

console.log('\n' + '='.repeat(70) + '\n');
console.log('✨ Copie um número da lista acima, mude a variável CARD_TO_TEST');
console.log('   e execute novamente!\n');

