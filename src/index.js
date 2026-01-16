/**
 * @module creditCardIdentifier
 * @description Módulo para identificação e validação de cartões de crédito
 * @version 1.0.0
 * @author Seu Nome
 */

/**
 * Padrões de identificação das bandeiras de cartão de crédito
 * Utiliza expressões regulares para validar o formato de cada bandeira
 * @constant {Object<string, RegExp>}
 */
const CARD_PATTERNS = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$|^2(?:22[1-9]|[23]\d{2}|4[01]\d|5[0-9]{2})[0-9]{12}$/,
  amex: /^3[47][0-9]{13}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{9,11}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  elo: /^636(?:37|95|42)|^637|^63[7-8]|^639|^657|^658|^659|^6505|^6507|^6509|^65[2-9]|^6594|^6596|^65[0-1]|^6550|^6551|^6552|^6553|^6554|^6555|^6556|^6557|^6558|^6559|^65[0-9]|^7[1-6]$/,
  hipercard: /^606282[0-9]{10}$|^3841[0-9]{12}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  aura: /^50[0-9]{14}$/,
  voyager: /^36[0-9]{12}$|^869[0-9]{13}$/,
  enroute: /^2014[0-9]{11}$|^2149[0-9]{12,13}$/,
  unionpay: /^62[0-9]{14,17}$/,
  mir: /^220[0-4][0-9]{12}$/,
  maestro: /^(?:5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{8,15}$/,
};

/**
 * Padrão para números de cartão genéricos não identificados
 * @constant {RegExp}
 */
const OTHER_CARD_PATTERN = /^[0-9]{13,19}$/;

/**
 * Remove caracteres especiais do número do cartão
 * Aceita espaços, hífens e outros separadores comuns
 * 
 * @param {string} cardNumber - Número do cartão bruto
 * @returns {string} Número do cartão limpo (apenas dígitos)
 * @private
 */
function sanitizeCardNumber(cardNumber) {
  return cardNumber.replace(/[\s\-]/g, '');
}

/**
 * Valida se a string contém apenas dígitos
 * 
 * @param {string} str - String a validar
 * @returns {boolean} true se contém apenas dígitos, false caso contrário
 * @private
 */
function isNumericOnly(str) {
  return /^\d+$/.test(str);
}

/**
 * Capitaliza a primeira letra de uma string
 * Mantém o restante da string em minúsculas
 * 
 * @param {string} str - String a capitalizar
 * @returns {string} String capitalizada
 * @private
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Identifica a bandeira do cartão de crédito
 * Valida o número contra os padrões conhecidos das bandeiras
 * 
 * @param {string} cardNumber - Número do cartão (com ou sem formatação)
 * @returns {string|null} Nome da bandeira ou null se não identificada
 * 
 * @example
 * identifyCard('4532015112830366')      // 'Visa'
 * identifyCard('5425233010103442')      // 'Mastercard'
 * identifyCard('4532 0151 1283 0366')   // 'Visa'
 * identifyCard('invalid')               // null
 */
function identifyCard(cardNumber) {
  const cleanNumber = sanitizeCardNumber(cardNumber);

  // Valida se contém apenas dígitos
  if (!isNumericOnly(cleanNumber)) {
    return null;
  }

  // Verifica contra padrões conhecidos
  for (const [brand, pattern] of Object.entries(CARD_PATTERNS)) {
    if (pattern.test(cleanNumber)) {
      return capitalize(brand);
    }
  }

  // Retorna 'Other' se o número é válido mas não pertence a uma bandeira conhecida
  if (OTHER_CARD_PATTERN.test(cleanNumber)) {
    return 'Other';
  }

  return null;
}

/**
 * Valida um número de cartão usando o Algoritmo de Luhn
 * O Algoritmo de Luhn é o padrão internacional para validação de cartões
 * 
 * Processo:
 * 1. A partir do dígito mais à direita, duplica cada segundo dígito
 * 2. Se o resultado for maior que 9, subtrai 9
 * 3. Soma todos os dígitos
 * 4. Se a soma for divisível por 10, o número é válido
 * 
 * @param {string} cardNumber - Número do cartão (com ou sem formatação)
 * @returns {boolean} true se o número é válido, false caso contrário
 * 
 * @example
 * validateCard('4532015112830366')  // true
 * validateCard('1234567890123456')  // false
 */
function validateCard(cardNumber) {
  const cleanNumber = sanitizeCardNumber(cardNumber);

  // Valida se contém apenas dígitos
  if (!isNumericOnly(cleanNumber)) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  // Itera do final para o início do número
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber.charAt(i), 10);

    // Duplica cada segundo dígito (a partir do final)
    if (isEven) {
      digit *= 2;
      // Se o resultado for maior que 9, subtrai 9
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  // Retorna true se a soma é divisível por 10
  return sum % 10 === 0;
}

/**
 * Formata o número do cartão para melhor visualização
 * Agrupa em blocos de 4 dígitos separados por espaços
 * 
 * @param {string} cardNumber - Número do cartão limpo (apenas dígitos)
 * @returns {string} Número do cartão formatado
 * @private
 */
function formatCardNumber(cardNumber) {
  return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
}

/**
 * Obtém informações completas sobre um cartão de crédito
 * Identifica a bandeira, valida o número e formata para exibição
 * 
 * @param {string} cardNumber - Número do cartão (com ou sem formatação)
 * @returns {Object} Objeto contendo:
 *   @returns {string} brand - Nome da bandeira do cartão
 *   @returns {boolean} isValid - Resultado da validação pelo Algoritmo de Luhn
 *   @returns {string} cardNumber - Número formatado com espaços
 *   @returns {string} rawNumber - Número limpo sem formatação
 * 
 * @example
 * getCardInfo('4532015112830366')
 * // {
 * //   brand: 'Visa',
 * //   isValid: true,
 * //   cardNumber: '4532 0151 1283 0366',
 * //   rawNumber: '4532015112830366'
 * // }
 */
function getCardInfo(cardNumber) {
  const cleanNumber = sanitizeCardNumber(cardNumber);
  const brand = identifyCard(cleanNumber);
  const isValid = validateCard(cleanNumber);
  const formattedNumber = formatCardNumber(cleanNumber);

  return {
    brand: brand || 'Unknown',
    isValid: isValid,
    cardNumber: formattedNumber,
    rawNumber: cleanNumber,
  };
}

// ============================================================================
// Exportações - Funções públicas do módulo
// ============================================================================

module.exports = {
  identifyCard,
  validateCard,
  getCardInfo,
  CARD_PATTERNS,
};
