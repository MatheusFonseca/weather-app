export const getFullWeekDay = weekday => {
  switch (weekday) {
    case "Dom":
      return "Domingo";
    case "Seg":
      return "Segunda-feira";
    case "Ter":
      return "Terça-feira";
    case "Qua":
      return "Quarta-feira";
    case "Qui":
      return "Quinta-feira";
    case "Sex":
      return "Sexta-feira";
    case "Sáb":
      return "Sábado";
    default:
      return "---";
  }
};

export const getFormattedDate = (weekday, date) => {
  let [day, month, year] = date.split("/");

  switch (month) {
    case "01":
      month = "Janeiro";
      break;
    case "02":
      month = "Fevereiro";
      break;
    case "03":
      month = "Março";
      break;
    case "04":
      month = "Abril";
      break;
    case "05":
      month = "Maio";
      break;
    case "06":
      month = "Junho";
      break;
    case "07":
      month = "Julho";
      break;
    case "08":
      month = "Agosto";
      break;
    case "09":
      month = "Setembro";
      break;
    case "10":
      month = "Outubro";
      break;
    case "11":
      month = "Novembro";
      break;
    case "12":
      month = "Dezembro";
      break;
    default:
      break;
  }

  return `${getFullWeekDay(weekday)}, ${day} de ${month} de ${year}`;
};

export const getIcon = condition => {
  console.log(condition);

  if (condition.includes("Sol com poucas nuvens")) {
    return "flaticon-040-sun-6";
  }

  if (condition.includes("nuvens") || condition.includes("nublado")) {
    if (condition.includes("Ensolarado com muitas nuvens")) {
      return "flaticon-028-cloudy-9";
    }
    return "flaticon-033-cloud-7";
  }

  if (
    condition.toLowerCase().includes("chuviscos") ||
    condition.toLowerCase().includes("chuva")
  ) {
    return "flaticon-010-rain-25";
  }

  if (condition.includes("Tempestade") || condition.includes("Trovoadas")) {
    return "flaticon-001-storm-12";
  }

  if (
    condition.toLowerCase().includes("neve") ||
    condition.toLowerCase().includes("gelo") ||
    condition.toLowerCase().includes("geada") ||
    condition.toLowerCase().includes("granizo")
  ) {
    return "flaticon-003-snow-8";
  }

  if (
    condition.toLowerCase().includes("vent") ||
    condition.includes("Furacão")
  ) {
    return "flaticon-027-wind-sign";
  }

  return "flaticon-040-sun-6";
};
