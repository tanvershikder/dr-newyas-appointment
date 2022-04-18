import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import SocailLogin from '../SocailLogin/SocailLogin';

const Signup = () => {
    const NameRef = useRef('');
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const ConfiremPassRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const [errorElement, setErrorElement] = useState()

    let from = location.state?.from?.pathname || "/";

    // email password authentication 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //updating profile

    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);

    if (user) {
        console.log(user);
        navigate(from, { replace: true })
    }

    const logInUser = async (event) => {
        event.preventDefault();
        const name = NameRef.current.value;
        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;
        const confirmpass = ConfiremPassRef.current.value;

        if (password !== confirmpass) {
            setErrorElement(error)
            return
        }
        createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        
    }

    const [showPass, setShowPass] = useState(false);


    return (
        <div>
            <div className='from-container App'>
                <form onSubmit={logInUser}>
                    <div>
                        <h3 className='from-title text-primary text-center'>Please signUp</h3>
                        <div className="input-group">
                            <input type="text" ref={NameRef} name="" id="" required placeholder='Enter your Name' />
                        </div>
                        <div className="input-group">
                            <input type="email" ref={EmailRef} name="" id="" required placeholder='Enter your Email' />
                        </div>
                        <div className="input-group">
                            <input className='relative' type={showPass ? "text" : "password"} ref={PasswordRef} name="" id="" required placeholder='Enter Password' />
                            
                        </div>

                        <div className="input-group">
                            <input type={showPass ? "text" : "password"} ref={ConfiremPassRef} name="" id="" required placeholder='Enter Confirm Password' />
                        </div>
                        <input type="checkbox" name="" id="" onClick={() => setShowPass(!showPass)} /> <span>see all password</span>

                        <p>
                            {
                                loading || updating && <Spinner animation="border" variant="warning" />
                            }
                        </p>
                        <input className='from-submit bg-primary' type="submit" value="SignUp" />
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div>
                            Already have an account ? <Link className='form-link' to='/login'>LogIn</Link>
                        </div>
                    </div>

                    {errorElement}

                    <SocailLogin></SocailLogin>

                </form>
            </div>
        </div>
    );
};

export default Signup;