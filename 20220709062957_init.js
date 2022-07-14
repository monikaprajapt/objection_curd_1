/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("objection_table", table => {
        table.increments("id").primary()
        table.string("name")
        table.string("email")
        table.string("password")
      })
}
 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("objection_table")
  
};
