# 💳 Credit Card Identifier

> **Validador profissional de bandeiras de cartão de crédito** com suporte a 18+ bandeiras internacionais, validação pelo Algoritmo de Luhn e zero dependências.

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Status Active](https://img.shields.io/badge/Status-Active-success)](.)
[![Desafio DIO](https://img.shields.io/badge/Desafio-DIO-blueviolet)](https://dio.me)

## 📋 Sobre

**Credit Card Identifier** é uma biblioteca JavaScript profissional que identifica automaticamente a bandeira de um cartão de crédito e valida sua autenticidade usando o **Algoritmo de Luhn** (padrão internacional ISO/IEC 7812).

Desenvolvido como solução para o desafio da [DIO - Digital Innovation One](https://dio.me): *"Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot"*.

### ✨ Características Principais

- ✅ **Identificação Automática** de 18+ bandeiras internacionais
- ✅ **Validação Luhn** - Padrão internacional (ISO/IEC 7812)
- ✅ **Formatação** de números para melhor visualização
- ✅ **Flexível** - Aceita números com/sem espaços e hífens
- ✅ **100% Documentado** com JSDoc
- ✅ **Zero Dependências** - JavaScript puro
- ✅ **Totalmente Testado** - Pronto para produção

---

## 🚀 Instalação

### Pré-requisitos
- Node.js v14.0.0 ou superior

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/credit-card-identifier.git
cd credit-card-identifier
npm install
```

---

## 📖 Como Usar

### Exemplo Básico

```javascript
const { identifyCard, validateCard, getCardInfo } = require('./src/index.js');

// Identificar a bandeira
console.log(identifyCard('4532015112830366'));
// Output: 'Visa'

// Validar número do cartão
console.log(validateCard('4532015112830366'));
// Output: true

// Obter informações completas
console.log(getCardInfo('4532015112830366'));
// Output: {
//   brand: 'Visa',
//   isValid: true,
//   cardNumber: '4532 0151 1283 0366',
//   rawNumber: '4532015112830366'
// }
```

### Entrada Flexível

A biblioteca aceita vários formatos:

```javascript
getCardInfo('4532015112830366');        // Sem formatação
getCardInfo('4532 0151 1283 0366');     // Com espaços
getCardInfo('4532-0151-1283-0366');     // Com hífens
```

---

## 📚 API Reference

### `identifyCard(cardNumber)`

Identifica a bandeira do cartão de crédito.

**Parâmetros:**
- `cardNumber` (string) - Número do cartão

**Retorna:**
- (string) - Nome da bandeira ou `null` se não identificada

**Exemplo:**
```javascript
identifyCard('5425233010103442');  // 'Mastercard'
identifyCard('378282246310005');   // 'Amex'
identifyCard('invalid');           // null
```

---

### `validateCard(cardNumber)`

Valida o número do cartão usando o **Algoritmo de Luhn**.

**Algoritmo de Luhn:**
1. A partir do dígito mais à direita, duplica cada segundo dígito
2. Se o resultado for maior que 9, subtrai 9
3. Soma todos os dígitos
4. Se a soma for divisível por 10, o número é válido

**Parâmetros:**
- `cardNumber` (string) - Número do cartão

**Retorna:**
- (boolean) - `true` se válido, `false` caso contrário

**Exemplo:**
```javascript
validateCard('4532015112830366');  // true
validateCard('1234567890123456');  // false
```

---

### `getCardInfo(cardNumber)`

Fornece informações completas sobre um cartão.

**Parâmetros:**
- `cardNumber` (string) - Número do cartão

**Retorna:**
- (Object) com as propriedades:
  - `brand` (string) - Nome da bandeira
  - `isValid` (boolean) - Resultado da validação
  - `cardNumber` (string) - Número formatado
  - `rawNumber` (string) - Número sem formatação

**Exemplo:**
```javascript
getCardInfo('378282246310005');
// {
//   brand: 'Amex',
//   isValid: true,
//   cardNumber: '3782 822463 10005',
//   rawNumber: '378282246310005'
// }
```

---

## 🎯 Bandeiras Suportadas

| # | Bandeira | Padrão | Dígitos |
|---|----------|--------|---------|
| 1 | **Visa** | Começa com 4 | 13, 16, 19 |
| 2 | **MasterCard** | Começa com 5[1-5] ou 2[2-7] | 16 |
| 3 | **American Express** | Começa com 34 ou 37 | 15 |
| 4 | **Discover** | Começa com 6011 ou 65 | 16 |
| 5 | **Diners Club** | Começa com 300-305, 36, 38 | 13-14 |
| 6 | **JCB** | Começa com 3528-3589 | 16-19 |
| 7 | **Aura** | Começa com 50 | 16 |
| 8 | **Voyager** | Começa com 36 ou 869 | 14-16 |
| 9 | **enRoute** | Começa com 2014 ou 2149 | 15 |
| 10 | **HiperCard** | Começa com 606282 ou 3841 | 16 |
| 11+ | **Outras** | Elo, Unionpay, Maestro, MIR | - |

---

## 🧪 Testando a Aplicação

### Executar Testes

```bash
npm test
```

### Cartões de Exemplo

Use estes números para testar:

```
Visa:             4532015112830366
MasterCard:       5425233010103442
AmEx:             378282246310005
Discover:         6011111111111117
Diners Club:      30569309025904
JCB:              3530111333300000
Aura:             5078601721051171
Voyager:          36148906777300
enRoute:          201412345678900
HiperCard:        6062820000000000
```

### Modificar o Teste

Abra `test/test.js` e altere:

```javascript
const CARD_TO_TEST = '4532015112830366';  // Mude este número
```

Depois execute: `npm test`

---

## 📁 Estrutura do Projeto

```
credit-card-identifier/
├── src/
│   └── index.js              # Código principal (170 linhas)
├── test/
│   └── test.js               # Testes e exemplos
├── package.json              # Configuração do Node.js
├── README.md                 # Documentação (este arquivo)
├── LICENSE                   # Licença MIT
└── .gitignore                # Configuração do Git
```

---

## 🔧 Tecnologias

- **Node.js** - Ambiente de execução
- **JavaScript ES6+** - Linguagem de programação
- **Expressões Regulares (Regex)** - Validação de padrões
- **Algoritmo de Luhn** - Validação de cartões

---

## 📊 Projeto DIO

### Desafio
**Título:** Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot

**Objetivos Alcançados:**
- ✅ Reproduzir e melhorar projetos com código existente
- ✅ Aplicar conceitos em cenários reais
- ✅ Documentar decisões técnicas claramente
- ✅ Utilizar GitHub para versionamento
- ✅ Implementar padrões internacionais (ISO/IEC 7812)
- ✅ Trabalhar com GitHub Copilot no desenvolvimento

---

## 📝 Conceitos Implementados

- ✅ Expressões regulares (Regex) para validação
- ✅ Algoritmo de Luhn para validação de cartões
- ✅ Manipulação e formatação de strings
- ✅ Modularização de código
- ✅ Documentação com JSDoc
- ✅ Controle de versão com Git
- ✅ Padrões internacionais (ISO/IEC 7812)
- ✅ Boas práticas de desenvolvimento profissional

---

## 📄 Licença

Este projeto está licenciado sob a Licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

Você é livre para:
- ✅ Usar comercialmente
- ✅ Modificar o código
- ✅ Distribuir
- ✅ Usar em projetos privados

Sob a condição de:
- ℹ️ Incluir cópia da licença e aviso de copyright

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas!

1. Faça um Fork do projeto
2. Crie uma Branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Encontrou um problema? Abra uma [Issue](https://github.com/seu-usuario/credit-card-identifier/issues) no GitHub.

---

## ⭐ Reconhecimentos

- [DIO - Digital Innovation One](https://dio.me) - Plataforma de aprendizado
- [GitHub Copilot](https://github.com/features/copilot) - Assistente de desenvolvimento IA
- Comunidade JavaScript/Node.js

---

<div align="center">

**Desenvolvido com ❤️ para o desafio DIO**

Se este projeto foi útil, considere deixar uma ⭐!

</div>
