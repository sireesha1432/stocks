import { Component,  OnInit } from '@angular/core';
import {StockService}  from  '../stock.service'

@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent implements OnInit {

  
  callingData:any;
  constructor(private ser:StockService) { }
  
  // works(){
  //   console.log("works");
  // }

  ngOnInit(): void {
    
  }

  gethand(formValues:any){
     this.ser.getsentiment(formValues.symbol).subscribe(res=>{
      this.callingData=res;
     })
  }

}
