import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


export default function PatientForm() {
  const { register, handleSubmit, watch, errors } = useForm()
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

          <Form.Group>
            <Form.Label>Diagnosis</Form.Label>
            <Form.Check type="checkbox" name="diagnoseADHD" label="ADHD" />
            <Form.Check type="checkbox" name="diagnoseADHD" label="Asperger's Syndrome" />
            <Form.Check type="checkbox" name="diagnoseADHD" label="Autism" />
            <Form.Check type="checkbox" name="diagnoseADHD" label="Cerebral Palsy" />
          </Form.Group>

          {/*
            Could do "required" instead of this
            {errors.exampleRequired && <span>This field is required</span>}
          */}


          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>

  )
}
