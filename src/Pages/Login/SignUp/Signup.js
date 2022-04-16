import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();


    const logInUser = (event)=>{
        event.preventDefault();
        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;
    }
    return (
        <div>
          <div className='from-container'>
            <form onSubmit={logInUser}>
                <div>
                    <h3 className='from-title text-primary '>Please signUP</h3>
                    <div className="input-group">
                        <input type="text" ref={EmailRef} name="" id="" required placeholder='Enter your Name' />
                    </div>
                    <div className="input-group">
                        <input type="email" ref={EmailRef} name="" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input type="password" ref={PasswordRef} name="" id="" required placeholder='Enter Password' />
                    </div>
                    <div className="input-group">
                        <input type="password" ref={PasswordRef} name="" id="" required placeholder='Enter Confirm Password' />
                    </div>

                    {/* <p>
                        {
                            loading && <Spinner animation="border" variant="warning" />
                        }
                    </p> */}
                    <input className='from-submit bg-primary' type="submit" value="Login" />
                </div>
                <div className='d-flex justify-content-around'>
                    <div>
                        <Link className='form-link' to='/login'>signUp</Link>
                    </div>
                    {/* <div>
                        <button className='form-link btn btn-link' onClick={hendelForgetPssword}>Forget Password !</button>
                    </div> */}
                </div>

                {/* {errorElement} */}

                {/* <SocailLogin></SocailLogin>
                <ToastContainer /> */}

            </form>
        </div>
        </div>
    );
};

export default Signup;