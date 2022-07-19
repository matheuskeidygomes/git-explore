import React, { useEffect, useState } from "react";
import "./index.css";

export default function SearchBar(props) {

    const { doSearch, sortByName, sortByDate } = props;

    const filters = ["Repositório", "Tecnologia", "Público"];
    const sorts = ["Nome", "Atualização"];
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(filters[0]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        doSearch(search, filter);
    }, [search, filter, doSearch]);

    useEffect(() => {
        if (sort === 'Nome') sortByName();
        if (sort === 'Atualização') sortByDate();
    }, [sort, sortByDate, sortByName]);

    function changeSearch(e) {
        setSearch(e);
    }

    function changeFilter(e) {
        setFilter(e);
    }

    function changeSort(e) {
        setSort(e);
    }

    return <>

        <div className="search-container">

            <input type="text" className="search-bar" placeholder="Pesquise aqui..." value={search} onChange={(e) => changeSearch(e.target.value)} />

            <div className="select-container">

                <select className="search-select" onChange={(e) => changeFilter(e.target.value)}>
                    <option value={filter}> {filter} </option>
                    {filters.map((f, i) => {
                        if (f !== filter) {
                            return <option key={i} value={f}> {f} </option>
                        }
                    })}
                </select>

                <select className="search-select" onChange={(e) => changeSort(e.target.value)} >
                    <option value=""> Ordenar por </option>
                    {sorts.map((opt, i) => {
                        return <option key={i} value={opt}> {opt} </option>
                    })}
                </select>

            </div>

        </div>

    </>
}