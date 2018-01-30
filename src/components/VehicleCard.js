import React, { Component } from 'react';
import { getVehicle } from '../api';
class VehicleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    // console.log('props', this.props);
    const url = this.props.url;
    getVehicle(url, data => {
      this.setState({
        data
      });
    });
  }

  render() {
    if (this.state.data) {
      console.log('state', this.state);
      return (
        <div className="VehicleCard">
          <img className="image" src={this.props.media[0].url} />
          <h3 className="name"> {this.props.media[0].name}</h3>
          <p className="price">From {this.state.data.price}</p>
          <p className="description">{this.state.data.description}</p>
        </div>
      );
    }
    return null;
  }
}

export default VehicleCard;
