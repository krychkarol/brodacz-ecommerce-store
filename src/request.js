import axios from "axios";

const BASE_URL = 'https://brodacz-api.herokuapp.com/api/';

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

export const publicReq = axios.create({
    baseURL: BASE_URL
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});