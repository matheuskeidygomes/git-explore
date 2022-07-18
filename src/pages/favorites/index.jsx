import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../../components/searchBar';
import FavoritesList from '../../components/favoritesList';
import { UserContext } from '../../context/UserProvider';
import { sortRepositoriesByName, sortRepositoriesByUpdated } from '../../helpers/sort';
import { doSearch } from '../../helpers/search';

export default function Favorites() {

    const context = useContext(UserContext);
    const [favorites, setFavorites] = useState([]);
    const [favoritesToShow, setFavoritesToShow] = useState([]);

    useEffect(() => {
        setFavorites(context.favorites);
        setFavoritesToShow(context.favorites);
    }, [context.favorites]);

    return <>

        <SearchBar
            search={(search, filter) => setFavoritesToShow(doSearch(search, filter, favorites))}
            sortByName={() => setFavoritesToShow(sortRepositoriesByName(favoritesToShow))}
            sortByDate={() => setFavoritesToShow(sortRepositoriesByUpdated(favoritesToShow))}
        />

        <FavoritesList
            loading={context.loading}
            favorites={favoritesToShow}
            delFavorite={(repo) => context.delFavorite(repo)}
        />
    </>
} 