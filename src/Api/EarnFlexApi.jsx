import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.findofficers.com/hiring_test'
})

export const getActivationCode = () => {
    return api.post('/get_activation_code')
}

export const getEmployees = (activationCode) => {
    return api.post(`/get_all_employee`, { activationCode })
}

export const addEmployee = (formData) => {
    return api.post('/add_employee', formData, {
        headers: { 'Content-Type': 'application/json' }
    })
}