import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:"450px",width:"100%",textAlign:"center"}}>
            <Spinner animation="border" variant="primary"  />
        </div>
    );
};

export default Loading;