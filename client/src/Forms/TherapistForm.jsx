import React, { useState } from "react";
import useForm from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "../Views/Header";

export default function TherapistForm() {
  const { register, handleSubmit, watch, errors } = useForm();

<<<<<<< HEAD
  const [sumbittedForm, setSubmittedForm] = useState(false);

  const [mondayDate, setMondayDate] = useState(false);
  const [tuesdayDate, setTuesdayDate] = useState(false);
  const [wednesdayDate, setWednesdayDate] = useState(false);
  const [thursdayDate, setThursdayDate] = useState(false);
  const [fridayDate, setFridayDate] = useState(false);

  const onSubmit = data => {
    let availableDoctorDates = [];
    if (data.mondayDates) {
      availableDoctorDates[0] = {};
      availableDoctorDates[0].startDate = `2019-10-21 ${data.mondayStartTime}:00:00`;
      availableDoctorDates[0].endDate = `2019-10-21 ${data.mondayEndTime}:00:00`;
=======
  const [sumbittedForm, setSubmittedForm] = useState(false)

  const [mondayDate, setMondayDate] = useState(false)
  const [tuesdayDate, setTuesdayDate] = useState(false)
  const [wednesdayDate, setWednesdayDate] = useState(false)
  const [thursdayDate, setThursdayDate] = useState(false)
  const [fridayDate, setFridayDate] = useState(false)

  const onSubmit = data => {
    let availableDoctorDates = []
    if( data.mondayDates ) {
      availableDoctorDates[0] = {}
      availableDoctorDates[0].startDate = `2019-10-21 ${data.mondayStartTime}:00:00`
      availableDoctorDates[0].endDate = `2019-10-21 ${data.mondayEndTime}:00:00`
>>>>>>> 8073a572668b34ad00f710e4c2f2c9683161a719
    } else {
      availableDoctorDates[0] = null;
    }
    if (data.tuesdayDates) {
      availableDoctorDates[1] = {};
      availableDoctorDates[1].startDate = `2019-10-22 ${data.tuesdayStartTime}:00:00`;
      availableDoctorDates[1].endDate = `2019-10-22 ${data.tuesdayEndTime}:00:00`;
    } else {
      availableDoctorDates[1] = null;
    }
    if (data.wednesdayDates) {
      availableDoctorDates[2] = {};
      availableDoctorDates[2].startDate = `2019-10-23 ${data.wednesdayStartTime}:00:00`;
      availableDoctorDates[2].endDate = `2019-10-23 ${data.wednesdayEndTime}:00:00`;
    } else {
      availableDoctorDates[2] = null;
    }
    if (data.thursdayDates) {
      availableDoctorDates[3] = {};
      availableDoctorDates[3].startDate = `2019-10-24 ${data.thursdayStartTime}:00:00`;
      availableDoctorDates[3].endDate = `2019-10-24 ${data.thursdayEndTime}:00:00`;
    } else {
      availableDoctorDates[3] = null;
    }
    if (data.fridayDates) {
      availableDoctorDates[4] = {};
      availableDoctorDates[4].startDate = `2019-10-25 ${data.fridayStartTime}:00:00`;
      availableDoctorDates[4].endDate = `2019-10-25 ${data.fridayEndTime}:00:00`;
    } else {
      availableDoctorDates[4] = null;
    }
    let refinedData = {};
    refinedData.fName = data.firstName;
    refinedData.lName = data.lastName;
    refinedData.phoneNum = data.phoneNumber;
    refinedData.emailAddr = data.emailAddress;
    refinedData.availableDoctorDates = availableDoctorDates;
    fetch(`http://localhost:8080/doctors`, {
      method: "POST",
      body: JSON.stringify(refinedData),
      headers: {
        "Content-Type": "application/json"
      }
<<<<<<< HEAD
    }).then(() => setSubmittedForm(true));
    console.log(data);
    console.log(refinedData);
  };

=======
    }).then(() => setSubmittedForm(true))
     console.log(data)
     console.log(refinedData)
   }
