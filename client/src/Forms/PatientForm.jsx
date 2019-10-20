import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../Views/Header'

export default function PatientForm() {
  const { register, handleSubmit, watch, errors } = useForm()

  const [sumbittedForm, setSubmittedForm] = useState(false)

  const [mondayDate, setMondayDate] = useState(false)
  const [tuesdayDate, setTuesdayDate] = useState(false)
  const [wednesdayDate, setWednesdayDate] = useState(false)
  const [thursdayDate, setThursdayDate] = useState(false)
  const [fridayDate, setFridayDate] = useState(false)

  const onSubmit = data => {
    let availablePatientDates = []
    if( data.mondayDates ) {
      availablePatientDates[0] = {}
      availablePatientDates[0].startDate = `2019-10-21 ${data.mondayStartTime}:00:00`
      availablePatientDates[0].endDate = `2019-10-21 ${data.mondayEndTime}:00:00`
    } else {
      availablePatientDates[0] = null
    }
    if( data.tuesdayDates ) {
      availablePatientDates[1] = {}
      availablePatientDates[1].startDate = `2019-10-22 ${data.tuesdayStartTime}:00:00`
      availablePatientDates[1].endDate = `2019-10-22 ${data.tuesdayEndTime}:00:00`
    } else {
      availablePatientDates[1] = null
    }
    if( data.wednesdayDates ) {
      availablePatientDates[2] = {}
      availablePatientDates[2].startDate = `2019-10-23 ${data.wednesdayStartTime}:00:00`
      availablePatientDates[2].endDate = `2019-10-23 ${data.wednesdayEndTime}:00:00`
    } else {
      availablePatientDates[2] = null
    }
    if( data.thursdayDates ) {
      availablePatientDates[3] = {}
      availablePatientDates[3].startDate = `2019-10-24 ${data.thursdayStartTime}:00:00`
      availablePatientDates[3].endDate = `2019-10-24 ${data.thursdayEndTime}:00:00`
    } else {
      availablePatientDates[3] = null
    }
    if( data.fridayDates ) {
      availablePatientDates[4] = {}
      availablePatientDates[4].startDate = `2019-10-25 ${data.fridayStartTime}:00:00`
      availablePatientDates[4].endDate = `2019-10-25 ${data.fridayEndTime}:00:00`
    }  else {
      availablePatientDates[4] = null
    }
    let refinedData = {}
    refinedData.fName = data.firstName
    refinedData.lName = data.lastName
    refinedData.phoneNum = data.phoneNumber
    refinedData.emailAddr = data.emailAddress
    refinedData.availablePatientDates = availablePatientDates
    fetch(`http://localhost:8080/patients`, {
      method: 'POST',
      body: JSON.stringify(refinedData),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => setSubmittedForm(true))
     console.log(data)
     console.log(refinedData)
   }

   // css
   const darkOrange = {color: '#CC6605'}
   const darkOrangeBackground = {backgroundColor: '#CC6605'}
   const textBoxesStyle = {backgroundColor: '#3A0289'}
   const labelStyle = {fontSize: '24px'}
   const lightOrange = {color: '#CF9702'}
   const darkPurple = {color: '#3A0289'}
   const gray = {color: '#5B5B5B'}


  //console.log(watch('firstName')) // watch input value by passing the name of it

  return (
    <div>
    <Header />

      <Container style={darkOrange}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId="patientFirstNameGroup">
              <Form.Label style={labelStyle}>Patient's First Name</Form.Label>
              <Form.Control name="firstName" placeholder="Enter Patient's first name" ref={register} required />
            </Form.Group>
            <Form.Group as={Col} controlId="patientLastNameGroup">
              <Form.Label style={labelStyle}>Patient's Last Name</Form.Label>
              <Form.Control name="lastName" placeholder="Enter Patient's last name" ref={register} required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="guardianFirstNameGroup">
              <Form.Label style={labelStyle}>Parent/Guardian's First Name</Form.Label>
              <Form.Control name="guardianFirstName" placeholder="Enter Parent/Guardian's first name" ref={register} required />
            </Form.Group>
            <Form.Group as={Col} controlId="guardianLastNameGroup">
              <Form.Label style={labelStyle}>Parent/Guardian's Last Name</Form.Label>
              <Form.Control name="guardianLastName" placeholder="Enter Parent/Guardian's last name" ref={register} required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label style={labelStyle}>Primary Phone Number</Form.Label>
              {/* {required: true, maxLength: 12, pattern: /^\d{3}-\d{3}-\d{4}$/i} */}
              <Form.Control name="phoneNumber" type="tel" placeholder="Enter in the format ##########" ref={register({required: true, maxLength: 10, pattern: /^\d{10}$/i})} required />
              {errors.phoneNumber && <span>Please enter in the correct format: ##########</span>}
            </Form.Group>
            <Form.Group as={Col} controlId="emailAddress">
              <Form.Label style={labelStyle}>Email Address</Form.Label>
              <Form.Control name="emailAddress" type="email" placeholder="Enter your email address" ref={register} required />
            </Form.Group>
            <Form.Group as={Col} controlId="birthday">
              <Form.Label style={labelStyle}>Patient's Birthday</Form.Label>

              <Form.Control name="birthday" placeholder="Enter in the format MM/DD/YYYY" ref={register} required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="mailingAddress">
              <Form.Label style={labelStyle}>Mailing Address</Form.Label>
              <Form.Control name="mailingAddress" placeholder="Enter your home address" ref={register} required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Col>
                <Form.Label style={labelStyle}>Diagnosis</Form.Label>
                <Form.Check type="checkbox" id="diagnoseADHD" label="ADHD" ref={register} />
                <Form.Check type="checkbox" id="diagnoseAspergers" label="Asperger's Syndrome" ref={register}/>
                <Form.Check type="checkbox" id="diagnoseAustism" label="Autism" ref={register} />
                <Form.Check type="checkbox" id="diagnoseCerebralPalsy" label="Cerebral Palsy" ref={register} />
                <Form.Check type="checkbox" id="diagnoseDownSyndrome" label="Down Syndrome" ref={register} />
                <Form.Check type="checkbox" id="diagnosePDD" label="PDD" ref={register} />
                <Form.Check type="checkbox" id="diagnoseParkinsons" label="Parkinson's Disease" ref={register} />
                <Form.Check type="checkbox" id="diagnoseStroke" label="Stroke" ref={register} />
                <Form.Check type="checkbox" id="diagnoseADHD" label="ADHD" ref={register} />
                <Form.Check type="checkbox" id="diagnoseTraumaticBrainInjury" label="Traumatic Brain Injury" ref={register} />
                <hr></hr>
                <Form.Label style={labelStyle}>Funding Source</Form.Label>
                <Form.Check type="checkbox" id="fundingPrivatePay" label="Private Pay" ref={register} />
                <Form.Check type="checkbox" id="fundingPrivateInsurance" label="Private Insurance (Ex: BCBS, UHC, Cigna, Aetna, etc.)" ref={register}/>
                <Form.Check type="checkbox" id="diagnoseESAAccount" label="ESA Account" ref={register} />
                <hr></hr>
                <Form.Group controlId="patientNotes">
                  <Form.Label style={labelStyle}>Additional Notes</Form.Label>
                  <Form.Control name="patientNotes" type="text" placeholder="Enter any additional information" ref={register} />
                </Form.Group>
            </Col>
            <Col>
              <Container className="float-left">
                <Form.Group controlId="datesAvailable">
                  <Form.Label style={labelStyle}>Dates Available</Form.Label>

                    <Form.Check type="checkbox" name="mondayDates" label="Monday" ref={register} mondayDate={mondayDate} onChange={() => setMondayDate(!mondayDate)}/>
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

                    <Form.Check type="checkbox" name="tuesdayDates" label="Tuesday" ref={register} tuesdayDate={tuesdayDate} onChange={() => setTuesdayDate(!tuesdayDate)}/>
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

                    <Form.Check type="checkbox" name="wednesdayDates" label="Wednesday" ref={register} wednesdayDate={wednesdayDate} onChange={() => setWednesdayDate(!wednesdayDate)}/>
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

                    <Form.Check type="checkbox" name="thursdayDates" label="Thursday" ref={register} thursdayDate={thursdayDate} onChange={() => setThursdayDate(!thursdayDate)}/>
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

                    <Form.Check type="checkbox" name="fridayDates" label="Friday" ref={register} fridayDate={fridayDate} onChange={() => setFridayDate(!fridayDate)}/>
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
                </Form.Group>
              </Container>
            </Col>
          </Form.Row>

          {/*
            Could do "required" instead of this
            {errors.exampleRequired && <span>This field is required</span>}
          */}

          <Button as={Col} variant="outline-dark" type="submit" className="btn-lg">
            Submit
          </Button>
        </Form>
      </Container>

    </div>

  )
}
