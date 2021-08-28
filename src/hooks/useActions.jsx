import { useEffect, useState } from 'react'
import axios from "axios";

export default function useActions () {
    const [finalData, setFinalData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
            setLoading(true)
            const res = await axios.get("https://api.twelvedata.com/stocks?source=docs&exchange=NYSE")
            const data = await res.data.data
            if(isMounted) setFinalData(data)
            setLoading(false)
        }
        getData()
        return () => { isMounted = false };
    }, [])
    return {
        acciones: finalData,
        loading
    }
}

export function useGetBDActions (id_User) {
    const [acciones, setAcciones] = useState(null)
    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
            const res = await axios.get("http://localhost:8080/actionsByUser", {
                        params: {
                          id_user: id_User
                         }
            })
            const data = await res.data
            if(isMounted) setAcciones(data)
        }
        getData()
        return () => { isMounted = false };
    }, [id_User])
    return {
        acciones: acciones
    }
}





