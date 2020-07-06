import express from 'express'; // importa o express
import cors from 'cors'; // para trabalhar com URLs web
import path from 'path'; // lida com caminhos de diretórios
import routes from './routes'; // importa as rotas

const app = express(); // armazena na variável 'app' as definições de tipos do express

app.use(cors()); // faz usar o cors
app.use(express.json()); // faz o express entender o formato json 
app.use(routes); // faz o arquivo usar as rotas
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));// para acessar arquivos estáticos de uma pasta específica

app.listen(3333); // faz o arquivo usar a porta 3333