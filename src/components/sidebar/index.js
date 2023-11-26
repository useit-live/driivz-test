import React, {useContext, useState} from 'react';
import Card from "../card";
import {locationHistoryContext} from "../../App";
import './style/index.css'

const SideBar = () => {
    const {locationHistory} = useContext(locationHistoryContext)
    const [searchParam, setSearchParam] = useState('');
    const handleDateChange = (e) => {
        setSearchParam(e.target.value);
    };

    return (
        <div className="sidebar">
            <input
                style={{height: '30px'}}
                type="text"
                placeholder="Type lat or lng"
                value={searchParam}
                onChange={handleDateChange}
            />
            {locationHistory?.filter((item) => item.iss_position.latitude.includes(searchParam)
                || item.iss_position.longitude.includes(searchParam))
                .map((location) => (
                    <Card
                        key={location.id}
                        cardData={location}
                    />
                ))}
        </div>
    );
};

export default SideBar;
