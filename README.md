# 📊 Calculadora de IMC

Uma aplicação web simples e elegante para calcular o Índice de Massa Corporal (IMC) desenvolvida com Node.js e Express.

## ✨ Características

* 🎨 Interface moderna
* 🔢 Cálculo preciso do IMC
* 📋 Classificação automática baseada nos padrões da OMS
* 🌟 Tipografia personalizada com Google Fonts (Noto Sans JP)

## 🚀 Como usar

### Pré-requisitos

* Node.js instalado em sua máquina
* npm (geralmente vem junto com o Node.js)

### 📥 Instalação

1. Clone ou baixe este projeto
2. Navegue até o diretório do projeto
3. Instale as dependências com npm install

### ▶️ Executando a aplicação

1. Inicie o servidor com node server.js
2. Abra seu navegador e acesse localhost na porta 3006/imc

## 🎯 Como funciona

1. **Digite seu nome** - Para personalizar a experiência
2. **Informe seu peso** - Em quilogramas (kg)
3. **Digite sua altura** - Em metros (exemplo: 1.75)
4. **Clique em "Calcular IMC"** - E veja o resultado instantaneamente!

## 📈 Classificações do IMC

A aplicação utiliza as seguintes categorias baseadas nos padrões internacionais:

* **Abaixo de 16**: Baixo peso (grau I)
* **16 - 16.99**: Baixo peso (grau II)  
* **17 - 18.49**: Baixo peso (grau III)
* **18.5 - 24.99**: Peso adequado ✅
* **25 - 29.99**: Sobrepeso
* **30 - 34.99**: Obesidade (grau I)
* **35 - 39.99**: Obesidade (grau II)
* **Acima de 40**: Obesidade (grau III)

## 🛠️ Tecnologias utilizadas

* **Node.js** - Ambiente de execução JavaScript
* **Express.js 5.1.0** - Framework web para Node.js
* **EJS 3.1.10** - Template engine para renderização das páginas
* **HTML5 & CSS3** - Estrutura e estilização
* **Google Fonts** - Tipografia (Noto Sans JP)

## 📦 Dependências principais

* **express**: ^5.1.0 - Framework web minimalista e flexível
* **ejs**: ^3.1.10 - Template engine JavaScript embeddable

## 📁 Estrutura do projeto

📂 **projeto-imc/**
* 📄 server.js - Servidor principal
* 📄 ativ.ejs - Template da página
* 📄 package.json - Configurações e dependências
* 📄 package-lock.json - Versões exatas das dependências
* 📄 README.md - Este arquivo

## 💡 Dica importante

O IMC é uma ferramenta útil para avaliação inicial, mas não substitui a consulta com profissionais de saúde. Para uma avaliação completa da sua condição física, sempre consulte um médico ou nutricionista.

---

*Desenvolvido com 💜 usando Node.js e Express*
