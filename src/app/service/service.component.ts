import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  experiencecount :number=0;
  Qualifiedcount:number=0;
  Clientscount:number=0;
  Partnerscount:number=0;


  experiencecountstop :any =setInterval(()=>{
    this.experiencecount++;

    if(this.experiencecount ==2)
    {
      clearInterval(this.experiencecountstop);
    }
//  this time mili secound
  },450 

  )

  Qualifiedcountstop :any =setInterval(()=>{
    this.Qualifiedcount++;

    if(this.Qualifiedcount ==25)
    {
      clearInterval(this.Qualifiedcountstop);
    }
//  this time mili secound
  },55  

  )

  Clientscountstop :any =setInterval(()=>{
    this.Clientscount++;

    if(this.Clientscount ==20)
    {
      clearInterval(this.Clientscountstop);
    }
//  this time mili secound
  },65

  )

  Partnerscountstop :any =setInterval(()=>{
    this.Partnerscount++;

    if(this.Partnerscount ==3)
    {
      clearInterval(this.Partnerscountstop);
    }
//  this time mili secound
  },390

  )

}
