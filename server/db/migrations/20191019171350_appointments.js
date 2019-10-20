
exports.up = function(knex, Promise) {
    return knex.schema.createTable(('appointments'), table =>{
        table.increments();
        table.string('startTime');
        table.string('endTime');
        table.integer('patient_id')
            .references('id')
            .inTable('patients')
            .onDelete('cascade')
            .index();
        table.integer('doctor_id')
            .references('id')
            .inTable('doctors')
            .onDelete('cascade')
            .index();
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointments');
};
