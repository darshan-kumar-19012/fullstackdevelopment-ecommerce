import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createUser(user){
        return axios.post(EMPLOYEE_API_BASE_URL, user);
    }

    getUserById(userid){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + userid);
    }

    updateUser(user, userid){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + userid, user);
    }

    deleteUser(userid){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + userid);
    }
}

export default new UserService()