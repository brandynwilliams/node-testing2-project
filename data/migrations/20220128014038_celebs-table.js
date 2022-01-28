exports.up = async function(knex) {
    await knex.schema.createTable('celebs', table=>{
        table.increments('celebs_id')
        table.text('first_name').notNullable()
        table.text('last_name').notNullable()
        table.text('job')
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('children')
  };