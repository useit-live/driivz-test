import React from 'react';
import {getDateTimeFromTimestamp} from "../../../utils";

const Info = ({location, isPrev = false}) => {
    return (
        <div className='location'>
            <div className='location-data'>
                <p>{isPrev ? 'Prev location' : 'Current location'}</p>
                <p>{getDateTimeFromTimestamp(location.timestamp)}</p>
                <p>lat: {location.iss_position.latitude}</p>
                <p>long: {location.iss_position.longitude}</p>
            </div>
        </div>
    );
};

export default Info;
