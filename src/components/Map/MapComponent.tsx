"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icons
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function MapComponent() {
    const [mounted, setMounted] = useState(false);
    const position: [number, number] = [48.8566, 2.3522]; // Paris center

    // Simulated route
    const route: [number, number][] = [
        [48.8566, 2.3522],
        [48.8580, 2.3540],
        [48.8600, 2.3550]
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-full w-full bg-slate-100 flex items-center justify-center animate-pulse">Chargement de la carte...</div>;

    return (
        <div className="h-full w-full relative z-0">
            <MapContainer center={position} zoom={15} className="h-full w-full" zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                    <Popup>
                        Votre position actuelle.
                    </Popup>
                </Marker>

                {/* Destination Marker */}
                <Marker position={route[route.length - 1]} icon={icon}>
                    <Popup>
                        Destination choisie.
                    </Popup>
                </Marker>

                {/* Accessible Route Line */}
                <Polyline positions={route} color="#10b981" weight={6} opacity={0.8} />
            </MapContainer>
        </div>
    );
}
