import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    const innerDivStyle = {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '1px solid blue'
    }
    return (
      <div style={divStyle}>
        <div>
          <Map
          google={this.props.google}
          zoom={14}
          style={style}
          onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
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

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GEOCODE_API_KEY
})(MapContainer)
