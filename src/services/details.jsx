import axios from "axios";

export const GetRealTime = async ({simbolo, intervalo}) =>  {
    // console.log(simbolo, intervalo);
        const res = await axios.get("https://api.twelvedata.com/time_series", {
            params: {
                symbol : simbolo,
                interval: intervalo,
                apikey: '4f8f3ad5dd2b4ba49b6c8ca632af332f'
            }
        })
    const data = await res.data.values
    return data;
}


export const GetBetweenDates = async ({simbolo, intervalo,startDate, endDate}) =>  {
    // console.log(simbolo, intervalo, startDate, endDate);
    const res = await axios.get("https://api.twelvedata.com/time_series?apikey=4f8f3ad5dd2b4ba49b6c8ca632af332f", {
        params: {
            symbol : simbolo,
            interval: intervalo,
            start_date: startDate,
            end_date: endDate
        }
    })
    const data = await res.data.values
    // console.log(data);
    return data;
}