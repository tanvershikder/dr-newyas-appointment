import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import SocailLogin from '../SocailLogin/SocailLogin';

const Login = () => {
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [showpass,setShowpass] = useState(false);

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    // user log in with email and password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    

    //password reset or forgot password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );


      if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const logInUser = (event) => {
        event.preventDefault();
        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    


    const hendelForgetPssword = async () => {
        const email = EmailRef.current.value
        if(email){
            await sendPasswordResetEmail(email);
            toast("email sent");
        }
        else{
            toast('enter your email')
        }
        

    }
    
    
    return (
        <div className='from-container'>
            <form onSubmit={logInUser}>
                <div>
                    <h3 className='from-title text-primary text-center'>Please Login</h3>
                    <div className="input-group">
                        <input type="email" ref={EmailRef} name="" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input ref={PasswordRef} type={showpass ? "text" : "password"} name="" id="" required placeholder='Enter Password' />
                    </div>
                    
                    <input type="checkbox" name="" id="" onClick={()=>setShowpass(!showpass)}/> <span>see password</span>

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

                

                <SocailLogin></SocailLogin>
                <ToastContainer /> 

            </form>
        </div>
    );
};

export default Login;