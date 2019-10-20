const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  fetchAll: (req, res) => {
    knex('patients')
    .then((response) => {
      res.json({ patients: response })
    })
  },
  addOne: (req, res) => {
    knex('patients')
    .insert({
        fName: req.body.fName,
        lName: req.body.lName,
        phoneNum: req.body.phoneNum,
        emailAddr: req.body.emailAddr
    }, '*').then((res) => {
        console.log(res[0].id);
        return req.body.availablePatientDates.map((availablePatientDate) => {
          if(availablePatientDate != null)
            {
              knex('patient_availabilities')
              .insert({
                  startDate: availablePatientDate.startDate,
                  endDate: availablePatientDate.endDate,
                  patient_id: res[0].id
              }).then(() => {
                  // res.sendStatus(200);
                  res.status(200).send('ok');
              })
            }
        })
    })
  }
}
