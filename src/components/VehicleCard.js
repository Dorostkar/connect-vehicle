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
          <div className="image">
            <img src={this.props.media[0].url} />
          </div>
          <div className="detail">
            <h2 className="name"> {this.props.id}</h2>
            <span className="price">From {this.state.price}</span>
            <p className="description">{this.state.data.description}</p>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default VehicleCard;
