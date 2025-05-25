import * as React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import HeatmapLayer from "react-leaflet-heat-layer";
import "leaflet/dist/leaflet.css";

const addressPoints = [
  [11.2035, 122.5145, 1],
];

const Heatmap: React.FC = () => {
  return (

      <MapContainer dragging={false} zoomControl={false} className={`size-[600px] rounded-lg`} center={[11.2035, 122.5145]} zoom={9.4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatmapLayer
          fitBoundsOnLoad = {true}
          fitBoundsOnUpdate = {false}
          maxZoom={9.4}
          gradient={ {
          0.0: 'green',
          0.5: 'yellow',
          1.0: 'red'
        }}
          // latlngs={addressPoints.map((p) => [p[0], p[1]])}
          latlngs={addressPoints}
        />
        {/*<heatMap/>*/}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

  );
};

export default Heatmap;

