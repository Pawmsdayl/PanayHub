import * as React from "react";
  import {MapContainer, TileLayer} from "react-leaflet";
import {useMap} from 'react-leaflet/hooks';
import HeatmapLayer from "react-leaflet-heat-layer";
import "leaflet/dist/leaflet.css";
import {latLng, LatLng} from "leaflet";
import {useContext} from "react";
import {ProvenancesContext} from "@/contexts/ProvenancesContext.tsx";
import {locations} from "@/utils.ts";



const center: LatLng = latLng(11.2035, 122.5145);

// const addressPoints = [
//   center,
// ];

function ChangeView(){
  const map = useMap();
  map.scrollWheelZoom.disable()
  map.setZoom(9.4);
  map.panTo(center);
  map.dragging.disable();
  // map.zoomControl.remove();
  return null;

}

const Heatmap: React.FC = () => {

  const provenances = useContext(ProvenancesContext);

  const latLngList : LatLng[]= [];

  provenances.map((provenance) => {

    if (locations[provenance] !== undefined)
      latLngList.push(locations[provenance]);
  })

  console.log("provenances", latLngList);


  return (

    <MapContainer
      // dragging={false}
      //       zoomControl={false}
            className={`size-[600px] z-40 rounded-lg`}
            // center={[11.2035, 122.5145]}
            // zoom={9.4}
            // scrollWheelZoom={false}
    >
      <ChangeView/>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatmapLayer
        // fitBoundsOnLoad = {true}
        // fitBoundsOnUpdate = {false}
        maxZoom={9.4}
        gradient={ {
          0.0: 'green',
          0.5: 'yellow',
          1.0: 'red'
        }}
        latlngs={latLngList}
      />
      {/*<heatMap/>*/}
      {/*<Marker position={[51.505, -0.09]}>*/}
      {/*  <Popup>*/}
      {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
      {/*  </Popup>*/}
      {/*</Marker>*/}
    </MapContainer>

  );
};

export default Heatmap;

