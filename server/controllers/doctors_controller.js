const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  fetchAll: (req, res) => {
    knex("doctors").then(response => {
      res.json({ doctors: response });
    });
  },
  addOne: (req, res) => {
    knex("doctors")
      .insert(
        {
          fName: req.body.fName,
          lName: req.body.lName,
          phoneNum: req.body.phoneNum,
          emailAddr: req.body.emailAddr
        },
        "*"
      )
      .then(res => {
        console.log(res[0].id);
        return req.body.availableDoctorDates.map(availableDoctorDate => {
          if (availableDoctorDate != null) {
            knex("doctor_avails")
              .insert({
                startDate: availableDoctorDate.startDate,
                endDate: availableDoctorDate.endDate,
                doctor_id: res[0].id
              })
              .then(() => {
                // res.sendStatus(200);
                res.sendStatus("OK");
              });
          }
        });
      });
  }
};
