import axios from "axios";

const api = axios.create({
    baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
});

export default api;
