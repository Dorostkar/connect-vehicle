import React, { Component } from 'react';
import { getData } from '../api';

import VehicleCard from './VehicleCard';
export default class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getData(data => {
      this.setState({
        data
      });
    });
  }

  render() {
    if (this.state.data) {
      //   console.log(this.state.data.vehicles);
      return (
        <div className="VehicleList">
          {this.state.data.vehicles.map(vehicle => {
            return <VehicleCard key={vehicle.id} {...vehicle} />;
          })}
        </div>
      );
    }

    return <h1>Loading...</h1>;
  }
}
