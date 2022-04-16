import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
        <div>
            <h3 className='text-warning'>Dr. NewYas</h3>
        </div>
        <div className='sub_footer'>
            <div>
                <p>About our Dr. NewYas</p>
                <p>Read our Blogs</p>
                <p>Sign Up to do get Offer</p>
                <p>Add your comment</p>
            </div>
            <div>
                <p>get Helps</p>
                <p>Read FAQs</p>
                <p>View All Appointments</p>
            </div>
        </div>
    </div>
    );
};

export default Footer;