
exports.up = function(knex, Promise) {
    return knex.schema.createTable(('patient_availabilities'), table =>{
        table.increments();
        table.string('startDate');
        table.string('endDate');
        table.integer('patient_id')
            .references('id')
            .inTable('patients')
            .onDelete('cascade')
            .index();
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patient_availabilities');
};
