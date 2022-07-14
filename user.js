const { Model } = require("objection")      // We use Model class from objection library
const db = require("../config/dbconn")    // db is the knex file that has been imported from database_connection
Model.knex(db);


class UserModel extends Model {
    static get tableName() {
        return "objection_table"     // database table name of objection      
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
                id: 'integer',
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                }
            }
        }
    }   
}

module.exports = UserModel 