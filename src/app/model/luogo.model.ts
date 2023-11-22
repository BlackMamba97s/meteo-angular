export interface WeatherData {
    timepoint: number;
    temp2m: number;
  }
  
  export interface SunriseSunsetData {
    sunrise: string;
    sunset: string;
    first_light: string,
    last_light: string,
    dawn: string,
    dusk: string,
    solar_noon: string,
    golden_hour: string,
    day_length: string,
    timezone: string,
    utc_offset: number

  }