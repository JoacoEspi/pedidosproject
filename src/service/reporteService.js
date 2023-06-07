import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://647fb766f061e6ec4d484bb6.mockapi.io',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
   })

export default {
    async cargar() {
    try {
    const response = await apiClient.get('/Compra');
    return response.data
    } catch (error) {
    throw "Error de conexion"
    }
    },
    async cargarPorId(id) {
        try {
        const response = await apiClient.get('/Compra/'+ id);
        return response.data
        } catch (error) {
        throw "Error de conexion"
    }
    },
    async agregar(compra) {
    try {
    await apiClient.post('/Compra', compra);
    } catch (error) {
    throw "Error de conexion"
    }
    },
    async eliminar(id) {
        try {
        await apiClient.delete('/Compra/' + id)
        } catch (error) {
        throw "Error de conexion"
    }
    },
    async modificar(id, compra) {
        try {
        await apiClient.put('/Compra/' + id, compra)
        } catch (error) {
        throw "Error de conexion"
    }
    }
}