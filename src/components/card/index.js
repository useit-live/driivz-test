import React, {memo, useContext} from 'react';
import {getDateTimeFromTimestamp} from "../../utils";
import {locationHistoryContext, selectedLocationContext} from "../../App";
import './style/index.css'

const Card = ({cardData}) => {
    const {selectedLocation, setSelectedLocation} = useContext(selectedLocationContext)
    const {locationHistory, setLocationHistory} = useContext(locationHistoryContext);
    const onHandleSelectCard = (cardData) => {
        setSelectedLocation(selectedLocation && selectedLocation.id === cardData.id ? null : cardData);
    }

    const onHandleRemoveCard = (cardData) => {
        setLocationHistory(locationHistory.filter((location) => location.id !== cardData.id))
    }

    return (
        <div
            className={selectedLocation?.id === cardData.id ? 'card active' : 'card'}
            onClick={() => onHandleSelectCard(cardData)}
        >
            <p>{getDateTimeFromTimestamp(cardData.timestamp)}</p>
            <p>lat: {cardData.iss_position.latitude}</p>
            <p>long: {cardData.iss_position.longitude}</p>
            {selectedLocation?.id === cardData.id &&
                <button onClick={() => onHandleRemoveCard(cardData)}>
                    remove
                </button>}
        </div>
    );
};

export default memo(Card);
