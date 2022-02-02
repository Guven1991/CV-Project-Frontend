import axios from "axios";

export const signup = (body) => {
    return axios.post("/api/authentication/sign-up", body);
};

export const login = creds => {
    return axios.post("/api/authentication/sign-in", creds);
};

export const getCVS = (page= 0, size= 2) => {
    return axios.get(`/api/cv?page=${page}&size${size}`);
};
export const getCV = (cvId) => {
    return axios.get(`/api/cv/${cvId}`);
};

export const saveCv = body => {
    return axios.post("/api/cv",body);
}