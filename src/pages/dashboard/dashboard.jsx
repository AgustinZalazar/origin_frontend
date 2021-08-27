import Header from '../../components/header/Header'
import  InputAutocomplete from '../../components/autocomplete/InputAutocomplete';
import useActions, {useGetBDActions, useInsertBDActions }  from '../../hooks/useActions';

export default function Dashboard () {
    const {loading} = useActions()
    const { acciones }  = useGetBDActions(1)
    const HandleClick = (e) =>{
        useInsertBDActions(e)
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
                        <InputAutocomplete handleClick={ HandleClick }/>
                        <button type="button" className="btn btn-dark me-2" onClick={HandleClick}>Agregar Simbolo</button>
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
                                        <td>{item.nombre}</td>
                                        <td>{item.moneda}</td>
                                        <td><button className="btn btn-link"> Eliminar</button></td>
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
