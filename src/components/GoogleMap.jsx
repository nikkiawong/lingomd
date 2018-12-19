import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newDoctors = this.props.newDoctors;
    const isValid = this.props.isValid;

    let bounds;

    if (!isValid) {
      const points = [
        { lat: 42.02, lng: -77.01 },
        { lat: 42.03, lng: -77.02 },
        { lat: 41.03, lng: -77.04 },
        { lat: 42.05, lng: -77.02 }
      ];

      bounds = new this.props.google.maps.LatLngBounds();
      for (let i=0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
    } else {
      const points = [];

      newDoctors.map((doctor) => {
        let point = doctor.center;
        points.push(point);
      })

      bounds = new this.props.google.maps.LatLngBounds();
      for (let i=0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
    }

    const style = {
      width: '425px',
      height: '700px',
      overflow: 'hidden',
      transform: 'translate(-50% -50%)',
    }
    const divStyle = {
      width: '425px',
      height: '700px',
      marginLeft: '15px'
    }
    const hiddenDivStyle = {
      display: 'none'
    }

    if (isValid) {
      return (
        <div style={divStyle}>
        <div>
        <Map
        google={this.props.google}
        zoom={11}
        style={style}
        onClick={this.onMapClicked}
        initialCenter={newDoctors[0].center}
        bounds={bounds}
        >
        {newDoctors.map((doctor) =>
          <Marker
          key={doctor.key}
          name={doctor.name}
          position={doctor.center}
          />
        )}
        </Map>
        </div>
        </div>
      );
    } else {
      return (
        <div style={hiddenDivStyle}>
        <div>
        <Map
        google={this.props.google}
        zoom={11}
        style={style}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 42.39,
          lng: -72.52
        }}
        bounds={bounds}
        >
        {newDoctors.map((doctor) =>
          <Marker
          key={doctor.key}
          name={doctor.name}
          position={doctor.center}
          />
        )}
        <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
        <h1>Name</h1>
        </div>
        </InfoWindow>
        </Map>
        </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    newDoctors: state.newDoctors,
    isValid: state.isValid
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GEOCODE_API_KEY
})(MapContainer))
