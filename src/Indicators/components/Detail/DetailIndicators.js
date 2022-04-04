import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Surface, Flex, Spacer, VStack, HStack } from "@react-native-material/core";
import dayjs from 'dayjs';
import ChartHistoricalIndicators from './ChartHistoricalIndicators';
import useIndicators from '../../../help/hooks/useIndicators';
import WithLoading from '../../../help/hoc/withLoading'

const Detail = ({detail, lastDate, lastValue, serie}) => {
 return (
    <VStack spacing={6} style={{ padding: 12 }}>
    <Surface
        elevation={6}
        category="medium"
        style={{
            padding: 12,
            height: 80,
        }}
    >
        <Flex direction="row">
            <HStack spacing={6} items="center">
                <View>
                    <Text style={{fontSize: 20, color: "#2563eb"}}>{detail.unidad_medida === 'Pesos' ? '$' : '%'}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 30 }}>{lastValue}</Text>
                </View>
            </HStack>
            <Spacer />
            <VStack items="end">
                <View>
                    <Text style={{color: "black"}}>{detail.nombre}</Text>
                </View>
                <View>
                    <Text>{detail.unidad_medida}</Text>
                </View>
                <View>
                    <Text>{dayjs(lastDate).format('YYYY-MM-DD')}</Text>
                </View>
            </VStack>
        </Flex>
    </Surface>
    <View>
        <ChartHistoricalIndicators serie={serie} />
    </View>
</VStack>

 )
}

const DetailWithLoading = WithLoading(Detail);


export default function DetailIndicators({ route }) {

    const { idIndicator } = route.params
    const {loading, dataResponse} = useIndicators(idIndicator)

    const [lastValue, setLastValue] = useState(0)
    const [lastDate, setLastDate] = useState('')
    const [serie, setSerie] = useState([])
    const [detail, setDetail] = useState({})


    
    useEffect(() => {
        if(dataResponse){
            const { nombre, serie, unidad_medida } = dataResponse
            let info = {
                nombre,
                unidad_medida
            }
            let getLastValue = serie[0].valor
            let getLastDate = serie[0].fecha
            setLastValue(getLastValue)
            setLastDate(getLastDate)
            setDetail(info)
            setSerie(serie)
        }
    
    }, [dataResponse])
    
    return(
        <DetailWithLoading isLoading={loading} lastValue={lastValue} lastDate={lastDate} serie={serie} detail={detail}/>
    )
}