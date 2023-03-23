import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import URL_MARKER_CURRENT from '../../img/pin-active.svg';
import URL_MARKER_DEFAULT from '../../img/pin.svg';
import { GenreCity, offersType } from '../../types/types';

type MapProps = {
  city: GenreCity;
  points: offersType[] | null;
}

const Map = ({city, points}: MapProps): JSX.Element => {
  const mapRef = useRef(null).current;
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.city.location.latitude,
            lng: point.city.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section style={{ height: '500px' }}
      ref={mapRef} className="cities__map map"
    >
    </section>
  );
};

export default Map;
