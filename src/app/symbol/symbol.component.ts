import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import  {StockService} from '../stock.service';
import {hello}  from './inter';
import { Router} from '@angular/router';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {
   public symbolData:any;
    public quoateData:any;
    public sentimentData:any;
  constructor(private _myFB:FormBuilder,private _service:StockService,private router:Router) { }



  symbolSearch=this._myFB.group({
    symbol:[''],
  })
  getvalue(formValues:any){
//     // console.log(this.symbolSearch.value)
      this._service.getsymbol(formValues.symbol).subscribe(data=>{this.symbolData=data;
        console.log(this.symbolData)});

      this._service.getquote(formValues.symbol).subscribe(data=>{this.quoateData=data;
        console.log(this.quoateData)});
}



getvalue2(formValues:any){
  this._service.getsentiment(formValues.symbol).subscribe(data=>{
    this.sentimentData=data;
    console.log(data);

   // this.router.navigate(['https://finnhub.io/api/v1/stock/insider-sentiment?symbol='+formValues.symbol+'&from=2015-01-01&to=2022-03-01&token=bu4f8kn48v6uehqi3cqg'])
  })
}
  // goPlaces(formValues:any){
  //   this.router.navigateByUrl('/https://finnhub.io/api/v1/stock/insider-sentiment?symbol='+formValues.symbol+'&from=2015-01-01&to=2022-03-01&token=bu4f8kn48v6uehqi3cqg')
  // }


  // getvalue2(){
  //   console.log();
    
  // }


 
  ngOnInit(): void {
    
  }
 

}
