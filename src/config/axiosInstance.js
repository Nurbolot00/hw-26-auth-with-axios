import axios from 'axios'
const BASE_URL = 'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

const headers ={
    'Content-type': 'application/json',
     UserID: 'NNurbolot00',
}

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers,
})