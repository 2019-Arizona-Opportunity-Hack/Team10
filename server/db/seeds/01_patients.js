
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {
        id: 1, 
        fName: 'fName1', 
        lName: 'lName1', 
        birthday: '11/11/11', 
        diagnoses: 'cancer,asdf', 
        phoneNum: '12345667',
        guardianFName: 'qwe',
        guardianLName: 'asd',
        emailAddr: 'asd@asd.com',
        mailingAddr: '123',
        fundingSource: 'asf' 
      },
      {
        id: 2, 
        fName: 'fName2', 
        lName: 'lName2', 
        birthday: '11/11/11', 
        diagnoses: 'cancer,asdf', 
        phoneNum: '12345667',
        guardianFName: 'qwe',
        guardianLName: 'asd',
        emailAddr: 'asd@asd.com',
        mailingAddr: '123',
        fundingSource: 'asf' 
      },
      {
        id: 3, 
        fName: 'fName3', 
        lName: 'lName3', 
        birthday: '11/11/11', 
        diagnoses: 'cancer,asdf', 
        phoneNum: '12345667',
        guardianFName: 'qwe',
        guardianLName: 'asd',
        emailAddr: 'asd@asd.com',
        mailingAddr: '123',
        fundingSource: 'asf' 
      },
      {
        id: 4, 
        fName: 'fName4', 
        lName: 'lName4', 
        birthday: '11/11/11', 
        diagnoses: 'cancer,asdf', 
        phoneNum: '12345667',
        guardianFName: 'qwe',
        guardianLName: 'asd',
        emailAddr: 'asd@asd.com',
        mailingAddr: '123',
        fundingSource: 'asf' 
      },
      {
        id: 5, 
        fName: 'fName5', 
        lName: 'lName5', 
        birthday: '11/11/11', 
        diagnoses: 'cancer,asdf', 
        phoneNum: '12345667',
        guardianFName: 'qwe',
        guardianLName: 'asd',
        emailAddr: 'asd@asd.com',
        mailingAddr: '123',
        fundingSource: 'asf' 
      },

      ]);
    });
};
