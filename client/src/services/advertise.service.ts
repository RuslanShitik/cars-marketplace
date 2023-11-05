import { AxiosResponse } from 'axios'
import { IAdvertiseResponse, IMarkResponse } from '../types/adverise' 
import { axiosAPI } from './axios.service'

const getAdvertises = async (): Promise<AxiosResponse<IAdvertiseResponse>> => {
    return axiosAPI.get<IAdvertiseResponse>('/api/advertise/')
}

const getMarks = async (): Promise<AxiosResponse<IMarkResponse>> => {
    return axiosAPI.get<IMarkResponse>('/api/mark/')
}

export {
    getAdvertises,
    getMarks
}