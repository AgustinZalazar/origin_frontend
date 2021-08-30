import axios from "axios";

export default function login({username, password}) {
    return axios.post("http://localhost:8080/login", {
        username: username,
        password: password
    }).then((res) => {
        if(res.statusText !== 'OK') throw new Error('Response is not OK')
        return res.data
    }).then(res => {
        const { token, id_user } = res
        // console.log(res, res.id_user);
        return {
            token,
            id_user: id_user
        }
    })
}
