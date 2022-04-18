import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h5>Difference Between Authorization and Authentication ?</h5>
            <p><strong>Ans :</strong><br />
                Authentication: <br />
                ১। এই সেকশন এ ইউজারের পরিচয় যাচাই করা হই এবং তাকে access দেওয়া হয়<br />
                ২। এখানে ইউজারকে যাচাই করা হয়<br />
                ৩। এইটা authorization process এর পূর্বে যাচাই করা হয়<br />
                ৪। 	Authentication যাচাই করে আক্সেস চাওয়া ব্যাক্তি ইউজার কিনা <br /><br />

                Authorization :<br />
                ১। authorization process চলাকালীন authorities ইউজারকে পরীক্ষা করে রিসোস আক্সেস করার আনুমতি দেয় <br />
                ২। ইউজার valid কিনা তা এখানে যাচাই করা হয়<br />
                ৩। এইটা authentication এর পরে চালানো হয়<br /><br />

            </p>
            <h5>why we use Firebase ?</h5>
            <p><strong>Ans :</strong></p>
            <p>
                Firebase provides a seamless way to integrate with Google analytics using which the user behavioral data can be acquired, and insightful information can be generated through it.
                <br />
                এইটা ভালো একটা চয়েচ যদি কেউ কোন  একটি একেবারে নতুন অ্যাপ্লিকেশন তৈরী করতে চান বা scratch এ বিদ্যমান একটি পুরাত্ন অ্যাপ্লিকেশন পুনরায় পরিবর্তনের পরিকল্পনা করেন ।
            </p>
            <h5>without firebase authentication what else we can use ?</h5>
            <p><strong>Ans : mongodb and Passport.js</strong></p>


 

            <h5>without authentication what we can do with firebase ?   </h5>
            <p><strong>Ans :</strong></p>
            <p>
                1/ for web hosting. <br />
                2/ for web game development.<br />
                3/ for android app development.<br />
                4/ for use cloude firebase store .<br />
                5/ for ios application.<br />
                6/ for ML .<br />
            </p>
        </div>
    );
};

export default Blogs;