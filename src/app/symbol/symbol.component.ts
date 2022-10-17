import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import  {StockService} from '../stock.service';
import {ISentimentQuote}  from './inter';
import { Router} from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent  {
   public symbolData:any;
    public quoateData:any;
    public sentimentData:any;
    public stockList:ISentimentQuote[] = [];
  constructor(private _myFB:FormBuilder,private _service:StockService,private router:Router) { }



  symbolSearch=this._myFB.group({
    symbol:[''],
  })
  getvalue(formValues:any){
//     // console.log(this.symbolSearch.value)
forkJoin([
  this._service.getsymbol(formValues.symbol),
  this._service.getquote(formValues.symbol)
]).subscribe(([symbolData, quoteData])=>{
  let sym  = symbolData.result.find(r => r.symbol === formValues.symbol);
   if(sym){
    let stockDetails:ISentimentQuote = {
      symbol: sym.symbol,
      description: sym.description,
      c:quoteData.c,
      h: quoteData.h,
      o: quoteData.o,
      d: quoteData.d
    }
    this.stockList.push(stockDetails);
   }
})
  }
}



 
 
 


