import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { gitHubApi } from "../services/metods";
import { saveStorageData, getStorageData } from "../helpers/dataStorage";
export const UserContext = createContext();

export const UserProvider = (props) => {

    const [user, setUser] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getAllRepositories() {
            let res = await gitHubApi.getAllRepo();
            if (res) setRepositories(res);
        }
        async function getUser() {
            let res = await gitHubApi.getUser();
            if (res) setUser(res);
        }
        async function getFavorites() {
            console.log(getStorageData("favorites"));
            if(getStorageData("favorites")) setFavorites(getStorageData("favorites"));
        }
        async function getData() {
            setLoading(true);
            await getAllRepositories();
            await getUser();
            await getFavorites();
            setLoading(false);
        }
        getData();
    }, []);

    function addFavorite(repository) {
        if (!favorites.some((favorite) => favorite.id === repository.id)) {
            setFavorites([...favorites, repository]);
            saveStorageData("favorites", [...favorites, repository]);
        }
    }

    function delFavorite(repository) {
        if (favorites.some((favorite) => favorite.id === repository.id)) {
            setFavorites(favorites.filter((favorite) => favorite.id !== repository.id));
            saveStorageData("favorites", favorites.filter((favorite) => favorite.id !== repository.id));
        }
    }

    return <>
        <UserContext.Provider value={{ user, favorites, repositories, loading, addFavorite, delFavorite }} >
            {props.children}
        </UserContext.Provider>
    </>
}