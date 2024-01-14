// header.component.ts
import { Component,ViewChild,QueryList,ElementRef, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


  
  
})
export class HeaderComponent implements AfterViewInit{
 
  constructor(){}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    rtl:true,
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
  @ViewChild('button') button!: ElementRef;
  ngAfterViewInit(): void {
    this.onCarouselInitialized();
    const buttonconst = this.button.nativeElement
    buttonconst.addEventListener('click',()=>{
      console.log('clicked')
    })
   
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
      id:"1",
      title: 'العنوان الرئيسي هنا',
      details: 'التفاصيل تكتب هنا',
      orderNowText: 'اطلب الآن',
      arrowImageUrl: '../../assets/Assets/Arrow.svg'
    },
    {
      id:"2",
      title: 'العنوان الرئيسي هنا',
      details: 'التفاصيل تكتب هنا',
      orderNowText: 'اطلب الآن',
      arrowImageUrl: '../../assets/Assets/Arrow.svg'
    },
    {
      id:"3",
      title: 'العنوان الرئيسي هنا',
      details: 'التفاصيل تكتب هنا',
      orderNowText: 'اطلب الآن',
      arrowImageUrl: '../../assets/Assets/Arrow.svg'
    },

  ];





}
