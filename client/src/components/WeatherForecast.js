import {
  Container,
  Navbar,
  Row,
  Col,
  Card,
  Button,
  Form
} from 'react-bootstrap'
import React, { useState } from 'react'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import '../utils/css/forecast.css'
import WeatherData from './WeatherData'

function WeatherForecast() {
  const [message, setMessage] = useState('')
  const [otherCity, setOtherCity] = useState(false)
  const [weatherData, setWeatherData] = useState(false)
  const [form, setForm] = useState({})
  const [data, setData] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    if (value === 'Other') setOtherCity(true)
    else setOtherCity(false)

    setForm({
      ...form,
      [name]: value
    })
  }
  const handleChangeOtherCity = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeDays = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
    if (!form.city) setMessage('Please select one city')
    else if (!form.forecastdays) setMessage('Please select the number of days')
    else if (form.city === 'Other' && !form.otherCity)
      setMessage('Please select at least one city')
    else if (form.city && form.forecastdays) {
      axios
        .post(`http://localhost:3001/weather/data`, {
          city: form.otherCity ? form.otherCity : form.city,
          forecastdays: form.forecastdays
        })
        .then(res => {
          if (!res.data)
            setMessage(
              'Unable to retreive weather data for the selected location'
            )
          else {
            setData(res.data)
            setWeatherData(true)
          }
        })
    }
  }
  return (
    <div className='container-bg'>
      <Navbar sticky='top' className='navbar-top'>
        <Container>
          <Navbar.Brand>
            <img src={''} alt='logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>Weather Forecast</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='centered-container'>
        <Row className='justify-content-md-center'>
          <Col sm={8}>
            {weatherData ? (
              <WeatherData data={data}></WeatherData>
            ) : (
              <Card className='card-container'>
                <Card.Body>
                  <Form onSubmit={e => handleSubmit(e)}>
                    <Row className='text-center'>
                      <Card.Title className='text-select'>
                        Select one city and get weather data
                      </Card.Title>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Select
                            onChange={e => handleChange(e)}
                            name='city'
                          >
                            <option>Select one city</option>
                            <option value='Minneapolis'>Minneapolis</option>
                            <option value='Jackson'>Jackson</option>
                            <option value='Kansas'>Kansas</option>
                            <option value='New York'>New York</option>
                            <option value='Other'>Other</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Forecast Days</Form.Label>
                          <Form.Select
                            onChange={e => handleChangeDays(e)}
                            name='forecastdays'
                            className='days-select'
                          >
                            <option>Select number of days</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      {otherCity ? (
                        <Row className='other-container'>
                          <Col sm={12}>
                            <Form.Group>
                              <Form.Label>Other</Form.Label>
                              <Form.Control
                                type='text'
                                placeholder='Other City'
                                onChange={e => handleChangeOtherCity(e)}
                                name='otherCity'
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      ) : (
                        <div></div>
                      )}
                      <Col sm={12} className='col-spacing'>
                        <Button variant='primary' type='submit' className='btn'>
                          Submit
                        </Button>
                      </Col>
                      <Card.Text className='message-error'>{message}</Card.Text>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WeatherForecast
