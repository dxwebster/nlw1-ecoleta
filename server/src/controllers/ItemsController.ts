import { Request, Response }  from 'express'; // importar o formato do Request e Response do express
import knex from '../database/connection'; // importar a conexão com banco de dados

// Método Controller Index: para listar os itens
class ItemsController {
    async index( request: Request, response: Response)  {
        const items = await knex('items').select('*'); // query escrita em js
        const serializedItems = items.map(item  => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,  
            };
        });
        return response.json(serializedItems);
    }
}

// exporta a classe criada
export default ItemsController;