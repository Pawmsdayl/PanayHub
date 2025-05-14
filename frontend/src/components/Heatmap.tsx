// import * as L from "leaflet";
// import {useEffect, useRef, useState} from "react";
// // import "leaflet.heat";
//
// export function Heatmap() {
//   // const mapContainer = useRef<HTMLDivElement>(null!);
//   // // const [map, setMap] = useState({});
//   //
//   // useEffect(() => {
//   //   const map = L.map(mapContainer.current, {attributionControl: false}).setView([51.505, -0.09], 13);
//   //   const zoom = 10;
//   //   const x = 110;
//   //   const y = 100;
//   //   // L.tileLayer(`https://api.mapbox.com/styles/v1/${id}/tiles/${z}/${x}/${y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`, {
//   //   L.tileLayer(`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`, {
//   //     maxZoom: 18,
//   //     id: 'mapbox/streets-v11',
//   //
//   //   }).addTo(map);
//   //
//   //   map.remove();
//   // }, []);
//   //
//   // return (
//   //   <div>
//   //     <div id="map" className={`w-[500px] h-[500px]`}
//   //          ref={el => mapContainer.current = el}
//   //     >
//   //
//   //     </div>
//   //   </div>
//   // );
//   useEffect(() => {
//     var map = L.map('map').setView([51.505, -0.09], 13);
//
//
//     //   const zoom = 10;
//     //   const x = 110;
//     //   const y = 100;
//
//     L.tileLayer('https://tile.openstreetmap.org/100/100/100.png', {
//       maxZoom: 19,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);
//
//     map.remove();
//
//   }, []);
//   return (
//     <div>
//       <div id="map" className={`w-[500px] h-[500px]`}
//            ref={el => el}
//       >
//       </div>
//     </div>
//   );
//
// }
//
// export default Heatmap;
// import * as React from 'react';
// import { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
//
// import 'mapbox-gl/dist/mapbox-gl.css';
//
// const Heatmap = () => {
//   const mapContainerRef = useRef<mapboxgl.Map|null> (null);
//   const mapRef = useRef(null);
//
//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoiaGFrdTIwMDIiLCJhIjoiY21hbzRleHJmMDM2ODJqb2hvOGZ2bjh6aCJ9.aGsSj7j1oJwZ_IRCarosCw';
//
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/dark-v11',
//       center: [-120, 50],
//       zoom: 2
//     });
//
//     mapRef.current.on('load', () => {
//       mapRef.current.addSource('earthquakes', {
//         type: 'geojson',
//         data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
//       });
//
//       mapRef.current.addLayer(
//         {
//           id: 'earthquakes-heat',
//           type: 'heatmap',
//           source: 'earthquakes',
//           maxzoom: 9,
//           paint: {
//             // Increase the heatmap weight based on frequency and property magnitude
//             'heatmap-weight': [
//               'interpolate',
//               ['linear'],
//               ['get', 'mag'],
//               0,
//               0,
//               6,
//               1
//             ],
//             // Increase the heatmap color weight weight by zoom level
//             // heatmap-intensity is a multiplier on top of heatmap-weight
//             'heatmap-intensity': [
//               'interpolate',
//               ['linear'],
//               ['zoom'],
//               0,
//               1,
//               9,
//               3
//             ],
//             // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
//             // Begin color ramp at 0-stop with a 0-transparancy color
//             // to create a blur-like effect.
//             'heatmap-color': [
//               'interpolate',
//               ['linear'],
//               ['heatmap-density'],
//               0,
//               'rgba(33,102,172,0)',
//               0.2,
//               'rgb(103,169,207)',
//               0.4,
//               'rgb(209,229,240)',
//               0.6,
//               'rgb(253,219,199)',
//               0.8,
//               'rgb(239,138,98)',
//               1,
//               'rgb(178,24,43)'
//             ],
//             // Adjust the heatmap radius by zoom level
//             'heatmap-radius': [
//               'interpolate',
//               ['linear'],
//               ['zoom'],
//               0,
//               2,
//               9,
//               20
//             ],
//             // Transition from heatmap to circle layer by zoom level
//             'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
//           }
//         },
//         'waterway-label'
//       );
//
//       mapRef.current.addLayer(
//         {
//           id: 'earthquakes-point',
//           type: 'circle',
//           source: 'earthquakes',
//           minzoom: 7,
//           paint: {
//             // Size circle radius by earthquake magnitude and zoom level
//             'circle-radius': [
//               'interpolate',
//               ['linear'],
//               ['zoom'],
//               7,
//               ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
//               16,
//               ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
//             ],
//             // Color circle by earthquake magnitude
//             'circle-color': [
//               'interpolate',
//               ['linear'],
//               ['get', 'mag'],
//               1,
//               'rgba(33,102,172,0)',
//               2,
//               'rgb(103,169,207)',
//               3,
//               'rgb(209,229,240)',
//               4,
//               'rgb(253,219,199)',
//               5,
//               'rgb(239,138,98)',
//               6,
//               'rgb(178,24,43)'
//             ],
//             'circle-stroke-color': 'white',
//             'circle-stroke-width': 1,
//             // Transition from heatmap to circle layer by zoom level
//             'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1]
//           }
//         },
//         'waterway-label'
//       );
//     });
//   }, []);
//
//   return <div id="map" ref={mapContainerRef} style={{ height: '100%' }}></div>;
// };
//
// export default Heatmap;
import * as React from "react";
import { useEffect, useRef } from "react";
import mapboxgl, { GeoJSONSourceRaw } from "mapbox-gl";

interface MovingObject {
  id: number;
  name: string;
  coordinates: number[];
}

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const movingObjects: MovingObject[] = [
    // Define your moving objects here
  ];

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiaGFrdTIwMDIiLCJhIjoiY21hbzRleHJmMDM2ODJqb2hvOGZ2bjh6aCJ9.aGsSj7j1oJwZ_IRCarosCw";

    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [-74.0060152, 40.7127281],
        zoom: 5,
        maxZoom: 15,
      });


      // Add your custom markers and lines here

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      className={`h-[500px] w-[500px]`}
      // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    />
  );
};

export default MapComponent;

