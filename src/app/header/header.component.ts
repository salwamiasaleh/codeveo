// header.component.ts
import { Component, ViewChild, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements AfterViewInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    rtl: true,
    // navText: ['next', 'previous'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,



  };

  ngAfterViewInit(): void {
    this.onCarouselInitialized();


  }

  onCarouselInitialized(): void {

    const owlDots = document.querySelector('.owl-dots');
    if (owlDots) {
      const owlDotElements = owlDots.querySelectorAll('.owl-dot');
      owlDotElements.forEach((dot, index) => {
        dot.textContent = (index + 1).toString();
      });
    }
  }
  carouselItems = [
    {
      id: "1",
      title: 'العنوان الرئيسي هنا',
      details: 'التفاصيل تكتب هنا',
      orderNowText: 'اطلب الآن',
      arrowImageUrl: '../../assets/Assets/Arrow.svg'
    },
    {
      id: "2",
      title: 'العنوان الرئيسي هنا',
      details: 'التفاصيل تكتب هنا',
      orderNowText: 'اطلب الآن',
      arrowImageUrl: '../../assets/Assets/Arrow.svg'
    },
    {
      id: "3",
      title: 'العنوان الرئيسي هنا',
      details: 'التفاصيل تكتب هنا',
      orderNowText: 'اطلب الآن',
      arrowImageUrl: '../../assets/Assets/Arrow.svg'
    },

  ];
  buttontxttitle: string = 'edit' //mat-icon
  headerinputtitle: string = ''; //input
  title = true;
  showinputtitle = false
  changeTitle() {

    if (!this.showinputtitle) {
      this.showinputtitle = true;
      this.title = false;
      this.buttontxttitle = 'save';
    }
    else {

      if (this.headerinputtitle.length !== 0) {
        console.log('input title is ', this.showinputtitle)

      }
      this.buttontxttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;

    }
  }
  headerinputsubtitle: string = '';
  buttontxtsubtitle: string = 'edit';
  showinputsubtitle = false
  subtitle = true
  changeSubTitle() {
    if (!this.showinputsubtitle) {
    
      this.showinputsubtitle = true;
      this.subtitle = false;
      this.buttontxtsubtitle = 'save';
    } else {
      
      if (this.headerinputsubtitle.length !== 0) {
        console.log(this.headerinputsubtitle);
      }
      this.buttontxtsubtitle = 'edit';
      this.showinputsubtitle = false;
      this.subtitle = true;
    }
  }
    // for paragraph start
    // @ViewChild('#buttonParagraph') buttonParagraph!:ElementRef;
    headerinputparagraph: string = '';
    ButtonTextparagraph: string = 'edit';
    showinputparagraph = false
    paragraph = true;
    //for paragraph end

    changeParagraph() {
      if (!this.showinputparagraph) {
        this.showinputparagraph = true;
        this.paragraph = false;
        this.ButtonTextparagraph = 'save';
      } else {
        if (this.headerinputparagraph.length !== 0) {
          console.log(this.headerinputparagraph);
        }
        this.ButtonTextparagraph = 'edit';
        this.showinputparagraph = false;  
        this.paragraph = true;  
      }
    }
}
