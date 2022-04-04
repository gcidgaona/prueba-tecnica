import dayjs from 'dayjs'
import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { Surface, ActivityIndicator } from "@react-native-material/core";
import { LineChart } from "react-native-chart-kit";

export default function ChartHistoricalIndicators({ serie }) {
    const [labelsChart, setLabelsChart] = useState([])
    const [dataChart, setDataChart] = useState([])
    useEffect(() => {
        let getLastTenValues = serie.slice(0, 10)
        let labelsValues = getLastTenValues.map(item => (dayjs(item.fecha).format('YYYY-MM-DD'))).reverse()
        let dataValues = getLastTenValues.map(item => (item.valor)).reverse()
        setLabelsChart(labelsValues)
        setDataChart(dataValues)
    }, [serie])

    return (
        <Surface elevation={6}>
            {
                dataChart.length < 1
                    ? <ActivityIndicator size="large" color="#3b82f6" />
                    :
                    <LineChart
                        data={{
                            labels: labelsChart,
                            datasets: [
                                {
                                    data: dataChart,

                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 40}
                        height={450}
                        verticalLabelRotation={90}
                        chartConfig={{

                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`

                        }}
                        bezier
                        style={{
                            padding: 12,
                            backgroundColor: 'white'
                        }}
                    />
            }
        </Surface>
    )
}