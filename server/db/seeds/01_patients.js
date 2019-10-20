
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {
        id: 1, 
        fName: 'James', 
        lName: 'Smith', 
        birthday: '11/11/92', 
        diagnoses: 'Cerebral Palsy', 
        phoneNum: '623-745-2342',
        guardianFName: '',
        guardianLName: '',
        emailAddr: 'jsmith@hma.com',
        mailingAddr: '123 W California St, San Diego, CA 91929',
        fundingSource: 'private pay' 
      },
        {
        id: 2, 
        fName: 'Cara', 
        lName: 'White', 
        birthday: '11/11/92', 
        diagnoses: 'ADHD, ADHD', 
        phoneNum: '623-745-1231',
        guardianFName: 'Ray',
        guardianLName: 'White',
        emailAddr: 'cwhite@hma.com',
        mailingAddr: '3412 W Bay St, California City, CA 91929',
        fundingSource: 'private pay' 
      },
              {
        id: 3, 
        fName: 'Bill', 
        lName: 'Arey', 
        birthday: '11/11/92', 
        diagnoses: 'Autism', 
        phoneNum: '456-745-2342',
        guardianFName: '',
        guardianLName: '',
        emailAddr: 'billarey@hma.com',
        mailingAddr: '123 W California St, San Diego, CA 91929',
        fundingSource: 'private pay' 
      },
              {
        id: 4, 
        fName: 'Jake', 
        lName: 'Green', 
        birthday: '06/07/92', 
        diagnoses: 'Cerebral Palsy', 
        phoneNum: '978-745-6785',
        guardianFName: '',
        guardianLName: '',
        emailAddr: 'jakegreen@hma.com',
        mailingAddr: '123 W California St, San Diego, CA 91929',
        fundingSource: 'private pay' 
      }


      ]);
    });
};
