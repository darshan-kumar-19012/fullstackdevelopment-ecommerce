import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getUsers(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createUser(user){
        return axios.post(PRODUCT_API_BASE_URL, user);
    }

    getUserById(userid){
        return axios.get(PRODUCT_API_BASE_URL + '/' + userid);
    }

    updateUser(user, userid){
        return axios.put(PRODUCT_API_BASE_URL + '/' + userid, user);
    }

    deleteUser(userid){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + userid);
    }
}

export default new ProductService()