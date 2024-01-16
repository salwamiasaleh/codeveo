import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  slidesStore = [
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'1' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'2' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'3' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'4' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'5' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'6' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'7' },
    { src: "../../assets/Assets/codveo-logo.svg" ,id:'8' },
  ];
  sectionseven: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl:true,
    navSpeed: 700,
    navText: [
      '<span class=""><img src="../../assets/Assets/Icon feather-arrow-up-left2.svg"/></span>',
      '<span class=""><img src="../../assets/Assets/Icon feather-arrow-up-left.svg"/></span>',
    ],
    responsive: {
      0: {
        items: 2.75
      },
      400: {
        items: 2.75
      },
      740: {
        items: 2.75
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  clientsinputtitle: string = '';
  ButtonTexttitle: string = 'edit';
  showinputtitle = false
  title = true
  // for title end


  
  changetitle() {
    if (!this.showinputtitle) {
    
      this.showinputtitle = true;
      this.title = false;
      this.ButtonTexttitle = 'save';
    } else {
    
      if (this.clientsinputtitle.length !== 0) {
        console.log(this.clientsinputtitle);
      }
      this.ButtonTexttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;
    }
  }
  clientsinputsubtitle: string = '';
  ButtonTextsubtitle: string = 'edit';
  showinputsubtitle = false
  subtitle = true
  //for title end
  changeSubTitle() {
    if (!this.showinputsubtitle) {
    
      this.showinputsubtitle = true;
      this.subtitle = false;
      this.ButtonTextsubtitle = 'save';
    } else {
      
      if (this.clientsinputsubtitle.length !== 0) {
        console.log(this.clientsinputsubtitle);
      }
      this.ButtonTextsubtitle = 'edit';
      this.showinputsubtitle = false;
      this.subtitle = true;
    }
  }
}
