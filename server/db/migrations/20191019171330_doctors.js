
exports.up = function(knex, Promise) {
    return knex.schema.createTable(('doctors'), table =>{
        table.increments();
        table.string('fName');
        table.string('lName');
        table.string('phoneNum');
        table.string('emailAddr');
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('doctors');
};
