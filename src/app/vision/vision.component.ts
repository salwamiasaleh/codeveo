import { Component, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],

})
export class VisionComponent implements AfterViewInit {



  // for title start
  @ViewChild('buttontitle') titlebutton!: ElementRef;
  visioninputtitle: string = '';
  ButtonTexttitle: string = 'edit';
  showinputtitle = false
  title = true
  // for title end


  ngAfterViewInit(): void {

  }
  changetitle() {


    this.showinputtitle = true;
    this.title = false;
    if (this.showinputtitle) {

      this.ButtonTexttitle = 'save';
    }

    if (this.visioninputtitle.length !== 0) {
      console.log(this.visioninputtitle);
      this.ButtonTexttitle = 'edit';
      this.showinputtitle = false;
      this.title = true;
    }


  }
  // for subtitle start
  @ViewChild('#buttonsubtitle') subtitlebutton!:ElementRef;
  visioninputsubtitle: string = '';
  ButtonTextsubtitle: string = 'edit';
  showinputsubtitle = false
  subtitle = true
  //for title end
  changeSubTitle(){
 

    this.showinputsubtitle = true;
    this.subtitle = false;
    if (this.showinputsubtitle) {

      this.ButtonTextsubtitle = 'save';
    }

    if (this.visioninputsubtitle.length !== 0) {
      console.log(this.visioninputsubtitle);
      this.ButtonTextsubtitle = 'edit';
      this.showinputsubtitle = false;
      this.subtitle = true;
    }

  }
}
