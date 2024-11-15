
import axios from 'axios'
import { getToken } from '../services/auth'


const API = 'http://localhost:3000'

const axiosInstance =axios.create({
    API
})

axiosInstance.interceptors.request.use(
    (config)=>{
        const token=getToken()
        if(token){
            config.headers.Authorization=token
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axios.get(`${API}/products/count`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)

// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUsers = (user) => axios.post(`${API}/users/add`,user)
const editUsers = (user,id) => axios.put(`${API}/users/edit/${id}`,user)
const deleteUsers = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetpasswordUsers =(id)=>axios.resetpassword(`${API}/users/resetpassword/${id}`)

//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)


// const getOrdersCount = () => axios.get(`${API}/orders/count`)

export { 
    getProducts, 
    getOrders, 
    getUsers, 
    Login, 
    Register, 
    addProduct, 
    deleteProduct, 
    editProduct, 
    addUsers, 
    editUsers, 
    deleteUsers, 
    getUsersCount, 
    getProductsCount, 
    getOrdersCount,
    resetpasswordUsers,
    deleteOrder
 }