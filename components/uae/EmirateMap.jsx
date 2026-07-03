'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './EmirateMap.module.css';

const PIN_COLORS = {
  attraction: '#c9a227',
  food: '#1f5c4d',
  hotel: '#0e1b2a',
};

const PIN_LABELS = {
  attraction: 'Attraction',
  food: 'Food',
  hotel: 'Hotel',
};

function createPinIcon(type) {
  const color = PIN_COLORS[type] ?? PIN_COLORS.attraction;

  return L.divIcon({
    className: styles.pinIcon,
    html: `<span style="display:block;width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #faf8f3;box-shadow:0 0 0 2px rgba(14,27,42,0.35);"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  });
}

export default function EmirateMap({ mapPins }) {
  const centerLat =
    mapPins.reduce((sum, pin) => sum + pin.lat, 0) / mapPins.length;
  const centerLng =
    mapPins.reduce((sum, pin) => sum + pin.lng, 0) / mapPins.length;

  return (
    <div className={styles.mapWrap}>
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={11}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapPins.map((pin) => (
          <Marker
            key={`${pin.name}-${pin.lat}-${pin.lng}`}
            position={[pin.lat, pin.lng]}
            icon={createPinIcon(pin.type)}
          >
            <Popup>
              <span className={styles.popupName}>{pin.name}</span>
              <span className={styles.popupType}>{PIN_LABELS[pin.type]}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <ul className={styles.legend} aria-label="Map legend">
        <li>
          <span
            className={styles.legendSwatch}
            style={{ backgroundColor: PIN_COLORS.attraction }}
          />
          Attraction
        </li>
        <li>
          <span
            className={styles.legendSwatch}
            style={{ backgroundColor: PIN_COLORS.food }}
          />
          Food
        </li>
        <li>
          <span
            className={styles.legendSwatch}
            style={{ backgroundColor: PIN_COLORS.hotel }}
          />
          Hotel
        </li>
      </ul>
    </div>
  );
}
