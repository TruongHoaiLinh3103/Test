import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Color from './HOC/Color';
const Home = () => {
    const navigate = new useNavigate();
    let {params} = new useParams();
    return (
        <>
            <div>Xin chào các bạn, Mình tên là {params}</div>
            <button onClick={() => navigate('/about')}>Click on About</button>
        </>
    );
};

export default Color(Home);