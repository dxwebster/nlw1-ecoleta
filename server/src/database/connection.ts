//faz a importação do knex
import knex from 'knex';

// biblioteca para lidar caminhos de diretórios
import path from 'path';

// configurações do banco de dados
const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite'),
    },
    useNullAsDefault:true,
});

// exporta a conexão 
export default connection;