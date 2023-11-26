import React from 'react';
import Sidebar from "../sidebar";
import Location from "../location";
import './style/index.css'

const Main = () => {
    return (
        <div className='main'>
            <Sidebar/>
            <Location/>
        </div>
    );
};

export default Main;
