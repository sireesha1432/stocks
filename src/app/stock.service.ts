import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ISymbol } from './symbol/inter';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
   //api="https://finnhub.io/api/v1/";
   
  getsymbol(symbol: string):Observable<ISymbol>{;
   return this.http.get<ISymbol>("https://finnhub.io/api/v1/search?q="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
  }

  getquote(symbol:string):Observable<any>{
    return this.http.get<any>("https://finnhub.io/api/v1/quote?symbol="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
    
  }

  getsentiment(symbol:string, endDate:string, startDate:string):Observable<any>{
    return this.http.get<any>("https://finnhub.io/api/v1/stock/insider-sentiment?symbol="+symbol+"&from="+startDate+"&to="+endDate+"&token=bu4f8kn48v6uehqi3cqg");
  }
  


  // https://finnhub.io/api/v1/quote?symbol=
  //"https://finnhub.io/api/v1/quote?symbol="+symbol+"&token=bu4f8kn48v6uehqi3cqg"
}