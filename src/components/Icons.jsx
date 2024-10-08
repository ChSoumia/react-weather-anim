const Icons = (icon) => {
  switch (icon) {
    case "Thunderstorm":
      icon = "icons/thunderstorms.svg";
      console.log("tormenta");
      break;
    case "Clear":
      icon = "icons/clear-day.svg";
      console.log("Soleado");
      break;
    case "Clouds":
      icon = "icons/cloudy.svg";
      console.log("Nublado");
      break;
    case "Fog":
      icon = "icons/fog.svg";
      console.log("Niebla");
      break;
    case "Haz":
      icon = "icons/haze.svg";
      console.log("Bruma");
      break;
    case "Smoke":
      icon = "icons/smoke.svg";
      console.log("Humo");
      break;
    case "Rain":
      icon = "icons/rain.svg";
      console.log("Lluvia");
      break;
    case "Snow":
      icon = "icons/snow.svg";
      console.log("Nieve");
      break;
    case "Hail":
      icon = "icons/hail.svg";
      console.log("Granizo");
      break;
    case "Drizzle":
      icon = "icons/drizzle.svg";
      console.log("Llovizna");
      break;

    default:
      icon = "icons/clear-day.svg";
      console.log("Soleado");
  }
  return icon;
};

export default Icons;
