import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cards: any[] = [];
  cardinputtitle: string = '';
  ButtonTexttitle: string = 'edit';
  showinputtitle = false
  showtitleone = true
  // for title end

  changetitle(index:number) {
    // console.log(index)
    // console.log('clicked')
    // console.log('sss',this.cards[index].titleone)
    if (!this.cards[index].showinputtitle) {
    
      this.cards[index].showinputtitle = true;
      this.cards[index].showtitleone = false;
      this.ButtonTexttitle = 'save';
    } else {
    
      if (this.cards[index].cardinputtitle.length !== 0) {
        console.log(this.cards[index].cardinputtitle);
        this.cards[index].titleone=this.cards[index].cardinputtitle
        
      }
      this.ButtonTexttitle = 'edit';
      this.cards[index].showinputtitle = false;
      this.cards[index].showtitleone = true;
    }
  }
  ///////
  cardinputtitletwo: string = '';
  ButtonTexttitletwo: string = 'edit';
  showinputtitletwo = false
  showtitletwo = true
  changetitletwo(index:number) {
    
    if (!this.cards[index].showinputtitletwo) {
    
      this.cards[index].showinputtitletwo = true;
      this.cards[index].showtitletwo = false;
      this.ButtonTexttitletwo = 'save';
    } else {
    
      if (this.cards[index].cardinputtitletwo.length !== 0) {
         console.log(this.cards[index].cardinputtitletwo);
        this.cards[index].titletwo=this.cards[index].cardinputtitletwo;
      }
      this.ButtonTexttitletwo = 'edit';
      this.cards[index].showinputtitletwo = false;
      this.cards[index].showtitletwo = true;
    }
  }

  cardinputsubtitle: string = '';
  ButtonTextsubtitle: string = 'edit';
  showinputsubtitle = false;
  showsubtitle = true;
  
  changeSubTitle(index: number) {
    console.log(index);
    
    if (!this.cards[index].showinputsubtitle) {
      this.cards[index].showinputsubtitle = true;
      this.cards[index].showsubtitle = false;
      this.ButtonTextsubtitle = 'save';
    } else {
      if (this.cards[index].cardinputsubtitle.length !== 0) {
        console.log(this.cards[index].cardinputsubtitle);
        this.cards[index].subtitle = this.cards[index].cardinputsubtitle;
      }
      this.ButtonTextsubtitle = 'edit';
      this.cards[index].showinputsubtitle = false;
      this.cards[index].showsubtitle = true;
    }
  }
  
  cardinputparagraph: string = '';
  ButtonTextparagraph: string = 'edit';
  showinputparagraph = false;
  showparagraph = true;
  
  changeParagraph(index: number) {
    console.log(index);
    
    if (!this.cards[index].showinputparagraph) {
      this.cards[index].showinputparagraph = true;
      this.cards[index].showparagraph = false;
      this.ButtonTextparagraph = 'save';
    } else {
      if (this.cards[index].cardinputparagraph.length !== 0) {
        console.log(this.cards[index].cardinputparagraph);
        this.cards[index].description = this.cards[index].cardinputparagraph;
      }
      this.ButtonTextparagraph = 'edit';
      this.cards[index].showinputparagraph = false;  
      this.cards[index].showparagraph = true;  
    }
  }
  
}
