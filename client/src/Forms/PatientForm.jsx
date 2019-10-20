import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import TimeRangeSlider from 'react-time-range-slider'
import InputRange from 'react-input-range';



export default function PatientForm() {
  const { register, handleSubmit, watch, errors } = useForm()

  const [mondayDate, setMondayDate] = useState(false)
  const [tuesdayDate, setTuesdayDate] = useState(false)
  const [wednesdayDate, setWednesdayDate] = useState(false)
  const [thursdayDate, setThursdayDate] = useState(false)
  const [fridayDate, setFridayDate] = useState(false)

  const onSubmit = data => { console.log(data) }

  //console.log(watch('firstName')) // watch input value by passing the name of it

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId="patientFirstNameGroup">
              <Form.Label>Patient's First Name</Form.Label>
              <Form.Control name="firstName" placeholder="Enter Patient's first name" ref={register} required />
            </Form.Group>
            <Form.Group as={Col} controlId="patientLastNameGroup">
              <Form.Label>Patient's Last Name</Form.Label>
              <Form.Control name="lastName" placeholder="Enter Patient's last name" ref={register} required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="guardianFirstNameGroup">
              <Form.Label>Parent/Guardian's First Name</Form.Label>
              <Form.Control name="guardianFirstName" placeholder="Enter Parent/Guardian's first name" ref={register} required />
            </Form.Group>
            <Form.Group as={Col} controlId="guardianLastNameGroup">
              <Form.Label>Parent/Guardian's Last Name</Form.Label>
              <Form.Control name="guardianLastName" placeholder="Enter Parent/Guardian's last name" ref={register} required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Primary Phone Number</Form.Label>
              {/* {required: true, maxLength: 12, pattern: /^\d{3}-\d{3}-\d{4}$/i} */}
              <Form.Control name="phoneNumber" type="tel" placeholder="Enter in the format ##########" ref={register({required: true, maxLength: 10, pattern: /^\d{10}$/i})} required />
              {errors.phoneNumber && <span>Please enter in the correct format: ##########</span>}
            </Form.Group>

            <Form.Group as={Col} controlId="birthday">
              <Form.Label>Patient's Birthday</Form.Label>

              <Form.Control name="birthday" placeholder="Enter in the format MM/DD/YYYY" ref={register} required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="mailingAddress">
              <Form.Label>Mailing Address</Form.Label>
              <Form.Control name="mailingAddress" placeholder="Enter your primary address" ref={register} required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="diagnosis">
                <Form.Label>Diagnosis</Form.Label>
                <Form.Check type="checkbox" name="diagnoseADHD" label="ADHD" ref={register} />
                <Form.Check type="checkbox" name="diagnoseAspergers" label="Asperger's Syndrome" ref={register}/>
                <Form.Check type="checkbox" name="diagnoseAustism" label="Autism" ref={register} />
                <Form.Check type="checkbox" name="diagnoseCerebralPalsy" label="Cerebral Palsy" ref={register} />
                <Form.Check type="checkbox" name="diagnoseDownSyndrome" label="Down Syndrome" ref={register} />
                <Form.Check type="checkbox" name="diagnosePDD" label="PDD" ref={register} />
                <Form.Check type="checkbox" name="diagnoseParkinsons" label="Parkinson's Disease" ref={register} />
                <Form.Check type="checkbox" name="diagnoseStroke" label="Stroke" ref={register} />
                <Form.Check type="checkbox" name="diagnoseADHD" label="ADHD" ref={register} />
                <Form.Check type="checkbox" name="diagnoseTraumaticBrainInjury" label="Traumatic Brain Injury" ref={register} />
              </Form.Group>

              <Form.Group controlId="fundingSource">
                <Form.Label>Funding Source</Form.Label>
                <Form.Check type="checkbox" name="fundingPrivatePay" label="Private Pay" ref={register} />
                <Form.Check type="checkbox" name="fundingPrivateInsurance" label="Asperger's Syndrome" ref={register}/>
                <Form.Check type="checkbox" name="diagnoseESAAccount" label="ESA Account" ref={register} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Row>
                <Form.Check type="checkbox" name="mondayDates" label="Monday" ref={register} mondayDate={mondayDate} onChange={() => setMondayDate(!mondayDate)}/>
                {mondayDate &&
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
              }
              </Form.Row>
              <Form.Row>
                <Form.Check type="checkbox" name="tuesdayDates" label="Tuesday" ref={register} tuesdayDate={tuesdayDate} onChange={() => setTuesdayDate(!tuesdayDate)}/>
                {tuesdayDate &&
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
              }
              </Form.Row>
              <Form.Row>
                <Form.Check type="checkbox" name="wednesdayDates" label="Wednesday" ref={register} wednesdayDate={wednesdayDate} onChange={() => setWednesdayDate(!wednesdayDate)}/>
                {wednesdayDate &&
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
              }
              </Form.Row>
              <Form.Row>
                <Form.Check type="checkbox" name="thursdayDates" label="Thursday" ref={register} thursdayDate={thursdayDate} onChange={() => setThursdayDate(!thursdayDate)}/>
                {thursdayDate &&
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
              }
              </Form.Row>
              <Form.Row>
                <Form.Check type="checkbox" name="fridayDates" label="Friday" ref={register} fridayDate={fridayDate} onChange={() => setFridayDate(!fridayDate)}/>
                {fridayDate &&
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
              }
              </Form.Row>


            </Col>


          </Form.Row>

          {/*
            Could do "required" instead of this
            {errors.exampleRequired && <span>This field is required</span>}
          */}

          <Form.Group controlId="notes">

          </Form.Group>


          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>

  )
}
