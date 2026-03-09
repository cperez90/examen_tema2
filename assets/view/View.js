import {getDates} from '../js/dates';

export class View {

    pintarDates(){
        for (const date of getDates()){
            const option = document.createElement("option");
            option.value = date;
            option.label = date;
            selectDate.appendChild(option);
        }
    }

    pintarFilas(models) {
        const table = document.querySelector("#resultsBody");
        table.innerHTML = "";
        for (const model of models) {
            const tr = document.createElement("tr");
            const tdData = document.createElement("td");
            const tdPM25 = document.createElement("td");
            const tdPM10 = document.createElement("td");
            const tdAQqi = document.createElement("td");
            tdData.textContent = model.data;
            tdPM25.textContent = model.hourly_pm2_5;
            tdPM10.textContent = model.hourly_pm10;
            tdAQqi.textContent = model.hourly_european_aqi;
            tr.appendChild(tdData);
            tr.appendChild(tdPM25);
            tr.appendChild(tdPM10);
            tr.appendChild(tdAQqi);
            table.appendChild(tr);
        }
    }

    checkPaginacion(index) {
        const info = document.querySelector("#pageInfo");
        info.textContent = "Pàgina " + (index+1);
        if (paginacion.length <= 0){
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
            return;
        }
        if (index === 0){
            prevBtn.style.display = "none";
        }else {
            prevBtn.style.display = "block";
        }
        if (index === paginacion.length -1){
            nextBtn.style.display = "none";
        }else {
            nextBtn.style.display = "block";
        }
    }
}