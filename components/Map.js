import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.YOUR_MAPBOX_ACCESS_TOKEN;

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      outerWidth: '100%',
      outerHeight: '100%',
      lng: -70.9,
      lat: 42.35,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/farzin-khaledi/cld0hf7gv000j14pg10xwm3g0',
      center: [lng, lat],
      zoom: zoom,
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className="w-full h-full">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className="w-full h-full" ref={this.mapContainer} />
      </div>
    );
  }
}
