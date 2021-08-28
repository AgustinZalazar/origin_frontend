import axios from "axios";

export const GetAcciones = async ({nombre,moneda,simbolo,id_user}) =>  {
        const res = await axios.post("http://localhost:8080/actionByUser", {
            nombre,
            moneda,
            simbolo,
            id_user
        })
    const data = await res.data
    console.log(data);
    return data;
}