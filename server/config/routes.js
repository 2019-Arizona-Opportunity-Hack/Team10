//Update the name of the controller below and rename the file.
const doctorsController = require("../controllers/doctors_controller.js");
const patientsController = require("../controllers/patients_controller.js");
const apptsController = require("../controllers/appts_controller.js");

module.exports = function(app){

  app.get('/doctors', doctorsController.fetchAll);
  app.post('/doctors', doctorsController.addOne);
  app.get('/patients', patientsController.fetchAll);
  app.post('/patients', patientsController.addOne);
  // app.get('/', patientsController.fetchAll);

}
