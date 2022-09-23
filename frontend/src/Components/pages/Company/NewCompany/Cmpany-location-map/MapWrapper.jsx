import React from 'react';
import CmpanyLocationMap from './Cmpany-location-map';
import AutocompleteLocation from '../../../Autocomplete-location/Autocomplete-location';
import './Cmpany-location-map.css'
const MapWrapper = () => {
    return (
        <div className="map-wrapper">
            <div className='mapwrapper'>
                <div className="map-title">
                    <h3>Select Copmpany Location</h3>
                </div>

                <AutocompleteLocation />
              

            </div>
        </div>
    );
}

export default MapWrapper;
