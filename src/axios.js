// Axios is a very popular fetch library to request info and keys uses mostly for charge money from costumer

import axios from "axios";

const instance = axios.create({
    baseURL: "..." // The API (cloud function) URL
});

export default instance;