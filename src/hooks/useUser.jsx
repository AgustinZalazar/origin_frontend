import { useCallback , useContext} from 'react'
import Context from '../context/UserContext'
import loginService from '../services/login';


export default  function useUser(){
    const {token, setToken} = useContext(Context)
    // const [id_User, setId_User] = useState(null)
    const login = useCallback(({username, password}) => {
        loginService({username, password})
        .then(({token, id_user}) => {
            window.sessionStorage.setItem('token', token)
            // console.log(id_user);
            // setId_User(id_user)
            setToken(token)
        })
        .catch(err => {
            window.sessionStorage.removeItem('token')
            console.log(err);
        })
        
    }, [setToken])
    // console.log(id_User);
    const logout  = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setToken(null)
    }, [setToken])
    return {
        isLogged: Boolean(token),
        // id_User,
        login,
        logout
    }
}