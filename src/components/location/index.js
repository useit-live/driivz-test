import React, {useContext, useMemo} from 'react';
import {locationHistoryContext, selectedLocationContext} from "../../App";
import Info from "./info";
import MapTracker from "../map";
import useSWR from "swr";
import {fetcher, ISS_URL} from "../../utils";
import './style/index.css';

const Loading = () => <div className='location'>loading...</div>;
const Error = () => <div className='location'>failed to load</div>;

const Location = () => {
    const {data, error, isLoading} = useSWR(ISS_URL, fetcher, {refreshInterval: 5000});
    const {setLocationHistory} = useContext(locationHistoryContext);
    const {selectedLocation} = useContext(selectedLocationContext);

    const onHandleAddData = (data) => {
        setLocationHistory(prevHistory => [...prevHistory, {id: crypto.randomUUID(), ...data}]);
    };

    const mapCenter = useMemo(() => ({
        lat: parseFloat(data?.iss_position?.latitude),
        lng: parseFloat(data?.iss_position?.longitude)
    }), [data]);

    if (isLoading) return <Loading/>;
    if (error) return <Error/>;

    return (
        <div className='location'>
            <MapTracker center={mapCenter}/>
            {selectedLocation ? <Info location={selectedLocation} isPrev/> : <Info location={data}/>}
            <button
                className='add-button'
                onClick={() => onHandleAddData(data)}
                aria-label="Add Location"
            >
                +
            </button>
        </div>
    );
};

export default React.memo(Location);
