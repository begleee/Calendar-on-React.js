export let showWeeksDay = () => {
    let weekDay = "";

    switch(new Date().getDay()) {
      case 1:
        weekDay = "Monday";
        break;
      case 2:
        weekDay = "Tuesday";
        break;
      case 3:
        weekDay = "Wednesday";
        break;
      case 4:
        weekDay = "Thursday";
        break;
      case 5:
        weekDay = "Friday";
        break;
      case 6:
        weekDay = "Saturday";
        break;
      case 0:
        weekDay = "Sunday";
        break;
      default :
        weekDay = "No info";
        break;
    }
    return weekDay;
  }