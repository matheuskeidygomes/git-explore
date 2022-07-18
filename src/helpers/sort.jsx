export function sortRepositoriesByName(list) {
    let newList = [...list]
    newList.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    return newList;
}

export function sortRepositoriesByUpdated(list) {
    let newList = [...list];
    newList.sort((a, b) => {
        if (a.updated_at < b.updated_at) {
            return -1;
        }
        if (a.updated_at > b.updated_at) {
            return 1;
        }
        return 0;
    });
    return newList;
}
