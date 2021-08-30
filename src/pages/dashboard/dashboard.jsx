import Header from '../../components/header/Header'
import  InputAutocomplete from '../../components/autocomplete/InputAutocomplete';
import {Link} from 'react-router-dom'
import useActions, {useGetBDActions }  from '../../hooks/useActions';
import { GetAcciones , DeleteAccion} from '../../services/acciones';
// import useUser from '../../hooks/useUser';

export default function Dashboard () {
    const {loading} = useActions()
    // const {id_User} = useUser()
    // console.log(id_User);
    const { acciones }  = useGetBDActions(1)
    let item = null;
    const HandleOnClick = (e) =>{
        item  = e;
    }

    const sendData = (item) =>{
        GetAcciones({
            nombre: item.name,
            moneda: item.currency,
            simbolo: item.symbol,
            id_user: 1
        })
    }

    return (
        <>
            <Header title="Mis acciones" />
            <div className="container">
            {loading?
                    <p>Loading</p>
    
                : 
                <>
                    <div className="d-flex flex-row py-5">
                        <h3>Simbolo</h3>
                        <InputAutocomplete handleClick={ HandleOnClick }/>
                        <button type="button" className="btn btn-dark me-2" onClick={() => sendData(item)}>Agregar Simbolo</button>
                    </div>
            
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Simbolo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Moneda</th>
                            <th scope="col"> - </th>
                            </tr>
                        </thead>
                        <tbody>
                            {acciones&&
                                acciones.map((item, i) =>(
                                    <tr key={ i }>
                                        <th scope="row">{item.simbolo}</th>
                                        <td><Link to={"/details/" + item.simbolo}> {item.nombre} </Link></td>
                                        <td>{item.moneda}</td>
                                        <td><button className="btn btn-link" onClick={()=> DeleteAccion(item.id_acciones)}> Eliminar</button></td>
                                    </tr> 
                                ))
                            }
                            
                        </tbody>
                    </table>
                </>
            }      
            </div>
        </>
    )
}
