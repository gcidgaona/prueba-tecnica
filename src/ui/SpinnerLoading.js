import React from 'react'
import { ActivityIndicator, Flex } from "@react-native-material/core";

export default function SpinnerLoading() {
  return (
    <Flex center fill>
        <ActivityIndicator size="large" color="#3b82f6" />
    </Flex>
  )
}