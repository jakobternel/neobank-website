import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Globe, { GlobeMethods } from "react-globe.gl";
import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";

import worldData from "../../static/world"; // Imnport geojson of world data
import cityCoordinates from "../../static/cities"; // Import list of focus cities to be used to generate lines

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

/**
 * Component for the THREE.JS Globe model simulating transactions with lines
 *
 * @param size Size of globe to be displayed. Default size value of 600 set on InternationalBenefits component
 */
const GlobeModel: React.FC<{ size: number }> = ({ size }) => {
    const [countries, setCountries] = useState<
        FeatureCollection<Geometry, GeoJsonProperties>
    >({ type: "FeatureCollection", features: [] }); // GeoJson of countries to be displayed on map
    const [transactionArcs, setTransactionArcs] = useState<ITransactionArc[]>(
        []
    ); // Array of arcs to be shown on map between two cities
    const [transactionRings, setTransactionRings] = useState<
        ITransactionRing[]
    >([]); // Array of rings to be displayed on map for cities with transactions

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

        // Set countries data to be GeoJson data from worldData
        setCountries(
            worldData as unknown as FeatureCollection<
                Geometry,
                GeoJsonProperties
            >
        );

        const arcs: ITransactionArc[] = []; // Temporary array of transaction arcs
        const rings: ITransactionRing[] = []; // Temporary array of transaction rings
        const count = 20; // Number of arcs to be displayed on map

        // Get distance between start and end coordinates
        const getDistance = (
            start: [number, number],
            end: [number, number]
        ) => {
            const dLat = start[0] - end[0];
            const dLng = start[1] - end[1];

            return dLat * dLat + dLng * dLng;
        };

        // Add ring to temporary array
        const addRing = (lat: number, lng: number) => {
            // Check that no existing ring exists in temporary array to ensure only one ring exists for given lat, lng coordinates
            rings.forEach((ring) => {
                if (ring.lat === lat && ring.lng === lng) {
                    return;
                }
            });

            rings.push({
                id: crypto.randomUUID(),
                lat: lat,
                lng: lng,
                radius: Math.random() * 3 + 1.5, // Generate random ring radius between 1.5 and 4.5
            });
        };

        // Generate number of transactions specified in count variable
        for (let i = 0; i < count; i++) {
            // Get random from city coordinates
            const from =
                cityCoordinates[
                    Math.floor(Math.random() * cityCoordinates.length)
                ];

            let to = null;
            // Get random to city coordinates
            do {
                to =
                    cityCoordinates[
                        Math.floor(Math.random() * cityCoordinates.length)
                    ];
            } while (
                // Ensure from and to city coordinates are different and are more than 2500 distance units apart, but less than 10000 apart. If maximum distance is not specified, lines between distant points will cut weirdly through globe
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
                initialGap: Math.random(), // Generate random initial gap to add random start time to arc animation
            });
        }

        setTransactionRings(rings); // Set transaction rings state with temporary array
        setTransactionArcs(arcs); // Set transaction arcs state with temporary array
    }, []);

    // Handle fade out of rings on ring edges instead of cutting off outermost ring instantly on animation
    const colorInterpolator = (t: number) =>
        `rgba(56, 189, 248, ${Math.sqrt(1 - t)})`;

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
            width={size}
            height={size}
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
                // Dynamically set max altitude of arc depending on distance of start and end points. Close points will arc closer to the globe and far points will arc further from globe
                const { startLat, endLat, startLng, endLng } =
                    arc as ITransactionArc;
                const dx = endLat - startLat;
                const dy = endLng - startLng;
                const distance = Math.hypot(dx, dy);

                const minAlt = 0.05; // Minimum altitude of arc
                const maxAlt = 0.25; // Maximum altitide of arc
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
