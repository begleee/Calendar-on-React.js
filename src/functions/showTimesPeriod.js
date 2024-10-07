export let showTimesPeriod = () => {
    let currentHour = new Date().getHours();
    let periodOfTime = "";
    if(currentHour >= 5 && currentHour < 12) {
      periodOfTime = "Morning";
    } else if(currentHour >= 12 && currentHour <= 16) {
      periodOfTime = "Afternoon";
    } else if(currentHour >= 17 && currentHour <= 20) {
      periodOfTime = "Evening";
    } else {
      periodOfTime = "Night";
    }
    return periodOfTime;
  }