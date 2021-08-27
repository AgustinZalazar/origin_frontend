import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import useUser from '../../hooks/useUser'
import logo from '../../assets/logo.svg';
import  './login.css'

export const Login = () =>{
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const { login, isLogged } = useUser();
    let history = useHistory()

    useEffect(() => {
        if (isLogged) history.push("/dashboard")
    }, [isLogged,history])

    const handleSubmit = (e) =>{
        e.preventDefault();
        login({username, password})
    }
    return (
        <div className="container-fluid vh-100 bg-dark ">
            <div className="row h-100 justify-content-center align-items-center flex-column">
                <img src={ logo } alt="logo" className="logo mb-5" />
                <form onSubmit={ handleSubmit } className="col-lg-3 text-white">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        value={username}
                        onChange={(e) => {
                            setusername(e.target.value);
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value= {password}
                        name="password"
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}/>
                    </div>
                    <button className="btn btn-light w-100">Login</button>
                </form>
            </div>
      </div>
    )
}

