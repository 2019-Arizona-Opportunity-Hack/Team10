
exports.up = function(knex, Promise) {
    return knex.schema.createTable(('patients'), table =>{
        table.increments();
        table.string('fName');
        table.string('lName');
        table.string('birthday');
        table.string('diagnoses');
        table.string('phoneNum');
        table.string('guardianFName');
        table.string('guardianLName');  
        table.string('emailAddr');
        table.string('mailingAddr');
        table.string('fundingSource');
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients');
};
