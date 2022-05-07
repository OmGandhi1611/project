import {GoogleMap,  Marker } from '@react-google-maps/api';
const mapContainerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: 0,
  lng: -180
}

const position = {
  lat: 28.7041,
  lng: 77.1025
}

const onLoad = marker => {
  console.log('marker: ', marker)
}
function GoogleMaps() {
    return (
      <>
  <GoogleMap
    id="marker-example"
    mapContainerStyle={mapContainerStyle}
    zoom={2}
    center={center}
  >
    <Marker
      onLoad={onLoad}
      position={position}
      
    />
  </GoogleMap>
      </>
    );
  }
  
  export default GoogleMaps;