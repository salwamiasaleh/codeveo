import { Component, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],

})
export class VisionComponent implements AfterViewInit {



  // for title start
  // @ViewChild('buttontitle') titlebutton!: ElementRef;
  visioninputtitle: string = '';
  ButtonTexttitle: string = 'edit';
  showinputtitle = false
  title = true
  // for title end


  ngAfterViewInit(): void {

  }
  changetitle() {
    if (!this.showinputtitle) {
    
      this.showinputtitle = true;
      this.title = false;
      this.ButtonTexttitle = 'save';
    } else {
    
      if (this.visioninputtitle.length !== 0) {
        console.log(this.visioninputtitle);
      }
      this.ButtonTexttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;
    }
  }
  // for subtitle start
  // @ViewChild('#buttonsubtitle') subtitlebutton!:ElementRef;
  visioninputsubtitle: string = '';
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
      
      if (this.visioninputsubtitle.length !== 0) {
        console.log(this.visioninputsubtitle);
      }
      this.ButtonTextsubtitle = 'edit';
      this.showinputsubtitle = false;
      this.subtitle = true;
    }
  }
  

    // for paragraph start
    // @ViewChild('#buttonParagraph') buttonParagraph!:ElementRef;
    visioninputparagraph: string = '';
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
        if (this.visioninputparagraph.length !== 0) {
          console.log(this.visioninputparagraph);
        }
        this.ButtonTextparagraph = 'edit';
        this.showinputparagraph = false;  
        this.paragraph = true;  
      }
    }
    
}
