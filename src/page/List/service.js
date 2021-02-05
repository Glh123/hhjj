import request from '../../config/request'

export const getBanList = () => request.get('/red/alert/ban-list')