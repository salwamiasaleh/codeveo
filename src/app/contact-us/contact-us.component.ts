import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactinputtitle: string = '';
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
    
      if (this.contactinputtitle.length !== 0) {
        console.log(this.contactinputtitle);
      }
      this.ButtonTexttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;
    }
  }
  contactinputsubtitle: string = '';
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
      
      if (this.contactinputsubtitle.length !== 0) {
        console.log(this.contactinputsubtitle);
      }
      this.ButtonTextsubtitle = 'edit';
      this.showinputsubtitle = false;
      this.subtitle = true;
    }
  }
  contactinputparagraph: string = '';
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
      if (this.contactinputparagraph.length !== 0) {
        console.log(this.contactinputparagraph);
      }
      this.ButtonTextparagraph = 'edit';
      this.showinputparagraph = false;  
      this.paragraph = true;  
    }
  }
}
