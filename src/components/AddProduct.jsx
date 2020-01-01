import React from 'react';
import { Link } from 'react-router-dom';

export default function AddProduct({ TurnOnOff, productName, mode, flag, index }) {

    return (
        <div>
            <Link to="/room"><button onClick={()=>TurnOnOff(!flag, index)} style={{ backgroundColor: mode }}>{productName}</button></Link>
        </div>
    )
}

