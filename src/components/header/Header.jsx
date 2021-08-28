import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";
import useUser from '../../hooks/useUser';

function Header({ title }) {

    const { logout, isLogged } = useUser();
    let history = useHistory()
    useEffect(() => {
        if (isLogged) history.push("/")
    }, [isLogged,history])

    const handleLogout = (e) =>{
        e.preventDefault();
        logout()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="w-100 d-flex flex-row justify-content-between p-2">
                    <h3>{ title }</h3>
                    <div className="d-flex flex-row">
                        <button type="button" onClick= { handleLogout } className="btn btn-dark me-2">Logout</button>
                        <h3> Admin </h3>   
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
