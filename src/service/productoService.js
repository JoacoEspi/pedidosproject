import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://646c0c377b42c06c3b2aaa95.mockapi.io',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
   })

export default {
    async cargar() {
    try {
    const response = await apiClient.get('/Productos');
    return response.data
    } catch (error) {
    throw "Error de conexion"
    }
    },
    async cargarPorId(id) {
        try {
        const response = await apiClient.get('/Productos/'+ id);
        return response.data
        } catch (error) {
        throw "Error de conexion"
    }
    },
    async agregar(producto) {
    try {
    await apiClient.post('/Productos', producto);
    } catch (error) {
    throw "Error de conexion"
    }
    },
    async eliminar(id) {
        try {
        await apiClient.delete('/Productos/' + id)
        } catch (error) {
        throw "Error de conexion"
    }
    },
    async modificar(id, producto) {
        try {
        await apiClient.put('/Productos/' + id, producto)
        } catch (error) {
        throw "Error de conexion"
    }
    }
}