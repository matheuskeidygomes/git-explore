import api from "./api";

export const gitHubApi = {
    getUser: async () => {
        const res = await api.get("/users/matheuskeidygomes");
        return res.data;
    },
    getAllRepo: async () => {
        const res = await api.get("/users/matheuskeidygomes/repos");
        return res.data;
    },
    getRepo: async (repo) => {
        const res = await api.get(`/repos/matheuskeidygomes/${repo}`);
        return res.data;
    }
}