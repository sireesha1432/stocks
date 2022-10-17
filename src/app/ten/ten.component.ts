import { formatDate, Location } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StockService}  from  '../stock.service'
import { ISentimentData, IState } from '../symbol/inter';

@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent implements OnInit {

  
  callingData:any;
  symbol:string;
  stockName:string;
  months:string[]=  ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  sentimentdatlist:Array<ISentimentData> =[];  
  
  constructor(private ser:StockService, private route:ActivatedRoute, private location:Location) { }
  
  // works(){
  //   console.log("works");
  // }

  ngOnInit(): void {
    this.symbol = this.route.snapshot.params['symbol'];
    let state = this.location.getState() as IState
    this.stockName = state.name

    console.log(this.symbol);
    console.log(this.stockName);
    let startDate =new Date();

    startDate.setMonth(startDate.getMonth()- 1);

    let endDate =new Date(startDate);

    endDate.setMonth(endDate.getMonth()- 2);

    let startDateInput = formatDate(startDate,'yyyy-MM-dd','en-US');

    let endDateInput =formatDate(endDate,'yyyy-MM-dd','en-US');

    this.getSentiment(this.symbol, startDateInput, endDateInput);
    console.log(this.sentimentdatlist);
  }

  getSentiment(symbol:string, startDateInput:string, endDateInput:string){
    let sentimiList:ISentimentData[] =[];
     this.ser.getsentiment(symbol,endDateInput, startDateInput).subscribe((res:any)=>{
     res.data.forEach((element:any) => {
      let senti:ISentimentData = {
        change: element.change,
        month:element.month,
        mspr:element.mspr
      }
sentimiList.push(senti);
     });

     })
     this.sentimentdatlist = sentimiList;
  }

}
