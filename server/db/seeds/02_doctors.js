
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {
        id: 1, 
        fName: 'James', 
        lName: 'Flomo', 
        phoneNum: '532-123-1234',
        emailAddr: 'james.flmo@gmail.com',
      },
      {
        id: 2, 
        fName: 'Mary', 
        lName: 'So', 
        phoneNum: '123-123-5412',
        emailAddr: 'mso@gmail.com',
      },
      {
        id: 3, 
        fName: 'Clarance', 
        lName: 'Farley', 
        phoneNum: '345-345-2346',
        emailAddr: 'cafsdfd@gmail.com',
      },
            {
        id: 4, 
        fName: 'Bob', 
        lName: 'Smith', 
        phoneNum: '273-724-2578',
        emailAddr: 'bsmith@professionaldoctor.com',
      },
       {
        id: 5, 
        fName: 'Thera', 
        lName: 'Py', 
        phoneNum: '839-492-3847',
        emailAddr: 'therapy@therapystudio.com',
      }
      ]);
    });
};
