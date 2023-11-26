import React, {useContext, useState, useMemo} from 'react';
import Card from "../card";
import {locationHistoryContext} from "../../App";
import './style/index.css';

const SideBar = () => {
    const {locationHistory} = useContext(locationHistoryContext);
    const [searchParam, setSearchParam] = useState('');

    const handleSearchChange = (e) => {
        setSearchParam(e.target.value);
    };

    const filteredLocations = useMemo(() =>
            locationHistory?.filter((item) =>
                item.iss_position.latitude.includes(searchParam)
                || item.iss_position.longitude.includes(searchParam)
            ),
        [searchParam, locationHistory]
    );

    return (
        <div className="sidebar">
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search by Latitude or Longitude"
                    value={searchParam}
                    onChange={handleSearchChange}
                    aria-label="Search Locations"
                />
            </div>
            <div className='card-container'>
                {filteredLocations.map((location) => (
                    <Card
                        key={location.id}
                        cardData={location}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
