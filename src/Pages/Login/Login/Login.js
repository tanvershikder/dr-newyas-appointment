import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    // user log in with email and password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //password reset or forgot password
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );

    const logInUser = (event) => {
        event.preventDefault();
        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate("/home")
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const hendelForgetPssword = async () => {
        const email = EmailRef.current.value
        if(email){
            await sendPasswordResetEmail(email);
            console.log("email sent");
        }
        else{
            console.log('enter your email')
        }
        

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

                    <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning"  /></div>
                        }
                    </p>
                    {errorElement}
                    <input className='from-submit bg-primary' type="submit" value="Login" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <Link className='form-link' to='/signup'>Create new account !  </Link>
                    </div>
                    <div>
                        <button className='form-link btn btn-link' onClick={hendelForgetPssword}>Forget Password !</button>
                    </div>
                </div>

                

                {/* <SocailLogin></SocailLogin>
                <ToastContainer /> */}

            </form>
        </div>
    );
};

export default Login;