
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)




// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)

//AuthEndponts
const Login = (data) => axios.post(`${API}/auth/login`, data)

// ProductsEndPoint->add
const AddProducts = (data)=> axios.post(`${API}/products/add`,data)

// AuthEndPoint->register
const Register =(data)=>axios.post(`${API}/auth/register`,data)

export { getProducts, getOrders, getUsers, Login,AddProducts , Register }