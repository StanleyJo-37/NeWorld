import {Axios} from "axios";

const baseURL = "https://restcountries.com/v3.1/";

const axios = new Axios({
    baseURL
})

export async function getAllCountry() {
    return await axios.request({
        url: '/all',
        method: 'GET',
    });
}

export async function getCountry(name: string) {
    return await axios.request({
        url: `name/${name}`,
        method: 'GET',
    });
}