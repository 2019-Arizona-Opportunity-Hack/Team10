
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {
        id: 1, 
        fName: 'fName1', 
        lName: 'lName1', 
        phoneNum: '12345667',
        emailAddr: 'asd@asd.com',
      },
      {
        id: 2, 
        fName: 'fName2', 
        lName: 'lName2', 
        phoneNum: '12345667',
        emailAddr: 'asd@asd.com',
      },
      {
        id: 3, 
        fName: 'fName3', 
        lName: 'lName3', 
        phoneNum: '12345667',
        emailAddr: 'asd@asd.com',
      },
      ]);
    });
};
