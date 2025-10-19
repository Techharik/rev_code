import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: { 'Content-Type': 'application/json' },
})

export const getItems = () => api.get('/products').then((res) => res.data);
export const getSingleItes = (id: number) => api.get(`/products/${id}`).then((res) => res.data);
export const postItems = (data: any) => api.post('/products', data).then((res) => res.data);
export const updateItem = (id: number, data: any) => api.put(`/products/${id}`, data).then(res => res.data);
export const deleteItem = (id: number) => api.delete(`/products/${id}`).then(res => res.data);

