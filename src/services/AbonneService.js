
import axios from "axios";

import querystring from 'querystring';



const ABONNE_API_BASE_URL = "http://localhost:3600/abonnes";

// const querystring = require("querystring");

class AbonneService {


    getAbonnes() {
        return axios.get(ABONNE_API_BASE_URL);
    }

    addAbonne(abonne){

       return axios.post(ABONNE_API_BASE_URL,
            querystring.stringify({
                nom: abonne.nom,
                postnom: abonne.postnom,
                age: abonne.age,
                sexe: abonne.sexe,
                telephone: abonne.telephone
            }), {
              headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
              }
            })
            // .then(function(response) {
            //     console.log(response);
            // });

        // return axios.post(ABONNE_API_BASE_URL, abonne);
    }
}

export default new AbonneService();