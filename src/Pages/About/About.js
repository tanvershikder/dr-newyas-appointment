import React from 'react';
import myImg from '../../images/myimg.jpg'
import './About.css'

const About = () => {
    return (
        <div className=''>

            <h3 className='mt-5 text-primary welcome'>Hi Welcome to my About page !!</h3>

            <div className='img'>
                <img className='container mt-3 image' src={myImg} alt="" />
            </div>
            <h4 className='myName welcome'>Tanver Sikdar</h4>

            <div className='container'>
                <h4>About Me :</h4>
                <p>I am tanver sikdar , i am a student of computer technology in Chattogram Polytechnic
                   .<br></br>I a student of Programming Hero Batch 5 . My home town is Kishoregonj but the purpose of <br></br>my educattion i stay at Chattogram . and i was addicted in fb use but now i overcome this bad habbit by learling Programming.
                    </p>

                <h5 className='text-primary'>My Goal :</h5>
                <p>  My goal is too simple, that is i am want to be professional full stack Developer . <br></br> And thats why i am trying to learn everythin too deeply .<br></br> And i thik i will be full stack developer one day by the help of God (Allah).</p>
                <p className='text-warning'>stay Cool , Stay Happy </p>

            </div>
        </div>
    );
};

export default About;