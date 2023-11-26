import React from 'react';
import GoogleMapReact from 'google-map-react';
import iss_icon from '../../assets/iss-icon.png'
import './style/index.css'

const Marker = () => (
    <div>
        <img
            className='iss-icon'
            alt="iss-icon"
            src={iss_icon}
        />
    </div>
);
const MapTracker = ({center}) => {
    return (
        <div className='iss-map'>
            <h5>Online map</h5>
            <GoogleMapReact
                bootstrapURLKeys={{key: ""}}
                center={center}
                defaultZoom={0}
            >
                <Marker
                    lat={center.lat}
                    lng={center.lng}
                />
            </GoogleMapReact>
        </div>
    );
};

export default MapTracker;
