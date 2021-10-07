import React from 'react';
import Loader from '../assets/loading.gif';
import './styles/Loading.css';

const Loading=()=>{

    return <div className="load">
        <img src={Loader} alt="loader" />
    </div>
}
export default Loading;
