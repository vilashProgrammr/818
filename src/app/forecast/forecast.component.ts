// import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { _throw } from 'rxjs/observable/throw';
// import { catchError, switchMap, tap } from 'rxjs/operators';
import { DailyForecast, ForecastByDay } from '../../models/forecast-by-day';
// import { AlertsService } from '../alerts/alerts.service';
import { ForecastStaticService } from './forecast-static.service';

@Component({
    templateUrl: './forecast.component.html'
})
export class ForecastComponent implements OnInit{
    public selectedForecast: DailyForecast;
    public forecast$: Observable<ForecastByDay>;
    public forecastData;

    constructor(private forecastService: ForecastStaticService,
        // private route: ActivatedRoute,
        // private alertsService: AlertsService
        ){}


      ngOnInit(){
           this.forecastService.getForecast().subscribe(forecast => {
                console.log(forecast, "Data");
                this.forecastData =  forecast;
            })
            // tap(forecast => { console.log(forecast, "Forecast")
            //     this.selectedForecast = forecast.dailyForecasts[0]}),
            // catchError((err: HttpErrorResponse) => {
            //     // this.apiErrorHandler(err);
            //     return _throw(err);
            // })
        }
}
