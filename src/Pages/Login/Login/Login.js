import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
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
        <div className='from-container'>
            <form onSubmit={logInUser}>
                <div>
                    <h3 className='from-title text-primary '>Please Login</h3>
                    <div className="input-group">
                        <input type="email" ref={EmailRef} name="" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input type="password" ref={PasswordRef} name="" id="" required placeholder='Enter Password' />
                    </div>

                    {/* <p>
                        {
                            loading && <Spinner animation="border" variant="warning" />
                        }
                    </p> */}
                    <input className='from-submit bg-primary' type="submit" value="Login" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <Link className='form-link' to='/signup'>Create new account !  </Link>
                    </div>
                    <div>
                        <button className='form-link btn btn-link' >Forget Password !</button>
                    </div>
                </div>

                {/* {errorElement} */}

                {/* <SocailLogin></SocailLogin>
                <ToastContainer /> */}

            </form>
        </div>
    );
};

export default Login;