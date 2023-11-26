import React from 'react';
import {getDateTimeFromTimestamp} from "../../../utils";

const Info = ({location, isPrev = false}) => {
    return (
        <div className='location-data'>
            <h3>{isPrev ? 'Prev location' : 'Current location'}</h3>
            <p>{getDateTimeFromTimestamp(location.timestamp)}</p>
            <p>lat: {location.iss_position.latitude}</p>
            <p>long: {location.iss_position.longitude}</p>
        </div>
    );
};

export default Info;
