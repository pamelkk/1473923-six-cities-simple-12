import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { GenreCity } from '../types/types';

type useMapProps = {
  mapRef: HTMLInputElement | null;
  city: GenreCity;
}

function useMap({mapRef, city}: useMapProps) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
