const knex = require("../db/knex.js");

module.exports = {
	// CHANGE ME TO AN ACTUAL FUNCTION
	fetchAll: (req, res) => {
		knex("appointments").then(response => {
			res.json({ appointments: response });
		});
	},
	addOne: (req, res) => {
		knex("appointments")
			.insert(
				{
					startDate: req.body.startDate,
					endDate: req.body.endDate,
					patient_id: req.body.patient_id,
					doctor_id: req.body.doctor_id
				},
				"*"
			)
			.then(res => {
				console.log(res[0].id);
				return req.body.startDate, req.body.endDate
					}
				);
			});
	}
};
