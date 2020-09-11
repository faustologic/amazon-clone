// Axios is a very popular fetch library to request info and keys uses mostly for charge payments

import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/challenge-cb568/us-central1/api" // The API (cloud function) URL
});

export default instance;