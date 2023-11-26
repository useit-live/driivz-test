import React from 'react';
import GoogleMapReact from 'google-map-react';
import iss_icon from '../../assets/iss-icon.png'
import './style/index.css'

const MapTracker = ({center, zoom}) => {
    return (
        <div className='iss-map'>
            <h5>Online map</h5>
            <GoogleMapReact
                bootstrapURLKeys={{key: ""}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <img
                    className='iss-icon'
                    alt="iss-icon"
                    src={iss_icon}
                    lat={center.lat}
                    lng={center.lng}
                />
            </GoogleMapReact>
        </div>
    );
};

MapTracker.defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 0
}

export default MapTracker;
