import React, { useState, useEffect } from "react";
import MapWrapper from "../components/MapWrapper";
import Router, { useRouter } from "next/router";
import ViewerComponent from "../components/ViewerComponent";
import getImageCoordinates from "../lib/mapillary";
import { Map } from "../components/map";
import Button from "../components/reusable/Button";
import styles from "../styles/Guessing.module.scss";
import Overlay from "../components/reusable/Overlay";
import { calculateDistance } from "../lib/distance";
import Countdown from "../components/Countdown";
import Endscreen from "../components/Endscreen";
import Head from "next/head";

export default function Page({ accessToken, imageId, coordinates }) {
    const [page, setPage] = useState("mapillary");

    const [data, setData] = useState({ show: false });

    const [selectedCoordinates, setSelectedCoordinates] = useState(null);

    const onClick = (event) => {
        event.preventDefault();
        setPage(page === "mapillary" ? "map" : "mapillary");
    };

    const onSelectLocation = (event) => {
        event.preventDefault();

        if (!selectedCoordinates) return;

        // setSelectedCoordinates
        console.log("selectedCoordinates", selectedCoordinates);
        // coordinates
        console.log("coordinates", coordinates.geometry.coordinates);

        // calculate distance

        let distance = calculateDistance(
            selectedCoordinates[0],
            coordinates.geometry.coordinates[0],
            selectedCoordinates[1],
            coordinates.geometry.coordinates[1],
        );

        console.log("distance", distance + " m");

        const data = {
            distance,
            show: true,
        };

        setPage("endscreen");
        setData(data);
    };

    return (
        <main className={styles["container_" + page]} onKeyDown={onClick}>
            <Head>
                <title>GeoGuessr</title>
            </Head>
            <Countdown seconds={3.5} />

            <Endscreen
                show={data.show}
                data={data}
                className={styles.endscreen_container}
                retryClick={() => {
                    setPage("map");
                    let _data = data;
                    _data.show = false;
                    setData(data);
                }}
            />

            <div className={styles.mapillary_container}>
                <ViewerComponent accessToken={accessToken} imageId={imageId} />
            </div>
            <div className={`${styles.map_container}`}>
                <Map
                    refCoordinates={(coordinates) =>
                        setSelectedCoordinates(coordinates)
                    }
                />
            </div>

            {page !== "endscreen" && (
                <div className={styles.middle_buttons}>
                    <Button
                        onClick={onSelectLocation}
                        title="Ort auswählen"
                        icon="location_on"
                    />
                </div>
            )}

            {page !== "endscreen" && (
                <div className={styles.right_buttons}>
                    <Button onClick={onClick} title="Karte" icon="map" />
                </div>
            )}
        </main>
    );
}

export async function getServerSideProps() {
    const imageIds = [
        "498763468214164",
        "207693204499600",
        "457576372533427",
        "1960511437444668",
        "137588811859150",
        "798023094167537",
        "291528779338397",
        "469105011037391",
        "195516162394153",
        "498763468214164",
        "207693204499600",
        "457576372533427",
        "1960511437444668",
        "137588811859150",
        "798023094167537",
        "291528779338397",
        "469105011037391",
        "195516162394153",
        "679829420486349",
        "996413345493018",
        "641761354835518",
        "535206994151123",
        "481580559839799",
        "1245209449269052",
    ];

    let randomImage = imageIds[Math.floor(Math.random() * imageIds.length)];

    let coordinates = await getImageCoordinates(randomImage).then((res) =>
        res.json(),
    );

    return {
        props: {
            accessToken:
                "MLY|4924225717699056|d997e3f37309c2f4c26231bbe09ea306",
            imageId: randomImage,
            coordinates,
        },
    };
}
