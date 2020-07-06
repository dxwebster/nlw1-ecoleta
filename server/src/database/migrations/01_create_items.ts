//importar o Knex 
import Knex from 'knex';

//Método do knex para criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

//Método para deletar a tabela
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}