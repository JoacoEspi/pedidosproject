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
    const response = await apiClient.get('/Usuarios');
    return response.data
    } catch (error) {
    throw "Error de conexion"
    }
    },
    async agregar(usuario) {
    try {
    await apiClient.post('/Usuarios', usuario);
    } catch (error) {
    throw "Error de conexion"
    }
    },
    async eliminar(id) {
        try {
        await apiClient.delete('/Usuarios/' + id)
        } catch (error) {
        throw "Error de conexion"
        }
        },
        async modificar(id, usuario) {
        try {
        await apiClient.put('/Usuarios/' + id, usuario)
        } catch (error) {
        throw "Error de conexion"
        }
        }
   }
   
   