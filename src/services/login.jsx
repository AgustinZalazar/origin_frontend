import axios from "axios";

export default function login({username, password}) {
    return axios.post("http://localhost:8080/login", {
        username: username,
        password: password
    }).then((res) => {
        // console.log(res)
        if(res.statusText !== 'OK') throw new Error('Response is not OK')
        return res.data
    }).then(res => {
        const { token } = res
        return token
    })
}
