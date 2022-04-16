import React from 'react';
import { Link } from 'react-router-dom';

const ChackAppoints = () => {
    return (
        <div>
          <div className='from-container'>
            <form >
                <div>
                    <h3 className='from-title text-primary '>Take an Appointment</h3>
                    <div className="input-group">
                        <input type="text" name="" id="" required placeholder='Enter your Name' />
                    </div>
                    <div className="input-group">
                        <input type="test"  name="" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input type="text"  name="" id="" required placeholder='Enter Your Address' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="" id="" required placeholder='Enter Contact Number' />
                    </div>
                    <input className='from-submit bg-primary' type="submit" value="Confirm" />
                </div>
                

            </form>
        </div>
        </div>
    );
};

export default ChackAppoints;