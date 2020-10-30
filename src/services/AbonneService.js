
import axios from "axios";
const ABONNE_API_BASE_URL = "http://localhost:3600/abonnes";

class AbonneService {


    getAbonnes() {
        return axios.get(ABONNE_API_BASE_URL);
    }
}

export default new AbonneService();