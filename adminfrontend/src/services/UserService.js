import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userid){
        return axios.get(USER_API_BASE_URL + '/' + userid);
    }

    updateUser(user, userid){
        return axios.put(USER_API_BASE_URL + '/' + userid, user);
    }

    deleteUser(userid){
        return axios.delete(USER_API_BASE_URL + '/' + userid);
    }
    
    searchUser(keyword){
        return axios.get(USER_API_BASE_URL+'/search/'+keyword);
    }
}

export default new UserService()