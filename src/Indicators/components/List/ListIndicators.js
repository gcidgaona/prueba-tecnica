import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import useIndicators from '../../../help/hooks/useIndicators'
import ItemIndicators from './ItemIndicators'
import SpinnerLoading from '../../../ui/SpinnerLoading'


export default function ListIndicators({ navigation }) {

    const [indicators, setIndicators] = useState([])
    const { loading, dataResponse } = useIndicators('')

    useEffect(() => {
        if (dataResponse) {
            let toArray = Object.values(dataResponse).slice(3)
            setIndicators(toArray)
        }
    }, [dataResponse])


    if (loading) return <SpinnerLoading />
    return (
        <FlatList
            data={indicators}
            renderItem={({ item }) => { return <ItemIndicators detail={item} navigation={navigation} /> }}
            keyExtractor={item => item.codigo}
        />
    )
}