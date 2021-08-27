import axios from "axios";
import { useState} from 'react'

export default function Acciones() {
    const [Data, setData] = useState([])
    return axios.get("https://api.twelvedata.com/stocks?source=docs&exchange=NYSE")
    .then((res) => {
        console.log(res)
        setData(res.data)
        if(res.statusText !== 'OK') throw new Error('Response is not OK')
        return Data
    })
}