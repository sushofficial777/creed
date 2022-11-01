import React,{useEffect, useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './Autocomplete-location.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

const AutocompleteLocation = () => {
//for autocomplete input search
const [address, setAddress] = useState("");
const [markercenter, setmarkercenter] = useState([0, 0]);
const [coord, setCoord] = useState({
  lat: null,
  long: null
});
const handleSelect = async (value) => {
  const results = await geocodeByAddress(value);
  const latlng = await getLatLng(results[0]);
  setAddress(value);
  setCoord(latlng);
  setmarkercenter([latlng.lat, latlng.lng]);
};

const [selectedValue, setSelectedValue] = useState("");
const handleChange = (event) => {
  setSelectedValue(event.target.value);
};





  return (
  <>
  <div className="auto-wrapper">
  <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading
                    }) => (
                      <div className="search-city">
                        <input
                          {...getInputProps({ placeholder: "Type address" })}
                        />

                        <div className="places-options">
                          {loading ? <div>...loading</div> : null}
                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#d1d1d1"
                                : "white"
                            };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  style
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                  </PlacesAutocomplete>

                  </div>

  </>
  );

}

export default AutocompleteLocation;
