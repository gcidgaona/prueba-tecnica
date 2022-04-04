import React, { useEffect, useState, memo } from 'react'
import { FlatList } from 'react-native'
import SpinnerLoading from '../../../ui/SpinnerLoading';
import ItemList from './ItemList';
import useIndicators from '../../../help/hooks/useIndicators';

const HistoricalIndicators = ({ route }) => {
    const { idIndicator } = route.params
    const {loading, dataResponse} = useIndicators(idIndicator)

    const [unity, setUnity] = useState('')
    const [info, setInfo] = useState([])

    useEffect(() => {
        if(dataResponse){
            const { serie, unidad_medida } = dataResponse
            setInfo(serie)
            setUnity(unidad_medida)
        }
    }, [dataResponse])

    if (loading) return <SpinnerLoading />
    return (
        <FlatList
            data={info}
            style={{ backgroundColor: 'white', paddingHorizontal: 14 }}
            renderItem={({ item }) => { return <ItemList key={item.fecha} detail={item} unity={unity} /> }}
            keyExtractor={item => item.fecha}
        />
    )
}

export default memo(HistoricalIndicators)