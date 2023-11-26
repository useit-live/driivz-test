import React, {useContext} from 'react';
import {locationHistoryContext, selectedLocationContext} from "../../App";
import Info from "./info";
import MapTracker from "../map";
import useSWR from "swr";
import {fetcher, ISS_URL} from "../../utils";
import './style/index.css'

const Location = () => {
    const {data, error, isLoading} = useSWR(ISS_URL, fetcher, {refreshInterval: 5000})
    const {locationHistory, setLocationHistory} = useContext(locationHistoryContext);
    const {selectedLocation} = useContext(selectedLocationContext);
    const onHandleAddData = (data) => {
        setLocationHistory(() => [...locationHistory, {id: crypto.randomUUID(), ...data}])
    }

    if (error) return <div className='location'>failed to load</div>
    if (isLoading) return <div className='location'>loading...</div>
    if (selectedLocation) return <Info location={selectedLocation} isPrev/>

    return (
        <div className='location'>
            <MapTracker
                center={{
                    lat: parseFloat(data.iss_position.latitude),
                    lng: parseFloat(data.iss_position.longitude)
                }}
            />
            <Info location={data}/>
            <button
                className='add-button'
                onClick={() => onHandleAddData(data)}>
                +
            </button>
        </div>
    );
};

export default Location;
