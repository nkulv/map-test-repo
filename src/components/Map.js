import React from 'react';
var ReactDOM = require('react-dom');
import {GoogleApiWrapper} from 'google-maps-react'

/*
Google Maps support for the app
*/

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      console.log(mapRef);
      const node = ReactDOM.findDOMNode(mapRef);
      console.log(node);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCM2-HdiEngSELW0kkSVRi__BpNCV5MG-Y"
})(Container)
