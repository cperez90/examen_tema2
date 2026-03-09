export class Aire{
    constructor(
        data,
        hourly_pm10,
        hourly_pm2_5,
        hourly_european_aqi) {
        this._data = data;
        this._hourly_pm10 = hourly_pm10;
        this._hourly_pm2_5 = hourly_pm2_5;
        this._hourly_european_aqi = hourly_european_aqi;
    }

    get hourly_pm2_5() {
        return this._hourly_pm2_5;
    }

    set hourly_pm2_5(value) {
        this._hourly_pm2_5 = value;
    }

    get hourly_european_aqi() {
        return this._hourly_european_aqi;
    }

    set hourly_european_aqi(value) {
        this._hourly_european_aqi = value;
    }

    get hourly_pm10() {
        return this._hourly_pm10;
    }

    set hourly_pm10(value) {
        this._hourly_pm10 = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }


}