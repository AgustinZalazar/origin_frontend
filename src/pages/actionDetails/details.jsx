import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header'
import DatePicker from "react-datepicker";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {GetRealTime , GetBetweenDates} from '../../services/details';

import "react-datepicker/dist/react-datepicker.css";

function Details() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    let data = null
    let interval = null
    const {symbol} = useParams()
    

    const handleOnClick = () => {
        if (document.getElementById('realtime').checked) {
            interval = document.getElementById('interval').value
            data = GetRealTime({
                simbolo: symbol, 
                intervalo : interval
            })
            console.log(data);
        } else if(document.getElementById('historic').checked){
            interval = document.getElementById('interval').value
            data = GetBetweenDates({
               simbolo: symbol, 
               intervalo: interval,
               startDate,
               endDate 
            })
            console.log(data);
        }
    }
    const options = {
        title: {
          text: symbol
        },
        xAxis: {
            title:{
                text: 'Intervalo'
            },
        },
        yAxis: {
            title: {
                text: 'Cotizacion'
            },

        },
        series: [{
          data: data?data.open : null
        }]
    }
    return (
        <>
            <Header title={symbol} />
            <div className="container">
                <div className="row">
                    <div className="mt-5 col-lg-6">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="time" id="realtime" value="option1" defaultChecked />
                            <label className="form-check-label" htmlFor="realtime">
                            Tiempo real
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="time" id="historic" value="option2" />
                            <label className="form-check-label" htmlFor="historic">
                                Historico
                            </label>
                            </div>
                        <div className="mb-3 form-check flex-row">
                            <label className="form-check-label" htmlFor="startDate"> Fecha hora desde</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />
                        </div>
                        <div className="mb-3 form-check flex-row">
                            <label className="form-check-label" htmlFor="endDate"> Fecha hora hasta</label>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect dateFormat="Pp" />
                        </div>
                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="interval"> Intervalo</label>
                            <select className="form-select" aria-label="Default select example" id="interval">
                                <option defaultValue>Open this select menu</option>
                                <option value="1min">1 - min</option>
                                <option value="5min">5 - min</option>
                                <option value="10min">10 - min</option>
                            </select>
                        </div>
                        <button className="btn btn-dark" onClick={handleOnClick}>Graficar realtime</button>
                    </div>
                    <div className="mt-5 col-lg-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details

