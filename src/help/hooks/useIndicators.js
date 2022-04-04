import React, {useEffect, useState} from 'react'
import axios from "axios";

const BASE_API_URL = 'https://mindicador.cl/api'
const useIndicators = (idIndicator) => {

  const [loading, setLoading] = useState(false)
  const [dataResponse, setDataResponse] = useState(null)

  const BUILD_API_URL = idIndicator !== '' ? BASE_API_URL + '/' + idIndicator : BASE_API_URL
  useEffect(() => {
    setLoading(true)
    axios.get(`${BUILD_API_URL}`).then((response) => {
        setDataResponse(response.data)
        setLoading(false)
    });
}, [idIndicator])

  return {loading, dataResponse}
}

export default useIndicators