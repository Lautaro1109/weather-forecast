import { Card, Row, Col, CardGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import '../utils/css/forecast.css'



function WeatherData(props) {

    console.log(props.data)
    return (
        <div>
            <Card className='card-container-data'>
                <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Button
                                onClick={() => { window.location = '/weather' }}
                                className='back-link'
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className='back-icon'>Back</span>
                            </Button>
                        </Col>
                        <Col md={10} className='text-center'>
                            <h3>{props.data.data.length} Days Forecast for {props.data.city_name}</h3>
                        </Col>
                    </Row>
                    <Row className='row-data-container'>
                        <Col>
                            <CardGroup>
                                {props.data.data.map((obj) => (
                                    <Card key={obj.moonrise_ts} className='card-obj'>
                                        <Card.Img variant="top" src={require(`../utils/icons/${obj.weather.icon}.png`)} height={"280px"} />
                                        <Card.Body>
                                            <Card.Title>Date: {obj.datetime}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Min Temp: {obj.low_temp}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-muted">Max Temp: {obj.high_temp}</Card.Subtitle>
                                            <Card.Text>
                                                {obj.weather.description}
                                            </Card.Text>
                                            <Card.Subtitle >Sunrise {new Date(obj.sunrise_ts).getHours()}:{new Date(obj.sunrise_ts).getMinutes()}:{new Date(obj.sunrise_ts).getSeconds()}</Card.Subtitle>
                                            <Card.Subtitle className='subtitle'>Sunset {new Date(obj.sunset_ts).getHours()}:{new Date(obj.sunset_ts).getMinutes()}:{new Date(obj.sunset_ts).getSeconds()}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </CardGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        </div >
    )
}

export default WeatherData