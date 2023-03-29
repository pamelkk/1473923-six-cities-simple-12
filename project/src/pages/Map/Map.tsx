import { useEffect, useRef } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import URL_MARKER_CURRENT from '../../img/pin-active.svg';
import URL_MARKER_DEFAULT from '../../img/pin.svg';
import { offersType } from '../../types/types';

type MapProps = {
  points: offersType[];
  currentCard: offersType | object;
}

const Map = ({ points, currentCard }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, points);
  const markersGroup = useRef<LayerGroup>();

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [28, 40],
    iconAnchor: [14, 0],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [28, 40],
    iconAnchor: [14, 0],
  });

  useEffect(() => {
    if (map) {
      markersGroup.current?.remove();
      markersGroup.current = new LayerGroup().addTo(map);

      points.forEach((point) => {
        leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (point.city === currentCard.city)
            ? currentCustomIcon
            : defaultCustomIcon,
        })
          .addTo(markersGroup.current as LayerGroup);
        map.flyTo([point.city.location.latitude, point.city.location.longitude], point.city.location.zoom);
      });
    }
  }, [defaultCustomIcon, map, points, defaultCustomIcon, currentCard, currentCustomIcon]);

  return (
    <section style={{ height: '100%' }}
      ref={mapRef} className="cities__map map"
    >
    </section>
  );
};

export default Map;
