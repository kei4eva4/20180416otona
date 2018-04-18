import axios from 'axios'

class DogApi {
    constructor() {
        this.apiBase = 'https://dog.ceo/api';
    }

    breeds() {
        return axios.get(`${this.apiBase}/breeds/list/all`)
            .then(json => {
                return json.data.message;
            })
            .catch(e => ({ error: e }));
    }

    dogs(breed) {
        return axios.get(`${this.apiBase}/breed/${breed}/images`)
            .then(json => {
                return json.data.message.map(function(element) {
                    return {
                        url: element,
                        like: 0
                    };
                });
            })
            .catch(e => ({ error: e }));
    }
}

const dogApi = new DogApi();

export default dogApi;