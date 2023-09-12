import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { fetchApod } from 'api/apods';
import { Apod } from 'types';
import ApodListItem from '@comp/ApodListItem';

const ApodDetails = () => {
    const { date } = useLocalSearchParams();
    const [apod, setApod] = useState<Apod>(null);

    useEffect(() => {
        fetchApod(date).then(setApod);
    }, []);

    if (!apod) {
        return <ActivityIndicator />
    }

    return (
        <View>
            <ApodListItem apod={apod} />
        </View>
    )
}

export default ApodDetails