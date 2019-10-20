import React, { useState } from "react";
import useForm from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "../Views/Header";

export default function TherapistForm() {
  const { register, handleSubmit, watch, errors } = useForm();

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
    }).then(() => setSubmittedForm(true))
     console.log(data)
     console.log(refinedData)
   }
   const darkOrange = {color: '#CC6605'}
   const labelStyle = {fontSize: '24px'}

  //console.log(watch('firstName')) // watch input value by passing the name of it

  return (
    <div>
      <Header />
      <Container style={darkOrange}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId="therapistFirstNameGroup">
              <Form.Label style={labelStyle}>First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="Enter your first name"
                ref={register}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="therapistLastNameGroup">
              <Form.Label style={labelStyle}>Last Name</Form.Label>
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
              <Form.Label style={labelStyle}>Primary Phone Number</Form.Label>
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
              <Form.Label style={labelStyle}>Email Address</Form.Label>
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
              <Form.Label style={labelStyle}>Business Address</Form.Label>
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
              <Form.Label style={labelStyle} style={labelStyle}>Funding Source</Form.Label>
              <Form.Check type="checkbox" id="fundingPrivatePay" label="Private Pay" ref={register} />
              <Form.Check type="checkbox" id="fundingPrivateInsurance" label="Private Insurance (Ex: BCBS, UHC, Cigna, Aetna, etc.)" ref={register}/>
              <Form.Check type="checkbox" id="diagnoseESAAccount" label="ESA Account" ref={register} />
              <hr></hr>
              <Form.Group controlId="therapistNotes">
                <Form.Label style={labelStyle}>Additional Notes</Form.Label>
                <Form.Control
                  name="therapistNotes"
                  type="text"
                  placeholder="Enter any additional information"
                  ref={register}
                />
              </Form.Group>
            </Col>
            <Col>
              <Container className="float-left">
                  <Form.Label style={labelStyle}>Dates Available</Form.Label>

                    <Form.Check type="checkbox" id="mondayDates" label="Monday" ref={register} mondayDate={mondayDate} onChange={() => setMondayDate(!mondayDate)}/>
                    {mondayDate &&
                      <>
                    <Form.Group controlId="mondayStartTime">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control as="select" name="mondayStartTime" ref={register}>
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
                      <Form.Control as="select" name="mondayEndTime" ref={register}>
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
                  }
                    <Form.Check type="checkbox" id="tuesdayDates" label="Tuesday" ref={register} tuesdayDate={tuesdayDate} onChange={() => setTuesdayDate(!tuesdayDate)}/>
                    {tuesdayDate &&
                      <>
                    <Form.Group controlId="tuesdayStartTime">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control as="select" name="tuesdayStartTime" ref={register}>
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
                      <Form.Control as="select" name="tuesdayEndTime" ref={register}>
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
                  }
                    <Form.Check type="checkbox" id="wednesdayDates" label="Wednesday" ref={register} wednesdayDate={wednesdayDate} onChange={() => setWednesdayDate(!wednesdayDate)}/>
                    {wednesdayDate &&
                      <>
                    <Form.Group controlId="wednesdayStartTime">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control as="select" name="wednesdayStartTime" ref={register}>
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
                      <Form.Control as="select" name="wednesdayEndTime" ref={register}>
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
                  }

                    <Form.Check type="checkbox" id="thursdayDates" label="Thursday" ref={register} thursdayDate={thursdayDate} onChange={() => setThursdayDate(!thursdayDate)}/>
                    {thursdayDate &&
                      <>
                    <Form.Group controlId="thursdayStartTime">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control as="select" name="thursdayStartTime" ref={register}>
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
                      <Form.Control as="select" name="thursdayEndTime" ref={register}>
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
                  }

                    <Form.Check type="checkbox" id="fridayDates" label="Friday" ref={register} fridayDate={fridayDate} onChange={() => setFridayDate(!fridayDate)}/>
                    {fridayDate &&
                      <>
                    <Form.Group controlId="fridayStartTime">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control as="select" name="fridayStartTime" ref={register}>
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
                      <Form.Control as="select" name="fridayEndTime" ref={register}>
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
                  }
              </Container>
            </Col>
          </Form.Row>

          {/*
            Could do "required" instead of this
            {errors.exampleRequired && <span>This field is required</span>}
          */}



          <Button variant="outline-dark" type="submit" className="btn-lg btn-block">Submit</Button>
        </Form>
      </Container>
      <br>

      </br>
    </div>
  );
}
