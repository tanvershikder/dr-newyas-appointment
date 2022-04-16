import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ appoint }) => {
    const { name, place, time, details, appointment_free, img } = appoint;
    return (
        <div className='col-md-4 mt-5'>
            <Card style={{ width: '20rem' }} className="rounded shadow bg-primary">
                <Card.Img variant="top" src={img}/>
                <Card.Body className='cardbody'>
                    <Card.Title>
                        <h3 className='name'>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h5 >Appointment Time : <span className='text-primary fw-normal'>{time}</span></h5>
                        <p>Place : {place}</p>
                        <p>Appointment-free: <span className='text-danger fw-bold'>{appointment_free}</span></p>
                    </Card.Text>
                    <Button variant="">Take an Appointment</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;