import {Aire} from "../model/Aire.js";

export default class AireService{

    async loadAire(dates, latitude=39.6099,longitude=2.9569){

        const responseAll = [];
        for (const date of dates){
            const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm10,pm2_5,european_aqi&start_date=${date}&end_date=${date}`;
            responseAll.push(fetch(url));
        }
        const responses = await Promise.all(responseAll);
        const jsonData = await Promise.all(responses.map(r => r.json()));
        const models = [];
        for (let i = 0; i < dates.length; i++) {
            const model = this.#clientToModel(dates[i],jsonData[i]);
            models.push(model);
        }
        return models;
    }

    #clientToModel(date,response){
      return new Aire(
            date,
            response.hourly.pm10,
            response.hourly.pm2_5,
            response.hourly.european_aqi
            );

    }

}