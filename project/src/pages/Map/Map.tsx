import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
//import URL_MARKER_CURRENT from '../../img/pin-active.svg';
import URL_MARKER_DEFAULT from '../../img/pin.svg';
import { offersType } from '../../types/types';

type MapProps = {
  points: offersType[];
}

const Map = ({ points }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, points);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [28, 40],
    iconAnchor: [14, 0],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [28, 40],
  //   iconAnchor: [14, 0],
  // });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section style={{ height: 'auto' }}
      ref={mapRef} className="cities__map map"
    >
    </section>
  );
};

export default Map;
