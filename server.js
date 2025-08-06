const express = require('express'); 
const app = express(); // Cria uma instância do aplicativo Express
const PORT = 3006;  
const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos

app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados de formulários

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname)); // Define o diretório de visualizações para EJS

app.get('/imc', (req, res) => {
    res.render('ativ', { mensagem: null }); 
});

app.post('/imc', (req, res) => {
    const { peso, altura } = req.body;

    const alturaM = parseFloat(altura);
    const pesoKg = parseFloat(peso);
    const imc = pesoKg / (alturaM * alturaM);

    let classificacao = ''; 

    if (imc < 16) {
        classificacao = 'Baixo peso (grau I)';
    } else if (imc < 17) {
        classificacao = 'Baixo peso (grau II)';
    } else if (imc < 18.5) {
        classificacao = 'Baixo peso (grau III)';
    } else if (imc < 25) {
        classificacao = 'Peso adequado';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade (grau I)';
    } else if (imc < 40) {
        classificacao = 'Obesidade (grau II)';
    } else {
        classificacao = 'Obesidade (grau III)';
    }

    const mensagem = `Seu IMC é: ${imc.toFixed(2)} - Classificação: ${classificacao}`;

    res.render('ativ', { mensagem }); 
});

app.listen(PORT, () => {
    console.log(`O servidor está ativo em http://localhost:${PORT}/imc`);
});
