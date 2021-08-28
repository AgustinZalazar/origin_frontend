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

export const DeleteAccion = async (id_accion) =>  {
    const res = await axios.delete("http://localhost:8080/actionByUser", {
        params: {
            id_acciones : id_accion
        }
    })
    const response = await res
    console.log(response);
    return response;
}