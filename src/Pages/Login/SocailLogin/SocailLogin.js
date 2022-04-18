import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocailLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    // sign in with google 
    const [signInWithGoogle, googleUser, googleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);


    let erroMassage ;

    if (googleLoading || facebookLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (GoogleError || facebookError || githubError) {
        erroMassage = <p className='text-danger'>Error: {GoogleError?.message} {facebookError?.message} {githubError?.message}</p>
    }

    if (googleUser || facebookUser || githubUser) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            {erroMassage}
            <div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                    <p className='mt-3 px-2'>Or</p>
                    <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                </div>
                
                <button onClick={() => signInWithGoogle()} className='from-google my-2' type="submit">
                    <div className='img-google'>
                        <span><small><img src={google} alt="" /></small> Sign Up with Google</span>
                    </div>
                </button>
                <button onClick={() => signInWithFacebook()} className='from-google my-2' type="submit">
                    <div className='img-google'>
                        <span><small><img style={{ width: "30px" }} src={facebook} alt="" /></small> Sign Up with FaceBook</span>
                    </div>
                </button>
                <button  onClick={()=>signInWithGithub()} className='from-google my-2' type="submit">
                    <div className='img-google'>
                        <span><small><img src={github} alt="" /></small> Sign Up with Github</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;