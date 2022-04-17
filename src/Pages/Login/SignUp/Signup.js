import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';

const Signup = () => {
    const NameRef = useRef('');
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const ConfiremPassRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const [errorElement,setErrorElement] = useState()

    // email password authentication 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });

    //updating profile
    
    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);

    if(user){
        console.log(user);
    }
    
    const logInUser = async (event)=>{
        event.preventDefault();
        const name = NameRef.current.value;
        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;
        const confirmpass = ConfiremPassRef.current.value;

        if(password !== confirmpass){
            setErrorElement(error)
            return
        }
        createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName : name});
        navigate('/home')        
    }

    

    return (
        <div>
          <div className='from-container'>
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
                        <input type="password" ref={PasswordRef} name="" id="" required placeholder='Enter Password' />
                    </div>
                    <div className="input-group">
                        <input type="password" ref={ConfiremPassRef} name="" id="" required placeholder='Enter Confirm Password' />
                    </div>

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

                {/* <SocailLogin></SocailLogin>
                <ToastContainer /> */}

            </form>
        </div>
        </div>
    );
};

export default Signup;