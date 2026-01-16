# 💳 Credit Card Identifier

Validador profissional de bandeiras de cartão de crédito com suporte a 18+ bandeiras internacionais, validação pelo Algoritmo de Luhn e zero dependências.

## ✨ Funcionalidades

- ✅ Identificação Automática de 18+ bandeiras
- ✅ Validação Luhn (padrão ISO/IEC 7812)
- ✅ Formatação de números
- ✅ Aceita números com/sem espaços
- ✅ 100% Documentado com JSDoc
- ✅ Zero Dependências
- ✅ Totalmente Testado

## 🛠️ Tecnologias

- JavaScript puro
- Node.js v14+
- npm

## 🚀 Como Usar

### Pré-requisitos
- Node.js v14.0.0 ou superior

### Instalação

```bash
git clone https://github.com/Denner-Dev/credit-card-identifier.git
cd credit-card-identifier
npm install
```

### Executar Testes

```bash
npm test
```

## 📚 Exemplos

```javascript
const { identifyCard, validateCard } = require('./src/index.js');

// Identificar bandeira
const cardInfo = identifyCard('4532015112830366');
// Retorna: { brand: 'visa', isValid: true }

// Validar cartão
const isValid = validateCard('5425233010103442');
// Retorna: true
```

## 📝 Cartões Suportados

- Visa
- Mastercard
- American Express
- Diners Club
- Discover
- Elo
- Hipercard
- JCB
- Aura
- Voyager
- Enroute
- UnionPay
- Mir
- Maestro
- e mais...

##  Licença

MIT
