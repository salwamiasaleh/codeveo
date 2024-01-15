import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  bannerinputtitle: string = '';
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
    
      if (this.bannerinputtitle.length !== 0) {
        console.log(this.bannerinputtitle);
      }
      this.ButtonTexttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;
    }
  }

  bannerinputsubtitle: string = '';
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
      
      if (this.bannerinputsubtitle.length !== 0) {
        console.log(this.bannerinputsubtitle);
      }
      this.ButtonTextsubtitle = 'edit';
      this.showinputsubtitle = false;
      this.subtitle = true;
    }
  }
  
  bannerinputparagraph: string = '';
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
        if (this.bannerinputparagraph.length !== 0) {
          console.log(this.bannerinputparagraph);
        }
        this.ButtonTextparagraph = 'edit';
        this.showinputparagraph = false;  
        this.paragraph = true;  
      }
    }
    
}
