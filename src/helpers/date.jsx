export function formatDate(date) {
    const d = new Date(date);
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[d.getMonth()];
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    return `${day} de ${month} de ${year}`;
}