import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react'

/*
Google Maps support for the app
*/

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.mapConfig = this._getMapConfig(this.props.google);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.google !== this.props.google) {
      this.mapConfig = this._getMapConfig(newProps.google);
    }
  }

  _getMapConfig(google) {
    let zoom = 14;
    let lat = 39.774929;
    let lng = -112.419416;
    const center = { lat, lng };
    return Object.assign({}, {
      initialCenter: center,
      zoom: zoom,
      google: google
    });
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };

    return (
      <div style={style}>
        <Map {...this.mapConfig} />
      </div>
    )
  }
}

// export class Map extends React.Component {
//   componentDidMount() {
//     this.loadMap();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }

//   loadMap() {
//     console.log('loadMap', this.props)
//     if (this.props && this.props.google) {
//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig);

//       console.log('map ->', this.map);
//     }
//   }

//   render() {
//     return (
//       <div ref='map'>
//         Loading map...
//       </div>
//     )
//   }
// }

export default GoogleApiWrapper({
  apiKey: "AIzaSyCM2-HdiEngSELW0kkSVRi__BpNCV5MG-Y"
})(Container)
