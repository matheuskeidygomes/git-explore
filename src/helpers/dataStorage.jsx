export function saveStorageData(dataName, data) {
    localStorage.setItem(`${dataName}`, JSON.stringify(data));
}

export function getStorageData(dataName) {
    return JSON.parse(localStorage.getItem(`${dataName}`));
}