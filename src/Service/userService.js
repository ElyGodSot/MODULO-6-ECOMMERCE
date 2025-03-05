import axios from "axios"

const BASE_URL = 'http://localhost:3000' // esta opción la pueden cambiar si subimos el repo de github a render


const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data) // http://localhost:300/register{json}

const loginUserService = (data) => axios.post(`${BASE_URL}/login`,data)      // http://localhost:300/login{json}

const getMeUserService = (jwtToken) => axios.get(`${BASE_URL}/users/me`,{headers: {Authorization: `Bearer ${jwtToken}`}}) // http://localhost:300/users/me{json}

export {
    registerUserService,
    loginUserService,
    getMeUserService
}