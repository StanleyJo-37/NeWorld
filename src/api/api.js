import { Axios } from "axios";

const baseURL = "https://restcountries.com/v3.1";

const axios = new Axios({
    baseURL
})

export async function getAllCountries() {
    return await axios.request({
        url: 'all',
        method: 'GET',
    });
}

export async function getCountry(name) {
    return await axios.request({
        url: `name/${name}`,
        params: {
            fullText: true,
        },
        method: 'GET',
    });
}