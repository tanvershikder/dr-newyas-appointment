import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [appoints,setApoint] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setApoint(data))
    },[])

    return (
        <div className='container'>
            <h3 className='m-5 fs-bold text-primary'>Get Appointment</h3>

            <div className='row ms-5'>
                {
                    appoints.map(appoint=><Service key={appoint.id} appoint={appoint}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;