import React from 'react';
import doctor from '../../../images/Doctor caruson img/doctor.jpg'
import './Success.css'

const Success = () => {
    return (
        <div className='container aboutse'>
            <h3 className='mt-5 text-center appoint'>Hi This is Dr. NewYas </h3>
            <div className='d-md-flex'>
                <div className='me-md-3 images'>
                    <img className='mt-md-5 text-center doctorimg'  src={doctor} alt="" />
                </div>
                <div className='mt-md-5  doctorcontainer'>
                    <h3 className='text-info'>About Dr. NewYas</h3>

                    <p>
                        Hi i am Doctor newYas
                    </p>
                    <p className='fw-bold text-primary'>
                        I medicine specalist . i give the service my patient too honestly . There are seacail offer for poor patient . i give free service for them . I am heart specailist . And the CEO of Mohakhali Genarel Hospital ,Dhaka ,Bangladesh.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Success;