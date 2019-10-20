
exports.up = function(knex, Promise) {
    return knex.schema.createTable(('doctor_availabilities'), table =>{
        table.increments();
        table.string('startTime');
        table.string('endTime');
        table.integer('doctor_id')
            .references('id')
            .inTable('doctors')
            .onDelete('cascade')
            .index();
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('doctor_availabilities');
};
