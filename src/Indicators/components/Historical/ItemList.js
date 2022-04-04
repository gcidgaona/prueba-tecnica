import React from 'react'
import { View, Text } from 'react-native'
import { HStack, Flex, Spacer, Surface } from "@react-native-material/core";
import dayjs from 'dayjs';

export default function ItemList({detail, unity}) {
  return (
    <Surface
    id={detail.fecha}
    elevation={2}
    category="medium"
    style={{
        padding: 12,
        height: 50,
        marginVertical: 4
    }}>
        <Flex direction="row" self='center' style={{paddingHorizontal: 25}}>
            <View>
                <Text style={{color: '#3b82f6', fontSize: 16}}>{dayjs(detail.fecha).format('YYYY-MM-DD')}</Text>
            </View>
            <Spacer />
            <HStack spacing={4} items="center">
                <View>
                    <Text style={{fontSize: 15, color: "#2563eb"}}>{unity === 'Pesos' ? '$' : '%'}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18 }}>{detail.valor}</Text>
                </View>
            </HStack>
        </Flex>
</Surface>
  )
}