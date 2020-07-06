import express from 'express'; // importa o express

import PointsController from './controllers/PointsController'; // importa as rotas do PointsController 
import ItemsController from './controllers/ItemsController'; // importa as rotas do ItemsController 

const routes = express.Router(); // traz as rotas
const pointsController = new PointsController(); //traz  o arquivo PointsController
const itemsController = new ItemsController(); // traz o arquivo ItemsController

routes.get('/items', itemsController.index); // Rota para mostrar os itens
routes.post('/points', pointsController.create); // Rota para criação dos pontos de coleta
routes.get('/points', pointsController.index); // Rota para listar os pontos de coleta por filtro city/uf/items
routes.get('/points/:id', pointsController.show); // Rota para exibir um ponto de coleta específico

export default routes; // Exporta as rotas 