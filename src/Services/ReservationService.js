import axios from 'axios';

const GET_ALL_RESERVATIONS="http://localhost:8080/wheels4u/reservation/1001";
class ReservationService{
    getResevations(){
        return axios.get(GET_ALL_RESERVATIONS);
    }

}

export default new ReservationService()