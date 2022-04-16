import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import caruso1 from '../../../images/Doctor caruson img/img1.jpg'
import caruso2 from '../../../images/Doctor caruson img/img2.jpg'
import caruso3 from '../../../images/Doctor caruson img/img3.jpg'

const Carusol = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div style={{ height: "500px" }} className="">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="d-block w-100"
                        src={caruso1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Wellcome to Dr Newyas page</h2>
                        <h4 className='text-warning'>You helth and happiness is our main destination </h4>
                        <p className='text-primary'>Stay healthy stay Happy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="d-block w-100"
                        src={caruso2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Wellcome to Dr Newyas page</h2>
                        <h4 className='text-warning'>You helth and happiness is our main destination </h4>
                        <p className='text-primary'>Stay healthy stay Happy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="d-block w-100"
                        src={caruso3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Wellcome to Dr Newyas page</h2>
                        <h4 className='text-warning'>You helth and happiness is our main destination </h4>
                        <p className='text-primary'>Stay healthy stay Happy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carusol;