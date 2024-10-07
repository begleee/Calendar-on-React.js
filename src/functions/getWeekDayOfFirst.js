var date = new Date();

let firstDay = new Date(`${date.getFullYear()}-0${date.getMonth() + 1}-01`).getDay();
export let getWeekDayOfFirst = () => {
    if(firstDay == 0) {
        return 7;
    } else {
        return firstDay;
    }
}