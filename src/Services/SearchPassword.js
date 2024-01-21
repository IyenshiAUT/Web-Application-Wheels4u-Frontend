import axios from "axios";
const GET_PASSWORD="http://localhost:8080/wheels4u/customers/{email}";
class SearchPassword{
    getResevations(){
        return axios.get(GET_PASSWORD);
    }

}

export default new SearchPassword()