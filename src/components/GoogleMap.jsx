import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newDoctors = this.props.newDoctors;
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

const mapStateToProps = state => {
  return {
    newDoctors: state.newDoctors
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GEOCODE_API_KEY
})(MapContainer))
