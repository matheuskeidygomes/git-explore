import React, { useEffect, useState, useContext } from "react";
import SearchBar from "../../components/searchBar";
import { UserContext } from "../../context/UserProvider";
import RepositoriesList from "../../components/repositoriesList";
import { sortRepositoriesByName, sortRepositoriesByUpdated } from "../../helpers/sort";
import { doSearch } from "../../helpers/search";

export default function Repositories() {

    const context = useContext(UserContext);
    const [repositories, setRepositories] = useState([]);
    const [repositoriesToShow, setRepositoriesToShow] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setRepositories(context.repositories);
        setRepositoriesToShow(context.repositories);
        setFavorites(context.favorites);
    }, [context.repositories, context.favorites]);

    return <>

        <SearchBar
            search={(search, filter) => setRepositoriesToShow(doSearch(search, filter, repositories))}
            sortByDate={() => setRepositoriesToShow(sortRepositoriesByUpdated(repositoriesToShow))}
            sortByName={() => setRepositoriesToShow(sortRepositoriesByName(repositoriesToShow))}
        />

        <RepositoriesList
            repositories={repositoriesToShow}
            favorites={favorites}
            loading={context.loading}
            addFavorite={(repo) => context.addFavorite(repo)}
            delFavorite={(repo) => context.delFavorite(repo)}
        />

    </>
}