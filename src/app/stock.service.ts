import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { hello } from './symbol/inter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
   //api="https://finnhub.io/api/v1/";
   
  getsymbol(symbol: string):Observable<hello>{;
   return this.http.get<hello>("https://finnhub.io/api/v1/search?q="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
  }

  getquote(symbol:string):Observable<hello>{
    return this.http.get<hello>("https://finnhub.io/api/v1/quote?symbol="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
    
  }

  getsentiment(symbol:string):Observable<hello>{
    return this.http.get<hello>("https://finnhub.io/api/v1/stock/insider-sentiment?symbol="+symbol+"&from=2015-01-01&to=2022-03-01&token=bu4f8kn48v6uehqi3cqg");
  }
  


  // https://finnhub.io/api/v1/quote?symbol=
  //"https://finnhub.io/api/v1/quote?symbol="+symbol+"&token=bu4f8kn48v6uehqi3cqg"
}