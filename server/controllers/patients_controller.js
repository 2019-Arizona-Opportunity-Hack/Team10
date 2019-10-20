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
            knex('doctor_avails')
            .insert({
                startDate: availablePatientDate.startDate,
                endDate: availablePatientDate.endDate,
                doctor_id: res[0].id
            }).then(() => {
                // res.sendStatus(200);
                res.sendStatus('OK');
            })
        })
    })
  }
}