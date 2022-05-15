import {GoogleMap,  Marker } from '@react-google-maps/api';
const mapContainerStyle = {
  height: "900px",
  width: "400px"
}

const center = {
  lat: 0,
  lng: -180
}

const position = {
  lat: 22.4690063,
  lng: 73.0763484
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