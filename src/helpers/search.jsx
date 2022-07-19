export function doSearch(search, filter, list) {
    let filtered = list.filter(item => {
        if (filter === "Repositório") {
            return item.name.toLowerCase().includes(search.toLowerCase());
        } else if (filter === "Tecnologia") {
            return item.language?.toLowerCase().includes(search.toLowerCase());
        } else if (filter === "Público" && !item.private) {
            return item.name.toLowerCase().includes(search.toLowerCase());
        } else {
            return item;
        }
    });
    return filtered;
}