export function doSearch(search, filter, list) {
    let filtered = list.filter(item => {
        if (filter === "Repositório") {
            return item.name.toLowerCase().includes(search.toLowerCase());
        } else if (filter === "Tecnologia") {
            return item.language?.toLowerCase().includes(search.toLowerCase());
        } else if (filter === "Descrição") {
            return item.description?.toLowerCase().includes(search.toLowerCase());
        }
    });
    return filtered;
}