>>>>>>> 8073a572668b34ad00f710e4c2f2c9683161a719
  //console.log(watch('firstName')) // watch input value by passing the name of it

  return (
    <div>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId="therapistFirstNameGroup">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="Enter your first name"
                ref={register}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="therapistLastNameGroup">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Enter your last name"
                ref={register}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Primary Phone Number</Form.Label>
              {/* {required: true, maxLength: 12, pattern: /^\d{3}-\d{3}-\d{4}$/i} */}
              <Form.Control
                name="phoneNumber"
                type="tel"
                placeholder="Enter in the format ##########"
                ref={register({
                  required: true,
                  maxLength: 10,
                  pattern: /^\d{10}$/i
                })}
                required
              />
              {errors.phoneNumber && (
                <span>Please enter in the correct format: ##########</span>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="emailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="emailAddress"
                type="email"
                placeholder="Enter your email address"
                ref={register}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="mailingAddress">
              <Form.Label>Business Address</Form.Label>
              <Form.Control
                name="mailingAddress"
                placeholder="Enter your business mail address"
                ref={register}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="fundingSource">
                <Form.Label>Funding Source</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="fundingPrivatePay"
                  label="Private Pay"
                  ref={register}
                />
                <Form.Check
                  type="checkbox"
                  name="fundingPrivateInsurance"
                  label="Asperger's Syndrome"
                  ref={register}
                />
                <Form.Check
                  type="checkbox"
                  name="diagnoseESAAccount"
                  label="ESA Account"
                  ref={register}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="datesAvailable">
                <Form.Label>Dates Available</Form.Label>
                <Form.Row>
                  <Form.Check
                    type="checkbox"
                    name="mondayDates"
                    label="Monday"
                    ref={register}
                    mondayDate={mondayDate}
                    onChange={() => setMondayDate(!mondayDate)}
                  />
                  {mondayDate && (
                    <>
                      <Form.Group controlId="mondayStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="9">9am</option>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="mondayEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                          <option value="18">6pm</option>
                        </Form.Control>
                      </Form.Group>
                    </>
                  )}
                </Form.Row>
                <Form.Row>
                  <Form.Check
                    type="checkbox"
                    name="tuesdayDates"
                    label="Tuesday"
                    ref={register}
                    tuesdayDate={tuesdayDate}
                    onChange={() => setTuesdayDate(!tuesdayDate)}
                  />
                  {tuesdayDate && (
                    <>
                      <Form.Group controlId="tuesdayStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="9">9am</option>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="tuesdayEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                          <option value="18">6pm</option>
                        </Form.Control>
                      </Form.Group>
                    </>
                  )}
                </Form.Row>
                <Form.Row>
                  <Form.Check
                    type="checkbox"
                    name="wednesdayDates"
                    label="Wednesday"
                    ref={register}
                    wednesdayDate={wednesdayDate}
                    onChange={() => setWednesdayDate(!wednesdayDate)}
                  />
                  {wednesdayDate && (
                    <>
                      <Form.Group controlId="wednesdayStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="9">9am</option>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="wednesdayEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                          <option value="18">6pm</option>
                        </Form.Control>
                      </Form.Group>
                    </>
                  )}
                </Form.Row>
                <Form.Row>
                  <Form.Check
                    type="checkbox"
                    name="thursdayDates"
                    label="Thursday"
                    ref={register}
                    thursdayDate={thursdayDate}
                    onChange={() => setThursdayDate(!thursdayDate)}
                  />
                  {thursdayDate && (
                    <>
                      <Form.Group controlId="thursdayStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="9">9am</option>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="thursdayEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                          <option value="18">6pm</option>
                        </Form.Control>
                      </Form.Group>
                    </>
                  )}
                </Form.Row>
                <Form.Row>
                  <Form.Check
                    type="checkbox"
                    name="fridayDates"
                    label="Friday"
                    ref={register}
                    fridayDate={fridayDate}
                    onChange={() => setFridayDate(!fridayDate)}
                  />
                  {fridayDate && (
                    <>
                      <Form.Group controlId="fridayStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="9">9am</option>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="fridayEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control as="select" ref={register}>
                          <option value="10">10am</option>
                          <option value="11">11am</option>
                          <option value="12">12pm</option>
                          <option value="13">1pm</option>
                          <option value="14">2pm</option>
                          <option value="15">3pm</option>
                          <option value="16">4pm</option>
                          <option value="17">5pm</option>
                          <option value="18">6pm</option>
                        </Form.Control>
                      </Form.Group>
                    </>
                  )}
                </Form.Row>
              </Form.Group>
            </Col>
          </Form.Row>

          {/*
            Could do "required" instead of this
            {errors.exampleRequired && <span>This field is required</span>}
          */}

          <Form.Group controlId="therapistNotes">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control
              name="therapistNotes"
              type="text"
              placeholder="Enter any additional information"
              ref={register}
            />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
