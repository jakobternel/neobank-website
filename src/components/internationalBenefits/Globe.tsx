import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Globe, { GlobeMethods } from "react-globe.gl";
import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";

import worldData from "../../static/world";
import cityCoordinates from "../../static/cities";

interface ITransactionArc {
    id: string;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    initialGap: number;
}

interface ITransactionRing {
    id: string;
    lat: number;
    lng: Number;
    radius: number;
}

const GlobeModel: React.FC = ({}) => {
    const [countries, setCountries] = useState<
        FeatureCollection<Geometry, GeoJsonProperties>
    >({ type: "FeatureCollection", features: [] });
    const [transactionArcs, setTransactionArcs] = useState<ITransactionArc[]>(
        []
    );
    const [transactionRings, setTransactionRings] = useState<
        ITransactionRing[]
    >([]);

    const globeRef = useRef<GlobeMethods | undefined>(undefined);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().enableZoom = false;
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = -0.5;
            globeRef.current.pointOfView(
                { lat: 30, lng: 0, altitude: 2 },
                1000
            );
        }

        setCountries(
            worldData as unknown as FeatureCollection<
                Geometry,
                GeoJsonProperties
            >
        );

        const arcs: ITransactionArc[] = [];
        const rings: ITransactionRing[] = [];
        const count = 20;

        const getDistance = (
            start: [number, number],
            end: [number, number]
        ) => {
            const dLat = start[0] - end[0];
            const dLng = start[1] - end[1];

            return dLat * dLat + dLng * dLng;
        };

        const addRing = (lat: number, lng: number) => {
            rings.forEach((ring) => {
                if (ring.lat === lat && ring.lng === lng) {
                    return;
                }
            });

            rings.push({
                id: crypto.randomUUID(),
                lat: lat,
                lng: lng,
                radius: Math.random() * 3 + 1.5,
            });
        };

        for (let i = 0; i < count; i++) {
            const from =
                cityCoordinates[
                    Math.floor(Math.random() * cityCoordinates.length)
                ];

            let to = null;
            do {
                to =
                    cityCoordinates[
                        Math.floor(Math.random() * cityCoordinates.length)
                    ];
            } while (
                to === from ||
                getDistance(from, to) < 2500 ||
                getDistance(from, to) > 10000
            );

            addRing(to[0], to[1]);
            addRing(from[0], from[1]);

            arcs.push({
                id: crypto.randomUUID(),
                startLat: from[0],
                startLng: from[1],
                endLat: to[0],
                endLng: to[1],
                initialGap: Math.random(),
            });
        }

        setTransactionRings(rings);
        setTransactionArcs(arcs);
    }, []);

    const colorInterpolator = (t: number) => `rgba(56, 189, 248, ${Math.sqrt(1-t)})`;

    return (
        <Globe
            ref={globeRef}
            polygonsData={countries.features}
            polygonCapColor={() => "rgba(0, 0, 0, 0)"}
            polygonSideColor={() => "rgba(0, 0, 0, 0)"}
            polygonStrokeColor={() => "#878EA2"}
            polygonAltitude={0.005}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={true}
            width={600}
            height={600}
            globeMaterial={new THREE.MeshStandardMaterial({ color: "#0F1D45" })}
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.6}
            hexPolygonColor={() => "#5171A1"}
            arcsData={transactionArcs}
            arcColor={() => "#60A5FA"}
            arcStroke={0.5}
            arcDashLength={0.3}
            arcDashGap={1}
            arcDashInitialGap={(d) => (d as ITransactionArc).initialGap}
            arcDashAnimateTime={2000}
            arcAltitude={(arc) => {
                const { startLat, endLat, startLng, endLng } = arc as ITransactionArc;
                const dx =
                    endLat -
                    startLat;
                const dy =
                    endLng -
                    startLng;
                const distance = Math.hypot(dx, dy);

                const minAlt = 0.05;
                const maxAlt = 0.25;
                const scaled = Math.min(
                    maxAlt,
                    Math.max(minAlt, distance * 0.01)
                );
                return scaled;
            }}
            ringsData={transactionRings}
            ringColor={() => colorInterpolator}
            ringAltitude={0.005}
            ringMaxRadius="radius"
        />
    );
};

export default GlobeModel;
