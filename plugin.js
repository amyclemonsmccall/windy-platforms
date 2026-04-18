import L from 'leaflet';

const platforms = [
    { name: "NGOMA", lat: -6.1333, lon: 11.0333 },
    { name: "AGOGO", lat: -6.1167, lon: 10.8500 },
    { name: "ARO", lat: -6.0667, lon: 11.3500 },
    { name: "SOYO", lat: -6.1167, lon: 12.3167 },
    { name: "LUANDA", lat: -8.8000, lon: 13.2667 }
];

export default {
    onopen: ({ map }) => {

        platforms.forEach(p => {

            const marker = L.marker([p.lat, p.lon]).addTo(map);

            marker.bindTooltip(p.name, {
                permanent: true,
                direction: 'top',
                offset: [0, -10],
                className: 'platform-label'
            });

        });

    }
};