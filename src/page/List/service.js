import request from '../../config/request'

export const getBanList = () => request.get('/red/alert/ban-list')

export const deleteItem = (data) => request.post('/red/alert/delete-ban', data)