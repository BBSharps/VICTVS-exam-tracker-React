import axios from "axios";

const api = axios.create({
  baseURL: "https://victvs-exam-tracker.onrender.com/api",
});

export const getCandidates = () => {
  return api.get(`candidates`).then((response) => {
    return response.data.candidates;
  });
};
