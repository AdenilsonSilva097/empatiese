/* eslint-disable no-restricted-globals */

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_TEST === "ON"
    ? "http://localhost:3001"
    : "insert your server url here"
});

export default api;
