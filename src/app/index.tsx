import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";


import ApodListItem from "components/ApodListItem";

import FullScreenImage from "@comp/FullScreenImage";
import { useEffect, useState } from "react";
import { Apod } from "../types";
import { fetchApods } from "../api/apods";


export default function Page() {
    const [apods, setApods] = useState<Apod[]>(null);
    const [activePicture, setActivePicture] = useState<string>(null);

    useEffect(() => {
        fetchApods().then(setApods);
    }, [])

    if (!apods) {
        return <ActivityIndicator />
    }
    return (
        <>
            <FlatList
                data={apods}
                renderItem={({ item }) => <ApodListItem apod={item} onImagePress={() => setActivePicture(item.url)} />}
            />
            <FullScreenImage url={activePicture} onClose={() => setActivePicture(null)} />
        </>
    );
}

const styles = StyleSheet.create({});
