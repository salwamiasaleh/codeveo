import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css'],
})
export class OurWorkComponent implements OnInit{

ngOnInit(): void {

}
  CardDetails: any = [
    {
      image: '../assets/Archive/Group 3742.png',
      titleone: 'هوية بصرية',
      titletwo: ' تطوير المواقع',
      subtitle: 'هوية بصرية وموقع سيلزيو الخطير',
      description: 'ديسمبر 2023',
    },
    {
      image: '../assets/Archive/Group 3742.png',
      titleone: 'هوية بصرية',
      titletwo: ' تطوير المواقع',
      subtitle: 'هوية بصرية وموقع سيلزيو الخطير',
      description: 'ديسمبر 2023',
    },
    {
      image: '../assets/Archive/Group 3742.png',
      titleone: 'هوية بصرية',
      titletwo: ' تطوير المواقع',
      subtitle: 'هوية بصرية وموقع سيلزيو الخطير',
      description: 'ديسمبر 2023',
    },
    {
      image: '../assets/Archive/Group 3742.png',
      titleone: 'هوية بصرية',
      titletwo: ' تطوير المواقع',
      subtitle: 'هوية بصرية وموقع سيلزيو الخطير',
      description: 'ديسمبر 2023',
    },
  ];
 
  allCardDetails:any=[]
 
  constructor() {   
    this.updateSize();
    // console.log(this.allCardDetails.length, this.CardDetails.length )

   }
  
  updateSize(){
    const windowsize=window.innerWidth;
    if(windowsize<800){
      this.allCardDetails = this.CardDetails.slice(0,2)
      console.log(this.allCardDetails.length, this.CardDetails.length )
    }else{
      this.allCardDetails = this.CardDetails
    }
  }
  showMoreButton(){
    this.allCardDetails = this.CardDetails
  }


}
