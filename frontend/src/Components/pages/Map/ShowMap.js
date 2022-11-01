import React, { Component } from "react";
import ReactDOM from "react-dom";
import MapContainer from "./Map";
import Sidebar from "../../Sidebar/Sidebar";

import "./styles.css";


const data = [
  {
    name: "Amazone",
    title: "Amazone",
    lat: 30.695202,
    lng: 76.854172,
    id: 1
  },
  {
    name: "mohali",
    title: "mohali",
    lat: 21.2608,
    lng: 78.808885,
    id: 1
  },
  {
    name: "Flipcart",
    title: "Flipcart",
    lat: 30.75,
    lng: 76.78,
    id: 2
  },
  {
    name: "Creed",
    title: "Creed",
    lat: 30.7399738,
    lng: 76.7567368,
    id: 3
  }
];



const CityList = props => {
  return (
    <div className="CompanyName-companyMap">
      
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index} onClick={e => props.onClick(e, item)}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

class ShowMap extends Component {
  state = {
    selectedItem: { lat: 0, lng: 0 }
  };

  showInfo(e, selectedItem) {
    this.setState({ selectedItem: selectedItem });
    console.log(selectedItem);
  }

  render() {
    return (

      <div className="c">
        
        <CityList items={data} onClick={this.showInfo.bind(this)} />
        <MapContainer
          center={{ lat:21.2608, lng: 78.808885 }}
          zoom={5}
          data={data}
          selectedItem={this.state.selectedItem}
        />
      </div>
    );
  }
}
export default ShowMap
const rootElement = document.getElementById("root");
ReactDOM.render(<ShowMap/>, rootElement);
